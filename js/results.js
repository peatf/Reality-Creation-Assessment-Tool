// Results Synthesis System for Reality Creation Assessment

// This file contains the logic for generating and displaying personalized results
// based on the user's responses to both parts of the assessment


// Helper function to find additional strong spectrums beyond the primary pair
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
// Generate the radar chart diagram
function generateSpectrumDiagram(spectrumPlacements, typologyPair) {
    const diagramContainer = document.getElementById('spectrum-diagram');
    diagramContainer.innerHTML = '';
    
    // Create radar chart container
    const radarContainer = document.createElement('div');
    radarContainer.className = 'radar-chart-container';
    
    // Create the radar chart
    const radarChart = document.createElement('div');
    radarChart.className = 'radar-chart';
    
    // Create circles for the radar levels
    const radarCircles = document.createElement('div');
    radarCircles.className = 'radar-circles';
    
    // Add 3 circles for the 3 levels (left, balanced, right)
    const circleRadii = [25, 50, 75]; // % of radius for each level
    
    circleRadii.forEach(radius => {
        const circle = document.createElement('div');
        circle.className = 'radar-circle';
        circle.style.width = `${radius * 2}%`;
        circle.style.height = `${radius * 2}%`;
        radarCircles.appendChild(circle);
    });
    
    radarChart.appendChild(radarCircles);
    
    // Get all spectrum objects
    const spectrumObjects = assessmentData.typologySpectrums;
    const numAxes = spectrumObjects.length;
    
    // Create radar axes and placement markers
    const markers = [];
    const labels = [];
    
    spectrumObjects.forEach((spectrum, index) => {
        // Calculate angle for this axis
        const angle = (index * (360 / numAxes)) * (Math.PI / 180);
        
        // Create axis
        const axis = document.createElement('div');
        axis.className = 'radar-axis';
        axis.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
        
        // Highlight typology pair spectrums
        if (typologyPair.primary && spectrum.id === typologyPair.primary.spectrumId) {
            axis.classList.add('primary-spectrum');
        } else if (typologyPair.secondary && spectrum.id === typologyPair.secondary.spectrumId) {
            axis.classList.add('secondary-spectrum');
        }
        
        // Find any additional strong spectrums
        const additionalStrongSpectrums = findAdditionalStrongSpectrums(spectrumPlacements, typologyPair);
        if (additionalStrongSpectrums.includes(spectrum.id)) {
            axis.classList.add('tertiary-spectrum');
        }
        
        radarChart.appendChild(axis);
        
        // Create axis label
        const label = document.createElement('div');
        label.className = 'radar-label';
        label.textContent = spectrum.name;
        
        // Position the label at the end of the axis
        const labelRadius = 52; // % of container
        const labelX = 50 + labelRadius * Math.cos(angle);
        const labelY = 50 + labelRadius * Math.sin(angle);
        
        label.style.left = `${labelX}%`;
        label.style.top = `${labelY}%`;
        
        // Adjust text alignment based on position
        if (labelX > 85) {
            label.style.transform = 'translateX(-100%)';
            label.style.textAlign = 'right';
        } else if (labelX > 60) {
            label.style.transform = 'translateX(-75%)';
            label.style.textAlign = 'right';
        } else if (labelX < 15) {
            label.style.transform = 'translateX(0)';
            label.style.textAlign = 'left';
        } else if (labelX < 40) {
            label.style.transform = 'translateX(-25%)';
            label.style.textAlign = 'left';
        } else {
            label.style.transform = 'translateX(-50%)';
            label.style.textAlign = 'center';
        }
        
        if (labelY < 10) {
            label.style.top = '10%';
        } else if (labelY > 90) {
            label.style.top = '90%';
        }
        
        radarChart.appendChild(label);
        labels.push(label);
        
        // Create placement marker
        const placement = spectrumPlacements[spectrum.id];
        
        // Calculate marker position based on placement
        let markerRadius;
        switch (placement) {
            case 'left':
                markerRadius = 25; // 25% of container radius
                break;
            case 'balanced':
                markerRadius = 50; // 50% of container radius
                break;
            case 'right':
                markerRadius = 75; // 75% of container radius
                break;
            default:
                markerRadius = 50;
        }
        
        const markerX = 50 + markerRadius * Math.cos(angle);
        const markerY = 50 + markerRadius * Math.sin(angle);
        
        const marker = document.createElement('div');
        marker.className = 'placement-marker';
        marker.style.left = `${markerX}%`;
        marker.style.top = `${markerY}%`;
        
        // Highlight typology pair markers
        if (typologyPair.primary && spectrum.id === typologyPair.primary.spectrumId) {
            marker.classList.add('primary-highlight');
        } else if (typologyPair.secondary && spectrum.id === typologyPair.secondary.spectrumId) {
            marker.classList.add('secondary-highlight');
        }
        
        // Add tertiary highlighting if applicable
        if (additionalStrongSpectrums.includes(spectrum.id)) {
            marker.classList.add('tertiary-highlight');
        }
        
        radarChart.appendChild(marker);
        markers.push({ x: markerX, y: markerY, placement, spectrum });
        
        // Create placement label
        const placementLabel = document.createElement('div');
        placementLabel.className = 'placement-label';
        
        // Get the typology description for this spectrum and placement
        const typologyDesc = assessmentData.typologyDescriptions[`${spectrum.id}-${placement}`];
        if (typologyDesc) {
            placementLabel.textContent = typologyDesc.name;
        } else {
            // Fallback text if description not found
            placementLabel.textContent = placement.charAt(0).toUpperCase() + placement.slice(1);
        }
        
        // Position the label near the marker
        const labelOffsetRadius = markerRadius + 8;
        const placementLabelX = 50 + labelOffsetRadius * Math.cos(angle);
        const placementLabelY = 50 + labelOffsetRadius * Math.sin(angle);
        
        placementLabel.style.left = `${placementLabelX}%`;
        placementLabel.style.top = `${placementLabelY}%`;
        
        radarChart.appendChild(placementLabel);
    });
    
    // Create radar polygon to connect all markers
    const polygonsContainer = document.createElement('div');
    polygonsContainer.className = 'radar-polygons';
    
    // Create SVG element for the polygon
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    
    // Create polygon element
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('class', 'radar-polygon');
    
    // Set polygon points based on marker positions
    const points = markers.map(marker => `${marker.x},${marker.y}`).join(' ');
    polygon.setAttribute('points', points);
    
    svg.appendChild(polygon);
    polygonsContainer.appendChild(svg);
    radarChart.appendChild(polygonsContainer);
    
    radarContainer.appendChild(radarChart);
    
    // Add legend
    const legend = document.createElement('div');
    legend.className = 'radar-legend';
    
    const primaryLegend = document.createElement('div');
    primaryLegend.className = 'legend-item';
    
    const primaryMarker = document.createElement('span');
    primaryMarker.className = 'legend-marker primary-marker';
    
    const primaryText = document.createElement('span');
    primaryText.textContent = 'Primary Typology Spectrum';
    
    primaryLegend.appendChild(primaryMarker);
    primaryLegend.appendChild(primaryText);
    
    const secondaryLegend = document.createElement('div');
    secondaryLegend.className = 'legend-item';
    
    const secondaryMarker = document.createElement('span');
    secondaryMarker.className = 'legend-marker secondary-marker';
    
    const secondaryText = document.createElement('span');
    secondaryText.textContent = 'Secondary Typology Spectrum';
    
    secondaryLegend.appendChild(secondaryMarker);
    secondaryLegend.appendChild(secondaryText);
    
    legend.appendChild(primaryLegend);
    legend.appendChild(secondaryLegend);
    
    // Add tertiary legend item if there are additional strong spectrums
    const additionalStrong = findAdditionalStrongSpectrums(spectrumPlacements, typologyPair);
    if (additionalStrong.length > 0) {
        const tertiaryLegend = document.createElement('div');
        tertiaryLegend.className = 'legend-item';
        
        const tertiaryMarker = document.createElement('span');
        tertiaryMarker.className = 'legend-marker tertiary-marker';
        
        const tertiaryText = document.createElement('span');
        tertiaryText.textContent = 'Additional Strong Spectrum';
        
        tertiaryLegend.appendChild(tertiaryMarker);
        tertiaryLegend.appendChild(tertiaryText);
        
        legend.appendChild(tertiaryLegend);
    }
    
    radarContainer.appendChild(legend);
    diagramContainer.appendChild(radarContainer);
    
    // Add a description for the diagram
    const description = document.createElement('p');
    description.className = 'spectrum-description';
    description.textContent = 'This radar chart shows your placement on each of the six reality creation spectrums. The closer to the center, the more structured your approach; the further from center, the more fluid and intuitive.';
    diagramContainer.appendChild(description);
}
    
    // Generate the typology pair section
function generateTypologyPairSection(typologyPair) {
    const typologyContainer = document.getElementById('typology-pair');
    typologyContainer.innerHTML = '';

    if (!typologyPair.primary || !typologyPair.secondary) {
        typologyContainer.textContent = 'Unable to determine typology pair from responses.';
        return;
    }

    // Get typology descriptions
    const primaryDesc = assessmentData.typologyDescriptions[`${typologyPair.primary.spectrumId}-${typologyPair.primary.placement}`];
    const secondaryDesc = assessmentData.typologyDescriptions[`${typologyPair.secondary.spectrumId}-${typologyPair.secondary.placement}`];

    // Create typology pair name
    const typologyName = document.createElement('div');
    typologyName.className = 'typology-pair-name';

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

    typologyName.textContent = pairTemplate.name;

    // Create typology description
    const typologyDescription = document.createElement('div');
    typologyDescription.className = 'typology-description';

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = pairTemplate.description;
    typologyDescription.appendChild(descriptionParagraph);

    // Create typology components
    const typologyComponents = document.createElement('div');
    typologyComponents.className = 'typology-components';

    const primaryComponent = document.createElement('div');
    primaryComponent.className = 'typology-component primary-component';

    const primaryTitle = document.createElement('h5');
    primaryTitle.textContent = 'Primary: ' + primaryDesc.name;

    const primaryDescription = document.createElement('p');
    primaryDescription.textContent = primaryDesc.description;

    primaryComponent.appendChild(primaryTitle);
    primaryComponent.appendChild(primaryDescription);

    const secondaryComponent = document.createElement('div');
    secondaryComponent.className = 'typology-component secondary-component';

    const secondaryTitle = document.createElement('h5');
    secondaryTitle.textContent = 'Secondary: ' + secondaryDesc.name;

    const secondaryDescription = document.createElement('p');
    secondaryDescription.textContent = secondaryDesc.description;

    secondaryComponent.appendChild(secondaryTitle);
    secondaryComponent.appendChild(secondaryDescription);

    typologyComponents.appendChild(primaryComponent);
    typologyComponents.appendChild(secondaryComponent);

    // Assemble typology section
    typologyContainer.appendChild(typologyName);
    typologyContainer.appendChild(typologyDescription);
    typologyContainer.appendChild(typologyComponents);
}

// Generate the ideal approaches section
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
    
    // Create strengths section
    const strengthsSection = document.createElement('div');
    strengthsSection.className = 'strengths-section';
    
    const strengthsHeading = document.createElement('h5');
    strengthsHeading.textContent = 'Your Natural Strengths:';
    
    const strengthsParagraph = document.createElement('p');
    strengthsParagraph.textContent = approachesTemplate.strengths;
    
    strengthsSection.appendChild(strengthsHeading);
    strengthsSection.appendChild(strengthsParagraph);
    
    // Create approaches section
    const approachesSection = document.createElement('div');
    approachesSection.className = 'approaches-section';
    
    const approachesHeading = document.createElement('h5');
    approachesHeading.textContent = 'Optimal Manifestation Approaches:';
    
    const approachesList = document.createElement('ul');
    approachesTemplate.approaches.forEach(approach => {
        const listItem = document.createElement('li');
        listItem.textContent = approach;
        approachesList.appendChild(listItem);
    });
    
    approachesSection.appendChild(approachesHeading);
    approachesSection.appendChild(approachesList);
    
    // Assemble approaches container
    approachesContainer.appendChild(strengthsSection);
    approachesContainer.appendChild(approachesSection);
}

// Generate the common misalignments section
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
    
    // Create heading
    const misalignmentsHeading = document.createElement('h5');
    misalignmentsHeading.textContent = 'Approaches That May Create Friction:';
    
    // Create description
    const misalignmentsDescription = document.createElement('p');
    misalignmentsDescription.textContent = 'Based on your typology, these approaches may create resistance or inefficiency in your manifestation process:';
    
    // Create list
    const misalignmentsList = document.createElement('ul');
    misalignmentsTemplate.forEach(misalignment => {
        const listItem = document.createElement('li');
        listItem.textContent = misalignment;
        misalignmentsList.appendChild(listItem);
    });
    
    // Assemble misalignments container
    misalignmentsContainer.appendChild(misalignmentsHeading);
    misalignmentsContainer.appendChild(misalignmentsDescription);
    misalignmentsContainer.appendChild(misalignmentsList);
}

// Generate the mastery priorities section
function generateMasteryPrioritiesSection(masteryScores, dominantValues) {
    const prioritiesContainer = document.getElementById('mastery-priorities');
    prioritiesContainer.innerHTML = '';
    
    // Create core values section
    const valuesSection = document.createElement('div');
    valuesSection.className = 'values-section';
    
    const valuesHeading = document.createElement('h5');
    valuesHeading.textContent = 'Your Core Values & Priorities:';
    
    valuesSection.appendChild(valuesHeading);
    
    const valuesList = document.createElement('ul');
    
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
    
    // Add core values based on dominant values
    dominantValues.corePriorities.forEach(value => {
        if (priorityDescriptions[value]) {
            const listItem = document.createElement('li');
            listItem.textContent = priorityDescriptions[value];
            valuesList.appendChild(listItem);
        }
    });
    
    valuesSection.appendChild(valuesList);
    
    // Create growth areas section
    const growthSection = document.createElement('div');
    growthSection.className = 'growth-section';
    
    const growthHeading = document.createElement('h5');
    growthHeading.textContent = 'Your Growth & Permission Areas:';
    
    growthSection.appendChild(growthHeading);
    
    const growthList = document.createElement('ul');
    
    // Map growth areas to descriptions
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
    
    // Add growth areas based on dominant values
    dominantValues.growthAreas.forEach(value => {
        if (growthDescriptions[value]) {
            const listItem = document.createElement('li');
            listItem.textContent = growthDescriptions[value];
            growthList.appendChild(listItem);
        }
    });
    
    growthSection.appendChild(growthList);
    
    // Assemble priorities container
    prioritiesContainer.appendChild(valuesSection);
    prioritiesContainer.appendChild(growthSection);
}

// Generate the prescriptive strategy section
function generatePrescriptiveStrategySection(typologyPair, dominantValues) {
    const strategyContainer = document.getElementById('prescriptive-strategy');
    strategyContainer.innerHTML = '';
    
    // Create shifts needed section
    const shiftsSection = document.createElement('div');
    shiftsSection.className = 'shifts-section';
    
    const shiftsHeading = document.createElement('h5');
    shiftsHeading.textContent = 'Shifts Needed:';
    
    const shiftsList = document.createElement('ul');
    shiftsList.className = 'shifts-list';
    
    // Determine typology pair key
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
    
    // Generate shifts based on typology and growth areas
    const shifts = generateTypologyShifts(pairKey, dominantValues.growthAreas);
    
    shifts.forEach(shift => {
        const listItem = document.createElement('li');
        listItem.textContent = shift;
        shiftsList.appendChild(listItem);
    });
    
    shiftsSection.appendChild(shiftsHeading);
    shiftsSection.appendChild(shiftsList);
    
    // Create permissions section
    const permissionsSection = document.createElement('div');
    permissionsSection.className = 'permissions-section';
    
    const permissionsHeading = document.createElement('h5');
    permissionsHeading.textContent = 'Acceptance Permissions:';
    
    const permissionsList = document.createElement('ul');
    permissionsList.className = 'permissions-list';
    
    // Generate permissions based on alignment needs and typology
    const permissions = generateAcceptancePermissions(dominantValues.alignmentNeeds, pairKey);
    
    permissions.forEach(permission => {
        const listItem = document.createElement('li');
        listItem.textContent = permission;
        permissionsList.appendChild(listItem);
    });
    
    permissionsSection.appendChild(permissionsHeading);
    permissionsSection.appendChild(permissionsList);
    
    // Create energy support tools section
    const energySection = document.createElement('div');
    energySection.className = 'energy-section';
    
    const energyHeading = document.createElement('h5');
    energyHeading.textContent = 'Energy Support Tools:';
    
    const toolsList = document.createElement('ul');
    toolsList.className = 'tools-list';
    
    // Generate energy support tools based on energy patterns and typology
    const tools = generateEnergySupportTools(dominantValues.energyPatterns, pairKey);
    
    tools.forEach(tool => {
        const listItem = document.createElement('li');
        listItem.textContent = tool;
        toolsList.appendChild(listItem);
    });
    
    energySection.appendChild(energyHeading);
    energySection.appendChild(toolsList);
    
    // Add personalized integration advice
    const integrationSection = document.createElement('div');
    integrationSection.className = 'integration-section';
    
    const integrationHeading = document.createElement('h5');
    integrationHeading.textContent = 'Personalized Integration Strategy:';
    
    const integrationParagraph = document.createElement('p');
    integrationParagraph.textContent = generateIntegrationStrategy(pairKey, dominantValues);
    
    integrationSection.appendChild(integrationHeading);
    integrationSection.appendChild(integrationParagraph);
    
    // Assemble strategy container
    strategyContainer.appendChild(shiftsSection);
    strategyContainer.appendChild(permissionsSection);
    strategyContainer.appendChild(energySection);
    strategyContainer.appendChild(integrationSection);
}

// Helper function to generate typology-specific shifts
function generateTypologyShifts(typologyKey, growthAreas) {
    const shifts = [];
    
    // Add shifts based on growth areas
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
        shifts.push('Develop emotional fluency practices that help you navigate emotional states without being overwhelmed or disconnected from them.');
    }
    
    if (growthAreas.includes('receiving-challenge')) {
        shifts.push('Create receiving rituals that help you open to and recognize manifestations as they emerge, especially in unexpected forms.');
    }
    
    if (growthAreas.includes('decision-doubt')) {
        shifts.push('Establish a personalized decision-making protocol that incorporates both analytical validation and intuitive confirmation.');
    }
    
    if (growthAreas.includes('focus-challenge')) {
        shifts.push('Design focus containers that work with your natural attention style, providing structure while allowing for necessary flexibility.');
    }
    
    if (growthAreas.includes('burnout-pattern')) {
        shifts.push('Implement energy management practices that honor your natural cycles of output and restoration.');
    }
    
    if (growthAreas.includes('commitment-hesitation')) {
        shifts.push('Develop incremental commitment practices that allow you to build confidence and momentum without triggering resistance.');
    }
    
    // Add typology-specific shifts
    switch (typologyKey) {
        case 'structured-structured':
            shifts.push('Create intentional space for intuitive exploration within your highly structured approach.');
            shifts.push('Develop practices for recognizing when flexibility would serve better than rigid adherence to your plans.');
            break;
        case 'structured-balanced':
            shifts.push('Notice when you default to structure out of habit rather than conscious choice, and experiment with more fluid approaches in those moments.');
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
            shifts.push('Develop clear decision criteria for choosing between structured and fluid approaches in different manifestation contexts.');
            shifts.push('Create enough structure to provide momentum without restricting your natural adaptability.');
            break;
        case 'balanced-fluid':
            shifts.push('Allow your fluid aspects to lead your creative process while using your balanced aspects for integration and implementation.');
            shifts.push('Develop practices that help you maintain enough grounding when your fluid aspects pull you into expansive states.');
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

// Helper function to generate acceptance permissions
function generateAcceptancePermissions(alignmentNeeds, typologyKey) {
    const permissions = [];
    
    // Add permissions based on alignment needs
    if (alignmentNeeds.includes('accept-cycles')) {
        permissions.push('Give yourself permission to honor your natural cycles of energy, creativity, and focus rather than forcing constant output.');
    }
    
    if (alignmentNeeds.includes('accept-structure')) {
        permissions.push('Give yourself permission to create and maintain the structures you need, even if others thrive with more spontaneity.');
    }
    
    if (alignmentNeeds.includes('accept-emotions')) {
        permissions.push('Give yourself permission to acknowledge how your emotional states influence your manifestation process without judgment.');
    }
    
    if (alignmentNeeds.includes('accept-gradual-clarity')) {
        permissions.push('Give yourself permission to allow clarity to emerge gradually rather than forcing immediate certainty.');
    }
    
    if (alignmentNeeds.includes('accept-intuition')) {
        permissions.push('Give yourself permission to trust your intuitive guidance, even when you cannot immediately justify it logically.');
    }
    
    if (alignmentNeeds.includes('accept-flexibility')) {
        permissions.push('Give yourself permission to remain flexible and open rather than locking into fixed outcomes or approaches.');
    }
    
    if (alignmentNeeds.includes('control-outcomes')) {
        permissions.push('Give yourself permission to release attachment to specific timelines and forms that your manifestations might take.');
    }
    
    if (alignmentNeeds.includes('control-emotions')) {
        permissions.push('Give yourself permission to experience the full range of emotions as valuable information in your manifestation process.');
    }
    
    if (alignmentNeeds.includes('control-consistency')) {
        permissions.push('Give yourself permission to work with your natural rhythm even when it doesn\'t match external expectations of consistency.');
    }
    
    if (alignmentNeeds.includes('control-clarity')) {
        permissions.push('Give yourself permission to explore and experiment before committing to a clear vision.');
    }
    
    if (alignmentNeeds.includes('control-decisions')) {
        permissions.push('Give yourself permission to make decisions from multiple sources of wisdom, not just analytical certainty.');
    }
    
    if (alignmentNeeds.includes('control-intuition')) {
        permissions.push('Give yourself permission to follow intuitive nudges without needing to justify or explain them.');
    }
    
    // Add typology-specific permissions
    switch (typologyKey) {
        case 'structured-structured':
            permissions.push('Give yourself permission to embrace uncertainty and organic development as part of the manifestation process.');
            break;
        case 'structured-balanced':
            permissions.push('Give yourself permission to trust your natural sense of when structure serves and when flexibility is needed.');
            break;
        case 'structured-fluid':
            permissions.push('Give yourself permission to honor both your need for structure and your intuitive, flowing nature without seeing them as contradictory.');
            break;
        case 'balanced-structured':
            permissions.push('Give yourself permission to adjust your approach in response to changing circumstances without seeing it as inconsistency.');
            break;
        case 'balanced-balanced':
            permissions.push('Give yourself permission to embrace your adaptable nature without needing to commit to one "correct" manifestation approach.');
            break;
        case 'balanced-fluid':
            permissions.push('Give yourself permission to lead with intuition while creating just enough structure to support effective manifestation.');
            break;
        case 'fluid-structured':
            permissions.push('Give yourself permission to honor your intuitive knowing first, then engage your structured aspects for implementation.');
            break;
        case 'fluid-balanced':
            permissions.push('Give yourself permission to follow inspiration and trust that practical implementation can follow organically.');
            break;
        case 'fluid-fluid':
            permissions.push('Give yourself permission to trust your fluid, intuitive process even when others advocate for more structured approaches.');
            break;
    }
    
    return permissions;
}

// Helper function to generate energy support tools
function generateEnergySupportTools(energyPatterns, typologyKey) {
    const tools = [];
    
    // Add tools based on energy patterns
    if (energyPatterns.includes('clear-instructions') || energyPatterns.includes('structured-productivity')) {
        tools.push('A structured manifestation journal with clear prompts and sections for tracking progress and insights.');
    }
    
    if (energyPatterns.includes('intuitive-instincts') || energyPatterns.includes('flexible-productivity')) {
        tools.push('Intuitive visualization exercises that allow for spontaneous insights and creative exploration.');
    }
    
    if (energyPatterns.includes('emotional-inspiration') || energyPatterns.includes('emotional-productivity')) {
        tools.push('Emotional state practices that help you intentionally cultivate high-vibration feelings aligned with your desires.');
    }
    
    if (energyPatterns.includes('balanced-rhythm') || energyPatterns.includes('balanced-productivity')) {
        tools.push('Flexible routines that provide structure while allowing for intuitive adjustments based on energy and inspiration.');
    }
    
    if (energyPatterns.includes('gradual-clarity') || energyPatterns.includes('adaptive-productivity')) {
        tools.push('Progressive clarity exercises that allow your vision to develop and refine over time rather than forcing immediate precision.');
    }
    
    if (energyPatterns.includes('process-trust') || energyPatterns.includes('spontaneous-productivity')) {
        tools.push('Surrender practices that strengthen your ability to release attachment and trust divine timing.');
    }
    
    if (energyPatterns.includes('rigid-routines') || energyPatterns.includes('structured-environment')) {
        tools.push('Adaptable planning systems that provide structure without becoming restrictive.');
    }
    
    if (energyPatterns.includes('ignored-intuition') || energyPatterns.includes('dynamic-environment')) {
        tools.push('Regular intuition check-ins that help you recognize and honor subtle guidance.');
    }
    
    if (energyPatterns.includes('suppressed-emotions') || energyPatterns.includes('emotionally-supportive-environment')) {
        tools.push('Emotional awareness practices that help you recognize and work with emotional energies in manifestation.');
    }
    
    if (energyPatterns.includes('forced-clarity') || energyPatterns.includes('inspiring-environment')) {
        tools.push('Exploratory vision boards or mind maps that allow clarity to emerge through creative expression.');
    }
    
    if (energyPatterns.includes('ignored-cycles') || energyPatterns.includes('balanced-environment')) {
        tools.push('Energy tracking systems that help you work with your natural cycles rather than against them.');
    }
    
    if (energyPatterns.includes('overcontrolling') || energyPatterns.includes('pressure-free-environment')) {
        tools.push('Release rituals that help you let go of attachment to specific outcomes and timelines.');
    }
    
    // Add typology-specific tools
    switch (typologyKey) {
        case 'structured-structured':
            tools.push('Structured intuition exercises that provide a clear framework for accessing and interpreting intuitive insights.');
            tools.push('Manifestation systems with built-in flexibility points that prevent excessive rigidity.');
            break;
        case 'structured-balanced':
            tools.push('Alternating structure and flow practices that leverage both aspects of your typology.');
            tools.push('Decision frameworks that incorporate both analytical and intuitive components.');
            break;
        case 'structured-fluid':
            tools.push('Structured containers for intuitive exploration that provide enough foundation without restricting creative flow.');
            tools.push('Practices that help you translate intuitive insights into structured implementation plans.');
            break;
        case 'balanced-structured':
            tools.push('Adaptable frameworks that provide structure when needed but can flex with changing circumstances.');
            tools.push('Balance assessments that help you determine when to apply more structure or more flow.');
            break;
        case 'balanced-balanced':
            tools.push('Integration practices that help you harmonize different manifestation approaches into a cohesive personal system.');
            tools.push('Discernment tools for selecting the right approach for different manifestation contexts.');
            break;
        case 'balanced-fluid':
            tools.push('Minimal planning systems that support your fluid nature while providing just enough structure.');
            tools.push('Grounding practices that help anchor your expansive energy when needed.');
            break;
        case 'fluid-structured':
            tools.push('Intuition-led planning methods that start with inspired vision and then apply structure for implementation.');
            tools.push('Bridges between intuitive insights and practical action steps.');
            break;
        case 'fluid-balanced':
            tools.push('Vision anchoring practices that help translate expansive ideas into manageable projects.');
            tools.push('Fluid manifestation rituals with just enough structure to support manifestation.');
            break;
        case 'fluid-fluid':
            tools.push('Energetic alignment practices that focus on vibrational matching rather than forced action.');
            tools.push('Minimal grounding techniques that provide just enough foundation without restricting your expansive approach.');
            break;
    }
    
    return tools;
}

// Helper function to generate personalized integration strategy
function generateIntegrationStrategy(typologyKey, dominantValues) {
    let strategy = '';
    
    // Generate base strategy based on typology pair
    switch (typologyKey) {
        case 'structured-structured':
            strategy = "Your optimal integration strategy involves creating intentional space for intuitive exploration within your highly structured approach. As a Structured-Structured type, you thrive with clear systems, but your manifestation power amplifies when you balance this with scheduled periods of open receptivity and flow. Consider implementing regular 'intuition days' where you temporarily set aside your analytical framework and connect purely with inspiration. Additionally, build flexibility checkpoints into your manifestation plans where you pause to ensure your structured approach is serving your true desires rather than limiting them.";
            break;
        case 'structured-balanced':
            strategy = "Your integration strategy leverages your natural balance between structure and adaptability. As a Structured-Balanced type, you benefit from creating clear frameworks that include designated spaces for intuitive adjustment. Start your manifestation process with structured planning, then schedule regular reflection points where you consciously check in with your intuition to refine your approach. Your strength lies in your ability to maintain enough structure for momentum while remaining flexible enough to adjust as circumstances evolve or new insights emerge.";
            break;
        case 'structured-fluid':
            strategy = "Your integration strategy embraces the creative tension between your structured foundation and fluid inspiration. As a Structured-Fluid type, you thrive when you use structure to support rather than constrain your intuitive insights. Create a strong initial framework for your manifestation practice, then allow your fluid aspect to guide the details and implementation. Regular practices that help you move consciously between structured thinking and intuitive flow will amplify your manifestation power.";
            break;
        case 'balanced-structured':
            strategy = "Your integration strategy utilizes your adaptability as a guide for applying structure appropriately. As a Balanced-Structured type, you naturally sense when more or less structure is needed in your manifestation process. Develop a personalized approach that includes both consistent foundational practices and flexible components that can be adjusted based on current needs and energy levels. Your strength lies in knowing when to apply structure for momentum and when to create space for organic development.";
            break;
        case 'balanced-balanced':
            strategy = "Your integration strategy embraces your naturally adaptable approach to manifestation. As a Balanced-Balanced type, you thrive with a flexible framework that can be adjusted based on the specific manifestation, your current energy, and evolving circumstances. Develop clear discernment practices that help you determine when to apply more structure or more flow in different situations. Your strength lies in your ability to select the right tool from multiple approaches without becoming rigid in your methodology.";
            break;
        case 'balanced-fluid':
            strategy = "Your integration strategy honors your primarily intuitive approach while maintaining enough structure for effective manifestation. As a Balanced-Fluid type, you thrive when you lead with inspiration and follow with just enough organization to bring your visions into reality. Develop lightweight systems that support rather than restrict your natural flow, and create regular grounding practices that help you translate expansive ideas into tangible form without losing their essence.";
            break;
        case 'fluid-structured':
            strategy = "Your integration strategy creates bridges between your intuitive insights and structured implementation. As a Fluid-Structured type, you thrive when you allow your intuition to guide the vision while engaging your structured aspect for manifestation. Create a two-phase approach where you first connect deeply with intuitive guidance, then activate your structured abilities to implement effectively. Regular practices that strengthen the connection between these two aspects will amplify your manifestation power.";
            break;
        case 'fluid-balanced':
            strategy = "Your integration strategy leverages your intuitive leadership while incorporating practical elements through your balanced secondary aspect. As a Fluid-Balanced type, you thrive when you maintain connection with your expansive vision while creating enough structure to manifest effectively. Develop practices that help you ground and anchor your inspirations without diminishing their potential. Your strength lies in your ability to translate intuitive insights into practical steps while maintaining alignment with the original vision.";
            break;
        case 'fluid-fluid':
            strategy = "Your integration strategy honors your highly intuitive and expansive approach while creating minimal anchoring for effective manifestation. As a Fluid-Fluid type, you thrive with an approach focused primarily on energetic alignment, inspired action, and surrender to divine timing. Create simple touchpoints that help ground your visions without restricting their expansive nature. Regular practices that help you maintain connection between your expansive vision and physical reality will amplify your manifestation power.";
            break;
        default:
            strategy = "Your integration strategy embraces a balanced approach that honors both structure and flow in your manifestation process. Create a flexible framework that provides enough consistency for momentum while allowing space for intuitive guidance and adjustment. Regular practices that help you connect with both your analytical mind and intuitive wisdom will strengthen your manifestation abilities. Pay attention to which elements of your process feel most natural and aligned, and allow yourself to customize your approach accordingly.";
    }
    
    // Enhance with personalization based on dominant values
    const corePriorities = dominantValues.corePriorities;
    
    if (corePriorities.includes('creative-expression') || corePriorities.includes('craft-mastery')) {
        strategy += " Incorporate creative expression as a core component of your manifestation practice, using artistic exploration to connect with and clarify your desires.";
    }
    
    if (corePriorities.includes('financial-abundance') || corePriorities.includes('wealth-security')) {
        strategy += " Focus on creating a sense of expansive possibility in your relationship with resources, releasing scarcity thinking through targeted abundance practices.";
    }
    
    if (corePriorities.includes('emotional-fulfillment') || corePriorities.includes('emotional-peace')) {
        strategy += " Prioritize emotional alignment practices, recognizing that your emotional state forms the foundation of your manifestation energy.";
    }
    
    if (corePriorities.includes('personal-autonomy') || corePriorities.includes('personal-freedom')) {
        strategy += " Design your manifestation practice to enhance your sense of choice and self-determination, avoiding approaches that feel restrictive or externally imposed.";
    }
    
    if (corePriorities.includes('deep-relationships') || corePriorities.includes('deep-connection')) {
        strategy += " Incorporate connection with others as a supportive element in your manifestation journey, creating opportunities for authentic sharing and mutual support.";
    }
    
    if (corePriorities.includes('spiritual-connection') || corePriorities.includes('higher-meaning')) {
        strategy += " Center your manifestation practice around connection with a higher purpose, regularly reconnecting with the deeper meaning behind your desires.";
    }
    
    return strategy;
}

// Helper function to generate typology-specific recommendations
function generateTypologyRecommendations(typologyKey) {
    // Generate recommendations based on typology pair
    let recommendations = '';
    
    switch (typologyKey) {
        case 'structured-structured':
            recommendations = "Create more space for intuitive insights and divine timing within your structured approach. Schedule regular 'intuition time' where you temporarily set aside analytical thinking and connect with your deeper knowing. Practice recognizing when precision is truly needed versus when flexibility would serve better.";
            break;
        case 'structured-balanced':
            recommendations = "When you notice yourself defaulting to excessive structure, consciously shift to more intuitive approaches. Your strength lies in your adaptability—trust your ability to know when structure or flow is needed. Create flexible frameworks that provide enough structure for progress without restricting creative possibilities.";
            break;
        case 'structured-fluid':
            recommendations = "Use your structured foundation to support rather than restrict your intuitive insights. Create simple systems that capture inspired ideas without overanalyzing them. Allow full creative exploration before organizing implementation. Balance your methodical nature with regular practices that nurture your intuitive side.";
            break;
        case 'balanced-structured':
            recommendations = "Recognize when your structured tendencies are serving you and when they're creating limitation. Create organized systems with built-in flexibility to honor both aspects of your nature. Practice trusting intuitive nudges even when they don't immediately make logical sense, while maintaining your practical foundation.";
            break;
        case 'balanced-balanced':
            recommendations = "Avoid overthinking which approach to use in different situations. Trust your natural ability to select the right tool for each circumstance without excessive analysis. When facing important decisions, briefly check in with both your analytical mind and intuitive wisdom, then move forward with confidence.";
            break;
        case 'balanced-fluid':
            recommendations = "Honor your intuitive nature while maintaining enough structure to manifest effectively. Create minimal frameworks that support rather than restrict your natural flow. Schedule regular grounding practices to balance your expansive tendencies. Trust your ability to integrate practical action with inspired guidance.";
            break;
        case 'fluid-structured':
            recommendations = "Use your structured aspects to ground and implement your intuitive insights. Create simple systems to capture inspired ideas without overanalyzing them. Balance energetic practices with consistent action steps. Allow your methodical side to serve your visionary nature rather than restricting it.";
            break;
        case 'fluid-balanced':
            recommendations = "Maintain your intuitive leadership while incorporating practical elements that help manifest your visions. Create space for full creative flow followed by grounding practices. Use your balanced aspects to translate intuitive insights into actionable steps. Trust your ability to bridge the spiritual and practical realms.";
            break;
        case 'fluid-fluid':
            recommendations = "Incorporate minimal structure to help ground your expansive visions into reality. Schedule regular 'manifestation anchoring' sessions where you identify concrete steps. Remember that some form of consistent practice strengthens your natural gifts. Honor your intuitive process while creating enough structure for effective manifestation.";
            break;
        default:
            recommendations = "Focus on developing a balanced approach that honors both structure and flow. Pay attention to which aspects of manifestation feel most natural to you, and allow yourself to lean into your strengths while developing complementary skills. Create a personalized process that integrates both practical action and intuitive guidance.";
    }
    
    return recommendations;
}

// Calculate and display results
function generateAndDisplayResults() {
    // Get data from scoring.js calculations
    const scoringData = getTypologyAndMasteryData();
    
    const spectrumPlacements = scoringData.typologyResults.placements;
    const typologyPair = scoringData.typologyPair;
    const masteryScores = scoringData.masteryScores;
    const dominantValues = scoringData.dominantValues;
    const personalizedInsights = scoringData.personalizedInsights;
    
    // Display results
    generateSpectrumDiagram(spectrumPlacements, typologyPair);
    generateTypologyPairSection(typologyPair);
    generateIdealApproachesSection(typologyPair);
    generateMisalignmentsSection(typologyPair);
    generateMasteryPrioritiesSection(masteryScores, dominantValues);
    generatePrescriptiveStrategySection(typologyPair, dominantValues);
}
