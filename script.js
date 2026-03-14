// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    const interestLabels = {
        '': '',
        'oturma': 'Oturma Grubu',
        'yatak': 'Yatak Odası',
        'yemek': 'Yemek Odası',
        'ozel': 'Özel Tasarım'
    };

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value.trim();

        if (!name) {
            formMessage.textContent = 'Lütfen adınızı soyadınızı girin.';
            formMessage.style.color = '#D4745C';
            formMessage.classList.add('show');
            return;
        }
        if (!message) {
            formMessage.textContent = 'Lütfen mesajınızı yazın.';
            formMessage.style.color = '#D4745C';
            formMessage.classList.add('show');
            return;
        }

        const categoryText = interest ? interestLabels[interest] || interest : '';
        const text = [
            'Merhaba, ben ' + name + '.',
            categoryText ? 'İlgilendiğim kategori: ' + categoryText + '.' : '',
            message
        ].filter(Boolean).join(' ');

        const whatsappNumber = '905556664422';
        const whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text);

        contactForm.reset();
        window.open(whatsappUrl, '_blank');
    });
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.collection-card, .craft-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        if (navbar) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (navbar) {
            navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
        }
    }
    
    lastScroll = currentScroll;
});

// Collection Card Click Handler (optional - can be extended)
document.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('click', function() {
        // You can add navigation or modal functionality here
        console.log('Collection card clicked');
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// CTA Button Arrow Animation
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
        const svg = ctaButton.querySelector('svg');
        if (svg) {
            svg.style.transform = 'translateX(8px)';
        }
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        const svg = ctaButton.querySelector('svg');
        if (svg) {
            svg.style.transform = 'translateX(0)';
        }
    });
}
