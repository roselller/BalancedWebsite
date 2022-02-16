$(document).ready(function() {
  const APIKEY = "6208dd0934fd621565858446";
})

//start function to start quiz when user presses screen
function startFunction() {
  var start = document.querySelector(".start");
  var qn1 = document.querySelector(".q1");
  var qn2 = document.querySelector(".q2");
  var qn3 = document.querySelector(".q3");

  const countdown = document.querySelector(".start-countdown"); //retreieves lottie animation countdown
  countdown.togglePlay();

  //upon end of coundown animation
  countdown.addEventListener('complete', () => {
    start.style.visibility = "hidden";
    qn1.style.visibility = "visible";
  })
};