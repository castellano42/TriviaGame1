$(document).ready(function(){
var timer;
var question

var question1 = "1. Who is Darth Vader's step-brother?";
var question2 = "2. Who speaks the first line of Empire Strikes Back?";
var question3 = "3. What species is Wicket W. Warrick?";
var question4 = "4. How many bounty hunters did Vader hire in Empire Strikes Back?";
var question5 = "5. Who is the first person, in the saga, to use the line 'I have a bad feeling about this?";
var question6 = "6. What planet is Darth Maul from?";
var question7 = "7. What is the first limb that Anakin loses?";
var question8 = "8. What color is Ki Adi Mundi's lightsaber?";
var question9 = "9. What planet is Jango Fett and the Clone army hidden on?";
var question10 = "10. Who is Luke Skywalkers Father?";

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

var answersOne = ["A. Bail Organa", "B. Lobot","C. Owen Lars", "D. Wedge Antilles"] 
var answersTwo = ["A. Wilhuff Tarkin", "B. Luke Skywalker", "C. C-3PO", "D. Princess Leia"] 
var answersThree = ["A. Jawa", "B. Gungan", "C. Dug", "D. Ewok"] 
var answersFour = [ "A. 6", "B. 1", "C. 4", "D. 7"] 
var answersFive = ["A. Han Solo", "B. Luke Skywalker", "C. Princess Leia", "D. Obi Wan Kenobi"]
var answersSix = ["A. Dathomir", "B. Corelia", "C. Polis Massa", "D. Rhen Var"] 
var answersSeven = ["A. Left Arm", "B. Right Leg", "C. Right Arm", "D. Left Leg"] 
var answersEight = ["A. Green", "B. Blue", "C. Yellow", "D. Red"]
var answersNine = ["A. Geonosis", "B. Naboo", "C. Dantooine", "D. Kamino"]
var answersTen = ["A. Darth Vader", "B. Shmi Skywalker", "C. Greedo", "D. Mace Windu"];

var ansArray = [answersOne, answersTwo, answersThree, answersFour, answersFive, answersSix, answersSeven, answersEight, answersNine, answersTen];

var correctAnswer = ["C. Owen Lars", "B. Luke Skywalker", "D. Ewok", "A. 6", "B. Luke Skywalker", "A. Dathomir", "D. Right Arm", "B. Blue", "D. Kamino", "A. Darth Vader"] 
// var answers 
// 	firstQuetion: 

// this empty array is where all the users guesses will be stored.
// once all the questions are answered I want to check to see if the values at each index in this array are the same as the correctAnswers array.
var userGuess = [""]

//  var number = 120;

//     //  Variable that will hold our interval ID when we execute
//     //  the "run" function
//     var intervalId;

  
//     function run() {
//       intervalId = setInterval(decrement, 1000);
//     }

//     //  The decrement function.
//     function decrement() {

//       //  Decrease number by one.
//       number--;
//      }var number = 100;

     var number = 100;

    var intervalId;

    
    function run() {
    	setTimeout(function(){},5000);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#timer").html("<h1>" + number + "<h1>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
      if(number === 0){
      	setTimeout(function(){
		 alert("Time's Up!")},2000);
      }
    }

    run();

    

function askQuestions(){
for(var i = 0; i < questions.length; i++){
	$("#game-content").append("<div>" + questions[i] + "<br /><button>" + ansArray[i][0] + "</button><button>" + ansArray[i][1] + "</button><button>" + ansArray[i][2] + "</button><button>" + ansArray[i][3] + "</button></div>");
	$(ansArray).click(function(){
    userGuess.push($(this).val());
console.log(this);
})

	console.log(i);
}

// Right here is where I am trying to add the users answer to the userGuess array

$("button").click(function(){
    userGuess.push($(this).val());
console.log(this);
console.log(userGuess);
// I got it to console.log the value of the button that is clicked but that value does not push to the userGuess array.
// instead the array just adds another space
})







}
askQuestions();
})
