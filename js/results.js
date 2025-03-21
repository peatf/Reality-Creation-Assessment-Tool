// js/results.js
// Results Synthesis System for Reality Creation Assessment
// This file contains the logic for generating and displaying personalized results
// based on the user's responses to both parts of the assessment

//-------------------------------------------------------------------------
// HELPER: Find Additional Strong Spectrums Beyond the Primary Pair
//-------------------------------------------------------------------------
function findAdditionalStrongSpectrums(spectrumPlacements, typologyPair) {
    const additionalStrong = [];
    
    // Look for spectrums with clear left or right placements that aren't in the typology pair
    Object.entries(spectrumPlacements).forEach(([spectrumId, placement]) => {
        if (
            (placement === 'left' || placement === 'right') && 
            spectrumId !== typologyPair.primary.spectrumId && 
            spectrumId !== typologyPair.secondary.spectrumId
        ) {
            additionalStrong.push(spectrumId);
        }
    });
    
    // Sort by priority order (foundational importance)
    return additionalStrong.sort((a, b) => {
        return SPECTRUM_PRIORITY_ORDER.indexOf(a) - SPECTRUM_PRIORITY_ORDER.indexOf(b);
    });
}

//-------------------------------------------------------------------------
// UPDATED: Generate Spectrum Diagram (with refined layout)
//-------------------------------------------------------------------------
function generateSpectrumDiagram(spectrumPlacements, typologyPair) {
    const diagramContainer = document.getElementById('spectrum-diagram');
    diagramContainer.innerHTML = '';

    // Add a title for the spectrum map with more editorial design
    const mapTitle = document.createElement('div');
    mapTitle.className = 'flex items-center mb-16';
    
    const titleLine = document.createElement('div');
    titleLine.className = 'h-px w-12 bg-stone-400 mr-4';
    
    const titleText = document.createElement('h3');
    titleText.className = 'text-xl font-light text-stone-700 uppercase tracking-wider';
    titleText.textContent = 'Your Spectrum Map';
    
    mapTitle.appendChild(titleLine);
    mapTitle.appendChild(titleText);
    diagramContainer.appendChild(mapTitle);

    // Create grid container for spectrum items
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-12 gap-x-4 gap-y-20';
    
    // Create spectrum items with experimental layout
    assessmentData.typologySpectrums.forEach((spectrum, index) => {
        // Get placement and value for this spectrum
        const placement = spectrumPlacements[spectrum.id];
        
        // Calculate value for position (percentage from left to right)
        let value = 50; // Default balanced position
        if (placement === 'left') {
            value = 25;
        } else if (placement === 'right') {
            value = 75;
        }
        
        // Determine layout style based on index
        const isFullWidth = index === 0 || index === 3 || index === 5;
        const leftAligned = index === 1 || index === 4;
        const rightAligned = index === 2;
        
        // Create spectrum item container
        const spectrumItem = document.createElement('div');
        spectrumItem.className = `relative ${
            isFullWidth ? 'col-span-12' : 
            leftAligned ? 'col-span-7 col-start-1' : 
            rightAligned ? 'col-span-7 col-start-6' : 'col-span-6'
        }`;
        
        // Create numbered indicator
        const numberedIndicator = document.createElement('div');
        numberedIndicator.className = `absolute -top-10 ${
            leftAligned ? 'left-0' : 
            rightAligned ? 'right-0' : 
            'left-1/2 transform -translate-x-1/2'
        } flex items-center`;
        
        const numberCircle = document.createElement('div');
        numberCircle.className = 'w-6 h-6 mr-2 flex items-center justify-center';
        
        const numberText = document.createElement('span');
        numberText.className = 'text-xs font-light text-stone-400';
        numberText.textContent = index + 1;
        
        const indicatorLine = document.createElement('div');
        indicatorLine.className = `h-px w-16 ${
            placement === 'left' ? 'bg-blue-300' :
            placement === 'right' ? 'bg-amber-300' : 'bg-green-300'
        }`;
        
        numberCircle.appendChild(numberText);
        numberedIndicator.appendChild(numberCircle);
        numberedIndicator.appendChild(indicatorLine);
        
        // Create main grid for spectrum content
        const contentGrid = document.createElement('div');
        contentGrid.className = 'grid grid-cols-12 gap-3';
        
        // Spectrum name column
        const nameColumn = document.createElement('div');
        nameColumn.className = 'col-span-4 flex flex-col justify-between pr-2';
        
        const nameHeader = document.createElement('div');
        
        const spectrumLabel = document.createElement('div');
        spectrumLabel.className = 'text-xs uppercase tracking-wider text-stone-400 mb-1';
        spectrumLabel.textContent = 'Spectrum';
        
        const spectrumName = document.createElement('h4');
        spectrumName.className = 'text-lg font-light text-stone-700';
        spectrumName.textContent = spectrum.name;
        
        nameHeader.appendChild(spectrumLabel);
        nameHeader.appendChild(spectrumName);
        
        const placementLabel = document.createElement('div');
        placementLabel.className = 'text-xs font-light text-stone-500 uppercase tracking-wider';
        placementLabel.textContent = placement.charAt(0).toUpperCase() + placement.slice(1);
        
        nameColumn.appendChild(nameHeader);
        nameColumn.appendChild(placementLabel);
        
        // Vertical separator
        const separator = document.createElement('div');
        separator.className = 'col-span-1 flex justify-center';
        
        const separatorLine = document.createElement('div');
        separatorLine.className = 'h-full w-px bg-stone-200';
        
        separator.appendChild(separatorLine);
        
        // Visualization column
        const visualColumn = document.createElement('div');
        visualColumn.className = 'col-span-7 flex flex-col';
        
        // Spectrum visualization
        const visualization = document.createElement('div');
        visualization.className = 'mb-6 relative';
        
        // Base line
        const baseLine = document.createElement('div');
        baseLine.className = 'h-px w-full bg-stone-200';
        
        // Placement indicator
        const indicator = document.createElement('div');
        indicator.className = 'relative';
        indicator.style.marginLeft = `${value}%`;
        
        // Vertical line
        const verticalLine = document.createElement('div');
        verticalLine.className = `absolute top-0 w-px h-16 transform -translate-x-1/2 ${
            placement === 'left' ? 'bg-blue-400' :
            placement === 'right' ? 'bg-amber-400' : 'bg-green-400'
        }`;
        
        // Circle indicator
        const circleIndicator = document.createElement('div');
        circleIndicator.className = `absolute top-16 w-3 h-3 rounded-full transform -translate-x-1/2 ${
            placement === 'left' ? 'bg-blue-400' :
            placement === 'right' ? 'bg-amber-400' : 'bg-green-400'
        }`;
        
        indicator.appendChild(verticalLine);
        indicator.appendChild(circleIndicator);
        
        // Left-right labels
        const labelsContainer = document.createElement('div');
        labelsContainer.className = 'flex justify-between mt-20 text-xs tracking-wide text-stone-500';
        
        const leftLabel = document.createElement('span');
        leftLabel.textContent = spectrum.leftLabel;
        
        const rightLabel = document.createElement('span');
        rightLabel.textContent = spectrum.rightLabel;
        
        labelsContainer.appendChild(leftLabel);
        labelsContainer.appendChild(rightLabel);
        
        // Description
        const description = document.createElement('p');
        description.className = 'text-sm font-light text-stone-600 leading-relaxed';
        
        // Get description from typology descriptions
        const typologyDesc = assessmentData.typologyDescriptions[`${spectrum.id}-${placement}`];
        if (typologyDesc) {
            description.textContent = typologyDesc.description;
        }
        
        // Assemble visualization
        visualization.appendChild(baseLine);
        visualization.appendChild(indicator);
        visualization.appendChild(labelsContainer);
        
        visualColumn.appendChild(visualization);
        visualColumn.appendChild(description);
        
        // Background decoration elements
        const decoration = document.createElement('div');
        if (isFullWidth) {
            decoration.className = 'absolute right-0 -bottom-12 w-24 h-px bg-stone-200 opacity-70';
        } else if (leftAligned) {
            decoration.className = 'absolute -right-8 top-1/2 w-16 h-px bg-stone-200 opacity-70';
        } else if (rightAligned) {
            decoration.className = 'absolute -left-8 top-1/2 w-16 h-px bg-stone-200 opacity-70';
        }
        
        // Assemble spectrum item
        contentGrid.appendChild(nameColumn);
        contentGrid.appendChild(separator);
        contentGrid.appendChild(visualColumn);
        
        spectrumItem.appendChild(numberedIndicator);
        spectrumItem.appendChild(contentGrid);
        spectrumItem.appendChild(decoration);
        
        // Add to grid container
        gridContainer.appendChild(spectrumItem);
    });
    
    diagramContainer.appendChild(gridContainer);
    
    // Add refined legend with experimental styling
    const legend = document.createElement('div');
    legend.className = 'mt-24 flex justify-between items-end';
    
    const legendItems = document.createElement('div');
    legendItems.className = 'grid grid-cols-3 gap-8 w-1/2';
    
    // Structured legend item
    const structuredItem = document.createElement('div');
    structuredItem.className = 'flex flex-col items-center';
    
    const structuredBar = document.createElement('div');
    structuredBar.className = 'w-3 h-12 bg-blue-400 mb-3';
    
    const structuredLabel = document.createElement('span');
    structuredLabel.className = 'text-xs font-light uppercase tracking-wider text-stone-500';
    structuredLabel.textContent = 'Structured';
    
    structuredItem.appendChild(structuredBar);
    structuredItem.appendChild(structuredLabel);
    
    // Balanced legend item
    const balancedItem = document.createElement('div');
    balancedItem.className = 'flex flex-col items-center';
    
    const balancedBar = document.createElement('div');
    balancedBar.className = 'w-3 h-8 bg-green-400 mb-3';
    
    const balancedLabel = document.createElement('span');
    balancedLabel.className = 'text-xs font-light uppercase tracking-wider text-stone-500';
    balancedLabel.textContent = 'Balanced';
    
    balancedItem.appendChild(balancedBar);
    balancedItem.appendChild(balancedLabel);
    
    // Intuitive legend item
    const intuitiveItem = document.createElement('div');
    intuitiveItem.className = 'flex flex-col items-center';
    
    const intuitiveBar = document.createElement('div');
    intuitiveBar.className = 'w-3 h-16 bg-amber-400 mb-3';
    
    const intuitiveLabel = document.createElement('span');
    intuitiveLabel.className = 'text-xs font-light uppercase tracking-wider text-stone-500';
    intuitiveLabel.textContent = 'Intuitive';
    
    intuitiveItem.appendChild(intuitiveBar);
    intuitiveItem.appendChild(intuitiveLabel);
    
    // Legend note
    const legendNote = document.createElement('div');
    legendNote.className = 'text-xs font-light text-stone-400 uppercase tracking-wider flex items-center';
    
    const noteLine = document.createElement('div');
    noteLine.className = 'w-8 h-px bg-stone-300 mr-2';
    
    const noteText = document.createElement('span');
    noteText.textContent = 'Your Reality Coordinates';
    
    legendNote.appendChild(noteLine);
    legendNote.appendChild(noteText);
    
    // Assemble legend
    legendItems.appendChild(structuredItem);
    legendItems.appendChild(balancedItem);
    legendItems.appendChild(intuitiveItem);
    
    legend.appendChild(legendItems);
    legend.appendChild(legendNote);
    
    diagramContainer.appendChild(legend);
}

//-------------------------------------------------------------------------
// UPDATED: Generate Typology Pair Section (Enhanced Design)
//-------------------------------------------------------------------------
function generateTypologyPairSection(typologyPair) {
    const typologyContainer = document.getElementById('typology-pair');
    typologyContainer.innerHTML = '';

    if (!typologyPair.primary || !typologyPair.secondary) {
        typologyContainer.textContent = 'Unable to determine typology pair from responses.';
        return;
    }

    // Get typology descriptions for primary and secondary
    const primaryDesc = assessmentData.typologyDescriptions[`${typologyPair.primary.spectrumId}-${typologyPair.primary.placement}`];
    const secondaryDesc = assessmentData.typologyDescriptions[`${typologyPair.secondary.spectrumId}-${typologyPair.secondary.placement}`];

    // Determine typology pair key for template lookup
    let pairKey = '';
    if (typologyPair.primary.placement === 'left') {
        pairKey += 'structured';
    } else if (typologyPair.primary.placement === 'balanced') {
        pairKey += 'balanced';
    } else {
        pairKey += 'fluid';
    }
    pairKey += '-';
    if (typologyPair.secondary.placement === 'left') {
        pairKey += 'structured';
    } else if (typologyPair.secondary.placement === 'balanced') {
        pairKey += 'balanced';
    } else {
        pairKey += 'fluid';
    }

    // Get pair template
    const pairTemplate = assessmentData.resultsTemplates.typologyPairs[pairKey];

    // Create results card for typology pair with enhanced design
    const typologyCard = document.createElement('div');
    typologyCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    // Create typology pair name with icon
    const typologyPairName = document.createElement('div');
    typologyPairName.className = 'flex items-center mb-6';
    
    // Create icon with nested circles for visual interest
    const typologyIcon = document.createElement('div');
    typologyIcon.className = 'w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center';
    
    const iconInner = document.createElement('div');
    iconInner.className = 'w-10 h-10 rounded-full bg-white flex items-center justify-center';
    
    const iconCore = document.createElement('div');
    iconCore.className = 'w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-400';
    
    iconInner.appendChild(iconCore);
    typologyIcon.appendChild(iconInner);
    
    // Create typology name
    const typologyName = document.createElement('h2');
    typologyName.className = 'text-3xl font-light text-stone-800 ml-4';
    typologyName.textContent = pairTemplate.name;
    
    typologyPairName.appendChild(typologyIcon);
    typologyPairName.appendChild(typologyName);
    
    // Create typology description
    const typologyDescription = document.createElement('p');
    typologyDescription.className = 'text-lg font-light text-stone-600 leading-relaxed';
    typologyDescription.textContent = pairTemplate.description;
    
    // Assemble typology card
    typologyCard.appendChild(typologyPairName);
    typologyCard.appendChild(typologyDescription);
    
    typologyContainer.appendChild(typologyCard);
}

//-------------------------------------------------------------------------
// UPDATED: Generate Ideal Approaches Section (Improved Visual Styling)
//-------------------------------------------------------------------------
function generateIdealApproachesSection(typologyPair) {
    const approachesContainer = document.getElementById('ideal-approaches');
    approachesContainer.innerHTML = '';
    
    if (!typologyPair.primary || !typologyPair.secondary) {
        approachesContainer.textContent = 'Unable to determine ideal approaches from responses.';
        return;
    }
    
    // Determine typology pair key for template lookup
    let pairKey = '';
    if (typologyPair.primary.placement === 'left') {
        pairKey += 'structured';
    } else if (typologyPair.primary.placement === 'balanced') {
        pairKey += 'balanced';
    } else {
        pairKey += 'fluid';
    }
    pairKey += '-';
    if (typologyPair.secondary.placement === 'left') {
        pairKey += 'structured';
    } else if (typologyPair.secondary.placement === 'balanced') {
        pairKey += 'balanced';
    } else {
        pairKey += 'fluid';
    }
    
    // Get approaches template
    const approachesTemplate = assessmentData.resultsTemplates.idealApproaches[pairKey];
    
    // Create strengths card
    const strengthsCard = document.createElement('div');
    strengthsCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const strengthsTitle = document.createElement('h3');
    strengthsTitle.className = 'text-xl font-light text-stone-800 mb-4';
    strengthsTitle.textContent = 'Your Natural Strengths';
    
    const strengthsText = document.createElement('p');
    strengthsText.className = 'text-base font-light text-stone-600';
    strengthsText.textContent = approachesTemplate.strengths;
    
    strengthsCard.appendChild(strengthsTitle);
    strengthsCard.appendChild(strengthsText);
    
    // Create approaches card
    const approachesCard = document.createElement('div');
    approachesCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const approachesTitle = document.createElement('h3');
    approachesTitle.className = 'text-xl font-light text-stone-800 mb-6';
    approachesTitle.textContent = 'Optimal Manifestation Approaches';
    
    const approachesList = document.createElement('div');
    approachesList.className = 'space-y-4';
    
    // Create approach items with numbered circles
    approachesTemplate.approaches.forEach((approach, index) => {
        const approachItem = document.createElement('div');
        approachItem.className = 'flex items-start';
        
        // Numbered circle
        const approachNumber = document.createElement('div');
        approachNumber.className = 'w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 shrink-0';
        
        const numberText = document.createElement('span');
        numberText.className = 'text-sm font-medium text-amber-700';
        numberText.textContent = index + 1;
        
        approachNumber.appendChild(numberText);
        
        // Approach text
        const approachText = document.createElement('p');
        approachText.className = 'ml-4 text-base font-light text-stone-600';
        approachText.textContent = approach;
        
        approachItem.appendChild(approachNumber);
        approachItem.appendChild(approachText);
        approachesList.appendChild(approachItem);
    });
    
    approachesCard.appendChild(approachesTitle);
    approachesCard.appendChild(approachesList);
    
    approachesContainer.appendChild(strengthsCard);
    approachesContainer.appendChild(approachesCard);
}

//-------------------------------------------------------------------------
// UPDATED: Generate Misalignments Section (Enhanced Styling)
//-------------------------------------------------------------------------
function generateMisalignmentsSection(typologyPair) {
    const misalignmentsContainer = document.getElementById('common-misalignments');
    misalignmentsContainer.innerHTML = '';
    
    if (!typologyPair.primary || !typologyPair.secondary) {
        misalignmentsContainer.textContent = 'Unable to determine common misalignments from responses.';
        return;
    }
    
    // Determine typology pair key for template lookup
    let pairKey = '';
    if (typologyPair.primary.placement === 'left') {
        pairKey += 'structured';
    } else if (typologyPair.primary.placement === 'balanced') {
        pairKey += 'balanced';
    } else {
        pairKey += 'fluid';
    }
    pairKey += '-';
    if (typologyPair.secondary.placement === 'left') {
        pairKey += 'structured';
    } else if (typologyPair.secondary.placement === 'balanced') {
        pairKey += 'balanced';
    } else {
        pairKey += 'fluid';
    }
    
    // Get misalignments template
    const misalignmentsTemplate = assessmentData.resultsTemplates.misalignments[pairKey];
    
    // Create misalignments card
    const misalignmentsCard = document.createElement('div');
    misalignmentsCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const misalignmentsTitle = document.createElement('h3');
    misalignmentsTitle.className = 'text-xl font-light text-stone-800 mb-6';
    misalignmentsTitle.textContent = 'Approaches That May Create Friction';
    
    const misalignmentsList = document.createElement('div');
    misalignmentsList.className = 'space-y-4';
    
    // Create misalignment items with alert icons
    misalignmentsTemplate.forEach((misalignment, index) => {
        const misalignmentItem = document.createElement('div');
        misalignmentItem.className = 'flex items-start';
        
        // Alert icon circle
        const misalignmentIcon = document.createElement('div');
        misalignmentIcon.className = 'w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center mt-0.5 shrink-0';
        
        const iconText = document.createElement('span');
        iconText.className = 'text-sm font-medium text-stone-500';
        iconText.textContent = '!';
        
        misalignmentIcon.appendChild(iconText);
        
        // Misalignment text
        const misalignmentText = document.createElement('p');
        misalignmentText.className = 'ml-4 text-base font-light text-stone-600';
        misalignmentText.textContent = misalignment;
        
        misalignmentItem.appendChild(misalignmentIcon);
        misalignmentItem.appendChild(misalignmentText);
        misalignmentsList.appendChild(misalignmentItem);
    });
    
    misalignmentsCard.appendChild(misalignmentsTitle);
    misalignmentsCard.appendChild(misalignmentsList);
    
    misalignmentsContainer.appendChild(misalignmentsCard);
}

//-------------------------------------------------------------------------
// UPDATED: Generate Prescriptive Strategy Section (with Expandable Sections)
//-------------------------------------------------------------------------
function generatePrescriptiveStrategySection(typologyPair, dominantValues) {
    const strategyContainer = document.getElementById('prescriptive-strategy');
    strategyContainer.innerHTML = '';
    
    // Create expandable sections for shifts, permissions, and energy support tools
    const shiftsSection = createExpandableSection('Shifts Needed', generateTypologyShifts(typologyPair.key, dominantValues.growthAreas));
    const permissionsSection = createExpandableSection('Acceptance Permissions', generateAcceptancePermissions(dominantValues.alignmentNeeds, typologyPair.key));
    const toolsSection = createExpandableSection('Energy Support Tools', generateEnergySupportTools(dominantValues.energyPatterns, typologyPair.key));
    
    strategyContainer.appendChild(shiftsSection);
    strategyContainer.appendChild(permissionsSection);
    strategyContainer.appendChild(toolsSection);
    
    // Helper function to create an expandable section
    function createExpandableSection(title, items) {
        const section = document.createElement('div');
        section.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-sm border border-stone-100 overflow-hidden mb-6';
        
        const header = document.createElement('button');
        header.className = 'w-full flex items-center justify-between p-8';
        header.setAttribute('aria-expanded', 'false');
        
        const headerTitle = document.createElement('h3');
        headerTitle.className = 'text-xl font-light text-stone-800';
        headerTitle.textContent = title;
        
        const headerIcon = document.createElement('div');
        headerIcon.className = 'transform transition-transform';
        headerIcon.innerHTML = `
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#78716C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        header.appendChild(headerTitle);
        header.appendChild(headerIcon);
        
        const content = document.createElement('div');
        content.className = 'px-8 pb-8 pt-0 hidden';
        
        const itemsList = document.createElement('div');
        itemsList.className = 'space-y-4';
        
        items.forEach((item, index) => {
            const strategyItem = document.createElement('div');
            strategyItem.className = 'flex items-start';
            
            const strategyNumber = document.createElement('div');
            strategyNumber.className = 'w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 shrink-0';
            
            const numberText = document.createElement('span');
            numberText.className = 'text-sm font-medium text-amber-700';
            numberText.textContent = index + 1;
            
            strategyNumber.appendChild(numberText);
            
            const strategyText = document.createElement('p');
            strategyText.className = 'ml-4 text-base font-light text-stone-600';
            strategyText.textContent = item;
            
            strategyItem.appendChild(strategyNumber);
            strategyItem.appendChild(strategyText);
            itemsList.appendChild(strategyItem);
        });
        
        content.appendChild(itemsList);
        section.appendChild(header);
        section.appendChild(content);
        
        // Add toggle functionality
        header.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            
            // Toggle icon rotation
            headerIcon.classList.toggle('rotate-180');
            
            // Toggle content visibility
            if (expanded) {
                content.classList.add('hidden');
            } else {
                content.classList.remove('hidden');
            }
        });
        
        return section;
    }
}

//-------------------------------------------------------------------------
// HELPER: Generate Typology Shifts
//-------------------------------------------------------------------------
function generateTypologyShifts(typologyKey, growthAreas) {
    const shifts = [];
    
    if (growthAreas.includes('consistency-challenge')) {
        shifts.push('Develop a flexible consistency framework that honors your natural rhythm while providing enough structure for momentum.');
    }
    if (growthAreas.includes('clarity-challenge')) {
        shifts.push('Create a clarity practice that combines analytical reflection with intuitive exploration to help crystallize your true desires.');
    }
    if (growthAreas.includes('action-challenge') || growthAreas.includes('action-gap')) {
        shifts.push('Design an action approach that aligns with your energy patterns—powerful bursts or steady progress based on your nature.');
    }
    if (growthAreas.includes('intuition-challenge')) {
        shifts.push('Strengthen your intuition through regular practices that help you recognize, trust, and validate your inner knowing.');
    }
    if (growthAreas.includes('emotion-challenge') || growthAreas.includes('emotional-block')) {
        shifts.push('Develop emotional fluency practices that help you navigate emotional states without being overwhelmed or disconnected.');
    }
    if (growthAreas.includes('receiving-challenge')) {
        shifts.push('Create receiving rituals that help you open to and recognize manifestations as they emerge, especially in unexpected forms.');
    }
    if (growthAreas.includes('decision-doubt')) {
        shifts.push('Establish a personalized decision-making protocol that incorporates both analytical validation and intuitive confirmation.');
    }
    if (growthAreas.includes('focus-challenge')) {
        shifts.push('Design focus containers that work with your natural attention style, providing structure while allowing for flexibility.');
    }
    if (growthAreas.includes('burnout-pattern')) {
        shifts.push('Implement energy management practices that honor your natural cycles of output and restoration.');
    }
    if (growthAreas.includes('commitment-hesitation')) {
        shifts.push('Develop incremental commitment practices that allow you to build confidence and momentum without triggering resistance.');
    }
    
    switch (typologyKey) {
        case 'structured-structured':
            shifts.push('Create intentional space for intuitive exploration within your highly structured approach.');
            shifts.push('Develop practices for recognizing when flexibility would serve better than rigid adherence to your plans.');
            break;
        case 'structured-balanced':
            shifts.push('Notice when you default to structure out of habit rather than conscious choice, and experiment with more fluid approaches.');
            shifts.push('Leverage your balanced secondary aspect to soften potential rigidity in your structured primary approach.');
            break;
        case 'structured-fluid':
            shifts.push('Honor the creative tension between your structured and fluid aspects by allowing each to lead in appropriate contexts.');
            shifts.push('Use your structured foundation to provide a stable container for your fluid explorations rather than restricting them.');
            break;
        case 'balanced-structured':
            shifts.push('Leverage your natural adaptability to know when structure serves and when it limits, adjusting your approach accordingly.');
            shifts.push('Use your structured secondary aspect to provide grounding when your balanced primary approach needs more focus.');
            break;
        case 'balanced-balanced':
            shifts.push('Develop clear decision criteria for choosing between structured and fluid approaches in different contexts.');
            shifts.push('Create enough structure to provide momentum without restricting your natural adaptability.');
            break;
        case 'balanced-fluid':
            shifts.push('Allow your fluid aspects to lead your creative process while using your balanced aspects for integration.');
            shifts.push('Develop practices that help you maintain grounding when your fluid aspects pull you into expansive states.');
            break;
        case 'fluid-structured':
            shifts.push('Create bridges between your intuitive insights and structured implementation to manifest your visions effectively.');
            shifts.push('Allow your structured aspects to serve your intuitive vision rather than constraining it.');
            break;
        case 'fluid-balanced':
            shifts.push('Develop anchoring practices that help ground your expansive vision without diminishing its potential.');
            shifts.push('Use your balanced aspects as a bridge between your visionary insights and practical implementation.');
            break;
        case 'fluid-fluid':
            shifts.push('Create minimal supporting structures that provide enough foundation without restricting your natural fluid approach.');
            shifts.push('Develop grounding practices that help you translate expansive visions into tangible manifestations.');
            break;
    }
    
    return shifts;
}

//-------------------------------------------------------------------------
// HELPER: Generate Acceptance Permissions
//-------------------------------------------------------------------------
function generateAcceptancePermissions(alignmentNeeds, typologyKey) {
    const permissions = [];
    
    if (alignmentNeeds.includes('accept-cycles')) {
        permissions.push('Give yourself permission to honor your natural cycles rather than forcing constant output.');
    }
    if (alignmentNeeds.includes('accept-structure')) {
        permissions.push('Give yourself permission to create and maintain the structures you need, even if others thrive with more spontaneity.');
    }
    if (alignmentNeeds.includes('accept-emotions')) {
        permissions.push('Give yourself permission to acknowledge your emotional states without judgment.');
    }
    if (alignmentNeeds.includes('accept-gradual-clarity')) {
        permissions.push('Give yourself permission to allow clarity to emerge gradually rather than forcing immediate certainty.');
    }
    if (alignmentNeeds.includes('accept-intuition')) {
        permissions.push('Give yourself permission to trust your intuitive guidance, even without immediate logical justification.');
    }
    if (alignmentNeeds.includes('accept-flexibility')) {
        permissions.push('Give yourself permission to remain flexible and open rather than locking into fixed outcomes.');
    }
    if (alignmentNeeds.includes('control-outcomes')) {
        permissions.push('Give yourself permission to release attachment to specific timelines and forms.');
    }
    if (alignmentNeeds.includes('control-emotions')) {
        permissions.push('Give yourself permission to experience your full range of emotions as valuable information.');
    }
    if (alignmentNeeds.includes('control-consistency')) {
        permissions.push('Give yourself permission to work with your natural rhythm even if it doesn’t match external expectations.');
    }
    if (alignmentNeeds.includes('control-clarity')) {
        permissions.push('Give yourself permission to explore before committing to a clear vision.');
    }
    if (alignmentNeeds.includes('control-decisions')) {
        permissions.push('Give yourself permission to make decisions from multiple sources of wisdom.');
    }
    if (alignmentNeeds.includes('control-intuition')) {
        permissions.push('Give yourself permission to follow intuitive nudges without needing to justify them.');
    }
    
    switch (typologyKey) {
        case 'structured-structured':
            permissions.push('Embrace uncertainty and organic development as part of your process.');
            break;
        case 'structured-balanced':
            permissions.push('Trust your sense of when structure serves and when flexibility is needed.');
            break;
        case 'structured-fluid':
            permissions.push('Honor both your need for structure and your intuitive, flowing nature.');
            break;
        case 'balanced-structured':
            permissions.push('Adjust your approach as circumstances change without seeing it as inconsistency.');
            break;
        case 'balanced-balanced':
            permissions.push('Embrace your adaptability without committing to one “correct” approach.');
            break;
        case 'balanced-fluid':
            permissions.push('Lead with intuition while creating just enough structure to support manifestation.');
            break;
        case 'fluid-structured':
            permissions.push('Honor your intuitive knowing first, then engage your structured aspects.');
            break;
        case 'fluid-balanced':
            permissions.push('Follow inspiration and trust that practical implementation can follow organically.');
            break;
        case 'fluid-fluid':
            permissions.push('Trust your fluid process even when others advocate for more structure.');
            break;
    }
    
    return permissions;
}

//-------------------------------------------------------------------------
// HELPER: Generate Energy Support Tools
//-------------------------------------------------------------------------
function generateEnergySupportTools(energyPatterns, typologyKey) {
    const tools = [];
    
    if (energyPatterns.includes('clear-instructions') || energyPatterns.includes('structured-productivity')) {
        tools.push('A structured manifestation journal with clear prompts for tracking progress.');
    }
    if (energyPatterns.includes('intuitive-instincts') || energyPatterns.includes('flexible-productivity')) {
        tools.push('Intuitive visualization exercises for spontaneous creative insights.');
    }
    if (energyPatterns.includes('emotional-inspiration') || energyPatterns.includes('emotional-productivity')) {
        tools.push('Emotional state practices to cultivate high-vibration feelings aligned with your desires.');
    }
    if (energyPatterns.includes('balanced-rhythm') || energyPatterns.includes('balanced-productivity')) {
        tools.push('Flexible routines that provide structure while allowing for intuitive adjustments.');
    }
    if (energyPatterns.includes('gradual-clarity') || energyPatterns.includes('adaptive-productivity')) {
        tools.push('Progressive clarity exercises that let your vision refine over time.');
    }
    if (energyPatterns.includes('process-trust') || energyPatterns.includes('spontaneous-productivity')) {
        tools.push('Surrender practices to help you release attachment and trust divine timing.');
    }
    if (energyPatterns.includes('rigid-routines') || energyPatterns.includes('structured-environment')) {
        tools.push('Adaptable planning systems that offer structure without being restrictive.');
    }
    if (energyPatterns.includes('ignored-intuition') || energyPatterns.includes('dynamic-environment')) {
        tools.push('Regular intuition check-ins to help you honor subtle guidance.');
    }
    if (energyPatterns.includes('suppressed-emotions') || energyPatterns.includes('emotionally-supportive-environment')) {
        tools.push('Emotional awareness practices to help you work with your emotional energies.');
    }
    if (energyPatterns.includes('forced-clarity') || energyPatterns.includes('inspiring-environment')) {
        tools.push('Exploratory vision boards or mind maps for creative clarity.');
    }
    
    switch (typologyKey) {
        case 'structured-structured':
            tools.push('Structured intuition exercises with clear frameworks.');
            tools.push('Manifestation systems with built-in flexibility.');
            break;
        case 'structured-balanced':
            tools.push('Alternating structure and flow practices that leverage both aspects.');
            tools.push('Decision frameworks that integrate analytical and intuitive components.');
            break;
        case 'structured-fluid':
            tools.push('Structured containers for intuitive exploration that don’t restrict creativity.');
            tools.push('Practices that help translate intuitive insights into actionable plans.');
            break;
        case 'balanced-structured':
            tools.push('Adaptable frameworks that flex with changing circumstances.');
            tools.push('Balance assessments to decide when to apply more structure or flow.');
            break;
        case 'balanced-balanced':
            tools.push('Integration practices to harmonize multiple manifestation approaches.');
            tools.push('Discernment tools for selecting the right approach for each context.');
            break;
        case 'balanced-fluid':
            tools.push('Minimal planning systems that support your fluid nature with enough structure.');
            tools.push('Grounding practices to anchor your expansive energy.');
            break;
        case 'fluid-structured':
            tools.push('Intuition-led planning methods that start with inspired vision then apply structure.');
            tools.push('Bridges between intuitive insights and practical action.');
            break;
        case 'fluid-balanced':
            tools.push('Vision anchoring practices to translate expansive ideas into projects.');
            tools.push('Fluid manifestation rituals with minimal yet sufficient structure.');
            break;
        case 'fluid-fluid':
            tools.push('Energetic alignment practices focused on vibrational matching.');
            tools.push('Minimal grounding techniques to support your expansive approach.');
            break;
    }
    
    return tools;
}

//-------------------------------------------------------------------------
// HELPER: Generate Personalized Integration Strategy
//-------------------------------------------------------------------------
function generateIntegrationStrategy(typologyKey, dominantValues) {
    let strategy = '';
    
    switch (typologyKey) {
        case 'structured-structured':
            strategy = "Your integration strategy involves creating intentional space for intuitive exploration within your structured approach. Schedule regular 'intuition days' and include flexibility checkpoints in your plans.";
            break;
        case 'structured-balanced':
            strategy = "Leverage your balance between structure and adaptability. Begin with clear planning, then schedule reflection points to check in with your intuition.";
            break;
        case 'structured-fluid':
            strategy = "Honor the tension between structure and fluidity. Use your structured foundation to support intuitive insights and allow each to lead when appropriate.";
            break;
        case 'balanced-structured':
            strategy = "Utilize your adaptability to apply structure when needed while remaining flexible. Create organized systems with built-in adjustments.";
            break;
        case 'balanced-balanced':
            strategy = "Embrace your naturally adaptable approach. Develop clear criteria for when to use structure versus flow and adjust as circumstances evolve.";
            break;
        case 'balanced-fluid':
            strategy = "Lead with your intuitive insights while maintaining minimal structure for effective manifestation. Use grounding practices to translate expansive ideas into action.";
            break;
        case 'fluid-structured':
            strategy = "Bridge your intuitive insights with structured implementation. Develop a two-phase approach: first connect with your vision, then implement using clear steps.";
            break;
        case 'fluid-balanced':
            strategy = "Maintain your intuitive leadership while incorporating practical elements. Create space for full creative flow followed by grounding practices.";
            break;
        case 'fluid-fluid':
            strategy = "Trust your highly intuitive process while establishing minimal anchoring to bring your visions into reality. Simple touchpoints can help translate expansive ideas into tangible steps.";
            break;
        default:
            strategy = "Develop a balanced approach that integrates both structure and flow. Regularly connect with both analytical and intuitive insights to guide your manifestation process.";
    }
    
    // Enhance strategy based on dominant core values
    const corePriorities = dominantValues.corePriorities;
    if (corePriorities.includes('creative-expression') || corePriorities.includes('craft-mastery')) {
        strategy += " Incorporate creative expression as a core component, using artistic exploration to clarify your desires.";
    }
    if (corePriorities.includes('financial-abundance') || corePriorities.includes('wealth-security')) {
        strategy += " Focus on abundance practices that release scarcity thinking.";
    }
    if (corePriorities.includes('emotional-fulfillment') || corePriorities.includes('emotional-peace')) {
        strategy += " Prioritize emotional alignment practices to ground your manifestation energy.";
    }
    if (corePriorities.includes('personal-autonomy') || corePriorities.includes('personal-freedom')) {
        strategy += " Design your process to enhance self-determination and avoid restrictive approaches.";
    }
    if (corePriorities.includes('deep-relationships') || corePriorities.includes('deep-connection')) {
        strategy += " Include practices that foster authentic connection and mutual support.";
    }
    if (corePriorities.includes('spiritual-connection') || corePriorities.includes('higher-meaning')) {
        strategy += " Center your practice around a higher purpose and reconnect with deeper meaning regularly.";
    }
    
    return strategy;
}

//-------------------------------------------------------------------------
// FINAL: Generate and Display Results
//-------------------------------------------------------------------------
function generateAndDisplayResults() {
    // Assume getTypologyAndMasteryData() gathers scoring and analysis data
    const scoringData = getTypologyAndMasteryData();
    
    const spectrumPlacements = scoringData.typologyResults.placements;
    const typologyPair = scoringData.typologyPair;
    const masteryScores = scoringData.masteryScores;
    const dominantValues = scoringData.dominantValues;
    
    // Display various result sections
    generateSpectrumDiagram(spectrumPlacements, typologyPair);
    generateTypologyPairSection(typologyPair);
    generateIdealApproachesSection(typologyPair);
    generateMisalignmentsSection(typologyPair);
    generateMasteryPrioritiesSection(masteryScores, dominantValues);
    generatePrescriptiveStrategySection(typologyPair, dominantValues);
    
    // Note: Other core functions like generatePersonalizedInsights() remain unchanged.
}

//-------------------------------------------------------------------------
// Update initResultsTabs function for improved tab navigation
//-------------------------------------------------------------------------
function initResultsTabs() {
    const typologyTab = document.getElementById('typology-tab');
    const approachesTab = document.getElementById('approaches-tab');
    const strategyTab = document.getElementById('strategy-tab');
    
    if (!typologyTab || !approachesTab || !strategyTab) return;
    
    const typologyContent = document.getElementById('typology-content');
    const approachesContent = document.getElementById('approaches-content');
    const strategyContent = document.getElementById('strategy-content');
    
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
    
    // Initialize first tab as active
    updateActiveTab(typologyTab);
}
