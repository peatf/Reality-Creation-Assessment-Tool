// Enhanced UI for Results Section
// This file adds visual improvements and interactions to the results display

// Main function to initialize all enhanced UI features for results
function enhanceResultsUI() {
    console.log("Enhancing Results UI...");
    
    // Apply smooth transitions to elements
    applySmoothTransitions();
    
    // Enhance spectrum diagram visuals
    enhanceSpectrumDiagram();
    
    // Enhance navigation buttons
    enhanceNavigationButtons();
    
    // Add hover effects to spectrum items
    addSpectrumItemHoverEffects();
    
    // Add hover effects to cards
    addCardHoverEffects();
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
        
        // Staggered delay for smoother appearance
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
    
    // Add decoration lines for visual interest
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
    
    // Ensure a legend exists
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

// Enhance navigation buttons with hover effects
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

// Add hover effects on spectrum items
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

// Add hover effects on cards
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

// Call this in showResults function to ensure proper initialization
document.addEventListener('DOMContentLoaded', function() {
    const resultsSection = document.getElementById('results');
    if (resultsSection && window.getComputedStyle(resultsSection).display !== 'none') {
        console.log("Results section is visible on page load");
        enhanceResultsUI();
    }
});

// Override the original showResults if it exists
const originalShowResults = window.showResults;
if (typeof originalShowResults === 'function') {
    window.showResults = function() {
        console.log("Overridden showResults function called");
        
        // Call the original
        originalShowResults.apply(this, arguments);
        
        // Then apply enhancements after DOM update
        setTimeout(enhanceResultsUI, 200);
    };
}
