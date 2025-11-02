var items;
var knownComparisons;
var missingComparisons;
var currentSortFunction;
var showResultsSorted = true;

// Cache für Offline-Modus aktivieren
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./worker.js').then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}

function startRanking(rankFunction) {
	var text = $("#itemInput").val();
	var itemsRaw = text.split("\n");
	
	currentSortFunction = rankFunction;
	items = [];
	for (var i = 0; i < itemsRaw.length; i++) {
		var tr = itemsRaw[i].trim();
		
		if (tr != "" && !items.includes(tr)) {
			items.push(tr);
		}
	}
	knownComparisons = {};
	missingComparisons = [];
	$("#input").hide();
	continueRanking();
}

function continueRanking() {
	try {
		let copy = currentSortFunction(items, cmp);
		showResults(copy);
	} catch (err) {
        updateMissingComparisonCount();
		askForNextComparison();
	}
}

function restart() {
    let ok = confirm("Really discard all results and restart?");
    if (ok) {
        items = [];
        knownComparisons = {};
        missingComparisons = [];
        $("#output").hide();
        $("#comparison").hide();
        $("#input").show();
    }
}

function updateMissingComparisonCount() {
    let missingCount = 0;
    let knownFakeComparisons = {};
    let fakeCmp = (a, b) => {
        if (a == b) {
            return 0;
        }
        var key = toKey(a, b);
        if (key.k in knownComparisons) {
            return key.m * knownComparisons[key.k];
        }
        if (key.k in knownFakeComparisons) {
            return key.m * knownFakeComparisons[key.k];
        }
        knownFakeComparisons[key.k] = 1;
        missingCount++;
        return 1;
    }
    currentSortFunction(items, fakeCmp);
    $("#remaining").text(missingCount);
}

function showResults(sortedItems) {
	let res;
	if (showResultsSorted) {
		res = formatResultsSorted(sortedItems);
	} else {
		res = formatResultsWithRank(sortedItems);
	}
	$("#comparison").hide();
	$("#itemOutput").text(res);
	$("#output").show();
}

function formatResultsSorted(sortedItems) {
	var res = "";
	for (var i = 0; i < sortedItems.length; i++) {
		res += sortedItems[i] + "\n";
	}
	return res;
}

function formatResultsWithRank(sortedItems) {
	var res = "";
	for (var i = 0; i < items.length; i++) {
		res += items[i] + ";" + (sortedItems.indexOf(items[i]) + 1) + "\n";
	}
	return res;
}

function toggleDisplay() {
	showResultsSorted = !showResultsSorted;
	continueRanking();
}

function askForNextComparison() {
	$("#comparison").show();
	var key = missingComparisons.pop();
	var parts = key.split("\n");
	$("#cmp1").text(parts[0]);
	$("#cmp2").text(parts[1]);
}

function choseCmp(adjustment) {
	var t1 = $("#cmp1").text();
	var t2 = $("#cmp2").text();
	if (t1 < t2) {
		knownComparisons[t1 + "\n" + t2] = -1 * adjustment;
	} else {
		knownComparisons[t2 + "\n" + t1] = 1 * adjustment;
	}
    backupComparisons();
	continueRanking();
}

function backupComparisons() {
    let str = "";
    for (item of Object.keys(knownComparisons)) {
        str += item + "\n"
        str += knownComparisons[item] + "\n";
    }
    localStorage.setItem("prio.backup", str);
}

function cmp(a, b) {
	if (a == b) {
		return 0;
	}
	var key = toKey(a, b);
	if (key.k in knownComparisons) {
		return key.m * knownComparisons[key.k];
	}
	if (!missingComparisons.includes(key.k)) {
		missingComparisons.push(key.k);
	}
	throw "comparison missing";
}

function toKey(a, b) {
	if (a < b) {
		return {k: a + "\n" + b, m: 1};
	} else {
		return {k: b + "\n" + a, m: -1};
	}
}

function fullSort(arr, comparator) {
	var copy = arr.slice();
	copy.sort(comparator);
	return copy;
}

function doubleOutSort(arr, comparator) {
    if (arr.length == 0) {
		return [];
	}
    if (arr.length == 1) {
        return arr.slice();
    }
	console.log("start double out " + arr);
    var currentWinnerBracket = arr.slice();
	var currentLoserBracket = [];
    var rankingData = [];
    var round = 1;
    var playedOpponents = {};
	while (currentWinnerBracket.length > 1) {
		console.log("new round " + round + " " + currentWinnerBracket + "; " + currentLoserBracket);
		var nextWinnerBracket = [];
		var nextLoserBracket = [];
		
		playMatches(currentWinnerBracket, comparator, playedOpponents, nextWinnerBracket, nextLoserBracket);
		console.log("after winner bracket " + nextWinnerBracket + "; " + nextLoserBracket);
		currentWinnerBracket = nextWinnerBracket;

		var outInCurrentRound = [];
		do {
			playMatches(currentLoserBracket, comparator, playedOpponents, nextLoserBracket, outInCurrentRound);
			console.log("after loser bracket " + nextWinnerBracket + "; " + nextLoserBracket);
			currentLoserBracket = nextLoserBracket;
			nextLoserBracket = [];
		} while (currentLoserBracket.length > currentWinnerBracket.length);
        for (var i = 0; i < outInCurrentRound.length; i++) {
            rankingData.push(initRankingData(outInCurrentRound[i], round));
        }
        round++;
	}
    // Finale: Gewinner Winner-Bracket gegen Gewinner Loser-Bracket
    if (comparator(currentWinnerBracket[0], currentLoserBracket[0]) < 0) {
        rankingData.push(initRankingData(currentLoserBracket[0], round++));
        rankingData.push(initRankingData(currentWinnerBracket[0], round++));
    } else {
        rankingData.push(initRankingData(currentWinnerBracket[0], round++));
        rankingData.push(initRankingData(currentLoserBracket[0], round++));
    }
    // Gewinne im direkten Vergleich ermitteln
    for (var i = 0; i < rankingData.length; i++) {
        let ri = rankingData[i];
        for (var j = i + 1; j < rankingData.length; j++) {
            let rj = rankingData[j];
            if (ri.r == rj.r) {
                if (playedOpponents[ri.name].indexOf(rj.name) >= 0) {
                    if (comparator(ri.name, rj.name) < 0) {
                        ri.d = ri.d + 1;
                    } else {
                        rj.d = rj.d + 1;
                    }
                }
            }
        }
    }
    // Buchholz-Zahlen ermitteln
    for (var i = 0; i < rankingData.length; i++) {
        let ri = rankingData[i];
        let opponents = playedOpponents[ri.name];
        for (let j = 0; j < opponents.length; j++) {
            let oppR = findRankingData(rankingData, opponents[j]);
            ri.b += oppR.r;
        }
    }    
    // Buchholz-Buchholz-Zahlen ermitteln
    for (var i = 0; i < rankingData.length; i++) {
        let ri = rankingData[i];
        let opponents = playedOpponents[ri.name];
        for (let j = 0; j < opponents.length; j++) {
            let oppR = findRankingData(rankingData, opponents[j]);
            ri.bb += oppR.b;
        }
    }    
    // Ergebnis mit Feinwertung ermitteln
    rankingData.sort(function(r1, r2) {
        if (r1.r != r2.r) {
            return r2.r - r1.r;
        }
        if (r1.d != r2.d) {
            return r2.d - r1.d;
        }
        if (r1.b != r2.b) {
            return r2.b - r1.b;
        }
        if (r1.bb != r2.bb) {
            return r2.bb - r1.bb;
        }
        return arr.indexOf(r1.name) - arr.indexOf(r2.name);
    });
	return rankingData.map(function(r) { return r.name; });
}

function findRankingData(list, name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) {
            return list[i];
        }
    }
    throw "should not happen";
}

function initRankingData(name, round) {
    return {
        name: name,
        r: round,
        d: 0,
        b: 0,
        bb: 0
    }
}

function playMatches(arr, comparator, playedOpponents, winnerBuffer, loserBuffer) {
    if (arr.length % 2 == 0) {
	    for (var i = 0; i < arr.length / 2; i++) {
			playMatch(arr[i], arr[arr.length - i - 1], comparator, playedOpponents, winnerBuffer, loserBuffer);
		}
	} else {
	    for (var i = 1; i <= arr.length / 2; i++) {
			playMatch(arr[i], arr[arr.length - i], comparator, playedOpponents, winnerBuffer, loserBuffer);
		}
		winnerBuffer.push(arr[0]);
	}
}

function playMatch(a, b, comparator, playedOpponents, winnerBuffer, loserBuffer) {
	console.log("playing " + a + " vs " + b);
    addToSet(playedOpponents, a, b);
    addToSet(playedOpponents, b, a);
	if (comparator(a, b) <= 0) {
		winnerBuffer.push(a);
		loserBuffer.push(b);
	} else {
		winnerBuffer.push(b);
		loserBuffer.push(a);
	}
}

function addToSet(map, a, b) {
    if (!map[a]) {
        map[a] = [];
    }
    let idx = map[a].indexOf(b);
    if (idx < 0) {
        map[a].push(b);
    }
}

function topN(arr, comparator) {
    let n = parseInt($("#topCount").val());
	return quickselect(arr, comparator, n);
}

function quickselect(arr, comparator, count) {
    console.log('quickselect ' + count + ': ' + JSON.stringify(arr) + " with " + JSON.stringify(knownComparisons));
	let copy = arr.slice();
	quickselectRec(copy, comparator, count, 0, copy.length);
    //TODO: Feinsortierung auf Basis der vorhandenen Vergleiche
	return copy;
}

function quickselectRec(arr, comparator, count, from, to) {
    if (count <= from || count >= to) {
        return;
    }

    console.log('quickselect start ' + count + ', ' + from + ', ' + to + ': ' + JSON.stringify(arr));

    // pivot ermitteln
    let p1 = arr[from];
    let p2 = arr[Math.floor((from + to) / 2)];
    let p3 = arr[to - 1];
    let pivot;
    if (comparator(p1, p2) < 0) {
        if (comparator(p1, p3) < 0) {
            pivot = p1;
        } else {
            pivot = p3;
        }
    } else {
        if (comparator(p2, p3) < 0) {
            pivot = p2;
        } else {
            pivot = p3;
        }
    }
    
    // an pivot teilen
    let lessTo = from;
    let greaterFrom = to;
    let i = from;
    while(i < greaterFrom) {
        let cmp = comparator(arr[i], pivot);
        if (cmp < 0) {
            // aktuelles Element ist kleiner als pivot
            swap(arr, lessTo, i);
            lessTo++;
            i++;
        } else if (cmp > 0) {
            // aktuelles Element ist größer als pivot
            swap(arr, greaterFrom - 1, i);
            greaterFrom--;
        } else {
            // aktuelles Element ist gleich pivot
            i++;
        }
    }
    
    //prüfen, in welchem Bereich die Grenze liegt, und entsprechend absteigen
    if (count < lessTo) {
        quickselectRec(arr, comparator, count, from, lessTo);
    } else if (count > greaterFrom) {
        quickselectRec(arr, comparator, count, greaterFrom, to);
    }
}

function swap(arr, i1, i2) {
    let tmp = arr[i1];
    arr[i1] = arr[i2]; 
    arr[i2] = tmp;
}

