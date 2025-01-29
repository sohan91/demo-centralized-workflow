document.getElementById("themeToggleButton").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    // document.body.classList.toggle("font-color");
    document.body.classList.toggle("label");
});

// Initially set to light theme
document.body.classList.add("light-theme");
