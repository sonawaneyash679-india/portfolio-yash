// Portfolio Loaded
console.log("Portfolio Loaded Successfully!");

// Smooth animation for button click
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", () => {
            console.log("View Projects button clicked");
        });
    }
});
