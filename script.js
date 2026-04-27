// Add to Cart functionality with animation
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        
        // Create animation effect
        this.style.animation = 'pulse 0.6s ease-out';
        
        // Show feedback
        const originalText = this.textContent;
        this.textContent = 'Added to Cart ✓';
        this.style.backgroundColor = '#4CAF50';
        this.style.color = 'white';
        this.style.borderColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.borderColor = '';
            this.style.animation = '';
        }, 2000);
        
        console.log(`Added to cart: ${productName} - ${productPrice}`);
    });
});

/* ===== CAROUSEL FUNCTIONALITY ===== */
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const carouselTrack = document.querySelector('.carousel-track');
const totalSlides = slides.length;

function updateCarousel() {
    // Move carousel
    const offset = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event listeners for carousel buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Indicator click functionality
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Auto-slide carousel every 5 seconds
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause auto-slide on hover
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-slide when mouse leaves
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Search functionality with animation
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery.trim() !== '') {
        this.style.animation = 'spin 0.5s ease-out';
        console.log('Searching for:', searchQuery);
        setTimeout(() => {
            this.style.animation = '';
            alert('Search for: ' + searchQuery);
        }, 500);
    }
});

// Icon hover effects with ripple animation
document.querySelectorAll('.icon-item').forEach(item => {
    item.addEventListener('click', function() {
        const label = this.querySelector('span').textContent;
        this.style.animation = 'scale 0.3s ease-out';
        console.log('Clicked:', label);
        
        setTimeout(() => {
            this.style.animation = '';
            if (label === 'Cart') {
                alert('🛒 Shopping Cart');
            } else if (label === 'Profile') {
                alert('👤 User Profile');
            } else if (label === 'Deals') {
                alert('🎁 Special Deals');
            }
        }, 300);
    });
});

// Category card click with scale animation
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        console.log('Selected category:', categoryName);
    });
});

// Navigation menu effects
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const itemName = this.textContent.trim();
        console.log('Navigating to:', itemName);
    });
});

// Flash deals button with animation
document.querySelector('.flash-deals').addEventListener('click', function() {
    console.log('Viewing flash deals');
    this.style.animation = 'float 0.6s ease-out';
    setTimeout(() => {
        this.style.animation = '';
    }, 600);
});

// Flash product click
document.querySelectorAll('.flash-product').forEach(product => {
    product.addEventListener('click', function() {
        console.log('Clicked on flash product');
    });
});

// View all links with animation
document.querySelectorAll('.view-all').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('View all products');
        this.style.animation = 'slideInUp 0.4s ease-out';
    });
});

// Search input animation on focus
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
});

searchInput.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
});

// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', function() {
    console.log('Daraz Clone Loaded Successfully! 🎉');
    
    // Add scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideInUp 0.6s ease-out';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, .category-card, .flash-product').forEach(el => {
        observer.observe(el);
    });
});

// Add keyboard support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.activeElement.matches('.search-bar input')) {
        document.querySelector('.search-bar button').click();
    }
});

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add floating animation to elements on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            document.querySelectorAll('.flash-deals i').forEach(el => {
                el.style.transform = `rotate(${scrollY * 0.5}deg)`;
            });
            ticking = false;
        });
        ticking = true;
    }
});

// Product card ripple effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 24px rgba(243, 112, 90, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// User carousel (below navbar) functionality
(function() {
    const userCarousel = document.getElementById('mainCarousel');
    if (!userCarousel) return;

    const inner = userCarousel.querySelector('.carousel-inner');
    const items = Array.from(userCarousel.querySelectorAll('.carousel-item'));
    const prevBtn = userCarousel.querySelector('.carousel-control-prev');
    const nextBtn = userCarousel.querySelector('.carousel-control-next');
    let idx = 0;
    const count = items.length || 1;

    function goTo(i) {
        idx = (i + count) % count;
        inner.style.transform = `translateX(${-idx * 100}%)`;
    }

    nextBtn && nextBtn.addEventListener('click', () => { goTo(idx + 1); resetAuto(); });
    prevBtn && prevBtn.addEventListener('click', () => { goTo(idx - 1); resetAuto(); });

    // Auto-play
    let auto = setInterval(() => { goTo(idx + 1); }, 4500);
    function resetAuto() { clearInterval(auto); auto = setInterval(() => { goTo(idx + 1); }, 4500); }

    userCarousel.addEventListener('mouseenter', () => clearInterval(auto));
    userCarousel.addEventListener('mouseleave', () => resetAuto());

    // Keyboard navigation
    userCarousel.tabIndex = 0;
    userCarousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { goTo(idx - 1); resetAuto(); }
        if (e.key === 'ArrowRight') { goTo(idx + 1); resetAuto(); }
    });

    // Initialize
    goTo(0);
})();
