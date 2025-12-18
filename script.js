const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

// Open Menu
menuBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Close Menu
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Function to close menu when a link is clicked
function closeMenu() {
    overlay.classList.remove('active');
}

// Simple reveal animation on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const speed = 150;
        const top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - speed) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});