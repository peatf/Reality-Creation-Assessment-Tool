// Consolidated Scoring System for Reality Creation Assessment

// Spectrum priority order (for typology pair determination)
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

// Calculate typology scores from Part 1 responses
function calculateTypologyScores() {
    const placements = {};
    const scores = {};
    
    // Calculate placement for each spectrum based on user responses
    typologySpectrums.forEach(spectrum => {
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
        
        placements[spectrum.id] = placement;
    });
    
    return {
        scores: scores,
        placements: placements
    };
}

// Determine typology pair based on spectrum placements
function determineTypologyPair(spectrumPlacements, dominantValues) {
    // Find Clear Spectrum Placements (left or right, not balanced)
    const clearPlacements = {};
    const clearSpectrums = [];
    
    Object.entries(spectrumPlacements).forEach(([spectrumId, placement]) => {
        if (placement === 'left' || placement === 'right') {
            clearPlacements[spectrumId] = placement;
            clearSpectrums.push(spectrumId);
        }
    });
    
    // Case A: Two or more clear placements - prioritize based on importance
    if (clearSpectrums.length >= 2) {
        // Calculate scores for each spectrum based on foundational importance
        const spectrumScores = {};
        
        clearSpectrums.forEach(spectrumId => {
            // Base score from foundational importance (inverse of index, so higher = more important)
            const foundationalScore = SPECTRUM_PRIORITY_ORDER.length - SPECTRUM_PRIORITY_ORDER.indexOf(spectrumId);
            
            // Additional score from mastery alignment if available
            let masteryAlignmentScore = 0;
            if (dominantValues) {
                masteryAlignmentScore = calculateMasteryAlignmentScore(spectrumId, clearPlacements[spectrumId], dominantValues);
            }
            
            // Total score (weighted)
            spectrumScores[spectrumId] = (foundationalScore * 2) + masteryAlignmentScore;
        });
        
        // Sort by total score (descending)
        const sortedSpectrums = [...clearSpectrums].sort((a, b) => spectrumScores[b] - spectrumScores[a]);
        
        // Get top two spectrums
        let primarySpectrumId = sortedSpectrums[0];
        let secondarySpectrumId = sortedSpectrums[1];
        
        // Check for complementary qualities (prefer combinations of different placements)
        if (clearPlacements[primarySpectrumId] === clearPlacements[secondarySpectrumId] && sortedSpectrums.length > 2) {
            // Look for a high-scoring spectrum with contrasting placement
            for (let i = 2; i < sortedSpectrums.length; i++) {
                if (clearPlacements[sortedSpectrums[i]] !== clearPlacements[primarySpectrumId]) {
                    // Found a contrasting placement - check if score is close enough to #2
                    const scoreDifference = spectrumScores[secondarySpectrumId] - spectrumScores[sortedSpectrums[i]];
                    
                    // If score is within 30% of #2 spectrum, use for better balance
                    if (scoreDifference < spectrumScores[secondarySpectrumId] * 0.3) {
                        secondarySpectrumId = sortedSpectrums[i];
                        break;
                    }
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
    
    // Case B: Only one clear placement - pair with balanced
    if (clearSpectrums.length === 1) {
        const primarySpectrumId = clearSpectrums[0];
        
        // Find the most important balanced spectrum
        const balancedSpectrums = SPECTRUM_PRIORITY_ORDER.filter(id => 
            id !== primarySpectrumId && spectrumPlacements[id] === 'balanced'
        );
        
        const secondarySpectrumId = balancedSpectrums[0] || SPECTRUM_PRIORITY_ORDER.find(id => id !== primarySpectrumId);
        
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
    
    // Case C: No clear placements (all balanced) - use top two priority spectrums
    const primarySpectrumId = SPECTRUM_PRIORITY_ORDER[0];
    const secondarySpectrumId = SPECTRUM_PRIORITY_ORDER[1];
    
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

// Helper function to calculate how well a spectrum aligns with mastery priorities
function calculateMasteryAlignmentScore(spectrumId, placement, dominantValues) {
    let score = 0;
    
    // Map spectrum and placement combinations to relevant mastery priorities
    const alignmentMap = {
        // Cognitive Alignment
        'cognitive-alignment-left': ['stability-security', 'clarity-challenge', 'structured-productivity'],
        'cognitive-alignment-right': ['intuition-challenge', 'accept-intuition', 'intuitive-instincts'],
        
        // Perceptual Focus
        'perceptual-focus-left': ['clarity-challenge', 'vision-clarity-resistance', 'control-clarity'],
        'perceptual-focus-right': ['accept-flexibility', 'dynamic-environment', 'accept-gradual-clarity'],
        
        // Kinetic Drive
        'kinetic-drive-left': ['structured-productivity', 'accept-structure', 'control-consistency'],
        'kinetic-drive-right': ['action-challenge', 'spontaneous-productivity', 'accept-cycles'],
        
        // Choice Navigation
        'choice-navigation-left': ['decision-doubt', 'control-decisions', 'clear-instructions'],
        'choice-navigation-right': ['accept-intuition', 'intuitive-instincts', 'process-trust'],
        
        // Resonance Field
        'resonance-field-left': ['emotion-challenge', 'emotional-block', 'control-emotions'],
        'resonance-field-right': ['accept-emotions', 'emotional-expression-resistance', 'emotional-inspiration'],
        
        // Manifestation Rhythm
        'manifestation-rhythm-left': ['structured-environment', 'consistency-challenge', 'rigid-routines'],
        'manifestation-rhythm-right': ['accept-cycles', 'ignored-cycles', 'adaptive-productivity']
    };
    
    const key = `${spectrumId}-${placement}`;
    const relevantPriorities = alignmentMap[key] || [];
    
    // Check all mastery priority categories
    Object.keys(dominantValues).forEach(category => {
        if (dominantValues[category] && Array.isArray(dominantValues[category])) {
            // Add points for each matching priority
            dominantValues[category].forEach(priority => {
                if (relevantPriorities.includes(priority)) {
                    score += 1;
                }
            });
        }
    });
    
    return score;
}

// Calculate mastery scores from Part 2 responses
function calculateMasteryScores() {
    if (!userResponses.mastery) {
        return {
            corePriorities: {},
            growthAreas: {},
            alignmentNeeds: {},
            energyPatterns: {}
        };
    }

    // Group answers into categories based on question IDs
    const result = {
        corePriorities: {},
        growthAreas: {},
        alignmentNeeds: {},
        energyPatterns: {}
    };

    // For each answered question ID → chosen value
    for (const [questionId, chosenValue] of Object.entries(userResponses.mastery)) {
        if (questionId.startsWith("core-")) {
            if (!result.corePriorities[chosenValue]) {
                result.corePriorities[chosenValue] = 0;
            }
            result.corePriorities[chosenValue]++;
        } else if (questionId.startsWith("growth-")) {
            if (!result.growthAreas[chosenValue]) {
                result.growthAreas[chosenValue] = 0;
            }
            result.growthAreas[chosenValue]++;
        } else if (questionId.startsWith("alignment-")) {
            if (!result.alignmentNeeds[chosenValue]) {
                result.alignmentNeeds[chosenValue] = 0;
            }
            result.alignmentNeeds[chosenValue]++;
        } else if (questionId.startsWith("energy-")) {
            if (!result.energyPatterns[chosenValue]) {
                result.energyPatterns[chosenValue] = 0;
            }
            result.energyPatterns[chosenValue]++;
        }
    }

    return result;
}

// Determine dominant values from scores
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

// Generate complete result data for display
function generateCompleteResults() {
    // Calculate typology scores from Part 1
    const typologyResults = calculateTypologyScores();
    const spectrumPlacements = typologyResults.placements;
    
    // Calculate mastery scores from Part 2
    const masteryScores = calculateMasteryScores();
    const dominantValues = determineDominantValues(masteryScores);
    
    // Determine typology pair using both parts' data
    const typologyPair = determineTypologyPair(spectrumPlacements, dominantValues);
    
    return {
        typologyResults,
        spectrumPlacements,
        typologyPair,
        masteryScores,
        dominantValues
    };
}

// Make these functions available globally
window.calculateTypologyScores = calculateTypologyScores;
window.determineTypologyPair = determineTypologyPair;
window.calculateMasteryScores = calculateMasteryScores;
window.determineDominantValues = determineDominantValues;
window.generateCompleteResults = generateCompleteResults;
