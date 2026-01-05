const toggleBtn = document.getElementById("toggleBtn");
const aboutSection = document.getElementById("about");

toggleBtn.addEventListener("click", function () {
    if (aboutSection.classList.contains("hidden")) {
        aboutSection.classList.remove("hidden");
        toggleBtn.textContent = "Hide About Me";
    } else {
        aboutSection.classList.add("hidden");
        toggleBtn.textContent = "Show More About Me";
    }
});
