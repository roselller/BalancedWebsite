var container1 = document.getElementsByClassName("container1")[0];
var container2 = document.getElementsByClassName("container2")[0];
var addBtn = document.getElementsByClassName("addBtn");
var closeBtn = document.getElementsByClassName("closeBtn");
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
  var node0 = document.createElement("section");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;

  node1.setAttribute("style","width: 250px; height:250px; font-size 26px; padding: 25px; margin-top: 10px; overflow: hidden;")
  
  node1.style.background = colour();

  node0.appendChild(node1);

  container1.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("click", function(){
    node0.style.transform = "scale(1.1)";
  })

  node0.addEventListener("mouseleave", function(){
    node0.style.transform = "scale(1)";
  })

  node0.addEventListener("dblclick", function(){
    node0.remove();
  })
}

function colour() {
  var random_colour = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];

  if (i > random_colour.length - 1) {
    i = 0;
  }
  return random_colour[i++];
}
