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
// UPDATED: Generate Spectrum Diagram (with Map Title, Items, and Legend)
//-------------------------------------------------------------------------
function generateSpectrumDiagram(spectrumPlacements, typologyPair) {
    const diagramContainer = document.getElementById('spectrum-diagram');
    diagramContainer.innerHTML = '';

    // Add a title for the spectrum map
    const mapTitle = document.createElement('div');
    mapTitle.className = 'spectrum-map-title';
    
    const mapLine = document.createElement('div');
    mapLine.className = 'spectrum-map-line';
    
    const mapText = document.createElement('h3');
    mapText.className = 'spectrum-map-text';
    mapText.textContent = 'Your Spectrum Map';
    
    mapTitle.appendChild(mapLine);
    mapTitle.appendChild(mapText);
    diagramContainer.appendChild(mapTitle);

    // Create spectrum items for each spectrum
    assessmentData.typologySpectrums.forEach((spectrum, index) => {
        const spectrumItem = document.createElement('div');
        spectrumItem.className = 'spectrum-item';
        
        // Get placement for this spectrum
        const placement = spectrumPlacements[spectrum.id];
        
        // Left column with spectrum info
        const spectrumInfo = document.createElement('div');
        spectrumInfo.className = 'spectrum-info';
        
        const spectrumNumber = document.createElement('div');
        spectrumNumber.className = 'text-xs text-stone-400';
        spectrumNumber.textContent = `0${index + 1}`;
        
        const spectrumName = document.createElement('h4');
        spectrumName.className = 'spectrum-name';
        // Emphasize based on typology pair
        let emphasizeClass = '';
        if (typologyPair.primary && spectrum.id === typologyPair.primary.spectrumId) {
            emphasizeClass = 'text-red-700';
        } else if (typologyPair.secondary && spectrum.id === typologyPair.secondary.spectrumId) {
            emphasizeClass = 'text-amber-700';
        }
        spectrumName.className = `spectrum-name ${emphasizeClass}`;
        spectrumName.textContent = spectrum.name;
        
        const spectrumPlacementText = document.createElement('div');
        spectrumPlacementText.className = 'spectrum-placement-text';
        if (typologyPair.primary && spectrum.id === typologyPair.primary.spectrumId) {
            spectrumPlacementText.textContent = 'PRIMARY';
        } else if (typologyPair.secondary && spectrum.id === typologyPair.secondary.spectrumId) {
            spectrumPlacementText.textContent = 'SECONDARY';
        } else {
            spectrumPlacementText.textContent = 'SUPPORTING';
        }
        
        spectrumInfo.appendChild(spectrumNumber);
        spectrumInfo.appendChild(spectrumName);
        spectrumInfo.appendChild(spectrumPlacementText);
        
        // Center separator
        const separator = document.createElement('div');
        separator.className = 'spectrum-separator';
        
        // Right column with visualization
        const visualization = document.createElement('div');
        visualization.className = 'spectrum-visualization';
        
        // Spectrum line
        const spectrumLine = document.createElement('div');
        spectrumLine.className = 'spectrum-line';
        
        // Spectrum marker
        const spectrumMarker = document.createElement('div');
        spectrumMarker.className = `spectrum-marker ${placement}`;
        
        // Marker dot
        const markerDot = document.createElement('div');
        markerDot.className = 'spectrum-marker-dot';
        spectrumMarker.appendChild(markerDot);
        
        // Spectrum labels (left and right)
        const spectrumLabels = document.createElement('div');
        spectrumLabels.className = 'spectrum-labels';
        
        const leftLabel = document.createElement('span');
        leftLabel.textContent = spectrum.leftLabel;
        const rightLabel = document.createElement('span');
        rightLabel.textContent = spectrum.rightLabel;
        
        spectrumLabels.appendChild(leftLabel);
        spectrumLabels.appendChild(rightLabel);
        
        // Placement name label (using typology description)
        const placementName = document.createElement('div');
        placementName.className = `spectrum-placement-name ${placement}`;
        const typologyDesc = assessmentData.typologyDescriptions[`${spectrum.id}-${placement}`];
        if (typologyDesc) {
            placementName.textContent = typologyDesc.name;
        } else {
            placementName.textContent = placement.charAt(0).toUpperCase() + placement.slice(1);
        }
        
        // Assemble visualization
        visualization.appendChild(spectrumLine);
        visualization.appendChild(spectrumMarker);
        visualization.appendChild(spectrumLabels);
        visualization.appendChild(placementName);
        
        // Optionally add description
        const description = document.createElement('p');
        description.className = 'spectrum-description';
        if (typologyDesc) {
            description.textContent = typologyDesc.description;
        }
        visualization.appendChild(description);
        
        // Assemble spectrum item
        spectrumItem.appendChild(spectrumInfo);
        spectrumItem.appendChild(separator);
        spectrumItem.appendChild(visualization);
        
        // Add item to container
        diagramContainer.appendChild(spectrumItem);
    });
    
    // Add legend for the spectrum map
    const legend = document.createElement('div');
    legend.className = 'legend';
    
    const legendItems = document.createElement('div');
    legendItems.className = 'legend-items';
    
    // Helper to create legend items
    function createLegendItem(type, label) {
        const item = document.createElement('div');
        item.className = 'legend-item';
        
        const bar = document.createElement('div');
        bar.className = `legend-bar ${type}`;
        
        const text = document.createElement('span');
        text.className = 'legend-label';
        text.textContent = label;
        
        item.appendChild(bar);
        item.appendChild(text);
        return item;
    }
    
    const structuredLegend = createLegendItem('structured', 'Structured');
    const balancedLegend = createLegendItem('balanced', 'Balanced');
    const intuitiveLegend = createLegendItem('intuitive', 'Intuitive');
    
    legendItems.appendChild(structuredLegend);
    legendItems.appendChild(balancedLegend);
    legendItems.appendChild(intuitiveLegend);
    
    // Legend note
    const legendNote = document.createElement('div');
    legendNote.className = 'legend-note';
    
    const noteLine = document.createElement('div');
    noteLine.className = 'legend-note-line';
    
    const noteText = document.createElement('span');
    noteText.textContent = 'Your Reality Coordinates';
    
    legendNote.appendChild(noteLine);
    legendNote.appendChild(noteText);
    
    legend.appendChild(legendItems);
    legend.appendChild(legendNote);
    
    diagramContainer.appendChild(legend);
    
    // Add a description for the diagram
    const diagramDescription = document.createElement('p');
    diagramDescription.className = 'spectrum-description';
    diagramDescription.textContent = 'This map shows your placement on each of the reality creation spectrums. Primary and secondary spectrums are emphasized while supporting spectrums are also displayed.';
    diagramContainer.appendChild(diagramDescription);
}

//-------------------------------------------------------------------------
// UPDATED: Generate Typology Pair Section (Enhanced Presentation)
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

    // Create results card for typology pair with icon and enhanced layout
    const typologyCard = document.createElement('div');
    typologyCard.className = 'results-card';
    
    const typologyPairName = document.createElement('div');
    typologyPairName.className = 'typology-pair-name';
    
    const typologyIcon = document.createElement('div');
    typologyIcon.className = 'typology-icon';
    typologyIcon.innerHTML = `
        <div class="typology-icon-inner">
            <div class="typology-icon-core"></div>
        </div>
    `;
    
    const typologyName = document.createElement('h2');
    typologyName.className = 'typology-name';
    typologyName.textContent = pairTemplate.name;
    
    typologyPairName.appendChild(typologyIcon);
    typologyPairName.appendChild(typologyName);
    
    const typologyDescription = document.createElement('p');
    typologyDescription.className = 'typology-description';
    typologyDescription.textContent = pairTemplate.description;
    
    typologyCard.appendChild(typologyPairName);
    typologyCard.appendChild(typologyDescription);
    
    // Create typology components section
    const componentsTitle = document.createElement('h3');
    componentsTitle.className = 'results-card-title';
    componentsTitle.textContent = 'Your Typology Components';
    
    const typologyComponents = document.createElement('div');
    typologyComponents.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6';
    
    // Primary component card
    const primaryComponent = document.createElement('div');
    primaryComponent.className = 'typology-component primary-component';
    
    const primaryTitle = document.createElement('h4');
    primaryTitle.textContent = 'Primary: ' + primaryDesc.name;
    
    const primaryDescription = document.createElement('p');
    primaryDescription.textContent = primaryDesc.description;
    
    primaryComponent.appendChild(primaryTitle);
    primaryComponent.appendChild(primaryDescription);
    
    // Secondary component card
    const secondaryComponent = document.createElement('div');
    secondaryComponent.className = 'typology-component secondary-component';
    
    const secondaryTitle = document.createElement('h4');
    secondaryTitle.textContent = 'Secondary: ' + secondaryDesc.name;
    
    const secondaryDescription = document.createElement('p');
    secondaryDescription.textContent = secondaryDesc.description;
    
    secondaryComponent.appendChild(secondaryTitle);
    secondaryComponent.appendChild(secondaryDescription);
    
    typologyComponents.appendChild(primaryComponent);
    typologyComponents.appendChild(secondaryComponent);
    
    // Assemble the typology pair section
    typologyContainer.appendChild(typologyCard);
    typologyContainer.appendChild(componentsTitle);
    typologyContainer.appendChild(typologyComponents);
}

//-------------------------------------------------------------------------
// UPDATED: Generate Ideal Approaches Section (Expandable Cards)
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
    
    // Create a strengths card
    const strengthsCard = document.createElement('div');
    strengthsCard.className = 'results-card';
    
    const strengthsTitle = document.createElement('h3');
    strengthsTitle.className = 'results-card-title';
    strengthsTitle.textContent = 'Your Natural Strengths';
    
    const strengthsText = document.createElement('p');
    strengthsText.className = 'strengths-text';
    strengthsText.textContent = approachesTemplate.strengths;
    
    strengthsCard.appendChild(strengthsTitle);
    strengthsCard.appendChild(strengthsText);
    
    // Create an approaches card
    const approachesCard = document.createElement('div');
    approachesCard.className = 'results-card';
    
    const approachesTitle = document.createElement('h3');
    approachesTitle.className = 'results-card-title';
    approachesTitle.textContent = 'Optimal Manifestation Approaches';
    
    const approachesList = document.createElement('div');
    approachesList.className = 'space-y-4';
    
    approachesTemplate.approaches.forEach((approach, index) => {
        const approachItem = document.createElement('div');
        approachItem.className = 'approach-item';
        
        const approachNumber = document.createElement('div');
        approachNumber.className = 'approach-number';
        approachNumber.textContent = index + 1;
        
        const approachText = document.createElement('p');
        approachText.className = 'approach-text';
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
// UPDATED: Generate Misalignments Section
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
    misalignmentsCard.className = 'results-card';
    
    const misalignmentsTitle = document.createElement('h3');
    misalignmentsTitle.className = 'results-card-title';
    misalignmentsTitle.textContent = 'Approaches That May Create Friction';
    
    const misalignmentsList = document.createElement('div');
    misalignmentsList.className = 'space-y-4';
    
    misalignmentsTemplate.forEach((misalignment, index) => {
        const misalignmentItem = document.createElement('div');
        misalignmentItem.className = 'misalignment-item';
        
        const misalignmentIcon = document.createElement('div');
        misalignmentIcon.className = 'misalignment-icon';
        misalignmentIcon.textContent = '!';
        
        const misalignmentText = document.createElement('p');
        misalignmentText.className = 'misalignment-text';
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
// UPDATED: Generate Mastery Priorities Section
//-------------------------------------------------------------------------
function generateMasteryPrioritiesSection(masteryScores, dominantValues) {
    const prioritiesContainer = document.getElementById('mastery-priorities');
    prioritiesContainer.innerHTML = '';
    
    // Create core values card
    const valuesCard = document.createElement('div');
    valuesCard.className = 'results-card';
    
    const valuesTitle = document.createElement('h3');
    valuesTitle.className = 'results-card-title';
    valuesTitle.textContent = 'Your Core Values & Priorities';
    
    const valuesList = document.createElement('div');
    valuesList.className = 'space-y-4';
    
    // Map priority values to descriptions
    const priorityDescriptions = {
        'stability': 'You deeply value clarity, stability, and a sense of control in your life circumstances.',
        'meaning': 'You prioritize deep connection, meaning, and purpose in your relationships and activities.',
        'freedom': 'You value freedom, flexibility, and the ability to follow your inspiration wherever it leads.',
        'practicality': 'Having practical viability and tangible results that improve your concrete circumstances is essential to you.',
        'authenticity': 'Alignment with your authentic self and deeper values, even if it requires more effort, is non-negotiable for you.',
        'feeling': 'The feeling and energetic quality of your experiences, regardless of how they look to others, is paramount to you.',
        'information': 'Having sufficient information and understanding before making decisions is essential to your sense of fulfillment.',
        'integrity': 'Ensuring your choices align with your integrity and personal truth is non-negotiable for you.',
        'possibility': 'Maintaining your sense of possibility and not settling for less than what feels right is crucial to your well-being.'
    };
    
    dominantValues.corePriorities.forEach((value, index) => {
        if (priorityDescriptions[value]) {
            const valueItem = document.createElement('div');
            valueItem.className = 'priority-item';
            
            const valueNumber = document.createElement('div');
            valueNumber.className = 'approach-number';
            valueNumber.textContent = index + 1;
            
            const valueText = document.createElement('p');
            valueText.className = 'priority-text';
            valueText.textContent = priorityDescriptions[value];
            
            valueItem.appendChild(valueNumber);
            valueItem.appendChild(valueText);
            valuesList.appendChild(valueItem);
        }
    });
    
    valuesCard.appendChild(valuesTitle);
    valuesCard.appendChild(valuesList);
    
    // Create growth areas card
    const growthCard = document.createElement('div');
    growthCard.className = 'results-card';
    
    const growthTitle = document.createElement('h3');
    growthTitle.className = 'results-card-title';
    growthTitle.textContent = 'Your Growth & Permission Areas';
    
    const growthList = document.createElement('div');
    growthList.className = 'space-y-4';
    
    const growthDescriptions = {
        'trust-intuition': 'Developing greater trust in your intuitive guidance, especially when it contradicts logical analysis.',
        'practical-action': 'Taking more consistent practical action to ground your visions in physical reality.',
        'focus-commitment': 'Maintaining focus and commitment to specific outcomes without getting distracted by new possibilities.',
        'doubt-approach': 'Working through doubts about whether your approach is too unrealistic or lacking practical grounding.',
        'seek-meaning': 'Understanding the deeper reasons or lessons behind manifestation delays or challenges.',
        'energy-misalignment': 'Aligning your energy or vibration more effectively with your desires.',
        'trust-process': 'Learning to trust the unfolding process even when you can\'t see the entire path ahead.',
        'develop-structure': 'Creating more structure and consistency in your manifestation practices.',
        'release-attachment': 'Releasing attachment to specific outcomes and embracing more flow and flexibility.'
    };
    
    dominantValues.growthAreas.forEach((value, index) => {
        if (growthDescriptions[value]) {
            const growthItem = document.createElement('div');
            growthItem.className = 'priority-item';
            
            const growthNumber = document.createElement('div');
            growthNumber.className = 'approach-number';
            growthNumber.textContent = index + 1;
            
            const growthText = document.createElement('p');
            growthText.className = 'priority-text';
            growthText.textContent = growthDescriptions[value];
            
            growthItem.appendChild(growthNumber);
            growthItem.appendChild(growthText);
            growthList.appendChild(growthItem);
        }
    });
    
    growthCard.appendChild(growthTitle);
    growthCard.appendChild(growthList);
    
    prioritiesContainer.appendChild(valuesCard);
    prioritiesContainer.appendChild(growthCard);
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
        section.className = 'expandable-section';
        
        const header = document.createElement('div');
        header.className = 'expandable-header';
        
        const headerTitle = document.createElement('h3');
        headerTitle.className = 'expandable-title';
        headerTitle.textContent = title;
        
        const headerIcon = document.createElement('div');
        headerIcon.className = 'expandable-icon';
        headerIcon.innerHTML = `
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#78716C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        header.appendChild(headerTitle);
        header.appendChild(headerIcon);
        
        const content = document.createElement('div');
        content.className = 'expandable-content collapsed';
        
        const itemsList = document.createElement('div');
        itemsList.className = 'space-y-4';
        
        items.forEach((item, index) => {
            const strategyItem = document.createElement('div');
            strategyItem.className = 'strategy-item';
            
            const strategyNumber = document.createElement('div');
            strategyNumber.className = 'strategy-number';
            strategyNumber.textContent = index + 1;
            
            const strategyText = document.createElement('p');
            strategyText.className = 'strategy-text';
            strategyText.textContent = item;
            
            strategyItem.appendChild(strategyNumber);
            strategyItem.appendChild(strategyText);
            itemsList.appendChild(strategyItem);
        });
        
        content.appendChild(itemsList);
        
        section.appendChild(header);
        section.appendChild(content);
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
