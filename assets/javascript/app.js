$(document).ready(function(){
var timer;
var question
var answerOptions;
var correctAnswer;
var question1 = "Who is Darth Vader's step-brother?";
var question2 = "Who speaks the first line of Empire Strikes Back?";
var question3 = "What species is Wicket W. Warrick?";
var question4 = "How many Imperial Probe Droids are dispersed in the beginning of Empire Strikes Back?";
var question5 = "True or False: Han Solo is the first person, in the saga, to say the line 'I have a bad feeling about this.'";
var question6 = "What planet is Darth Maul from?";
var question7 = "What is the first limb that Anakin loses?";
var question8 = "What color is Ki Adi Mundi's lightsaber?";
var question9 = "What planet is Jango Fett and the Clone army hidden on?";
var question10 = "Who is Luke Skywalkers Father?";

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,];
var answers {
	firstQuetion []
}
function askQuestions(){
for(var i = 0; i < questions.length; i++){
	$("#game-content").append("<div>" + questions[i] + "</div>");
	console.log(i);
}





}
askQuestions();

})
