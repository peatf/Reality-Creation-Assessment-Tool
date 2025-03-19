// Scoring System for Reality Creation Assessment
// This file contains the logic for calculating scores and determining results
// for both parts of the Reality Creation Assessment.

// ---------------------------
// 1. Calculate Typology Scores
// ---------------------------
function calculateTypologyScores() {
    const placements = {};
    const scores = {};
    
    // Calculate placement for each spectrum
    assessmentData.typologySpectrums.forEach(spectrum => {
        const questionIds = spectrum.questions.map(q => q.id);
        const responses = questionIds.map(id => userResponses.typology[id]);
        
        // Count occurrences of each value
        const leftCount = responses.filter(r => r === 'left').length;
        const balancedCount = responses.filter(r => r === 'balanced').length;
        const rightCount = responses.filter(r => r === 'right').length;
        
        // Store raw scores
        scores[spectrum.id] = {
            left: leftCount,
            balanced: balancedCount,
            right: rightCount
        };
        
        // Determine placement based on criteria
        let placement;
        if (responses[0] === responses[1]) {
            // Both answers identical → definitive placement
            placement = responses[0];
        } else {
            // Differing answers → default to Balanced
            placement = 'balanced';
        }
        
        // Store placement
        placements[spectrum.id] = placement;
    });
    
    return {
        scores: scores,
        placements: placements
    };
}

/**
 * Typology Pair Mapping System
 * --------------------------------
 * This implementation follows the design from the RTF document's 
 * "Typology System: Personalized Reality Creation Identity" section.
 * The system creates personalized typology pairs based on the user's 
 * two strongest spectrum placements.
 *
 * Key concepts:
 * 1. Each spectrum (Cognitive Alignment, Perceptual Focus, etc.) 
 *    has a placement on a Left-Balanced-Right scale
 * 2. Left = Structured, Balanced = Adaptive, Right = Fluid/Intuitive
 * 3. The typology pair is determined by finding the two most clearly 
 *    defined spectrums (those with consistent Left or Right placements)
 * 4. If more than two strong placements exist, the system prioritizes:
 *    - Alignment with Mastery Assessment priorities
 *    - Foundational importance (Cognitive Alignment & Kinetic Drive first)
 *    - Balance of complementary qualities
 * 
 * Examples:
 * - Cog Alignment (Rational/Left) + Kinetic Drive (Spontaneous/Right) 
 *   → "Calculated Initiator"
 * - Perceptual Focus (Receptive/Right) + Choice Navigation (Fluid/Right) 
 *   → "Quantum Manifestor"
 * 
 * The system is designed to encourage nuance rather than rigid identity.
 */

// Spectrum priority order (from most to least foundational for typology pair determination)
const SPECTRUM_PRIORITY_ORDER = [
    'cognitive-alignment',   // How users mentally process reality
    'kinetic-drive',         // How users take action and generate momentum
    'choice-navigation',     // Decision-making style
    'perceptual-focus',      // Clarity and openness in manifestation
    'resonance-field',       // Emotional interaction in manifestation
    'manifestation-rhythm'   // Sustainability and adaptability over time
];

// Placement mapping for typology pair determination
const PLACEMENT_MAPPING = {
    left: 'structured',    // Grounded, structured, logical, methodical
    balanced: 'balanced',  // Integrative and adaptive
    right: 'fluid'         // Expansive, intuitive, momentum-driven
};

// -------------------------------
// 2. Determine Typology Pair
// -------------------------------
function determineTypologyPair(spectrumPlacements) {
    // Step 1: Identify Clear Spectrum Placements
    // Clear placement = consistent Left or Right (not Balanced)
    const clearPlacements = {};
    const clearSpectrums = [];
    
    Object.entries(spectrumPlacements).forEach(([spectrumId, placement]) => {
        if (placement === 'left' || placement === 'right') {
            clearPlacements[spectrumId] = placement;
            clearSpectrums.push(spectrumId);
        }
    });
    
    // Step 2: Handle different cases based on number of clear placements
    
    // Case A: Exactly two clear placements - use these as the typology pair
    if (clearSpectrums.length === 2) {
        const primarySpectrumId = clearSpectrums[0];
        const secondarySpectrumId = clearSpectrums[1];
        
        return {
            key: `${PLACEMENT_MAPPING[clearPlacements[primarySpectrumId]]}-${PLACEMENT_MAPPING[clearPlacements[secondarySpectrumId]]}`,
            primary: {
                spectrumId: primarySpectrumId,
                placement: clearPlacements[primarySpectrumId]
            },
            secondary: {
                spectrumId: secondarySpectrumId,
                placement: clearPlacements[secondarySpectrumId]
            }
        };
    }
    
    // Case B: More than two clear placements - need to prioritize
    if (clearSpectrums.length > 2) {
        // Sort by foundational importance (per RTF priority order)
        const sortedClearSpectrums = [...clearSpectrums].sort((a, b) => {
            return SPECTRUM_PRIORITY_ORDER.indexOf(a) - SPECTRUM_PRIORITY_ORDER.indexOf(b);
        });
        
        // Check for complementary qualities (prefer combinations of different placements)
        // This implements the "balanced combination of complementary qualities" idea
        let primarySpectrumId = sortedClearSpectrums[0];
        let secondarySpectrumId = sortedClearSpectrums[1];
        
        // If the first two have the same placement, try to find a contrasting placement
        // for a more balanced pair (if available)
        if (clearPlacements[primarySpectrumId] === clearPlacements[secondarySpectrumId]) {
            for (let i = 2; i < sortedClearSpectrums.length; i++) {
                if (clearPlacements[sortedClearSpectrums[i]] !== clearPlacements[primarySpectrumId]) {
                    secondarySpectrumId = sortedClearSpectrums[i];
                    break;
                }
            }
        }
        
        return {
            key: `${PLACEMENT_MAPPING[clearPlacements[primarySpectrumId]]}-${PLACEMENT_MAPPING[clearPlacements[secondarySpectrumId]]}`,
            primary: {
                spectrumId: primarySpectrumId,
                placement: clearPlacements[primarySpectrumId]
            },
            secondary: {
                spectrumId: secondarySpectrumId,
                placement: clearPlacements[secondarySpectrumId]
            }
        };
    }
    
    // Case C: Fewer than two clear placements (mostly Balanced)
    if (clearSpectrums.length === 1) {
        // We have one clear placement - pair it with the strongest balanced spectrum
        const primarySpectrumId = clearSpectrums[0];
        
        // Find the most foundational balanced spectrum
        const balancedSpectrums = SPECTRUM_PRIORITY_ORDER.filter(id => 
            !clearSpectrums.includes(id) && spectrumPlacements[id] === 'balanced'
        );
        
        const secondarySpectrumId = balancedSpectrums[0];
        
        return {
            key: `${PLACEMENT_MAPPING[clearPlacements[primarySpectrumId]]}-balanced`,
            primary: {
                spectrumId: primarySpectrumId,
                placement: clearPlacements[primarySpectrumId]
            },
            secondary: {
                spectrumId: secondarySpectrumId,
                placement: 'balanced'
            }
        };
    }
    
    // Case D: No clear placements (all Balanced)
    // Select the two most foundational spectrums based on priority order
    const sortedSpectrums = [...SPECTRUM_PRIORITY_ORDER].filter(id => 
        spectrumPlacements[id] === 'balanced'
    );
    
    const primarySpectrumId = sortedSpectrums[0];
    const secondarySpectrumId = sortedSpectrums[1];
    
    return {
        key: 'balanced-balanced',
        primary: {
            spectrumId: primarySpectrumId,
            placement: 'balanced'
        },
        secondary: {
            spectrumId: secondarySpectrumId,
            placement: 'balanced'
        }
    };
}

// -------------------------------
// 3. Calculate Mastery Scores
// -------------------------------
function calculateMasteryScores() {
    const scores = {
        corePriorities: {},
        growthAreas: {},
        alignmentNeeds: {},
        energyPatterns: {}
    };
    
    // Count occurrences of each value in Core Priorities
    masteryAssessmentData.corePriorities.forEach(question => {
        const response = userResponses.mastery[question.id];
        if (response) {
            scores.corePriorities[response] = (scores.corePriorities[response] || 0) + 1;
        }
    });
    
    // Count occurrences of each value in Growth Areas
    masteryAssessmentData.growthAreas.forEach(question => {
        const response = userResponses.mastery[question.id];
        if (response) {
            scores.growthAreas[response] = (scores.growthAreas[response] || 0) + 1;
        }
    });
    
    // Count occurrences of each value in Alignment Needs
    masteryAssessmentData.alignmentNeeds.forEach(question => {
        const response = userResponses.mastery[question.id];
        if (response) {
            scores.alignmentNeeds[response] = (scores.alignmentNeeds[response] || 0) + 1;
        }
    });
    
    // Count occurrences of each value in Energy Patterns
    masteryAssessmentData.energyPatterns.forEach(question => {
        const response = userResponses.mastery[question.id];
        if (response) {
            scores.energyPatterns[response] = (scores.energyPatterns[response] || 0) + 1;
        }
    });
    
    return scores;
}

// -------------------------------
// 4. Determine Dominant Values
// -------------------------------
function determineDominantValues(masteryScores) {
    const dominantValues = {
        corePriorities: [],
        growthAreas: [],
        alignmentNeeds: [],
        energyPatterns: []
    };
    
    // Helper function to get dominant values from a score category
    function getDominantValues(scoreCategory) {
        if (Object.keys(scoreCategory).length === 0) {
            return [];
        }
        
        // Find the maximum score
        const maxScore = Math.max(...Object.values(scoreCategory));
        
        // Get all values with the maximum score
        return Object.entries(scoreCategory)
            .filter(([, score]) => score === maxScore)
            .map(([value]) => value);
    }
    
    // Determine the dominant values for each category
    dominantValues.corePriorities = getDominantValues(masteryScores.corePriorities);
    dominantValues.growthAreas = getDominantValues(masteryScores.growthAreas);
    dominantValues.alignmentNeeds = getDominantValues(masteryScores.alignmentNeeds);
    dominantValues.energyPatterns = getDominantValues(masteryScores.energyPatterns);
    
    return dominantValues;
}

// --------------------------------------------------
// 5. Generate Personalized Insights (Final Assembly)
// --------------------------------------------------
function generatePersonalizedInsights(typologyPair, dominantValues) {
    const insights = {
        typology: {},
        idealApproaches: [],
        misalignments: [],
        masteryPriorities: {},
        prescriptiveStrategy: {}
    };
    
    // Get typology pair template
    const pairTemplate = assessmentData.resultsTemplates.typologyPairs[typologyPair.key];
    
    // 5a. Typology block
    insights.typology = {
        name: pairTemplate.name,
        description: pairTemplate.description,
        primary: {
            spectrumId: typologyPair.primary.spectrumId,
            placement: typologyPair.primary.placement,
            description: assessmentData.typologyDescriptions[`${typologyPair.primary.spectrumId}-${typologyPair.primary.placement}`]
        },
        secondary: {
            spectrumId: typologyPair.secondary.spectrumId,
            placement: typologyPair.secondary.placement,
            description: assessmentData.typologyDescriptions[`${typologyPair.secondary.spectrumId}-${typologyPair.secondary.placement}`]
        }
    };
    
    // 5b. Ideal approaches
    const approachesTemplate = assessmentData.resultsTemplates.idealApproaches[typologyPair.key];
    insights.idealApproaches = {
        strengths: approachesTemplate.strengths,
        approaches: approachesTemplate.approaches
    };
    
    // 5c. Common misalignments
    insights.misalignments = assessmentData.resultsTemplates.misalignments[typologyPair.key];
    
    // 5d. Mastery priorities
    insights.masteryPriorities = {
        coreValues: dominantValues.corePriorities,
        growthAreas: dominantValues.growthAreas
    };
    
    // 5e. Prescriptive strategy
    insights.prescriptiveStrategy = {
        alignmentNeeds: dominantValues.alignmentNeeds,
        energyPatterns: dominantValues.energyPatterns,
        typologyRecommendations: generateTypologyRecommendations(typologyPair.key)
    };
    
    return insights;
}

// -----------------------------------------
// 6. Generate Typology-Specific Suggestions
// -----------------------------------------
function generateTypologyRecommendations(typologyKey) {
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
