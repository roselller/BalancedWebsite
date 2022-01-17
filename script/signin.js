//javascript to remove splashscreen after 3 seconds
document.addEventListener('DOMContentLoaded', (e)=>{
   //splashscreen javascript
   setTimeout(()=>{
      $('#splash').css({"opacity": "0", "z-index": "-200", "transition": "all 1s"});
   }, 3000);

   //if user does not have an account
   $("#signin-signup").on("click", ()=>{
      $("#signin").css("z-index", "-200");
   });

   //if user has an account
   $("#signup-signin").on("click", ()=>{
      $("#signin").css("z-index", "200");
   });

   //RESTDB AND SIGN IN AND SIGN UP
   //reset form values
   $("#signin-form").reset();
   $("#signup-form").reset();
});