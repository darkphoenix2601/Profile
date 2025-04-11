const skillRows = document.querySelectorAll(".skill-row");

// Scroll-triggered animation
function revealSkills() {
    skillRows.forEach((row, index) => {
        const rowPosition = row.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (rowPosition < windowHeight - 100) {
            row.classList.add("show");
            row.classList.remove("hide");

            // Zoom-out previous elements
            if (index > 0) {
                skillRows[index - 1].classList.add("hide");
            }
        }
    });
}

// Scroll detection
window.addEventListener("scroll", revealSkills);
document.addEventListener("DOMContentLoaded", revealSkills);

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Thanks for reaching out! I'll get back to you soon.";
});
