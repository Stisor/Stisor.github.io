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

function openSettings() {
  var settings = document.getElementById("settings-app");
  if (settings.style.display === "block") {
    settings.style.display = "none";
  } else {
    settings.style.display = "block";
    console.log("settings opened");
  }

}

function closeSettings() {
  var settings = document.getElementById("settings-app");
  settings.style.display = "none";
}

function openGithub() {
  var github = document.getElementById("github-app");
  if (github.style.display === "block") {
    github.style.display = "none";
  } else {
    github.style.display = "block";
    console.log("github opened");
  }

}

function closeGithub() {
  var github = document.getElementById("github-app");
  github.style.display = "none";
}





var draggableElements = document.getElementsByClassName("app-header");

if (draggableElements.length > 0) {
    // There are elements with the "draggable" class, so we can loop through them and make them draggable
    for(var i = 0; i < draggableElements.length; i++){
        dragElement(draggableElements[i]);
    }
} else {
    // There are no elements with the "draggable" class, so we can't make any elements draggable
    console.error("There are no elements with the 'app-header' class");
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX, 10);
        pos4 = parseInt(e.clientY, 10);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX, 10);
        pos2 = pos4 - parseInt(e.clientY, 10);
        pos3 = parseInt(e.clientX, 10);
        pos4 = parseInt(e.clientY, 10);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
