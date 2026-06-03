// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(currentTheme);
updateThemeToggleButton(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const isLightMode = body.classList.contains('light-mode');
    
    if (isLightMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeToggleButton('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateThemeToggleButton('light-mode');
    }
});

function updateThemeToggleButton(theme) {
    if (theme === 'dark-mode') {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ACTIVE NAV LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });

        if (currentSection === '' || !currentSection) {
            navLinks[0].classList.add('active');
        }
    });
}

updateActiveNavLink();

// ===== FORM VALIDATION =====
const recommendationForm = document.getElementById('recommendationForm');
if (recommendationForm) {
    recommendationForm.addEventListener('submit', function (e) {
        const category = document.getElementById('category').value;
        const experience = document.querySelector('input[name="experience"]:checked');
        const learning_style = document.querySelector('input[name="learning_style"]:checked');

        if (!category || !experience || !learning_style) {
            e.preventDefault();
            showNotification('Please fill all fields', 'error');
        }
    });
}

// ===== CATEGORY PREVIEW =====
const categorySelect = document.getElementById('category');
if (categorySelect) {
    const categoryEmojis = {
        'Technology': '💻',
        'Programming': '🐍',
        'Artificial Intelligence': '🤖',
        'Data Science': '📊',
        'Cyber Security': '🔐',
        'Web Development': '🌐',
        'Cloud Computing': '☁️',
        'Mobile App Development': '📱'
    };

    categorySelect.addEventListener('change', function () {
        const categoryPreview = document.getElementById('categoryPreview');
        if (categoryPreview) {
            if (this.value) {
                const emoji = categoryEmojis[this.value] || '📚';
                categoryPreview.innerHTML = `<span style="font-size: 3rem;">${emoji}</span><p>${this.value}</p>`;
                categoryPreview.style.display = 'flex';
                categoryPreview.style.justifyContent = 'center';
                categoryPreview.style.alignItems = 'center';
                categoryPreview.style.gap = '1rem';
                categoryPreview.style.marginTop = '1rem';
                categoryPreview.style.padding = '1rem';
                categoryPreview.style.background = 'rgba(99, 102, 241, 0.1)';
                categoryPreview.style.borderRadius = '8px';
                categoryPreview.style.animation = 'slideInLeft 0.3s ease-out';
            } else {
                categoryPreview.innerHTML = '';
                categoryPreview.style.display = 'none';
            }
        }
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        ${type === 'success' ? 'background: #d1fae5; color: #065f46; border-left: 4px solid #10b981;' : ''}
        ${type === 'error' ? 'background: #fee2e2; color: #991b1b; border-left: 4px solid #ef4444;' : ''}
        ${type === 'info' ? 'background: #dbeafe; color: #1e40af; border-left: 4px solid #3b82f6;' : ''}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== ADD ANIMATION STYLES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .notification-icon {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.5s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.feature-card, .about-card, .info-card, .preference-card').forEach(card => {
    observer.observe(card);
});

// ===== HANDLE PAGE VISIBILITY CHANGE =====
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Page is visible');
    } else {
        console.log('Page is hidden');
    }
});

// ===== ANALYTICS TRACKING (Optional) =====
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // You can send this to an analytics service
}

// Track page views
window.addEventListener('load', () => {
    trackEvent('page_view', {
        page: window.location.pathname,
        timestamp: new Date().toISOString()
    });
});

// Track form submissions
if (recommendationForm) {
    recommendationForm.addEventListener('submit', () => {
        trackEvent('recommendation_form_submitted', {
            category: document.getElementById('category').value,
            timestamp: new Date().toISOString()
        });
    });
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Alt + H: Home
    if (e.altKey && e.key === 'h') {
        window.location.href = '/';
    }
    // Alt + R: Recommendations
    if (e.altKey && e.key === 'r') {
        window.location.href = '/recommend';
    }
    // Alt + T: Toggle Theme
    if (e.altKey && e.key === 't') {
        themeToggle.click();
    }
});

// ===== FOCUS MANAGEMENT =====
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const focusableContent = document.querySelectorAll(focusableElements);
        const firstElement = focusableContent[0];
        const lastElement = focusableContent[focusableContent.length - 1];

        if (document.activeElement === lastElement && !e.shiftKey) {
            e.preventDefault();
            firstElement.focus();
        }

        if (document.activeElement === firstElement && e.shiftKey) {
            e.preventDefault();
            lastElement.focus();
        }
    }
});

// ===== LOCAL STORAGE HELPERS =====
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return null;
    }
}

// ===== ADAPTIVE LOADING =====
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    document.querySelectorAll('img[data-lazy]').forEach(img => {
        img.src = img.dataset.lazy;
    });
} else {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.lazy;
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== PAGE PERFORMANCE MONITORING =====
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    });
}

// ===== READY EVENT =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Recommendation System loaded successfully!');
});
