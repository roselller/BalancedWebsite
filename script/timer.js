// Required variables
var session_seconds = "00";
var session_minutes = 25;

// Audio files
var click_sound = new Audio("../musics/click.mp3");
var bell = new Audio("../musics/bell.mp3");

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer() {
  click_sound.play();

  //Change the minutes and seconds to starting time
  session_minutes = 24;
  session_seconds = 59;

  //Add the seconds and minutes to html page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  //Start countdown for timer
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  //Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  //Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    //End the session when seconds and minutes counter has reached 0
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Message shown for the end of session
        document.getElementById("done").innerHTML = "Session completed! Take a short break before your next task!";
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        bell.play();
      }
      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}