
// COLLAPSABLE FUNCTIONS SCRIPT
let coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //state machine of the parenthesis
    this.classList.toggle("par-opened");

    let openpar = this.querySelector("span.open-par");
    let content = this.nextElementSibling;
    let closingpar = content.nextElementSibling;

    //curly braces behavior
    if (this.classList.contains("par-opened")) {
      openpar.classList.toggle("animated-par")
      openpar.innerHTML = "{";
      closingpar.style.display = "block";
    } else {
      openpar.innerHTML = "{ ... }"
      openpar.classList.toggle("animated-par")
      closingpar.style.display = "none";
    }

    //showing/hiding actual content
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



// LOGO MOUSEOVER EVENTS
let logolist = document.getElementsByClassName("logo");
var logonamefield = document.getElementById("logoname");

for (i = 0; i < logolist.length; i++) {
  logolist[i].addEventListener("mouseover", function() {
    logonamefield.innerHTML = this.getAttribute("alt");
  });

  logolist[i].addEventListener("mouseout", function() {
    logonamefield.innerHTML = "Here's the languages I use:";
  });
}



// WINDOW RESIZE EVENT
window.addEventListener("resize", function() {
  contentlist = document.getElementsByClassName("content");
  for (i = 0; i < contentlist.length; i++) {
    if (contentlist[i].style.maxHeight != 0) {
      contentlist[i].style.maxHeight = contentlist[i].scrollHeight + "px";
    }
  }
});