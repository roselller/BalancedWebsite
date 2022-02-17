//javascript to remove splashscreen after 3 seconds
document.addEventListener('DOMContentLoaded', () => {
   //splashscreen javascript
   setTimeout(()=>{
      $('#splash').css({"opacity": "0", "z-index": "-200", "transition": "all 1s"});
   }, 3000);

   //if user does not have an account/has an account and wishes to switch between signin and signup pages
   document.querySelector(".signinsignup").addEventListener("click", () => {
      document.querySelector(".signin").classList.toggle("hide");
   })

   document.querySelector(".signupsignin").addEventListener("click", () => {
      document.querySelector(".signin").classList.toggle("hide");
   })
});