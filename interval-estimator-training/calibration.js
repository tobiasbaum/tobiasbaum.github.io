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
	{q: 'How many percent more energy does a refrigerator need that is configured for cooling to 6 degrees Celsius instead of 7 degrees?', a: 6},
	{q: 'How many Swiss Francs did you get for one Euro on 14th January 2022?', a: 1.0435},
	{q: 'What was the average monthly gross income of a full-time employee in Germany in 2020?', a: 3975},
	{q: 'What was the average monthly gross income of a male full-time employee in Germany in 2020?', a: 4146},
	{q: 'What was the average monthly gross income of a female full-time employee in Germany in 2020?', a: 3578},
	{q: 'Which percentage of the german mail market sales belonged to \'Deutsche Post\' in 2019?', a: 86},
	{q: 'How many letters did \'Deutsche Post\' transport in 2020 (in billions)?', a: 14.3},
	{q: 'How much did the DAX stock index increase in 2021 (in percent)?', a: 15.8},
	{q: 'How many people lived in Germany in 2021?', a: 83129285},
	{q: 'What was the population density in people per square kilometer of Germany in 2021?', a: 232},
	{q: 'Which rank did Germany have in the Human Development Index in 2019?', a: 6},
	{q: 'What was the average birth rate in Germany in 2018?', a: 1.57},
	{q: 'How many people lived in Lower Saxony in 2021?', a: 8003421},
	{q: 'What was the population density in people per square kilometer of Lower Saxony in 2020?', a: 168},
	{q: 'What was the unemployment rate of Lower Saxony in January 2022 in percent?', a: 5.3},
	{q: 'How many commits happened on the master branch of the GitHub repository of Checkstyle on 30th January 2022?', a: 4},
	{q: 'How many contributors did the GitHub repository of Apache Tomcat have in total up to 1st February 2022?', a: 72},
	{q: 'What\'s the width (smaller side) of an A4 sheet of paper, in mm?', a: 210},
	{q: 'What\'s the length (larger side) of an A4 sheet of paper, in mm?', a: 297},
	{q: 'How much power does an AMD Ryzen 7 5800X 3.8 GHz CPU consume (in Watt)?', a: 105},
	{q: 'Which percentage of the (first) votes did the CDU get in the German federal election 2021?', a: 22.5},
	{q: 'How large was the tallest man of the world in 2015 (in cm)?', a: 251},
	{q: 'How much beer did each German drink on average in 2020 (in liters)?', a: 86.9},
	{q: 'What is the maximum size of the data content of an IPv4 package in bytes?', a: 65515},
	{q: 'What is the maximum size of an Ethernet package (MTU + header) in bytes?', a: 1518},
	{q: 'How large is the header of an IPv6 package in bytes?', a: 40},
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


