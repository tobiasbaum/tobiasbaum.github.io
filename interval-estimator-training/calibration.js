var questions = [
	{q: 'How long is an Airbus A380-800 in m?', a: 72.7},
	{q: 'How high is the Mount Everest in m?', a: 8848},
	{q: 'In which year did the FC Bayern München first win the championship in the \'1. Fußball-Bundesliga\'?', a: 1969},
	{q: 'In which year did Boris Becker first win the Wimbledon Championship final?', a: 1985},
	{q: 'In which year was Alan Turing born?', a: 1912},
	{q: 'Which area does the city of Paris occupy, in square kilometres?', a: 105.34},
	{q: 'How high in m above sea level is the highest mountain of Hannover, Germany?', a: 122},
	{q: 'How high in m above sea level is the lowest point of Hannover, Germany?', a: 44},
	{q: 'In which year was the North Jutland Artillery Regiment of the Royal Danish Army disbanded?', a: 2000},
	{q: 'In which year was the Junín-3 Oil Field discovered?', a: 2009},
	{q: 'How long is the river Nile, in km?', a: 6650},
	{q: 'How many percent more energy does a refrigerator need that is configured for cooling to 6 degree instead of 7 degree?', a: 6},
];
var lowerAnswers;
var upperAnswers;
var index;

function startCalibration() {
	index = 0;
	lowerAnswers = [];
	upperAnswers = [];
	shuffleQuestions();

	showCurrentQuestion();

	$("#start").hide();
	$("#output").hide();
	$("#estimation").show();
}

function shuffleQuestions() {
    var j, x, i;
    for (i = questions.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = questions[i];
        questions[i] = questions[j];
        questions[j] = x;
    }
}

function showCurrentQuestion() {
	$("#question").text(questions[index].q);
	$("#lower").val('');
	$("#upper").val('');
}

function enterEstimate() {
	var valid = saveCurrentEstimate();
	if (!valid) {
		return;
	}
	if (index < 9) {
		index++;
		showCurrentQuestion();
	} else {
		showResults();
	}
}

function showResults() {
	let correctCount = 0;
	let details = '<table border><th>Question</th><th>Correct value</th><th>Your lower</th><th>Your upper</th><th>Correct</th></tr>';
	for (let i = 0; i < lowerAnswers.length; i++) {
		let cv = questions[i].a;
		let isCorrect = 0;
		if (lowerAnswers[i] <= cv && upperAnswers[i] >= cv) {
			isCorrect = 1;
		}
		details += '<tr><td>'
			+ questions[i].q + '</td><td>'
			+ cv + '</td><td>'
			+ lowerAnswers[i] + '</td><td>'
			+ upperAnswers[i] + '</td><td>'
			+ isCorrect + '</td></tr>';
		correctCount += isCorrect;
	}
	details += '</table>';

	$("#correctEstimates").text(correctCount);
	$("#resultTable").html(details);

	if (correctCount < 7) {
		$("#bad").show();
		$("#ok").hide();
		$("#perfect").hide();
		$("#underconfident").hide();
	} else if (correctCount < 9) {
		$("#bad").hide();
		$("#ok").show();
		$("#perfect").hide();
		$("#underconfident").hide();
	} else if (correctCount > 9) {
		$("#bad").hide();
		$("#ok").hide();
		$("#perfect").hide();
		$("#underconfident").show();
	} else {
		$("#bad").hide();
		$("#ok").hide();
		$("#perfect").show();
		$("#underconfident").hide();
	}

	$("#estimation").hide();
	$("#output").show();
}

function saveCurrentEstimate() {
	var lower = $("#lower").val();
	var upper = $("#upper").val();
	if (lower === '') {
		alert('Please enter a lower bound!');
		return false;
	}
	if (upper === '') {
		alert('Please enter an upper bound!');
		return false;
	}
	if (Number(lower) > Number(upper)) {
		alert('The lower bound should not be greater than the upper bound!');
		return false;
	}
	lowerAnswers.push(Number(lower));
	upperAnswers.push(Number(upper));
	return true;
}


