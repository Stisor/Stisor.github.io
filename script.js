// TODO add inverting of the search icon

function search_btn() {
  console.log("search button clicked");

  //variables
  const blue = "#1DA1F2";
  var modal = document.getElementById("search-modal");
  var search_btn = document.getElementById("search-btn");

  search_btn.onclick = function () {
    search_btn.style.backgroundColor = blue;
    search_btn.style.color = "white";
    search_btn.style.borderWidth = "0px";

    // make modal appear from the bottom
    modal.style.transform = "translateY(0px)";
    modal.style.transition = ".2s";
  };

  search_btn.onblur = function () {
    search_btn.style.backgroundColor = "white";
    // blue variable
    search_btn.style.color = "black";

    // make modal disappear from the bottom
    modal.style.transform = "translateY(1000px)";
    modal.style.transition = ".2s";
  };
}

function openApp() {
  console.log("open app");
  // Open settings when the user clicks on the settings button
  var settings = document.getElementById("settings");
  var settings_app = document.getElementById("settings-app");
  settings.onclick = function () {
    console.log("settings clicked");
    settings_app.style.display = "block";
  };
}

function closeApp() {
  console.log("close app");
  // Close app when the user clicks on the close button
  var close = document.getElementsByClassName("close-btn");
  var settings_app = document.getElementById("settings-app");
  var desktop = document.getElementById("desktop-apps");

  close[0].onclick = function () {
    console.log("close clicked");
    settings_app.style.display = "none";
    desktop.style.display="none"
  };
}

// Make the DIV element draggable:
dragElement(document.getElementById("desktop-apps"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
