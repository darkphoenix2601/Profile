const text = "Welcome to Akshit's Portfolio!";
let index = 0;
let typingInterval;

function startTyping() {
    typingInterval = setInterval(() => {
        if (index < text.length) {
            document.getElementById("typing-text").innerText += text[index];
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 150);
}

function resetTyping() {
    clearInterval(typingInterval);
    document.getElementById("typing-text").innerText = "";
    index = 0;
}

document.body.addEventListener("mousemove", startTyping);
document.body.addEventListener("mouseleave", resetTyping);

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
});
