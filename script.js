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


const certsData = {
    1: {
        title: "Oracle Certified AI Foundations Associate",
        org: "Oracle University",
        date: "September 2025",
        desc: "Certified in Oracle Cloud Infrastructure (OCI) AI services, including machine learning fundamentals, natural language processing, and computer vision models.",
        tag: "Cloud & AI",
        id: "OCI-AI-2025-001",
        img: "https://files.catbox.moe/42jftf.jpg",
        verify: "https://www.linkedin.com/in/gayatri-ghogare-b86948330/"
    },
    2: {
        title: "Android Developer Virtual Internship",
        org: "Google for Developers | EduSkills",
        date: "Dec 2025",
        desc: "Completed an intensive internship focused on modern Android development, including Jetpack Compose, MVVM architecture, and high-performance mobile UI patterns.",
        tag: "Mobile Development",
        id: "7a96b11531935a8d9e9a9030df384f48",
        img: "https://files.catbox.moe/jz796x.PNG",
        verify: "https://www.linkedin.com/in/gayatri-ghogare-b86948330/"
    },
    3: {
        title: "Building an Image Editing Serverless Application",
        org: "AWS | AI for Bharat",
        date: "December 2025",
        desc: "Developed a full-stack serverless application on AWS featuring AI-powered image editing, cloud-native storage, and scalable backend orchestration.",
        tag: "Cloud Development",
        id: "2025H2S11AB-W300049",
        img: "https://files.catbox.moe/x7uuzk.jpg",
        verify: "https://www.linkedin.com/in/gayatri-ghogare-b86948330/"
    },
    4: {
        title: "MongoDB Skill: CRUD Operations",
        org: "MongoDB, Inc.",
        date: "April 2026",
        desc: "Earned a Proof of Completion badge for mastering Create, Read, Update, and Delete (CRUD) operations in MongoDB.",
        tag: "Database",
        id: "da8081-db68-47b2-a3bb-c2ce9e5776f0",
        img: "https://media.licdn.com/dms/image/v2/D5622AQFLqY4lnw9_fg/feedshare-shrink_800/B56Z1x_ZCFJgAc-/0/1775733936489?e=1784160000&v=beta&t=1GCFJ70VprEp8qMAachDJFNkfzn5oHuBdiTc4qxH7rg",
        verify: "https://www.credly.com/badges/ba08081-db68-47b2-a3bb-c2ce9e5776f0"
    },
    5: {
        title: "Java (Basic) Skill Certification",
        org: "HackerRank",
        date: "November 2025",
        desc: "Validated deep understanding of Java fundamentals, object-oriented programming, and complex algorithmic problem-solving through rigorous assessment.",
        tag: "Programming",
        id: "F6C3FAACBDO",
        img: "https://files.catbox.moe/xohs4d.png",
        verify: "https://www.linkedin.com/in/gayatri-ghogare-b86948330/"
    },
    6: {
        title: "AI-ML Virtual Internship",
        org: "EduSkills | Google for Developers",
        date: "June 2026",
        desc: "Successfully completed an 8-week intensive program covering TensorFlow neural networks, object detection, product image search, and image classification models with a Grade A evaluation.",
        tag: "AI & ML",
        id: "4c099902005e37030e9a",
        img: "https://media.licdn.com/dms/image/v2/D5622AQECgq9hpIjmSg/feedshare-image-high-res/B56Z6dTXYAHUAU-/0/1780755560147?e=1784160000&v=beta&t=AFueRTaYpgN63AUZHrqeJ0xRTEi0LY-_QgwZ-SW9Gys",
        verify: "https://certificate.eduskillsfoundation.org/credential/4c099902005e37030e9a"
    },
    7: {
        title: "Gen AI Exchange Hackathon 2025",
        org: "Google Cloud & Hack2Skill",
        date: "January 2026",
        desc: "Earned a Certificate of Participation for contributing a prototype for the 'Personalized Career and Skills Advisor' and advancing expertise in AI innovation aligned with India’s Viksit Bharat initiative.",
        tag: "Generative AI",
        id: "2025H2S08GH-P1000399",
        img: "https://media.licdn.com/dms/image/v2/D4D22AQHJP4aDosT4kA/feedshare-shrink_1280/B4DZvj6fRSKUAc-/0/1769055319303?e=1784160000&v=beta&t=4DtH0u-8Ukv6Mc4hJdnBh272gesbRyL2hZjVAXoXCNA", 
        verify: "https://www.linkedin.com/posts/gayatri-ghogare-b86948330_genai-hackathon-googlecloud-activity-7419955827555577856-8qWI/"
    },
    8: {
        title: "Prompt Engineering for Career Awareness",
        org: "CSRBOX | IBM SkillsBuild",
        date: "March 2026",
        desc: "Mastered advanced prompt engineering techniques, LLM interaction patterns, and applying generative AI to accelerate career development and software productivity.",
        tag: "Artificial Intelligence",
        id: "Spring-Cert-2026",
        img: "https://files.catbox.moe/4jkyud.jpg",
        verify: "https://www.linkedin.com/in/gayatri-ghogare-b86948330/"
    },
    9: {
        title: "Green Skills and Artificial Intelligence",
        org: "Edunet Foundation | Shell | AICTE",
        date: "February 2026",
        desc: "Mastered the intersection of sustainability and AI, focusing on green technologies, carbon footprint optimization, and building intelligent solutions for environmental challenges.",
        tag: "AI & Sustainability",
        id: "S4F25_205137",
        img: "https://files.catbox.moe/afzr8a.jfif",
        verify: "https://www.linkedin.com/in/gayatri-ghogare-b86948330/"
    }
};


const modal = document.getElementById('certModal');
const cards = document.querySelectorAll('.cert-card');
const closeBtn = document.getElementById('closeModal');

cards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const id = index + 1; // Assuming order matches
        const data = certsData[id];

        if (data) {
            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalOrg').innerText = data.org;
            document.getElementById('modalDate').innerText = data.date;
            document.getElementById('modalDesc').innerText = data.desc;
            document.getElementById('modalTag').innerText = data.tag;
            document.getElementById('modalId').innerText = data.id;
            document.getElementById('modalImg').src = data.img;
            document.getElementById('modalVerify').href = data.verify || "#";

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


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
                gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
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



document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll("#projects-container .project-card");
    const loadMoreBtn = document.getElementById("load-more");
    let visibleCount = 2;


    projects.forEach((card, index) => {
        if (index >= visibleCount) {
            card.style.display = "none";
        }
    });

    loadMoreBtn.addEventListener("click", function () {
        if (loadMoreBtn.textContent === "Load More") {

            projects.forEach((card, index) => {
                if (index < visibleCount + 2) {
                    card.style.display = "block";
                }
            });
            visibleCount += 2;

            if (visibleCount >= projects.length) {
                loadMoreBtn.textContent = "View Less";
            }
        } else {

            visibleCount = 2;
            projects.forEach((card, index) => {
                if (index >= visibleCount) {
                    card.style.display = "none";
                }
            });
            loadMoreBtn.textContent = "Load More";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const certs = document.querySelectorAll(".certs-grid .cert-card");
  const loadMoreBtn = document.getElementById("load-more-certs");
  let visibleCount = 3; 

 
  certs.forEach((card, index) => {
    if (index >= visibleCount) {
      card.style.display = "none";
    }
  });

  loadMoreBtn.addEventListener("click", function () {
    if (loadMoreBtn.textContent === "Load More") {
    
      certs.forEach((card, index) => {
        if (index < visibleCount + 3) {
          card.style.display = "block";
        }
      });
      visibleCount += 3;

     
      if (visibleCount >= certs.length) {
        loadMoreBtn.textContent = "View Less";
      }
    } else {
  
      visibleCount = 3;
      certs.forEach((card, index) => {
        if (index >= visibleCount) {
          card.style.display = "none";
        }
      });
      loadMoreBtn.textContent = "Load More";
    }
  });
});
