var toggleButton = document.getElementById('toggle-skills');
var skillsMy = document.getElementById('skills');
toggleButton.addEventListener("click", function () {
    if (skillsMy.style.display === "none") {
        skillsMy.style.display = "block";
    }
    else {
        skillsMy.style.display = "none";
    }
});
