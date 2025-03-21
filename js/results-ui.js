// Function to initialize expandable sections in the results
function initExpandableSections() {
    const expandableSections = document.querySelectorAll('.expandable-section');
    
    expandableSections.forEach(section => {
        const header = section.querySelector('.expandable-header');
        const content = section.querySelector('.expandable-content');
        const icon = section.querySelector('.expandable-icon');
        
        if (header && content && icon) {
            header.addEventListener('click', () => {
                // Toggle expanded state
                const isExpanded = header.getAttribute('aria-expanded') === 'true';
                header.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle content visibility
                if (isExpanded) {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                } else {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                }
            });
        }
    });
}

// Enhanced particle animation for background
function enhancedBackgroundAnimation(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const connectionThreshold = 160;
    
    // Create particles with varied sizes and colors
    for (let i = 0; i < 15; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
            color: i % 3 === 0 ? '#f0e6d2' : 
                   i % 3 === 1 ? '#e2d8c6' : '#d5cfc0',
            opacity: Math.random() * 0.5 + 0.3
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
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        
        // Draw connections with subtle gradient
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionThreshold) {
                    const opacity = (1 - (distance / connectionThreshold)) * 0.05;
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
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    animate();
}

// Call this function to apply smooth transitions between sections
function applySmoothTransitions() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    
    // Hide all content sections initially except the first one
    contents.forEach((content, index) => {
        if (index === 0) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
    
    // Add active class to first tab
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
    
    // Add click event listeners to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            if (contents[index]) {
                contents[index].classList.add('active');
            }
        });
    });
}

// Function to improve the visual display of the spectrum-diagram
function enhanceSpectrumDiagram() {
    // Add decoration lines to spectrum items for visual interest
    const spectrumItems = document.querySelectorAll('.spectrum-item');
    
    spectrumItems.forEach((item, index) => {
        // Add different decoration based on position
        if (index % 3 === 0) {
            const decoration = document.createElement('div');
            decoration.className = 'absolute right-0 -bottom-12 w-24 h-px bg-stone-200 opacity-70';
            item.appendChild(decoration);
        } else if (index % 3 === 1) {
            const decoration = document.createElement('div');
            decoration.className = 'absolute -right-8 top-1/2 w-16 h-px bg-stone-200 opacity-70';
            item.appendChild(decoration);
        } else {
            const decoration = document.createElement('div');
            decoration.className = 'absolute -left-8 top-1/2 w-16 h-px bg-stone-200 opacity-70';
            item.appendChild(decoration);
        }
    });
}

// Add a function to initialize all UI improvements for the results page
function initResultsPageUI() {
    // First update the background animation
    enhancedBackgroundAnimation('background-canvas-results');
    
    // Initialize tabs navigation
    initResultsTabs();
    
    // Initialize expandable sections
    initExpandableSections();
    
    // Apply smooth transitions
    applySmoothTransitions();
    
    // Enhance spectrum diagram visuals
    setTimeout(enhanceSpectrumDiagram, 500); // Small delay to ensure DOM is ready
    
    // Make sure navigation buttons have proper styling and transitions
    const buttons = document.querySelectorAll('button.group');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const span = button.querySelector('span');
            if (span) {
                span.classList.add('group-hover:w-12');
            }
        });
        
        button.addEventListener('mouseleave', () => {
            const span = button.querySelector('span');
            if (span) {
                span.classList.remove('group-hover:w-12');
            }
        });
    });
}

// Call this in showResults function to ensure proper initialization
function showResults() {
    document.getElementById('part2').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    updateProgressIndicator('Results', 100);

    // Calculate and display results
    generateAndDisplayResults();
    
    // Initialize UI improvements
    initResultsPageUI();
}
