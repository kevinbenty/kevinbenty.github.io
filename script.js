// Smooth navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Highlight nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Add animation to project cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observe skill items
document.querySelectorAll('.skill').forEach(skill => {
    skill.style.opacity = '0';
    observer.observe(skill);
});

// Add active state to navigation links
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        color: var(--accent);
        border-bottom: 2px solid var(--accent);
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (optional - add if you want a mobile hamburger menu)
function initMobileMenu() {
    // Add mobile menu functionality here if needed
    // This is a placeholder for future mobile menu implementation
}

// Initialize
initMobileMenu();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Add any modal closing logic here
    }
});

// Log initialization
console.log('Portfolio site initialized successfully!');
