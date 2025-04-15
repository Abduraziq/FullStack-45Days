// Background Color Changer
const bgChangeBtn = document.getElementById("bgChangeBtn");
bgChangeBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Counter Logic
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
    count++;
    document.getElementById("count").innerText = count;
});
document.getElementById("decrease").addEventListener("click", () => {
    if (count > 0) count--;
    document.getElementById("count").innerText = count;
});

// Keypress Event
document.addEventListener("keydown", (event) => {
    document.getElementById("keyDisplay").innerText = event.key.toUpperCase();
});

// Random Quote Generator
const quotes = [
    "Stay hungry, stay foolish! 🚀",
    "Dream big, work hard! 💡",
    "Code is like humor. When you have to explain it, it’s bad. 💻",
    "Simplicity is the soul of efficiency. ⚡"
];

document.getElementById("quoteBtn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
});
