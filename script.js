const skills = {
    linux: { title: "Linux User", description: "Deep knowledge of Kali, Ubuntu, Parrot, and Arch Linux.", image: "linux.jpg" },
    python: { title: "Python Development", description: "Building scalable applications and automation tools.", image: "python.jpg" },
    vps: { title: "VPS & Heroku Hosting", description: "Cloud-based deployments and server management.", image: "vps.jpg" },
    video: { title: "Video Editing & Logo Making", description: "Expert in Adobe Premiere, After Effects, and Photoshop.", image: "video.jpg" },
    typing: { title: "Typing Speed", description: "Fast and accurate typing for productive coding.", image: "typing.jpg" },
    bot: { title: "Bot Development", description: "Creating automated bots using Python and APIs.", image: "bot.jpg" },
    languages: { title: "Fluent in Hindi & English", description: "Proficient communication skills in Hindi and English.", image: "languages.jpg" }
};

// Scroll-triggered animation
function revealSkills() {
    const skillRows = document.querySelectorAll(".skill-row");

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

// Toggle skill details
function toggleDetails(skillKey) {
    const skillInfo = skills[skillKey];

    if (skillInfo) {
        document.getElementById("skill-title").innerText = skillInfo.title;
        document.getElementById("skill-description").innerText = skillInfo.description;
        document.getElementById("skill-image").src = skillInfo.image;

        document.getElementById("skill-details").style.display = "block";
    }
}

// Scroll detection
window.addEventListener("scroll", revealSkills);
document.addEventListener("DOMContentLoaded", revealSkills);

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Thanks for reaching out! I'll get back to you soon.";
});
