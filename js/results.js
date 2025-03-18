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
        
        spectrumBar.appendChild(spectrumPosition);
        
        // Add spectrum description tooltip
        const spectrumTooltip = document.createElement('div');
        spectrumTooltip.className = 'spectrum-tooltip';
        spectrumTooltip.textContent = spectrum.description;
        
        // Assemble spectrum row
        spectrumRow.appendChild(spectrumLabel);
        spectrumRow.appendChild(spectrumBar);
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
    
    legend.appendChild(primaryLegend);
    legend.appendChild(secondaryLegend);
    
    diagramContainer.appendChild(legend);
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
        'trust-p<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>
