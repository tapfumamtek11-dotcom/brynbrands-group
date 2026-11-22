/**
 * THE VOID & THE SUBSTANCE
 * Challenge Version JavaScript - Dr. Hon. Bryn Taurai Mteki
 */

document.addEventListener('DOMContentLoaded', () => {
    initMagicCursor();
    initFluidCanvas();
    initScrollAnimations();
    initProgress();
    initMagneticEffects();
    initGlobalMenu();
    initLightbox();
});

/**
 * Global Menu Logic
 */
function initGlobalMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const overlay = document.querySelector('.menu-overlay');
    const links = document.querySelectorAll('.menu-link');

    toggle.addEventListener('click', () => {
        overlay.classList.toggle('active');
        toggle.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            pageTransition(target);
        });
    });
}

/**
 * Premium Page Transition
 */
function pageTransition(url) {
    const curtain = document.querySelector('.page-curtain');
    curtain.classList.add('active');
    
    setTimeout(() => {
        window.location.href = url;
    }, 800);
}

/**
 * Magic Cursor
 */
function initMagicCursor() {
    const cursor = document.getElementById('magic-cursor');
    const dot = document.getElementById('magic-cursor-dot');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot follows instantly
        dot.style.left = mouseX - 2 + 'px';
        dot.style.top = mouseY - 2 + 'px';
    });

    const animateCursor = () => {
        // Delayed follow for the ring
        let lerp = 0.15;
        cursorX += (mouseX - cursorX - 20) * lerp;
        cursorY += (mouseY - cursorY - 20) * lerp;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const interactives = document.querySelectorAll('a, button, .nav-toggle, .sector-tag');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

/**
 * Fluid Background Animation
 * A subtle particle-based flow to simulate the "Spirit"
 */
function initFluidCanvas() {
    const canvas = document.getElementById('fluid-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 40;

    // Context-Aware Colors
    const pageColors = {
        'index.html': 'rgba(212, 168, 83,', // Gold
        'biography.html': 'rgba(255, 255, 255,', // White/Mist
        'portfolio.html': 'rgba(232, 93, 4,', // Accent/Orange
        'contact.html': 'rgba(100, 100, 100,' // Steel/Safe
    };
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const activeColorBase = pageColors[currentPage] || 'rgba(212, 168, 83,';

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.init();
        }
        init() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `${activeColorBase}${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

/**
 * Intersection Observer for Reveals
 */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    reveals.forEach(el => observer.observe(el));
}

/**
 * Circular Scroll Progress
 */
function initProgress() {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;

        const progressWrap = document.querySelector('.progress-wrap');
        if (scroll > 50) {
            progressWrap.classList.add('active-progress');
        } else {
            progressWrap.classList.remove('active-progress');
        }
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    document.querySelector('.progress-wrap').addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Magnetic Elements
 */
function initMagneticEffects() {
    const magneticElements = document.querySelectorAll('.editorial-link, .nav-toggle');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0, 0)`;
        });
    });
}

/**
 * Editorial Lightbox
 */
function initLightbox() {
    const cards = document.querySelectorAll('.grid-card');
    if (cards.length === 0) return;

    // Create Lightbox Element
    const lightbox = document.createElement('div');
    lightbox.className = 'editorial-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-close">CLOSE</div>
        <div class="lightbox-content">
            <img src="" alt="View">
            <div class="lightbox-info">
                <h2 class="lb-title"></h2>
                <p class="lb-description"></p>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            if (!img) return;
            const title = card.querySelector('.title').innerText;
            const type = card.querySelector('.type').innerText;

            lightbox.querySelector('img').src = img.src;
            lightbox.querySelector('.lb-title').innerText = title;
            lightbox.querySelector('.lb-description').innerText = type + " — Milestone of Excellence.";
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target.className === 'editorial-lightbox' || e.target.className === 'lightbox-close') {
            lightbox.classList.remove('active');
        }
    });
}
