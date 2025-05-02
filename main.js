// main.js
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    // Toggle the "show" class on menu when menu button is clicked
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

// Optional: Close menu when any link is clicked
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
