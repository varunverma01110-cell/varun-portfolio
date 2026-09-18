let cordHandle = document.getElementById("cordHandle");
console.log(cordHandle);

cordHandle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

let logoIcon = document.getElementsByClassName("logo-icon")[0];
console.log(logoIcon);

logoIcon.addEventListener("click", function() {
    logoIcon.classList.toggle("active");
});

let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function() {
    sidebar.classList.toggle("show");
});
let sidebarClose = document.getElementById("sidebarClose");

sidebarClose.addEventListener("click", function() {
    sidebar.classList.remove("show");
});