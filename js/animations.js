// Animation and Background effects for Reality Creation Assessment

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
    const connectionThreshold = 160;
    
    // Create particles
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

// Initialize tabs in the results section
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
        updateActiveTab(typologyTab);
        
        // Show content
        typologyContent.style.display = 'block';
        approachesContent.style.display = 'none';
        strategyContent.style.display = 'none';
    });
    
    approachesTab.addEventListener('click', () => {
        // Update active tab
        updateActiveTab(approachesTab);
        
        // Show content
        typologyContent.style.display = 'none';
        approachesContent.style.display = 'block';
        strategyContent.style.display = 'none';
    });
    
    strategyTab.addEventListener('click', () => {
        // Update active tab
        updateActiveTab(strategyTab);
        
        // Show content
        typologyContent.style.display = 'none';
        approachesContent.style.display = 'none';
        strategyContent.style.display = 'block';
    });
    
    // Helper function to update active tab styling
    function updateActiveTab(activeTab) {
        // Remove active styles from all tabs
        [typologyTab, approachesTab, strategyTab].forEach(tab => {
            tab.classList.remove('text-amber-700');
            tab.classList.add('text-stone-500');
            
            // Remove active indicator
            const indicator = tab.querySelector('div');
            if (indicator) indicator.remove();
        });
        
        // Add active styles to selected tab
        activeTab.classList.remove('text-stone-500');
        activeTab.classList.add('text-amber-700');
        
        // Add active indicator
        const indicator = document.createElement('div');
        indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
        activeTab.appendChild(indicator);
    }
}

// Initialize expandable sections in the results
function initExpandableSections() {
    // This will be called when results are displayed
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const expandableHeaders = document.querySelectorAll('.expandable-header');
            
            expandableHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const section = header.parentElement;
                    const content = section.querySelector('.expandable-content');
                    const icon = header.querySelector('.expandable-icon');
                    
                    // Toggle expanded state
                    if (content.classList.contains('collapsed')) {
                        content.classList.remove('collapsed');
                        icon.classList.add('expanded');
                    } else {
                        content.classList.add('collapsed');
                        icon.classList.remove('expanded');
                    }
                });
            });
        }, 1000); // Small delay to ensure elements are loaded
    });
}
