// Form Submission Handling
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Thanks for reaching out! I'll get back to you soon.";
});

// Hover Effects on Projects
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.15)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
