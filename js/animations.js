// animations.js - Updated to match React example
document.addEventListener('DOMContentLoaded', function() {
    // Initialize background animations for each section
    initBackgroundAnimation('background-canvas');
    initBackgroundAnimation('background-canvas-part2');
    initBackgroundAnimation('background-canvas-results');

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
    
    typologyTab.addEventListener('click', () => {
        // Update active tab
        typologyTab.classList.add('text-amber-700');
        typologyTab.classList.remove('text-stone-500');
        approachesTab.classList.add('text-stone-500');
        approachesTab.classList.remove('text-amber-700');
        strategyTab.classList.add('text-stone-500');
        strategyTab.classList.remove('text-amber-700');
        
        // Update indicators
        let indicator = typologyTab.querySelector('div');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
            typologyTab.appendChild(indicator);
        }
        
        // Remove other indicators
        const approachesIndicator = approachesTab.querySelector('div');
        if (approachesIndicator) approachesIndicator.remove();
        
        const strategyIndicator = strategyTab.querySelector('div');
        if (strategyIndicator) strategyIndicator.remove();
        
        // Show/hide content
        typologyContent.style.display = 'block';
        approachesContent.style.display = 'none';
        strategyContent.style.display = 'none';
    });
    
    approachesTab.addEventListener('click', () => {
        // Update active tab
        approachesTab.classList.add('text-amber-700');
        approachesTab.classList.remove('text-stone-500');
        typologyTab.classList.add('text-stone-500');
        typologyTab.classList.remove('text-amber-700');
        strategyTab.classList.add('text-stone-500');
        strategyTab.classList.remove('text-amber-700');
        
        // Update indicators
        let indicator = approachesTab.querySelector('div');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
            approachesTab.appendChild(indicator);
        }
        
        // Remove other indicators
        const typologyIndicator = typologyTab.querySelector('div');
        if (typologyIndicator) typologyIndicator.remove();
        
        const strategyIndicator = strategyTab.querySelector('div');
        if (strategyIndicator) strategyIndicator.remove();
        
        // Show/hide content
        typologyContent.style.display = 'none';
        approachesContent.style.display = 'block';
        strategyContent.style.display = 'none';
    });
    
    strategyTab.addEventListener('click', () => {
        // Update active tab
        strategyTab.classList.add('text-amber-700');
        strategyTab.classList.remove('text-stone-500');
        typologyTab.classList.add('text-stone-500');
        typologyTab.classList.remove('text-amber-700');
        approachesTab.classList.add('text-stone-500');
        approachesTab.classList.remove('text-amber-700');
        
        // Update indicators
        let indicator = strategyTab.querySelector('div');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
            strategyTab.appendChild(indicator);
        }
        
        // Remove other indicators
        const typologyIndicator = typologyTab.querySelector('div');
        if (typologyIndicator) typologyIndicator.remove();
        
        const approachesIndicator = approachesTab.querySelector('div');
        if (approachesIndicator) approachesIndicator.remove();
        
        // Show/hide content
        typologyContent.style.display = 'none';
        approachesContent.style.display = 'none';
        strategyContent.style.display = 'block';
    });
}

// Initialize expandable sections
function initExpandableSections() {
    const expandableSections = document.querySelectorAll('.expandable-section');
    
    expandableSections.forEach(section => {
        const header = section.querySelector('.expandable-header');
        const content = section.querySelector('.expandable-content');
        const icon = section.querySelector('.expandable-icon');
        
        if (!header || !content || !icon) return;
        
        // Set initial states
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease';
        
        // Toggle expansion on click
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Collapse
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                content.style.padding = '0 2rem';
                icon.style.transform = 'rotate(0deg)';
                header.setAttribute('aria-expanded', 'false');
            } else {
                // Expand
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                content.style.padding = '0 2rem 2rem';
                icon.style.transform = 'rotate(180deg)';
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}
