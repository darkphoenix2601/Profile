// Show description on hover
function showAbout(skillId) {
    document.getElementById(`about-${skillId}`).style.display = "block";
}

// Hide description when hover stops
function hideAbout() {
    document.querySelectorAll(".about-text").forEach(el => el.style.display = "none");
}
