/**
 * Enhanced Results UI for Reality Creation Assessment
 * This script improves the visual appearance, interactions, and DOM events
 * to match the reference design. It also fixes issues with:
 *   - Expandable sections
 *   - Spectrum visualization
 *   - Interactive elements
 *
 * Usage:
 * Replace your existing js/enhanced-ui.js with this file or incorporate
 * these changes to maintain all new enhancements.
 */

// Main function to initialize all enhanced UI features
function enhanceResultsPageUI() {
    console.log("Enhancing Results UI...");

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
    
    // Create particles with varied sizes, colors, and opacities
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            vx: Math.random() * 0.3 - 0.15,
            vy: Math.random() * 0.3 - 0.15,
            color:
                i % 4 === 0 ? '#f0e6d2' :
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

// Improved tab navigation with smooth transitions
function initEnhancedResultsTabs() {
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
    
    // Helper to update active tab
    function updateActiveTab(activeTab, activeContent) {
        [typologyTab, approachesTab, strategyTab].forEach(tab => {
            tab.classList.remove('active');
            tab.classList.remove('text-amber-700');
            tab.classList.add('text-stone-500');
            tab.setAttribute('aria-selected', 'false');
            
            // Remove any existing indicator
            const indicator = tab.querySelector('div');
            if (indicator) indicator.remove();
        });
        
        // Hide non-active content with transition
        [typologyContent, approachesContent, strategyContent].forEach(content => {
            if (content !== activeContent) {
                content.classList.remove('active');
                setTimeout(() => {
                    if (!content.classList.contains('active')) {
                        content.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        // Activate the selected tab
        activeTab.classList.add('active');
        activeTab.classList.remove('text-stone-500');
        activeTab.classList.add('text-amber-700');
        activeTab.setAttribute('aria-selected', 'true');
        
        // Add an indicator
        const indicator = document.createElement('div');
        indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
        activeTab.appendChild(indicator);
        
        // Show the corresponding content
        activeContent.style.display = 'block';
        void activeContent.offsetWidth; // Force reflow for transition
        activeContent.classList.add('active');
    }
    
    // Set ARIA attributes on each tab
    [typologyTab, approachesTab, strategyTab].forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('id', `tab-${index}`);
        tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    
    // Initial tab is typology
    updateActiveTab(typologyTab, typologyContent);
    
    // Click handlers
    typologyTab.addEventListener('click', () => {
        updateActiveTab(typologyTab, typologyContent);
    });
    approachesTab.addEventListener('click', () => {
        updateActiveTab(approachesTab, approachesContent);
    });
    strategyTab.addEventListener('click', () => {
        updateActiveTab(strategyTab, strategyContent);
    });
    
    // Keyboard navigation (left/right arrows)
    [typologyTab, approachesTab, strategyTab].forEach(tab => {
        tab.addEventListener('keydown', e => {
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
    console.log("Found expandable sections:", expandableSections.length);
    
    expandableSections.forEach((section, index) => {
        const header = section.querySelector('.expandable-header');
        const content = section.querySelector('.expandable-content');
        let icon = section.querySelector('.expandable-icon');
        
        if (!header || !content) return;
        
        // Create the icon if missing
        if (!icon) {
            icon = document.createElement('div');
            icon.className = 'expandable-icon';
            icon.innerHTML = `
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
            header.appendChild(icon);
        }
        
        // Set initial collapsed state
        header.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        
        // Ensure ID for accessibility
        const sectionId = section.id || `expandable-section-${index}`;
        section.id = sectionId;
        const contentId = `${sectionId}-content`;
        content.id = contentId;
        
        // ARIA roles
        header.setAttribute('role', 'button');
        header.setAttribute('aria-controls', contentId);
        
        // Click toggles expanded/collapsed
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isExpanded);
            
            if (isExpanded) {
                // Closing animation
                content.style.maxHeight = content.scrollHeight + 'px';
                void content.offsetWidth; // Reflow
                
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                
                // After animation
                setTimeout(() => {
                    content.classList.add('hidden');
                    console.log("Added hidden class to", contentId);
                }, 500);
                
                icon.classList.remove('expanded');
            } else {
                // Opening animation
                content.classList.remove('hidden');
                console.log("Removed hidden class from", contentId);
                
                void content.offsetWidth;
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                
                icon.classList.add('expanded');
                
                setTimeout(() => {
                    if (header.getAttribute('aria-expanded') === 'true') {
                        content.style.maxHeight = 'none';
                    }
                }, 500);
            }
        });
    });
}

// Function to apply smooth transitions to certain elements
function applySmoothTransitions() {
    const transitionElements = document.querySelectorAll(
        '.results-card, .expandable-section, .approach-item, .strategy-item'
    );
    
    transitionElements.forEach((element, index) => {
        // Start with slight offset
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Staggered delay
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + index * 50);
    });
}

// Enhance the spectrum diagram visuals
function enhanceSpectrumDiagram() {
    console.log("Enhancing spectrum diagram");
    const spectrumItems = document.querySelectorAll('.spectrum-item');
    if (!spectrumItems.length) {
        console.log("No spectrum items found");
        return;
    }
    
    console.log("Found spectrum items:", spectrumItems.length);
    
    // Fix or create markers if needed
    spectrumItems.forEach(item => {
        const visualization = item.querySelector('.spectrum-visualization, .mb-6.relative');
        if (!visualization) return;
        
        let placementValue = "balanced"; // default
        const placementText = item.querySelector('.text-xs.font-light.text-stone-500.uppercase');
        if (placementText) {
            const text = placementText.textContent.toLowerCase();
            if (text.includes('left')) placementValue = "left";
            else if (text.includes('right')) placementValue = "right";
        }
        
        // Check if we have a marker
        let marker = visualization.querySelector('.spectrum-marker');
        if (!marker) {
            marker = document.createElement('div');
            marker.className = `spectrum-marker ${placementValue}`;
            
            let leftPosition = '50%';
            if (placementValue === 'left') leftPosition = '25%';
            else if (placementValue === 'right') leftPosition = '75%';
            marker.style.left = leftPosition;
            
            // Dot
            const dot = document.createElement('div');
            dot.className = 'spectrum-marker-dot';
            marker.appendChild(dot);
            
            // Placement label
            const placementName = document.createElement('div');
            placementName.className = `spectrum-placement-name ${placementValue}`;
            placementName.textContent = placementValue.charAt(0).toUpperCase() + placementValue.slice(1);
            placementName.style.left = leftPosition;
            
            visualization.appendChild(marker);
            visualization.appendChild(placementName);
        } else {
            // Update existing
            marker.className = `spectrum-marker ${placementValue}`;
            if (!marker.querySelector('.spectrum-marker-dot')) {
                const dot = document.createElement('div');
                dot.className = 'spectrum-marker-dot';
                marker.appendChild(dot);
            }
        }
    });
    
    // Ensure a legend
    let legend = document.querySelector('.legend');
    const spectrumDiagram = document.getElementById('spectrum-diagram');
    if (!legend && spectrumDiagram) {
        legend = document.createElement('div');
        legend.className = 'legend';
        
        const legendItems = document.createElement('div');
        legendItems.className = 'legend-items';
        
        // Structured item
        const structuredItem = document.createElement('div');
        structuredItem.className = 'legend-item';
        const structuredBar = document.createElement('div');
        structuredBar.className = 'legend-bar structured';
        const structuredLabel = document.createElement('span');
        structuredLabel.className = 'legend-label';
        structuredLabel.textContent = 'STRUCTURED';
        structuredItem.appendChild(structuredBar);
        structuredItem.appendChild(structuredLabel);
        
        // Balanced item
        const balancedItem = document.createElement('div');
        balancedItem.className = 'legend-item';
        const balancedBar = document.createElement('div');
        balancedBar.className = 'legend-bar balanced';
        const balancedLabel = document.createElement('span');
        balancedLabel.className = 'legend-label';
        balancedLabel.textContent = 'BALANCED';
        balancedItem.appendChild(balancedBar);
        balancedItem.appendChild(balancedLabel);
        
        // Intuitive item
        const intuitiveItem = document.createElement('div');
        intuitiveItem.className = 'legend-item';
        const intuitiveBar = document.createElement('div');
        intuitiveBar.className = 'legend-bar intuitive';
        const intuitiveLabel = document.createElement('span');
        intuitiveLabel.className = 'legend-label';
        intuitiveLabel.textContent = 'INTUITIVE';
        intuitiveItem.appendChild(intuitiveBar);
        intuitiveItem.appendChild(intuitiveLabel);
        
        // Note
        const legendNote = document.createElement('div');
        legendNote.className = 'text-xs font-light text-stone-400 uppercase tracking-wider flex items-center';
        const noteLine = document.createElement('div');
        noteLine.className = 'w-8 h-px bg-stone-300 mr-2';
        const noteText = document.createElement('span');
        noteText.textContent = 'YOUR REALITY COORDINATES';
        legendNote.appendChild(noteLine);
        legendNote.appendChild(noteText);
        
        // Build legend
        legendItems.appendChild(structuredItem);
        legendItems.appendChild(balancedItem);
        legendItems.appendChild(intuitiveItem);
        legend.appendChild(legendItems);
        legend.appendChild(legendNote);
        
        spectrumDiagram.appendChild(legend);
    }
}

// Enhance navigation buttons
function enhanceNavigationButtons() {
    const buttons = document.querySelectorAll('button.group, .btn');
    
    buttons.forEach(button => {
        // Find span for hover effect
        const span = button.querySelector('span');
        if (span) {
            const originalWidth = getComputedStyle(span).width;
            
            button.addEventListener('mouseenter', () => {
                span.style.transition = 'width 0.3s ease, background-color 0.3s ease';
                span.style.width = `calc(${originalWidth} + 1rem)`;
                
                if (button.classList.contains('hover:text-amber-700')) {
                    span.style.backgroundColor = '#f59e0b';
                }
            });
            
            button.addEventListener('mouseleave', () => {
                span.style.width = originalWidth;
                if (button.classList.contains('hover:text-amber-700')) {
                    span.style.backgroundColor = '#78716c';
                }
            });
        }
    });
}

// Scroll to top when changing tabs
function addScrollToTopOnTabChange() {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const resultsContainer = document.querySelector('.results-container');
            if (resultsContainer) {
                resultsContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// Hover effects on spectrum items
function addSpectrumItemHoverEffects() {
    const spectrumItems = document.querySelectorAll('.spectrum-item');
    
    spectrumItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.spectrum-marker');
            const dot = item.querySelector('.spectrum-marker-dot');
            if (marker) marker.style.height = '4.5rem';
            if (dot) dot.style.transform = 'translate(-50%, 50%) scale(1.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.spectrum-marker');
            const dot = item.querySelector('.spectrum-marker-dot');
            if (marker) marker.style.height = '4rem';
            if (dot) dot.style.transform = 'translate(-50%, 50%) scale(1)';
        });
    });
}

// Hover effects on cards
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

// Modify or override the original initResultsPageUI function to ensure it's called
function initResultsPageUI() {
    console.log("Initializing enhanced Results UI");
    enhanceResultsPageUI();
}

// DOMContentLoaded check
document.addEventListener('DOMContentLoaded', function() {
    const resultsSection = document.getElementById('results');
    if (resultsSection && window.getComputedStyle(resultsSection).display !== 'none') {
        console.log("Results section is visible on page load");
        enhanceResultsPageUI();
    }
});

// Override the original showResults if it exists, then apply UI enhancements
const originalShowResults = window.showResults;
if (typeof originalShowResults === 'function') {
    window.showResults = function() {
        console.log("Overridden showResults function called");
        
        // Call the original
        originalShowResults.apply(this, arguments);
        
        // Then apply enhancements after DOM update
        setTimeout(enhanceResultsPageUI, 200);
    };
}
