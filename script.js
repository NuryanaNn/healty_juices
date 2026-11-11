// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // scroll-top button
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        scrollTop.classList.toggle('show', window.scrollY > 400);
    }
});

// ===== HAMBURGER MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMobile.classList.toggle('open');
    });
}

// ===== MOBILE SUBMENU TOGGLE =====
document.querySelectorAll('.mobile-parent').forEach(parent => {
    parent.addEventListener('click', () => {
        const submenu = parent.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('open');
            const arrow = parent.querySelector('.m-arrow');
            if (arrow) arrow.textContent = submenu.classList.contains('open') ? '▲' : '▼';
        }
    });
});

// ===== SCROLL TOP =====
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== FADE UP ANIMATION =====
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// ===== PRODUCT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        productCards.forEach(card => {
            if (cat === 'all' || card.dataset.category === cat) {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.4s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.textContent = 'Mengirim...';
        btn.disabled = true;
        setTimeout(() => {
            contactForm.style.display = 'none';
            const success = document.querySelector('.form-success');
            if (success) success.classList.add('show');
        }, 1500);
    });
}

// ===== ACTIVE NAV LINK =====
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === page) link.classList.add('active');
});

// Set home active
if (page === 'index.html' || page === '') {
    const homeLink = document.querySelector('.nav-link[href="index.html"]');
    if (homeLink) homeLink.classList.add('active');
}
