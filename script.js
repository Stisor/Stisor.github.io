var btn = document.getElementById("search-btn");
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "rgb(0, 120, 215)";
    btn.style.color = "white";
});
btn.addEventListener("blur", function () {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
});
// TODO add inverting of the search icon

