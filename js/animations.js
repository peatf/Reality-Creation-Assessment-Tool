// Enhanced animations for Reality Creation Assessment

document.addEventListener('DOMContentLoaded', function() {
    // Initialize background animations for each section
    initBackgroundAnimation('background-canvas');
    initBackgroundAnimation('background-canvas-part2');
    initBackgroundAnimation('background-canvas-results');

    // Initialize results tabs
    initResultsTabs();
    
    // Initialize expandable sections
    initExpandableSections();
});

// Function to initialize the animated background canvas
function initBackgroundAnimation(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const connectionThreshold = 180;
    const particleCount = window.innerWidth < 768 ? 12 : 20;
    
    // Create particles with varied properties
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            vx: Math.random() * 0.3 - 0.15,
            vy: Math.random() * 0.3 - 0.15,
            color: i % 4 === 0 ? '#f0e6d2' : 
                   i % 4 === 1 ? '#e2d8c6' :
                   i % 4 === 2 ? '#d5cfc0' :
                                '#f5f0e3',
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            // Slight randomness for organic movement
            particle.x += particle.vx + (Math.random() * 0.05 - 0.025);
            particle.y += particle.vy + (Math.random() * 0.05 - 0.025);
            
            // Bounce off edges, adding small velocity variation
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.vx *= -1;
                particle.vx += (Math.random() * 0.02 - 0.01);
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.vy *= -1;
                particle.vy += (Math.random() * 0.02 - 0.01);
            }
            
            // Draw particle with its opacity
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        
        // Draw subtle connections
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionThreshold) {
                    const opacity = Math.pow((1 - (distance / connectionThreshold)), 2) * 0.08;
                    ctx.strokeStyle = `rgba(180, 170, 160, ${opacity})`;
                    
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    };
    
    // Handle window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }, 250);
    });
    
    animate();
}

// Initialize tabs in the results section with improved animations
function initResultsTabs() {
    const typologyTab = document.getElementById('typology-tab');
    const approachesTab = document.getElementById('approaches-tab');
    const strategyTab = document.getElementById('strategy-tab');
    
    if (!typologyTab || !approachesTab || !strategyTab) return;
    
    const typologyContent = document.getElementById('typology-content');
    const approachesContent = document.getElementById('approaches-content');
    const strategyContent = document.getElementById('strategy-content');
    
    // Add .tab-content if not present
    [typologyContent, approachesContent, strategyContent].forEach(content => {
        if (content) content.classList.add('tab-content');
    });
    
    typologyTab.addEventListener('click', () => {
        // Update active tab
        updateActiveTab(typologyTab);
        
        // Show content with smooth transition
        typologyContent.style.display = 'block';
        void typologyContent.offsetWidth; // Force reflow for animation
        typologyContent.classList.add('active');
        approachesContent.classList.remove('active');
        strategyContent.classList.remove('active');
        
        setTimeout(() => {
            approachesContent.style.display = 'none';
            strategyContent.style.display = 'none';
        }, 300);
        
        // Scroll to top
        const resultsContainer = document.querySelector('.results-container');
        if (resultsContainer) {
            resultsContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    approachesTab.addEventListener('click', () => {
        // Update active tab
        updateActiveTab(approachesTab);
        
        // Show content with smooth transition
        approachesContent.style.display = 'block';
        void approachesContent.offsetWidth; // Force reflow for animation
        typologyContent.classList.remove('active');
        approachesContent.classList.add('active');
        strategyContent.classList.remove('active');
        
        setTimeout(() => {
            typologyContent.style.display = 'none';
            strategyContent.style.display = 'none';
        }, 300);
        
        // Scroll to top
        const resultsContainer = document.querySelector('.results-container');
        if (resultsContainer) {
            resultsContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    strategyTab.addEventListener('click', () => {
        // Update active tab
        updateActiveTab(strategyTab);
        
        // Show content with smooth transition
        strategyContent.style.display = 'block';
        void strategyContent.offsetWidth; // Force reflow for animation
        typologyContent.classList.remove('active');
        approachesContent.classList.remove('active');
        strategyContent.classList.add('active');
        
        setTimeout(() => {
            typologyContent.style.display = 'none';
            approachesContent.style.display = 'none';
        }, 300);
        
        // Scroll to top
        const resultsContainer = document.querySelector('.results-container');
        if (resultsContainer) {
            resultsContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Helper function to update active tab styling
    function updateActiveTab(activeTab) {
        // Remove active styles from all tabs
        [typologyTab, approachesTab, strategyTab].forEach(tab => {
            tab.classList.remove('active');
            tab.classList.remove('text-amber-700');
            tab.classList.add('text-stone-500');
            
            // Remove active indicator
            const indicator = tab.querySelector('div');
            if (indicator) indicator.remove();
        });
        
        // Add active styles to selected tab
        activeTab.classList.add('active');
        activeTab.classList.remove('text-stone-500');
        activeTab.classList.add('text-amber-700');
        
        // Add active indicator
        const indicator = document.createElement('div');
        indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
        activeTab.appendChild(indicator);
    }
}

// Initialize expandable sections in the results with improved animations
function initExpandableSections() {
    const expandableSections = document.querySelectorAll('.expandable-section');
    
    expandableSections.forEach((section, index) => {
        const header = section.querySelector('.expandable-header');
        const content = section.querySelector('.expandable-content');
        const icon = section.querySelector('.expandable-icon');
        
        if (!header || !content || !icon) return;
        
        // Set initial collapsed state
        header.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        
        // Set ARIA attributes for accessibility
        const sectionId = section.id || `expandable-section-${index}`;
        const contentId = `${sectionId}-content`;
        content.id = contentId;
        header.setAttribute('aria-controls', contentId);
        
        // Add click event to toggle
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isExpanded);
            
            if (isExpanded) {
                // Closing animation
                content.style.maxHeight = content.scrollHeight + 'px';
                void content.offsetWidth; // Force reflow
                
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                
                // After animation
                setTimeout(() => {
                    content.classList.add('hidden');
                }, 500);
                
                icon.classList.remove('expanded');
            } else {
                // Opening animation
                content.classList.remove('hidden');
                
                void content.offsetWidth; // Force reflow
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                
                icon.classList.add('expanded');
                
                setTimeout(() => {
                    if (header.getAttribute('aria-expanded') === 'true') {
                        content.style.maxHeight = 'none'; // Allow content to expand naturally
                    }
                }, 500);
            }
        });
    });
}
