$(document).ready(function() {

})

//start function to start quiz when user presses screen
function startFunction() {
  var start = document.querySelector(".start");
  var question1 = document.querySelector(".question1");
  var question2 = document.querySelector(".question2");
  var question3 = document.querySelector(".question3");

  const countdown = document.querySelector(".start-countdown"); //retreieves lottie animation countdown
  countdown.togglePlay();

  //upon end of coundown animation
  countdown.addEventListener('complete', () => {
    start.style.visibility = "hidden";
    question1.style.visibility = "visible";
  })
};