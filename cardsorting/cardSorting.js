var todoList;
var buckets;
var curItem;

// Cache für Offline-Modus aktivieren
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./worker.js').then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}

function startCardSort() {
	var text = $("#itemInput").val();
	todoList = splitDynamic(text);
	buckets = {};
	
	if (todoList.length == 0) {
		alert("Please enter some items");
		return;
	}
	
	nextItem();
	
	$("#input").hide();
	$("#comparison").show();
	$("#toClassify").draggable({
		revert: true,
		revertDuration: 0
	});
	$("#postpone").droppable({
		tolerance: "pointer",
		hoverClass: "highlight",
		drop: function( event, ui ) {
			postpone();
		}
	});
	$("#newBucket").droppable({
		tolerance: "pointer",
		hoverClass: "highlight",
		drop: function( event, ui ) {
			newBucket();
		}
	});
}

function splitDynamic(text) {
	var ret = splitAtEmptyLines(text);
	if (ret.length > 1) {
		return ret;
	} else {
		return trimAndRemoveEmpty(text.split("\n"));
	}
}

function splitAtEmptyLines(text) {
	return trimAndRemoveEmpty(text.replace("\r\n", "\n").split("\n\n"));
}

function trimAndRemoveEmpty(list) {
	for (var i = 0; i < list.length; i++) {
		list[i] = list[i].trim();
	}
	return list.filter(function(el) {
		return el.length > 0;
	});
}

function nextItem() {
	if (todoList.length == 0) {
		printResults();
		return;
	}
	setCurItem(todoList.pop());
}

function setCurItem(text) {
	curItem = text;
	$("#toClassify").html(curItem.replace("\n", "<br/>\n"));
	$("#toGo").text("" + (todoList.length + 1));
}

function postpone() {
	todoList.unshift(curItem);
	nextItem();
}

function newBucket() {
	var name = prompt("Group name");
	var bucketId = name.replace(/[^a-zA-Z0-9]/g, "");
	if (!buckets[bucketId]) {
		buckets[bucketId] = {
			name: name,
			content: [],
            expanded: false
		};
		var color = " style=\"background-color: hsl(" + getRandomInt(360) + ", 50%, 70%)\"";
		$("#buckets").append("<div id=\"gr_" + bucketId + "\" class=\"bucket\"><div class=\"head\" " + color + "><span class=\"headtext\">" + escape(name) 
          + "</span><a href=\"javascript:toggleExpand('" + bucketId + "')\" title=\"Expand/Shrink\" class='actionLink'>E</a>"
          + "<a href=\"javascript:rename('" + bucketId + "')\" title=\"Rename\" class='actionLink'>R</a>"
          + "</div><div class=\"items\"></div>");
		$("#gr_" + bucketId).droppable({
			tolerance: "pointer",
			hoverClass: "highlight",
			drop: function( event, ui ) {
				putInBucket(bucketId);
			}
		});
	}
	putInBucket(bucketId);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function putInBucket(bucketId) {
	buckets[bucketId].content.push(curItem);
    printBucketItem(bucketId, curItem);
	nextItem();
}

function printBucketItem(bucketId, item) {
    let count = $("#gr_" + bucketId + " .items .item").length;
	if (count < 4 || buckets[bucketId].expanded) {
		$("#gr_" + bucketId + " .items").append("<div class=\"item\" title=\"" + escape(item) + "\">" + escape(item) + "<a href=\"javascript:duplicate('" + bucketId + "', " + count + ")\" title='Duplicate' class='actionLink'>D</a><a href=\"javascript:undo('" + bucketId + "', " + count + ")\" title='Undo add' class='actionLink'>U</a></div>");
	} else {
		$("#gr_" + bucketId + " .items").append("<span title=\"" + escape(item) + "\">. </span>");
	}
}

function toggleExpand(bucketId) {
    let b = buckets[bucketId];
	b.expanded = !b.expanded;
    repaintBucket(bucketId);
}

function rename(bucketId) {
    let b = buckets[bucketId];
	let name = prompt("New group name", b.name);
    if (name) {
        b.name = name;
        repaintBucket(bucketId);
    }
}

function repaintBucket(bucketId) {
    $("#gr_" + bucketId + " .head .headtext").text(buckets[bucketId].name);
    $("#gr_" + bucketId + " .items").empty();
    var list = buckets[bucketId].content;
    for (var i = 0; i < list.length; i++) {
        printBucketItem(bucketId, list[i]);
    }
}

function duplicate(bucketId, index) {
    let text = buckets[bucketId].content[index];
    todoList.push(curItem);
    setCurItem(text);
}

function undo(bucketId, index) {
    let text = buckets[bucketId].content[index];
    buckets[bucketId].content.splice(index, 1);
    todoList.push(curItem);
    setCurItem(text);
    repaintBucket(bucketId);
}

function escape(str) {
	return str.replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;");
}

function cancel() {
	buckets["notProcessedSoFar"] = {
		name: "not processed so far",
		content: todoList
	}
	buckets["notProcessedSoFar"].content.push(curItem);
	printResults();
}

function printResults() {
	var text = "";
	var sortedKeys = [];
	var key;
	for (key in buckets) {
	    sortedKeys.push(key);
	}
	sortedKeys.sort(function(k1, k2) { return buckets[k2].content.length - buckets[k1].content.length; });
	for (var j = 0; j < sortedKeys.length; j++) {
	        var key = sortedKeys[j];
		var obj = buckets[key];
		text += "== " + obj.name + "\n";
		var list = obj.content;
		for (var i = 0; i < list.length; i++) {
			text += list[i] + "\n\n";
		}
		text += "\n";
	}
	$("#itemOutput").val(text);
	$("#comparison").hide();
	$("#output").show();
}
