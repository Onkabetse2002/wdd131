// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

// Hamburger menu functionality
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Ensure menu visibility based on window size
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
});
