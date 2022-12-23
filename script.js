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
