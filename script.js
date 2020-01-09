$(document).ready(function(){
 
var myQuestions = [
    {
      question: "What is JavaScript?",
      answers: [
        "A programming language",
        "A frame works liberary",
        "A styling language",
        "None of the above"
      ],
      correctAnswer: "A programming language"
    },
    {
      question: "What can cannot be a varibale name?",
      answers: [
        "Car",
        "Name",
        "question",
        "Function"
      ],
      correctAnswer: "d"
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        "script",
        "<js>",
        "<script>",
        "<Javascript>"
      ],
      correctAnswer: "c"
    },
    {
      question: "Which is a javascript librerary?",
      answers: [
         "CSS",
         "HTML",
         "Python",
         "jQuery"
      ],
      correctAnswer: "d"
    },
    {
      question: "Which is used to to interact with the user?",
      answers: [
        "prompt",
        "console.log",
        "alert",
        "All of the above"
      ],
      correctAnswer: "a"
    },
    {
      question: "How do you create a function in JavaScript?",
      answers: [
        "function myFunction()",
        "<myFunction()>",
        "function(myFunc{tion)",
        "function = myFunction()"
      ],
      correctAnswer: "a"
    }
  ];

var currentTime = 90;
var interval;
var currentQuestion;
var questionIndex;
var currentAnswer;
var score;

 
$("li").hide()

  $("#startButton").click(function(){

  $(this).hide();

  interval = setInterval(function(){

    currentTime --;

    $("#quizTimer").text(currentTime); 

   if(currentTime === 0){

     clearInterval(interval);

   } },1000);
   
   
    currentQuestion = myQuestions[0];
  
    $("#quiz").text(currentQuestion.question);
   
 
   $("#a").append("<button class='correct'>" + currentQuestion.answers[0] + "</button>");
   $("#b").append("<button class='wrong'>" + currentQuestion.answers[1] + "</button>");
   $("#c").append("<button class='wrong'>" + currentQuestion.answers[2] + "</button>");
   $("#d").append("<button class='wrong'>" + currentQuestion.answers[3] + "</button>");
   $("li").show()

}) 





  








})

/*

    dispQues();
  
 

function dispQues(){
  
var currentQuestion = myQuestions[quesIndex].question;
   

 document.getElementById("quiz").innerHTML = currentQuestion;
 $("#choices").empty();

  for(var i = 0; i < myQuestions[quesIndex].answers.length; i++){
    
    $("#choices").append("<li><button class='btn-lg rounded-pill ans' name='"+myQuestions[quesIndex].answers[i]+"'>"+ myQuestions[quesIndex].answers[i]+ " </button></li>"); 
    }
}


$(".ans").on("click",function(e){
  
  quesIndex++;
 
  if(this.name===myQuestions[quesIndex].correctAnswer){
    correct++;
    dispQues();
  }
  else{
    currentTime = currentTime - 10;
    $("#quizTimer").text(currentTime); 
    dispQues();
  }
})

  
*/

 
   
   

 
 


/*
 
  
  
  $("li").on("click", function(){

  $("li").hide();

  })

    


    


*/