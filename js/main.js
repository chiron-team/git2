/**
 * Main JavaScript File
 * dasdas
 */

'use strict';

// ===========================
// Mobile Navigation Toggle
// ===========================

const initMobileNav = () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
};

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================

const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (!target) return;

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.querySelector('.nav__menu');
            const navToggle = document.querySelector('.nav__toggle');
            if (navMenu && navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }

            // Update active state
            updateActiveLink(link);
        });
    });
};

// ===========================
// Update Active Navigation Link
// ===========================

const updateActiveLink = (activeLink) => {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.classList.remove('nav__link--active');
    });
    activeLink.classList.add('nav__link--active');
};

// ===========================
// Scroll Spy for Navigation
// ===========================

const initScrollSpy = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav__link[href="#${id}"]`);
                
                if (correspondingLink) {
                    navLinks.forEach(link => link.classList.remove('nav__link--active'));
                    correspondingLink.classList.add('nav__link--active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
};

// ===========================
// Counter
// ===========================

const initCounter = () => {
    const decrementBtn = document.querySelector('#counter-decrement');
    const incrementBtn = document.querySelector('#counter-increment');
    const resetBtn = document.querySelector('#counter-reset');
    const display = document.querySelector('#counter-display');
    const displayWrapper = display ? display.closest('.counter__display-wrapper') : null;

    if (!decrementBtn || !incrementBtn || !display || !displayWrapper) return;

    let count = 0;

    const updateDisplay = () => {
        display.textContent = count;

        // Update colour state on the display value
        display.classList.toggle('counter__display--positive', count > 0);
        display.classList.toggle('counter__display--negative', count < 0);

        // Update colour state on the wrapper border / background
        displayWrapper.classList.toggle('counter__display-wrapper--positive', count > 0);
        displayWrapper.classList.toggle('counter__display-wrapper--negative', count < 0);

        // Trigger bump animation: remove then re-add the class
        display.classList.remove('counter__display--bump');
        // Force a reflow so the browser registers the removal before re-adding
        void display.offsetWidth;
        display.classList.add('counter__display--bump');
    };

    incrementBtn.addEventListener('click', () => {
        count += 1;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        count -= 1;
        updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
};

// ===========================
// Form Handling
// ===========================

const initFormHandling = () => {
    const contactForm = document.querySelector('.contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message (you can customize this)
        alert('Thank you for your message! We\'ll get back to you soon.');

        // Reset form
        contactForm.reset();
    });
};

// ===========================
// Header Scroll Effect
// ===========================

const initHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 0) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }

        lastScroll = currentScroll;
    });
};

// ===========================
// Intersection Observer for Animations
// ===========================

const initAnimations = () => {
    const animatedElements = document.querySelectorAll('.service-card, .about, .contact-form');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// ===========================
// Initialize All Features
// ===========================

const init = () => {
    initMobileNav();
    initSmoothScroll();
    initScrollSpy();
    initCounter();
    initFormHandling();
    initHeaderScroll();
    initAnimations();

    console.log('dasdas initialized successfully!');
};

// ===========================
// Run on DOM Content Loaded
// ===========================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===========================
// Export for module usage (optional)
// ===========================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { init };
}
