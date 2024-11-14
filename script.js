// Calculate the number of days passed since July 8, 2024
function calculateDays() {
    const targetDate = new Date('2024-07-08');
    const currentDate = new Date();
    const timeDiff = currentDate - targetDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

// Display the counter in the center of the page
function displayDaysCounter() {
    const counterElement = document.getElementById('daysCounter');
    const days = calculateDays();
    counterElement.textContent = `${days} days since July 8th`;
}

// Animate timeline items on scroll
function animateOnScroll() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('animate');
        }
    });
}

window.onload = () => {
    displayDaysCounter();
    animateOnScroll();
};

window.onscroll = animateOnScroll;
