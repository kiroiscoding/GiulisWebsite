// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active link highlighting based on current page
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');

        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Highlight on page load
highlightCurrentPage();

// ===================================
// TYPEWRITER EFFECT FOR HERO SUBTITLE
// ===================================

window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';

        // Wrap each character in a span, preserving spaces
        text.split('').forEach(char => {
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';  // Use non-breaking space for actual spaces
            } else {
                span.textContent = char;
            }
            heroSubtitle.appendChild(span);
        });

        // Start typing animation after initial fade-in
        setTimeout(() => {
            heroSubtitle.classList.add('typing');
            const spans = heroSubtitle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.animationDelay = `${1.2 + (index * 0.05)}s`;
            });
        }, 100);
    }
});

// ===================================
// SMOOTH SCROLL (Disabled for multi-page layout)
// ===================================

// Smooth scroll functionality disabled as site uses separate pages
// If you need smooth scrolling within individual pages, uncomment below:

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         const href = this.getAttribute('href');
//         
//         // Don't prevent default for empty hashes or non-section links
//         if (href === '#' || href === '') return;
//         
//         const target = document.querySelector(href);
//         if (!target) return;
//         
//         e.preventDefault();
//         
//         const offsetTop = target.offsetTop - 80; // Account for fixed navbar
//         
//         window.scrollTo({
//             top: offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });

// ===================================
// CONTACT FORM
// ===================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.blog-card, .curriculum-module, .resource-card, .stat-card, .challenge-list li');

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ===================================
// MODULE DOWNLOAD HANDLERS
// ===================================

const moduleDownloads = document.querySelectorAll('.module-download');

moduleDownloads.forEach(download => {
    download.addEventListener('click', (e) => {
        e.preventDefault();

        // In a real implementation, this would trigger a PDF download
        alert('This would download the curriculum module PDF. In a production site, this would link to actual PDF files.');
    });
});

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #8B1538, #B91D3B);
        width: 0%;
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// ===================================
// STATISTICS COUNTER ANIMATION
// ===================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = formatNumber(current);
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return Math.floor(num / 1000000) + 'M+';
    } else if (num >= 1000) {
        return Math.floor(num / 1000) + 'K+';
    }
    return Math.floor(num);
}

// Animate statistics when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent;

            // Parse the number from text
            let targetNumber;
            if (text.includes('in')) {
                // Handle "1 in 10" format
                return;
            } else if (text.includes('M')) {
                targetNumber = parseFloat(text) * 1000000;
            } else if (text.includes('%')) {
                targetNumber = parseFloat(text);
                number.textContent = '0%';
                animatePercentage(number, targetNumber);
                return;
            }

            if (targetNumber) {
                number.textContent = '0';
                animateCounter(number, targetNumber);
            }
        }
    });
}, { threshold: 0.5 });

function animatePercentage(element, target) {
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '%';
    }, 16);
}

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

function createBackToTop() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #8B1538;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.background = '#6B0F2A';
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '#8B1538';
        button.style.transform = 'scale(1)';
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    document.body.appendChild(button);
}

createBackToTop();

// ===================================
// LAZY LOADING IMAGES
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.style.backgroundImage = `url(${img.dataset.src})`;
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c Flow for Her ', 'background: #8B1538; color: white; font-size: 20px; padding: 10px;');
console.log('%c Empowering girls through menstrual health education ', 'color: #8B1538; font-size: 14px;');
console.log('%c Website built with care for an important cause ', 'color: #666; font-size: 12px;');

