function toggleMenu() {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Close the dropdown when an option is clicked
document.querySelectorAll('#dropdown-menu a').forEach(function (item) {
    item.addEventListener('click', function () {
        document.getElementById("dropdown-menu").style.display = "none";
    });
});

// Close the dropdown when the user scrolls
window.addEventListener('scroll', function () {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }
});
