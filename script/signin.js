/*Javascript to remove splashscreen after 3 seconds*/
document.addEventListener('DOMContentLoaded', (e)=>{
   setTimeout(()=>{
      $('#splash').css({"opacity": "0", "z-index": "-200", "transition": "all 1s"});
   }, 3000);
});

/*If user does not have an account, sign in page will fade away and sign up page will fade in*/
document.getElementById('signin-signup').addEventListener(onclick, (e)=>{
   $('#signin').css({"opacity": "0", "z-index": "-100", "transition": "all 0.5"})
});

/*When user signs in and presses the button*/


/*When user signs up and presses the button*/