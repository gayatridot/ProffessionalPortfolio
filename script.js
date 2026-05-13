// Initialize Lucide Icons
function initIcons() {
    lucide.createIcons();
    // Re-run after a short delay to catch anything missed
    setTimeout(() => lucide.createIcons(), 100);
}

document.addEventListener('DOMContentLoaded', initIcons);
window.addEventListener('load', initIcons); // Backup for slow loads

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = isDark ? 'none' : 'block';
            sunIcon.style.display = isDark ? 'block' : 'none';
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (moonIcon && sunIcon) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const scrollProgress = document.getElementById("scroll-progress");
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + "%";
    }
    
    // Navbar Glass Effect
    const nav = document.getElementById('navbar');
    if (nav) {
        if (winScroll > 50) {
            nav.style.height = '4rem';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
        } else {
            nav.style.height = '5rem';
            nav.style.boxShadow = 'none';
        }
    }
});

// Typing Animation
const phrases = [
    "Frontend Developer",
    "Android Developer",
    "AI Enthusiast",
    "Problem Solver"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function type() {
    if (!typingElement) return;
    
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}
type();

// Project Filtering
const filterTabs = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filter = tab.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
                gsap.fromTo(card, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.4});
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Entrance
const tl = gsap.timeline();
tl.from(".hero-content > *", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out"
})
.from(".hero-visual", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.8")
.from(".social-float a", {
    x: -20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
}, "-=0.5");

// Section Animations
gsap.utils.toArray(".section").forEach(section => {
    const elements = section.querySelectorAll(".section-header, .about-content, .skills-grid, .projects-grid, .experience-cards, .certs-grid, .focus-grid, .resume-grid, .contact-layout");
    if (elements.length > 0) {
        gsap.from(elements, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }
});

// Skill Item Stagger (Simpler & More Reliable)
gsap.utils.toArray(".skill-category").forEach(cat => {
    const items = cat.querySelectorAll(".skill-item");
    if (items.length > 0) {
        gsap.from(items, {
            scrollTrigger: {
                trigger: cat,
                start: "top 95%",
            },
            y: 10,
            opacity: 0,
            stagger: 0.05,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "all" // Ensures styles are cleared after animation
        });
    }
});

// Contact Form Submission (Netlify approach)
// Netlify automatically detects the 'data-netlify="true"' attribute.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        const btn = contactForm.querySelector('button');
        if (btn) {
            btn.innerHTML = 'Sending... <i data-lucide="loader"></i>';
            lucide.createIcons();
            // Form resets naturally on Netlify redirect
        }
    });
}
