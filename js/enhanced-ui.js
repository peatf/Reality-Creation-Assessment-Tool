// Enhanced Results UI JavaScript
// This script improves the visual presentation and interactions of the results page

function enhanceResultsPageUI() {
    // First update the background animation with enhanced particles
    enhancedBackgroundAnimation('background-canvas-results');
    
    // Initialize tabs navigation with smooth transitions
    initEnhancedResultsTabs();
    
    // Initialize expandable sections with improved animations
    initEnhancedExpandableSections();
    
    // Apply smooth transitions between content sections
    applySmoothTransitions();
    
    // Enhance spectrum diagram visuals
    enhanceSpectrumDiagram();
    
    // Make navigation buttons have proper hover effects
    enhanceNavigationButtons();
    
    // Add scroll-to-top functionality when changing tabs
    addScrollToTopOnTabChange();
    
    // Add hover effects to spectrum items
    addSpectrumItemHoverEffects();
    
    // Improve card hover effects
    addCardHoverEffects();
}

// Enhanced particle animation for background
function enhancedBackgroundAnimation(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create more particles with varied properties for visual interest
    const particles = [];
    const connectionThreshold = 180;
    const particleCount = window.innerWidth < 768 ? 12 : 20;
    
    // Create particles with varied sizes, colors and opacities
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            vx: Math.random() * 0.3 - 0.15,
            vy: Math.random() * 0.3 - 0.15,
            color: i % 4 === 0 ? '#f0e6d2' : 
                   i % 4 === 1 ? '#e2d8c6' : 
                   i % 4 === 2 ? '#d5cfc0' : '#f5f0e3',
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            // Update position with slight randomness for more organic movement
            particle.x += particle.vx + (Math.random() * 0.05 - 0.025);
            particle.y += particle.vy + (Math.random() * 0.05 - 0.025);
            
            // Bounce off edges with slight variation
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.vx *= -1;
                particle.vx += (Math.random() * 0.02 - 0.01); // Add slight variation to velocity
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.vy *= -1;
                particle.vy += (Math.random() * 0.02 - 0.01); // Add slight variation to velocity
            }
            
            // Draw particle with its opacity
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        
        // Draw connections with subtle gradient and varying opacity
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

// Improved tab navigation with smooth transitions
function initEnhancedResultsTabs() {
    const typologyTab = document.getElementById('typology-tab');
    const approachesTab = document.getElementById('approaches-tab');
    const strategyTab = document.getElementById('strategy-tab');
    
    if (!typologyTab || !approachesTab || !strategyTab) return;
    
    const typologyContent = document.getElementById('typology-content');
    const approachesContent = document.getElementById('approaches-content');
    const strategyContent = document.getElementById('strategy-content');
    
    // Add tab content class if not present
    [typologyContent, approachesContent, strategyContent].forEach(content => {
        if (content) content.classList.add('tab-content');
    });
    
    // Helper function to update active tab with improved transitions
    function updateActiveTab(activeTab, activeContent) {
        // Remove active styles from all tabs
        [typologyTab, approachesTab, strategyTab].forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
            
            // Remove active indicator
            const indicator = tab.querySelector('div');
            if (indicator) indicator.remove();
        });
        
        // Hide all content with transition
        [typologyContent, approachesContent, strategyContent].forEach(content => {
            if (content !== activeContent) {
                content.classList.remove('active');
                // Delayed hide to allow animation to complete
                setTimeout(() => {
                    if (!content.classList.contains('active')) {
                        content.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        // Add active styles to selected tab
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
        
        // Add active indicator
        const indicator = document.createElement('div');
        indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
        activeTab.appendChild(indicator);
        
        // Show active content with transition
        activeContent.style.display = 'block';
        // Trigger reflow for animation
        void activeContent.offsetWidth;
        activeContent.classList.add('active');
    }
    
    // Set proper ARIA attributes
    [typologyTab, approachesTab, strategyTab].forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('id', `tab-${index}`);
        tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    
    // Initial setup - activate first tab
    updateActiveTab(typologyTab, typologyContent);
    
    // Tab click handlers
    typologyTab.addEventListener('click', () => {
        updateActiveTab(typologyTab, typologyContent);
    });
    
    approachesTab.addEventListener('click', () => {
        updateActiveTab(approachesTab, approachesContent);
    });
    
    strategyTab.addEventListener('click', () => {
        updateActiveTab(strategyTab, strategyContent);
    });
    
    // Keyboard navigation for tabs
    [typologyTab, approachesTab, strategyTab].forEach(tab => {
        tab.addEventListener('keydown', (e) => {
            // Left/right arrow keys
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                
                const tabs = [typologyTab, approachesTab, strategyTab];
                const currentIndex = tabs.indexOf(document.activeElement);
                
                let newIndex;
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                } else {
                    newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                }
                
                const contents = [typologyContent, approachesContent, strategyContent];
                updateActiveTab(tabs[newIndex], contents[newIndex]);
                tabs[newIndex].focus();
            }
        });
    });
}

// Enhanced expandable sections with improved animations
function initEnhancedExpandableSections() {
    const expandableSections = document.querySelectorAll('.expandable-section');
    
    expandableSections.forEach(section => {
        const header = section.querySelector('.expandable-header');
        const content = section.querySelector('.expandable-content');
        const icon = section.querySelector('.expandable-icon');
        
        if (header && content && icon) {
            // Set initial state
            header.setAttribute('aria-expanded', 'false');
            content.classList.add('hidden');
            
            // Replace icon if needed
            if (!icon.querySelector('svg')) {
                icon.innerHTML = `
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
            }
            
            // Accessibility attributes
            header.setAttribute('role', 'button');
            header.setAttribute('aria-controls', section.id + '-content');
            content.id = section.id + '-content';
            
            // Toggle function with improved animation
            header.addEventListener('click', () => {
                const isExpanded = header.getAttribute('aria-expanded') === 'true';
                header.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle content visibility with animation
                if (isExpanded) {
                    // Closing animation
                    content.style.maxHeight = content.scrollHeight + 'px';
                    // Force reflow to enable transition
                    void content.offsetWidth; 
                    content.style.maxHeight = '0';
                    content.style.opacity = '0';
                    
                    // Add hidden class after animation completes
                    setTimeout(() => {
                        content.classList.add('hidden');
                    }, 300);
                    
                    // Rotate icon back
                    icon.classList.remove('rotate-180');
                } else {
                    // Opening animation
                    content.classList.remove('hidden');
                    // Force reflow to make sure hidden is removed
                    void content.offsetWidth;
                    
                    // Set max height for animation
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.opacity = '1';
                    
                    // Rotate icon
                    icon.classList.add('rotate-180');
                    
                    // Remove fixed height after animation to allow content to expand if needed
                    setTimeout(() => {
                        if (header.getAttribute('aria-expanded') === 'true') {
                            content.style.maxHeight = 'none';
                        }
                    }, 300);
                }
            });
        }
    });
}

// Function to add scroll-to-top on tab change
function addScrollToTopOnTabChange() {
    const tabs = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Scroll to top of results container with smooth animation
            const resultsContainer = document.querySelector('.results-container');
            if (resultsContainer) {
                resultsContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to enhance navigation buttons
function enhanceNavigationButtons() {
    const buttons = document.querySelectorAll('button.group, .btn');
    
    buttons.forEach(button => {
        // Find span element for the hover effect
        const span = button.querySelector('span');
        
        if (span) {
            // Original width before hover
            const originalWidth = getComputedStyle(span).width;
            
            button.addEventListener('mouseenter', () => {
                // Animate width increase
                span.style.transition = 'width 0.3s ease, background-color 0.3s ease';
                span.style.width = 'calc(' + originalWidth + ' + 1rem)';
                
                // Change background color for amber buttons
                if (button.classList.contains('hover:text-amber-700')) {
                    span.style.backgroundColor = '#f59e0b';
                }
            });
            
            button.addEventListener('mouseleave', () => {
                // Return to original width
                span.style.width = originalWidth;
                
                // Reset background color
                if (button.classList.contains('hover:text-amber-700')) {
                    span.style.backgroundColor = '#78716c';
                }
            });
        }
    });
}

// Function to enhance spectrum diagram visuals
function enhanceSpectrumDiagram() {
    // Improve spectrum legend
    const legendBars = document.querySelectorAll('.legend-bar');
    legendBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.height = parseFloat(getComputedStyle(bar).height) * 1.2 + 'px';
        });
        
        bar.addEventListener('mouseleave', () => {
            bar.style.height = '';
        });
    });
    
    // Add subtle animation to spectrum markers
    const spectrumMarkers = document.querySelectorAll('.spectrum-marker');
    spectrumMarkers.forEach(marker => {
        // Create subtle floating animation
        setInterval(() => {
            const currentHeight = parseFloat(getComputedStyle(marker).height);
            const newHeight = currentHeight + (Math.random() * 2 - 1);
            
            // Ensure height stays within reasonable bounds
            if (newHeight >= 3.8 && newHeight <= 4.2) {
                marker.style.height = newHeight + 'px';
            }
        }, 1500);
    });
}

// Function to apply smooth transitions
function applySmoothTransitions() {
    // Add transition class to all major elements for smoother animations
    const transitionElements = document.querySelectorAll('.results-card, .expandable-section, .approach-item, .strategy-item');
    
    transitionElements.forEach((element, index) => {
        // Add staggered entrance animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Staggered delay based on index
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
}

// Add hover effects to spectrum items
function addSpectrumItemHoverEffects() {
    const spectrumItems = document.querySelectorAll('.spectrum-item');
    
    spectrumItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.spectrum-marker');
            const dot = item.querySelector('.spectrum-marker-dot');
            
            if (marker) {
                marker.style.height = '4.5rem';
            }
            if (dot) {
                dot.style.transform = 'translate(-50%, 50%) scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.spectrum-marker');
            const dot = item.querySelector('.spectrum-marker-dot');
            
            if (marker) {
                marker.style.height = '4rem';
            }
            if (dot) {
                dot.style.transform = 'translate(-50%, 50%) scale(1)';
            }
        });
    });
}

// Add hover effects to cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.results-card, .bg-white.bg-opacity-70:not(.expandable-section)');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        });
    });
}

// Call this function to initialize all enhanced UI elements
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the results page and it's currently visible
    const resultsSection = document.getElementById('results');
    if (resultsSection && window.getComputedStyle(resultsSection).display !== 'none') {
        enhanceResultsPageUI();
    }
    
    // Update the showResults function to ensure UI enhancements are applied
    const originalShowResults = window.showResults;
    if (typeof originalShowResults === 'function') {
        window.showResults = function() {
            // Call the original function
            if (originalShowResults.apply(this, arguments) !== false) {
                // Then apply our UI enhancements
                enhanceResultsPageUI();
            }
        };
    }
});
