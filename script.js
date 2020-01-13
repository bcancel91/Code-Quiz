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
      question: "What cannot be a varibale name?",
      answers: [
        "car",
        "carType",
        "_question",
        "function"
      ],
      correctAnswer: "d"
    },
    {
      question: "Inside which HTML element do we place JavaScript code?",
      answers: [
        "script",
        "< js >",
        "< script >",
        "< Javascript >"
      ],
      correctAnswer: "c"
    },
    {
      question: "Which is a JavaScript library?",
      answers: [
         "CSS",
         "HTML",
         "Python",
         "JQuery"
      ],
      correctAnswer: "d"
    },
    {
      question: "Which is used for user input?",
      answers: [
        "prompt",
        "console.log",
        "alert",
        "All of the above"
      ],
      correctAnswer: "a"
    },
    {
      question: "Which is used to create a function in JavaScript?",
      answers: [
        "function myFunction()",
        "< myFunction() >",
        "function(myfunction)",
        "function = myFunction()"
      ],
      correctAnswer: "a"
    }
  ];

var currentTime = 90;
var interval;
var currentQuestion;
var questionIndex = myQuestions[0].question;


var currentAnswer;
var score = 0;

 
$("li").hide()

  $("#startButton").click(function(){

  $(this).hide();
  $("h1").hide();

  interval = setInterval(function(){

    currentTime --;

    $("#quizTimer").text(currentTime); 

   if(currentTime <= 0){

     clearInterval(interval);

   } },1000);
   
   
    currentQuestion = myQuestions[0];
  
    $("#quiz").text(myQuestions[0].question);
   
 
   $("#a").append("<button class='correct'>" + currentQuestion.answers[0] + "</button>");
   $("#b").append("<button class='wrong'>" + currentQuestion.answers[1] + "</button>");
   $("#c").append("<button class='wrong'>" + currentQuestion.answers[2] + "</button>");
   $("#d").append("<button class='wrong'>" + currentQuestion.answers[3] + "</button>");
   $("li").show()


   $(".correct").on("click", function(){
    $("#result").append("<hr>" + 'Correct!');

    score ++;
    setTimeout(() => {changeQuestion2(); }, 500)

    
  })
    
    $(".wrong").on("click", function(){

      currentTime = currentTime - 15;
  
      $("#result").append("<hr>" + 'Wrong!');
   setTimeout(() => { changeQuestion2(); }, 500)

    
  
    
    })
    

  
  
  
  function changeQuestion2(){
    $("#result").text("");
    currentQuestion = myQuestions[1];

    $("#quiz").text(currentQuestion.question);
   
    $("#a").replaceWith("<li id='a'><button class='wrong'>" + currentQuestion.answers[0] + "</button></li>");
    $("#b").replaceWith("<li id='b'><button class='wrong'>" + currentQuestion.answers[1] + "</button></li>");
    $("#c").replaceWith("<li id='c'><button class='wrong'>" + currentQuestion.answers[2] + "</button></li>");
    $("#d").replaceWith("<li id='d'><button class='correct'>" + currentQuestion.answers[3] + "</button></li>");
    
     
     $(".correct").on("click", function(){
      $("#result").append("<hr>" + 'Correct!');
  
      score ++;
      setTimeout(() => {changeQuestion3(); }, 500)

    })
      
      $(".wrong").on("click", function(){
  
        currentTime = currentTime - 15;
    
        $("#result").append("<hr>" + 'Wrong!');
        setTimeout(() => {changeQuestion3(); }, 500)
        
      })
      
  }
   
  function changeQuestion3(){
    $("#result").text("");
    currentQuestion = myQuestions[2];

    $("#quiz").text(currentQuestion.question);
   
    
    $("#a").replaceWith("<li id='a'><button class='wrong'>" + currentQuestion.answers[0] + "</button></li>");
    $("#b").replaceWith("<li id='b'><button class='wrong'>" + currentQuestion.answers[1] + "</button></li>");
    $("#c").replaceWith("<li id='c'><button class='correct'>" + currentQuestion.answers[2] + "</button></li>");
    $("#d").replaceWith("<li id='d'><button class='wrong'>" + currentQuestion.answers[3] + "</button></li>");
    
     $(".correct").on("click", function(){
      $("#result").append("<hr>" + 'Correct!');
  
      score ++;
      setTimeout(() => {changeQuestion4(); }, 500)


    })
      
      $(".wrong").on("click", function(){
  
        currentTime = currentTime - 15;
    
        $("#result").append("<hr>" + 'Wrong!');
       setTimeout(() => { changeQuestion4(); }, 500)
        
    
      
      })
      

  }
  function changeQuestion4(){
    $("#result").text("");
    currentQuestion = myQuestions[3];

    $("#quiz").text(currentQuestion.question);
   
    
    $("#a").replaceWith("<li id='a'><button class='wrong'>" + currentQuestion.answers[0] + "</button></li>");
    $("#b").replaceWith("<li id='b'><button class='wrong'>" + currentQuestion.answers[1] + "</button></li>");
    $("#c").replaceWith("<li id='c'><button class='wrong'>" + currentQuestion.answers[2] + "</button></li>");
    $("#d").replaceWith("<li id='d'><button class='correct'>" + currentQuestion.answers[3] + "</button></li>");
    
     $(".correct").on("click", function(){
      $("#result").append("<hr>" + 'Correct!');
  
      score ++;
     setTimeout(() => {changeQuestion5(); }, 500)
     

    })
      
      $(".wrong").on("click", function(){
  
        currentTime = currentTime - 15;
    
        $("#result").append("<hr>" + 'Wrong!');
      setTimeout(() => { changeQuestion5(); }, 500)
        
    
      
      })
      

  }

  function changeQuestion5(){
    $("#result").text("");
    currentQuestion = myQuestions[4];

    $("#quiz").text(currentQuestion.question);
   
    
    $("#a").replaceWith("<li id='a'><button class='wrong'>" + currentQuestion.answers[0] + "</button></li>");
    $("#b").replaceWith("<li id='b'><button class='wrong'>" + currentQuestion.answers[1] + "</button></li>");
    $("#c").replaceWith("<li id='c'><button class='wrong'>" + currentQuestion.answers[2] + "</button></li>");
    $("#d").replaceWith("<li id='d'><button class='correct'>" + currentQuestion.answers[3] + "</button></li>");
    
     $(".correct").on("click", function(){
      $("#result").append("<hr>" + 'Correct!');
  
      score ++;
     setTimeout(() => {changeQuestion6(); }, 500)
     

    })
      
      $(".wrong").on("click", function(){
  
        currentTime = currentTime - 15;
    
        $("#result").append("<hr>" + 'Wrong!');
      setTimeout(() => { changeQuestion6(); }, 500)
        
    
      
      })
      

  }

  function changeQuestion6(){
    $("#result").text("");
    currentQuestion = myQuestions[5];

    $("#quiz").text(currentQuestion.question);
   
    
    $("#a").replaceWith("<li id='a'><button class='correct'>" + currentQuestion.answers[0] + "</button></li>");
    $("#b").replaceWith("<li id='b'><button class='wrong'>" + currentQuestion.answers[1] + "</button></li>");
    $("#c").replaceWith("<li id='c'><button class='wrong'>" + currentQuestion.answers[2] + "</button></li>");
    $("#d").replaceWith("<li id='d'><button class='wrong'>" + currentQuestion.answers[3] + "</button></li>");
    
     $(".correct").on("click", function(){
      $("#result").append("<hr>" + 'Correct!');
  
      score ++;
    // setTimeout(() => {changeQuestion7(); }, 500)
     

    })
      
      $(".wrong").on("click", function(){
  
        currentTime = currentTime - 15;
    
        $("#result").append("<hr>" + 'Wrong!');
     // setTimeout(() => { changeQuestion7(); }, 500)
        
    
      
      })
      

  }






 

}) 


  








})
