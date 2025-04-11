const skills = {
    linux: {
        title: "Linux User",
        description: "Deep knowledge of Kali, Ubuntu, Parrot, and Arch Linux for cybersecurity and development.",
        image: "linux.jpg"
    },
    python: {
        title: "Python Development",
        description: "Developing efficient, scalable applications in Python for automation and AI projects.",
        image: "python.jpg"
    },
    vps: {
        title: "VPS & Heroku Hosting",
        description: "Experience deploying applications efficiently on cloud-based VPS and Heroku.",
        image: "vps.jpg"
    },
    video: {
        title: "Video Editing & Logo Making",
        description: "Expert in Adobe Premiere, After Effects, and Photoshop for digital content creation.",
        image: "video.jpg"
    },
    typing: {
        title: "Typing Speed",
        description: "High typing speed and accuracy for productive coding and data entry.",
        image: "typing.jpg"
    },
    bot: {
        title: "Bot Development",
        description: "Developing intelligent bots using APIs and machine learning algorithms for automation.",
        image: "bot.jpg"
    }
};

// Function to Reveal Skills on Scroll
function revealSkills() {
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 100) {
            card.classList.add("show"); // Apply zoom effect
        }
    });
}

// Function to Toggle Skill Details
function toggleDetails(skillKey) {
    const skillInfo = skills[skillKey];

    if (skillInfo) {
        document.getElementById("skill-title").innerText = skillInfo.title;
        document.getElementById("skill-description").innerText = skillInfo.description;
        document.getElementById("skill-image").src = skillInfo.image;

        document.getElementById("skill-details").style.display = "block";
    }
}

// Scroll Detection to Reveal Skills
window.addEventListener("scroll", revealSkills);
document.addEventListener("DOMContentLoaded", revealSkills);

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Thanks for reaching out! I'll get back to you soon.";
});
