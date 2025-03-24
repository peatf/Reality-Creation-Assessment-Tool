// redesigned-animations.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize background animations for each section
    initBackgroundAnimation('intro-background-canvas');
    initBackgroundAnimation('part1-background-canvas');
    initBackgroundAnimation('part2-background-canvas');
    initBackgroundAnimation('results-background-canvas');

    // Initialize tabs in results page
    initResultsTabs();
    
    // Initialize expandable sections
    initExpandableSections();
});

// Enhanced background animation matching React example
function initBackgroundAnimation(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const connectionThreshold = 160;
    
    // Create particles with the same styling as React example
    for (let i = 0; i < 12; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: Math.random() * 0.6 - 0.3,
            vy: Math.random() * 0.6 - 0.3,
            color: i % 3 === 0 ? '#f0e6d2' : 
                   i % 3 === 1 ? '#e2d8c6' : '#d5cfc0'
        });
    }
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        // Draw connections
        ctx.strokeStyle = 'rgba(180, 170, 160, 0.03)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionThreshold) {
                    const opacity = 1 - (distance / connectionThreshold);
                    ctx.strokeStyle = `rgba(180, 170, 160, ${opacity * 0.03})`;
                    
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    animate();
}

// Initialize tabs in results page
function initResultsTabs() {
    const typologyTab = document.getElementById('typology-tab');
    const approachesTab = document.getElementById('approaches-tab');
    const strategyTab = document.getElementById('strategy-tab');
    
    if (!typologyTab || !approachesTab || !strategyTab) return;
    
    const typologyContent = document.getElementById('typology-content');
    const approachesContent = document.getElementById('approaches-content');
    const strategyContent = document.getElementById('strategy-content');
    
    // Helper function to update active tab styling
    function updateActiveTab(activeTab, activeContent) {
        // Remove active styles from all tabs
        [typologyTab, approachesTab, strategyTab].forEach(tab => {
            tab.classList.remove('active');
            tab.classList.remove('text-amber-700');
            tab.classList.add('text-stone-500');
            
            // Remove active indicator
            const indicator = tab.querySelector('div');
            if (indicator) indicator.remove();
        });
        
        // Hide all content sections
        [typologyContent, approachesContent, strategyContent].forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });
        
        // Add active styles to selected tab
        activeTab.classList.add('active');
        activeTab.classList.remove('text-stone-500');
        activeTab.classList.add('text-amber-700');
        
        // Add active indicator
        const indicator = document.createElement('div');
        indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
        activeTab.appendChild(indicator);
        
        // Show active content
        activeContent.style.display = 'block';
        
        // Force reflow and add active class for animation
        void activeContent.offsetWidth;
        activeContent.classList.add('active');
    }
    
    typologyTab.addEventListener('click', () => {
        updateActiveTab(typologyTab, typologyContent);
    });
    
    approachesTab.addEventListener('click', () => {
        updateActiveTab(approachesTab, approachesContent);
    });
    
    strategyTab.addEventListener('click', () => {
        updateActiveTab(strategyTab, strategyContent);
    });
    
    // Initialize first tab as active
    updateActiveTab(typologyTab, typologyContent);
}

// Initialize expandable sections
function initExpandableSections() {
    // Find all section headers (we'll enhance these in results.js)
    document.querySelectorAll('.expandable-header').forEach(header => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.expandable-icon');
        
        if (!content || !icon) return;
        
        // Set initial state
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        content.style.padding = '0 2rem';
        content.style.overflow = 'hidden';
        
        // Add click handler
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Collapse section
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                content.style.padding = '0 2rem';
                icon.style.transform = 'rotate(0deg)';
                header.setAttribute('aria-expanded', 'false');
            } else {
                // Expand section
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                content.style.padding = '0 2rem 2rem';
                icon.style.transform = 'rotate(180deg)';
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Add hover and active effects for various UI elements
function enhanceUIInteractions() {
    // Add hover effects to cards
    document.querySelectorAll('.results-card, .bg-white.bg-opacity-70').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Add hover effects to spectrum items
    document.querySelectorAll('.spectrum-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.spectrum-indicator');
            const dot = item.querySelector('.spectrum-indicator-dot');
            
            if (marker) marker.style.height = '4.5rem';
            if (dot) dot.style.transform = 'translate(-50%, 50%) scale(1.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.spectrum-indicator');
            const dot = item.querySelector('.spectrum-indicator-dot');
            
            if (marker) marker.style.height = '4rem';
            if (dot) dot.style.transform = 'translate(-50%, 50%) scale(1)';
        });
    });
}

// Call this function when page loads and after dynamic content is added
document.addEventListener('DOMContentLoaded', enhanceUIInteractions);
