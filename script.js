const skills = {
    vps: {
        title: "VPS Hosting",
        description: "Experience with deploying applications on cloud VPS platforms efficiently.",
        image: "assets/images/vps.jpg"
    },
    heroku: {
        title: "Heroku Hosting",
        description: "Deploying scalable applications on Heroku cloud with seamless integration.",
        image: "assets/images/heroku.jpg"
    },
    linux: {
        title: "Linux User",
        description: "Deep knowledge of multiple Linux distros including Kali, Ubuntu, Parrot, and Arch Linux.",
        image: "assets/images/linux.jpg"
    },
    video: {
        title: "Video Editing & Logo Making",
        description: "Skilled in Adobe Premiere, After Effects, and Photoshop for creative content production.",
        image: "assets/images/video.jpg"
    },
    python: {
        title: "Python Development",
        description: "Developing efficient, scalable applications in Python for automation and AI projects.",
        image: "assets/images/python.jpg"
    },
    bot: {
        title: "Bot Development",
        description: "Creating intelligent bots using APIs and machine learning algorithms for automation.",
        image: "assets/images/bot.jpg"
    }
};

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
