var container1 = document.getElementsByClassName("container1")[0];
var container2 = document.getElementsByClassName("container2")[0];
var addBtn = document.getElementsByClassName("addBtn");
var closeBtn = document.getElementsByClassName("closeBtn");
var note = 0; //sticky note counter
var i = 0;

/*Hidden by default, shown when user press button*/ 
function typeNote() {
  if (container2.style.display == "none") {
    container2.style.display = "block";
  } else {
    container2.style.display = "none";
  }
}

/*Adds note once user inputs title*/
function addNote() {
  var noteText = document.getElementById("note-text").value;
  var nodeSticky = document.createElement("section");
  var nodeContents = document.createElement("h1"); //h1 inside section (sticky note)

  container2.style.display = "none";
  note++;

  nodeContents.innerHTML = noteText;

  //Styling of section (note)
  nodeContents.setAttribute("style","width: 250px; height:265px; font-size: 20px; padding: 25px; margin-top: 10px; overflow: hidden; border: 1px solid #70707070; z-index: -10;");
  nodeContents.style.background = colour();

  //add text and delete button elements into the sticky note section
  nodeSticky.appendChild(nodeContents);

  container1.insertAdjacentElement("beforeend", nodeSticky);

  if (note > 0) {
    document.querySelector("#none-note").style.visibility = "hidden";
  };

  
  nodeSticky.addEventListener("click", function(){ //delete sticky note
    nodeSticky.remove();
  }) 
};

function deleteNote() {

};

function colour() {
  var random_colour = [
    "#e4e4e4",
    "#f3fff9",
    "#c7ffe3"
  ];

  if (i > random_colour.length - 1) {
    i = 0;
  };

  return random_colour[i++];
};
