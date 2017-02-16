//create game object
var game = {

	questions: ["When did the band Fishmans perform their final concert?",
	" Fill in the blank: LOOK AT ME! FUCK ON ME! ________"],
	answers: ["December 28th, 1998","YUH!",],
	correct: 0,
	incorrect: 0,

	initialize: function(){
		
		$("#timeRemainingCol").empty();
		$("#timeRemainingCol").append("<h2 class='question'>" + game.questions[0] + "</h2>");
	}


};

$(document).ready(function() {
//function calls
//on click
	//
	$("#startButton").click(function(event) {
		$("#timeRemainingCol").empty();
		$("#timeRemainingCol").append("<h2 class='question'>" + game.questions[0] + "</h2>");
	});

});