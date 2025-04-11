const skillRows = document.querySelectorAll(".skill-row");

// Scroll-triggered animation
function revealSkills() {
    skillRows.forEach((row, index) => {
        const rowPosition = row.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (rowPosition < windowHeight - 150) {
            row.classList.add("show");
        }
    });
}

// Tooltip functionality
function showTooltip(skillId) {
    const tooltip = document.getElementById("tooltip");
    const skillElement = document.getElementById(skillId);
    tooltip.innerText = `Click to see details about ${skillElement.innerText}`;
    
    const rect = skillElement.getBoundingClientRect();
    tooltip.style.top = `${rect.top - 30}px`;
    tooltip.style.left = `${rect.left + 20}px`;
    tooltip.style.display = "block";
}

function hideTooltip() {
    document.getElementById("tooltip").style.display = "none";
}

// Scroll detection
window.addEventListener("scroll", revealSkills);
document.addEventListener("DOMContentLoaded", revealSkills);

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Thanks for reaching out! I'll get back to you soon.";
});
