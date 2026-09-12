let badges = document.querySelectorAll(".skill-badge");
let currentIndex = 0;

badges[currentIndex].classList.add("active");

setInterval(function() {
    badges[currentIndex].classList.remove("active");

    currentIndex = currentIndex + 1;

    if (currentIndex >= badges.length) {
        currentIndex = 0;
    }

    badges[currentIndex].classList.add("active");
}, 1000);

let cordHandle = document.getElementById("cordHandle");

cordHandle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});