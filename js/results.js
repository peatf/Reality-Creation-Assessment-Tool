// Results Synthesis System for Reality Creation Assessment

// This file contains the logic for generating and displaying personalized results
// based on the user's responses to both parts of the assessment

// Generate the visual spectrum diagram
function generateSpectrumDiagram(spectrumPlacements, typologyPair) {
    const diagramContainer = document.getElementById('spectrum-diagram');
    diagramContainer.innerHTML = '';
    
    // Create diagram for each spectrum
    assessmentData.typologySpectrums.forEach(spectrum => {
        const placement = spectrumPlacements[spectrum.id];
        
        // Create spectrum row
        const spectrumRow = document.createElement('div');
        spectrumRow.className = 'spectrum-row';
        
        // Create spectrum label
        const spectrumLabel = document.createElement('div');
        spectrumLabel.className = 'spectrum-label';
        
        const leftLabel = document.createElement('span');
        leftLabel.className = 'left-label';
        leftLabel.textContent = spectrum.leftLabel || 'Structured';
        
        const nameLabel = document.createElement('span');
        nameLabel.className = 'name-label';
        nameLabel.textContent = spectrum.name;
        
        const rightLabel = document.createElement('span');
        rightLabel.className = 'right-label';
        rightLabel.textContent = spectrum.rightLabel || 'Intuitive';
        
        spectrumLabel.appendChild(leftLabel);
        spectrumLabel.appendChild(nameLabel);
        spectrumLabel.appendChild(rightLabel);
        
        // Create spectrum bar
        const spectrumBar = document.createElement('div');
        spectrumBar.className = 'spectrum-bar';
        
        // Create spectrum position indicator
        const spectrumPosition = document.createElement('div');
        spectrumPosition.className = 'spectrum-position';
        
        // Set position based on placement
        let positionPercent;
        switch (placement) {
            case 'left':
                positionPercent = 25;
                break;
            case 'balanced':
                positionPercent = 50;
                break;
            case 'right':
                positionPercent = 75;
                break;
            default:
                positionPercent = 50;
        }
        
        spectrumPosition.style.left = `${positionPercent}%`;
        
        // Highlight typology pair spectrums
        if (typologyPair.primary && spectrum.id === typologyPair.primary.spectrumId) {
            spectrumPosition.classList.add('primary-highlight');
            spectrumRow.classList.add('primary-spectrum');
        } else if (typologyPair.secondary && spectrum.id === typologyPair.secondary.spectrumId) {
            spectrumPosition.classList.add('secondary-highlight');
            spectrumRow.classList.add('secondary-spectrum');
        }
        
        // Add additional strong spectrum highlighting if applicable
        // Find any additional strong placements beyond the primary pair
        const additionalStrongSpectrums = findAdditionalStrongSpectrums(spectrumPlacements, typologyPair);
        if (additionalStrongSpectrums.includes(spectrum.id)) {
            spectrumPosition.classList.add('tertiary-highlight');
            spectrumRow.classList.add('tertiary-spectrum');
        }
        
        spectrumBar.appendChild(spectrumPosition);
        
        // Add placement label for clarity
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
        
        // Add spectrum description tooltip
        const spectrumTooltip = document.createElement('div');
        spectrumTooltip.className = 'spectrum-tooltip';
        spectrumTooltip.textContent = spectrum.description;
        
        // Assemble spectrum row
        spectrumRow.appendChild(spectrumLabel);
        spectrumRow.appendChild(spectrumBar);
        spectrumRow.appendChild(placementLabel);
        spectrumRow.appendChild(spectrumTooltip);
        
        diagramContainer.appendChild(spectrumRow);
    });
    
    // Add legend
    const legend = document.createElement('div');
    legend.className = 'diagram-legend';
    
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
    
    legend.appendChild(primaryLegend);
    legend.appendChild(secondaryLegend);
    
    diagramContainer.appendChild(legend);
}

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
    
    return additionalStrong;
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
    
    // Map alignment needs to permissions
    const permissionsMap = {
        'accept-timing': 'Give yourself permission to honor the natural timing of manifestation, even when it doesn\'t match your preferred timeline.',
        'accept-uniqueness': 'Give yourself permission to follow your unique process, even when it looks different from what others teach or practice.',
        'accept-uncertainty': 'Give yourself permission to embrace the inherent uncertainty and mystery that is part of the manifestation process.',
        'align-beliefs': 'Give yourself permission to take time aligning your conscious intentions with your subconscious beliefs before expecting results.',
        'align-balance': 'Give yourself permission to find your own unique balance between active creation and receptive allowing.',
        'align-congruence': 'Give yourself permission to ensure congruence between what you say you want and what you\'re energetically available for.'
    };
    
    // Add permissions based on dominant alignment needs
    dominantValues.alignmentNeeds.forEach(need => {
        if (permissionsMap[need]) {
            const listItem = document.createElement('li');
            listItem.textContent = permissionsMap[need];
            permissionsList.appendChild(listItem);
        }
    });
    
    permissionsSection.appendChild(permissionsHeading);
    permissionsSection.appendChild(permissionsList);
    
    // Create energy support tools section
    const energySection = document.createElement('div');
    energySection.className = 'energy-section';
    
    const energyHeading = document.createElement('h5');
    energyHeading.textContent = 'Energy Support Tools:';
    
    const toolsList = document.createElement('ul');
    
    // Generate energy support tools based on energy patterns and typology
    const tools = generateEnergySupportTools(dominantValues.energyPatterns, pairKey);
    
    tools.forEach(tool => {
        const listItem = document.createElement('li');
        listItem.textContent = tool;
        toolsList.appendChild(listItem);
    });
    
    energySection.appendChild(energyHeading);
    energySection.appendChild(toolsList);
    
    // Add typology recommendations
    const recommendationsSection = document.createElement('div');
    recommendationsSection.className = 'recommendations-section';
    
    const recommendationsHeading = document.createElement('h5');
    recommendationsHeading.textContent = 'Typology-Specific Recommendations:';
    
    const recommendationsParagraph = document.createElement('p');
    recommendationsParagraph.textContent = generateTypologyRecommendations(pairKey);
    
    recommendationsSection.appendChild(recommendationsHeading);
    recommendationsSection.appendChild(recommendationsParagraph);
    
    // Assemble strategy container
    strategyContainer.appendChild(shiftsSection);
    strategyContainer.appendChild(permissionsSection);
    strategyContainer.appendChild(energySection);
    strategyContainer.appendChild(recommendationsSection);
}

// Helper function to generate typology-specific shifts
function generateTypologyShifts(typologyKey, growthAreas) {
    const shifts = [];
    
    // Add shifts based on growth areas
    if (growthAreas.includes('trust-intuition')) {
        shifts.push('Develop practices that strengthen your connection with your intuition, such as regular meditation or journaling.');
    }
    
    if (growthAreas.includes('practical-action')) {
        shifts.push('Create a simple action plan with small, consistent steps toward your manifestation goals.');
    }
    
    if (growthAreas.includes('focus-commitment')) {
        shifts.push('Establish clear priorities and regular check-ins to maintain focus on your most important manifestations.');
    }
    
    if (growthAreas.includes('trust-process')) {
        shifts.push('Cultivate patience and trust through practices that remind you of previous manifestation successes.');
    }
    
    if (growthAreas.includes('develop-structure')) {
        shifts.push('Create supportive routines and systems that make consistent manifestation practices easier.');
    }
    
    if (growthAreas.includes('release-attachment')) {
        shifts.push('Practice releasing control and attachment through surrender meditation or similar techniques.');
    }
    
    // Add typology-specific shifts
    switch (typologyKey) {
        case 'structured-structured':
            shifts.push('Create more space for intuitive insights and divine timing within your structured approach.');
            break;
        case 'structured-balanced':
            shifts.push('When you notice yourself defaulting to excessive structure, consciously shift to more intuitive approaches.');
            break;
        case 'structured-fluid':
            shifts.push('Use your structured foundation to support rather than restrict your intuitive insights.');
            break;
        case 'balanced-structured':
            shifts.push('Recognize when your structured tendencies are serving you and when they\'re creating limitation.');
            break;
        case 'balanced-balanced':
            shifts.push('Avoid overthinking which approach to use in different situations. Trust your natural adaptability.');
            break;
        case 'balanced-fluid':
            shifts.push('Honor your intuitive nature while maintaining enough structure to manifest effectively.');
            break;
        case 'fluid-structured':
            shifts.push('Use your structured aspects to ground and implement your intuitive insights.');
            break;
        case 'fluid-balanced':
            shifts.push('Maintain your intuitive leadership while incorporating practical elements that help manifest your visions.');
            break;
        case 'fluid-fluid':
            shifts.push('Incorporate minimal structure to help ground your expansive visions into reality.');
            break;
    }
    
    return shifts;
}

// Helper function to generate energy support tools
function generateEnergySupportTools(energyPatterns, typologyKey) {
    const tools = [];
    
    // Add tools based on energy patterns
    if (energyPatterns.includes('clarity-focus')) {
        tools.push('Vision boards or detailed visualization practices that incorporate specific sensory details.');
    }
    
    if (energyPatterns.includes('openness-receptivity')) {
        tools.push('Regular meditation or mindfulness practices that cultivate presence and receptivity.');
    }
    
    if (energyPatterns.includes('creative-surge')) {
        tools.push('Creative expression through art, writing, or movement to activate and direct manifestation energy.');
    }
    
    if (energyPatterns.includes('structured-environment')) {
        tools.push('Organized, clutter-free spaces that support clear thinking and focused intention.');
    }
    
    if (energyPatterns.includes('harmonious-environment')) {
        tools.push('Creating environments with harmonious colors, sounds, and elements that elevate your energy.');
    }
    
    if (energyPatterns.includes('stimulating-environment')) {
        tools.push('Varied environments that provide fresh perspectives and inspiration for your manifestation process.');
    }
    
    if (energyPatterns.includes('replenish-structure')) {
        tools.push('Regular planning sessions and structured self-care activities to maintain your energy.');
    }
    
    if (energyPatterns.includes('replenish-connection')) {
        tools.push('Deep connection practices like heart-centered meditation or meaningful conversations.');
    }
    
    if (energyPatterns.includes('replenish-novelty')) {
        tools.push('Exploring new ideas, learning, and creative experimentation to keep your energy fresh.');
    }
    
    if (energyPatterns.includes('shift-clarify')) {
        tools.push('Journaling exercises that help clarify intentions and next steps in specific detail.');
    }
    
    if (energyPatterns.includes('shift-feeling')) {
        tools.push('Gratitude and appreciation practices that help you embody the feeling of your desires fulfilled.');
    }
    
    if (energyPatterns.includes('shift-vibration')) {
        tools.push('Music, movement, or other activities that quickly elevate your energy and mood.');
    }
    
    // Add typology-specific tools
    switch (typologyKey) {
        case 'structured-structured':
            tools.push('Flexible planning systems that incorporate space for intuitive insights.');
            break;
        case 'structured-balanced':
            tools.push('Tools that blend structure with flexibility, such as adaptable planning methods.');
            break;
        case 'structured-fluid':
            tools.push('Systems for capturing intuitive insights that can later be organized and implemented.');
            break;
        case 'balanced-structured':
            tools.push('Regular check-ins to assess whether you need more structure or flow in your current phase.');
            break;
        case 'balanced-balanced':
            tools.push('Practices that honor both your analytical and intuitive sides, such as analytical meditation.');
            break;
        case 'balanced-fluid':
            tools.push('Light structures that support rather than restrict your natural flow and creativity.');
            break;
        case 'fluid-structured':
            tools.push('Methods for grounding intuitive insights through practical implementation strategies.');
            break;
        case 'fluid-balanced':
            tools.push('Practices that honor your visionary nature while providing sufficient grounding.');
            break;
        case 'fluid-fluid':
            tools.push('Minimal anchoring practices to help manifest your inspirations in tangible form.');
            break;
    }
    
    return tools;
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
    // Calculate spectrum placements
    const typologyResults = calculateTypologyScores();
    const spectrumPlacements = typologyResults.placements;
    
    // Determine typology pair
    const typologyPair = determineTypologyPair(spectrumPlacements);
    
    // Calculate mastery scores
    const masteryScores = calculateMasteryScores();
    const dominantValues = determineDominantValues(masteryScores);
    
    // Generate personalized insights
    const personalizedInsights = generatePersonalizedInsights(typologyPair, dominantValues);
    
    // Display results
    generateSpectrumDiagram(spectrumPlacements, typologyPair);
    generateTypologyPairSection(typologyPair);
    generateIdealApproachesSection(typologyPair);
    generateMisalignmentsSection(typologyPair);
    generateMasteryPrioritiesSection(masteryScores, dominantValues);
    generatePrescriptiveStrategySection(typologyPair, dominantValues);
}
