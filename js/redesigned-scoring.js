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
    strongLeft: 'strongly-structured',  // Highly grounded, structured, logical, methodical
    leftLeaning: 'structured',          // Leaning toward structure, logic, and method
    left: 'structured',                 // Legacy support for original scoring
    balanced: 'balanced',               // Integrative and adaptive
    right: 'fluid',                     // Legacy support for original scoring
    rightLeaning: 'fluid',              // Leaning toward intuition, flow, and spontaneity
    strongRight: 'strongly-fluid'       // Highly expansive, intuitive, momentum-driven
};

// Calculate typology scores from Part 1 responses with mastery integration
function calculateTypologyScores() {
    const placements = {};
    const scores = {};
    const numericScores = {};
    const originalNumericScores = {};
    
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
        
        // Calculate numerical score where:
        // Left/Structured = -1
        // Balanced = 0
        // Right/Fluid = +1
        let numericScore = 0;
        for (const response of responses) {
            if (response === 'left') numericScore -= 1;
            else if (response === 'right') numericScore += 1;
            // balanced responses add 0
        }
        
        // Store original numeric score (before mastery influence)
        originalNumericScores[spectrum.id] = numericScore;
        // Initialize numeric scores (will be updated with mastery influences)
        numericScores[spectrum.id] = numericScore;
    });
    
    // Apply mastery influences if mastery responses exist
    let masteryInfluences = {};
    if (userResponses.mastery && Object.keys(userResponses.mastery).length > 0) {
        // Calculate mastery scores
        const masteryScores = calculateMasteryScores();
        const dominantValues = determineDominantValues(masteryScores);
        
        // Apply mastery influences to numeric scores
        const { adjustedScores, influences } = applyMasteryInfluences(originalNumericScores, dominantValues);
        
        // Update numeric scores with the adjusted values
        Object.keys(adjustedScores).forEach(spectrumId => {
            numericScores[spectrumId] = adjustedScores[spectrumId];
        });
        
        // Store influences for explanation in results
        masteryInfluences = influences;
    }
    
    // Determine placements based on adjusted numeric scores
    Object.keys(numericScores).forEach(spectrumId => {
        const score = numericScores[spectrumId];
        let placement;
        
        if (score <= -2) {
            placement = 'strongLeft'; // Strongly structured
        } else if (score === -1) {
            placement = 'leftLeaning'; // Leaning structured
        } else if (score === 0) {
            placement = 'balanced'; // Balanced
        } else if (score === 1) {
            placement = 'rightLeaning'; // Leaning fluid
        } else { // score >= 2
            placement = 'strongRight'; // Strongly fluid
        }
        
        placements[spectrumId] = placement;
    });
    
    return {
        scores: scores,
        placements: placements,
        numericScores: numericScores,
        originalNumericScores: originalNumericScores,
        masteryInfluences: masteryInfluences
    };
}

// Determine typology pair based on spectrum placements
function determineTypologyPair(spectrumPlacements, dominantValues) {
    // Find Clear Spectrum Placements (not balanced)
    const clearPlacements = {};
    const clearSpectrums = [];
    
    Object.entries(spectrumPlacements).forEach(([spectrumId, placement]) => {
        if (placement !== 'balanced') {
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
            
            // Additional score from placement strength
            let placementScore = 0;
            const placement = spectrumPlacements[spectrumId];
            if (placement === 'strongLeft' || placement === 'strongRight') {
                placementScore = 2; // Strongly placed spectrums are prioritized
            } else if (placement === 'leftLeaning' || placement === 'rightLeaning') {
                placementScore = 1; // Leaning spectrums get a small boost
            }
            
            // Additional score from mastery alignment if available
            let masteryAlignmentScore = 0;
            if (dominantValues) {
                masteryAlignmentScore = calculateMasteryAlignmentScore(spectrumId, placement, dominantValues);
            }
            
            // Total score (weighted)
            spectrumScores[spectrumId] = (foundationalScore * 2) + placementScore + masteryAlignmentScore;
        });
        
        // Sort by total score (descending)
        const sortedSpectrums = [...clearSpectrums].sort((a, b) => spectrumScores[b] - spectrumScores[a]);
        
        // Get top two spectrums
        let primarySpectrumId = sortedSpectrums[0];
        let secondarySpectrumId = sortedSpectrums[1];
        
        // Check for complementary qualities (prefer combinations of different placements)
        const primaryIsStructured = ['strongLeft', 'leftLeaning'].includes(clearPlacements[primarySpectrumId]);
        const primaryIsFluid = ['strongRight', 'rightLeaning'].includes(clearPlacements[primarySpectrumId]);
        
        const secondaryIsStructured = ['strongLeft', 'leftLeaning'].includes(clearPlacements[secondarySpectrumId]);
        const secondaryIsFluid = ['strongRight', 'rightLeaning'].includes(clearPlacements[secondarySpectrumId]);
        
        // If both are on the same side of the spectrum, look for a contrasting one
        if ((primaryIsStructured && secondaryIsStructured) || (primaryIsFluid && secondaryIsFluid)) {
            for (let i = 2; i < sortedSpectrums.length; i++) {
                const tertiaryIsStructured = ['strongLeft', 'leftLeaning'].includes(clearPlacements[sortedSpectrums[i]]);
                const tertiaryIsFluid = ['strongRight', 'rightLeaning'].includes(clearPlacements[sortedSpectrums[i]]);
                
                // If the tertiary spectrum is on the opposite side from the primary
                if ((primaryIsStructured && tertiaryIsFluid) || (primaryIsFluid && tertiaryIsStructured)) {
                    // Check if score is close enough to #2
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

// Mastery-Spectrum Influence Mapping
// This defines how mastery responses influence spectrum placements
const MASTERY_SPECTRUM_INFLUENCE = {
    // Core Priorities influence on spectrums
    corePriorities: {
        'creative-expression': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'perceptual-focus': 0.5      // Increases fluid tendency
        },
        'financial-abundance': {
            'perceptual-focus': -0.5,    // Increases structured tendency
            'kinetic-drive': -0.3        // Slightly increases structured tendency
        }, 
        'emotional-fulfillment': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'personal-autonomy': {
            'choice-navigation': 0.5,    // Increases fluid tendency
            'kinetic-drive': 0.3         // Slightly increases fluid tendency
        },
        'deep-relationships': {
            'resonance-field': 0.3,      // Slightly increases fluid tendency
            'perceptual-focus': 0.3      // Slightly increases fluid tendency
        },
        'spiritual-connection': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'choice-navigation': 0.3     // Slightly increases fluid tendency
        },
        'craft-mastery': {
            'kinetic-drive': -0.5,       // Increases structured tendency
            'manifestation-rhythm': -0.3 // Slightly increases structured tendency
        },
        'wealth-security': {
            'manifestation-rhythm': -0.5, // Increases structured tendency
            'perceptual-focus': -0.3     // Slightly increases structured tendency
        },
        'emotional-peace': {
            'resonance-field': -0.5,     // Increases structured tendency
            'manifestation-rhythm': -0.3 // Slightly increases structured tendency
        },
        'personal-freedom': {
            'manifestation-rhythm': 0.5, // Increases fluid tendency
            'choice-navigation': 0.5     // Increases fluid tendency
        },
        'deep-connection': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'higher-meaning': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'perceptual-focus': 0.3      // Slightly increases fluid tendency
        },
        'confidence-trust': {
            'choice-navigation': 0.5,    // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'peace-ease': {
            'kinetic-drive': 0.3,        // Slightly increases fluid tendency
            'manifestation-rhythm': 0.5  // Increases fluid tendency
        },
        'choice-autonomy': {
            'choice-navigation': 0.5,    // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'stability-security': {
            'manifestation-rhythm': -0.5, // Increases structured tendency
            'perceptual-focus': -0.5     // Increases structured tendency
        },
        'passion-inspiration': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'kinetic-drive': 0.5         // Increases fluid tendency
        },
        'joy-excitement': {
            'kinetic-drive': 0.5,        // Increases fluid tendency
            'resonance-field': 0.5       // Increases fluid tendency
        }
    },
    
    // Growth Areas influence on spectrums
    growthAreas: {
        'consistency-challenge': {
            'manifestation-rhythm': -0.3, // Slightly increases structured tendency
            'kinetic-drive': -0.3        // Slightly increases structured tendency
        },
        'clarity-challenge': {
            'perceptual-focus': -0.3,    // Slightly increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'action-challenge': {
            'kinetic-drive': -0.3,       // Slightly increases structured tendency
            'choice-navigation': -0.3    // Slightly increases structured tendency
        },
        'intuition-challenge': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'choice-navigation': 0.3     // Slightly increases fluid tendency
        },
        'emotion-challenge': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'receiving-challenge': {
            'perceptual-focus': 0.5,     // Increases fluid tendency
            'manifestation-rhythm': 0.3  // Slightly increases fluid tendency
        },
        'decision-doubt': {
            'choice-navigation': -0.5,   // Increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'action-gap': {
            'kinetic-drive': -0.5,       // Increases structured tendency
            'choice-navigation': -0.3    // Slightly increases structured tendency
        },
        'focus-challenge': {
            'perceptual-focus': -0.5,    // Increases structured tendency
            'manifestation-rhythm': -0.3 // Slightly increases structured tendency
        },
        'emotional-block': {
            'resonance-field': -0.5,     // Increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'burnout-pattern': {
            'manifestation-rhythm': 0.5, // Increases fluid tendency
            'kinetic-drive': 0.3         // Slightly increases fluid tendency
        },
        'commitment-hesitation': {
            'choice-navigation': 0.5,    // Increases fluid tendency
            'perceptual-focus': 0.3      // Slightly increases fluid tendency
        },
        'self-trust-resistance': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'choice-navigation': 0.3     // Slightly increases fluid tendency
        },
        'risk-resistance': {
            'choice-navigation': 0.5,    // Increases fluid tendency
            'kinetic-drive': 0.3         // Slightly increases fluid tendency
        },
        'emotional-expression-resistance': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'vision-clarity-resistance': {
            'perceptual-focus': -0.5,    // Increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'momentum-resistance': {
            'kinetic-drive': 0.5,        // Increases fluid tendency
            'manifestation-rhythm': 0.3  // Slightly increases fluid tendency
        },
        'control-resistance': {
            'perceptual-focus': 0.5,     // Increases fluid tendency
            'choice-navigation': 0.5     // Increases fluid tendency
        }
    },
    
    // Alignment Needs influence on spectrums
    alignmentNeeds: {
        'accept-cycles': {
            'manifestation-rhythm': 0.5, // Increases fluid tendency
            'kinetic-drive': 0.3         // Slightly increases fluid tendency
        },
        'accept-structure': {
            'kinetic-drive': -0.5,       // Increases structured tendency
            'manifestation-rhythm': -0.3 // Slightly increases structured tendency
        },
        'accept-emotions': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'accept-gradual-clarity': {
            'perceptual-focus': 0.5,     // Increases fluid tendency
            'manifestation-rhythm': 0.3  // Slightly increases fluid tendency
        },
        'accept-intuition': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'choice-navigation': 0.5     // Increases fluid tendency
        },
        'accept-flexibility': {
            'perceptual-focus': 0.5,     // Increases fluid tendency
            'manifestation-rhythm': 0.5  // Increases fluid tendency
        },
        'control-outcomes': {
            'perceptual-focus': -0.5,    // Increases structured tendency
            'manifestation-rhythm': -0.5 // Increases structured tendency
        },
        'control-emotions': {
            'resonance-field': -0.5,     // Increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'control-consistency': {
            'manifestation-rhythm': -0.5, // Increases structured tendency
            'kinetic-drive': -0.5        // Increases structured tendency
        },
        'control-clarity': {
            'perceptual-focus': -0.5,    // Increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'control-decisions': {
            'choice-navigation': -0.5,   // Increases structured tendency
            'cognitive-alignment': -0.3  // Slightly increases structured tendency
        },
        'control-intuition': {
            'cognitive-alignment': -0.5, // Increases structured tendency
            'choice-navigation': -0.5    // Increases structured tendency
        }
    },
    
    // Energy Patterns influence on spectrums
    energyPatterns: {
        'clear-instructions': {
            'perceptual-focus': -0.5,    // Increases structured tendency
            'choice-navigation': -0.3    // Slightly increases structured tendency
        },
        'intuitive-instincts': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'choice-navigation': 0.5     // Increases fluid tendency
        },
        'emotional-inspiration': {
            'resonance-field': 0.5,      // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'balanced-rhythm': {
            'manifestation-rhythm': 0,   // Neutral, balancing influence
            'kinetic-drive': 0           // Neutral, balancing influence
        },
        'gradual-clarity': {
            'perceptual-focus': 0.5,     // Increases fluid tendency
            'cognitive-alignment': 0.3   // Slightly increases fluid tendency
        },
        'process-trust': {
            'choice-navigation': 0.5,    // Increases fluid tendency
            'manifestation-rhythm': 0.3  // Slightly increases fluid tendency
        },
        'rigid-routines': {
            'manifestation-rhythm': -0.5, // Increases structured tendency
            'kinetic-drive': -0.5        // Increases structured tendency
        },
        'ignored-intuition': {
            'cognitive-alignment': 0.5,  // Increases fluid tendency
            'choice-navigation': 0.3     // Slightly increases fluid tendency
        },
        'structured-productivity': {
            'kinetic-drive': -0.5,       // Increases structured tendency
            'perceptual-focus': -0.3     // Slightly increases structured tendency
        },
        'spontaneous-productivity': {
            'kinetic-drive': 0.5,        // Increases fluid tendency
            'manifestation-rhythm': 0.3  // Slightly increases fluid tendency
        },
        'structured-environment': {
            'manifestation-rhythm': -0.5, // Increases structured tendency
            'perceptual-focus': -0.3     // Slightly increases structured tendency
        },
        'dynamic-environment': {
            'manifestation-rhythm': 0.5, // Increases fluid tendency
            'perceptual-focus': 0.3      // Slightly increases fluid tendency
        }
    }
};

// Helper function to calculate how well a spectrum aligns with mastery priorities
function calculateMasteryAlignmentScore(spectrumId, placement, dominantValues) {
    let score = 0;
    
    // Map spectrum and placement combinations to relevant mastery priorities
    const alignmentMap = {
        // Cognitive Alignment - Structured side
        'cognitive-alignment-strongLeft': ['stability-security', 'clarity-challenge', 'structured-productivity'],
        'cognitive-alignment-leftLeaning': ['stability-security', 'clarity-challenge', 'structured-productivity'],
        'cognitive-alignment-left': ['stability-security', 'clarity-challenge', 'structured-productivity'],
        
        // Cognitive Alignment - Fluid side
        'cognitive-alignment-strongRight': ['intuition-challenge', 'accept-intuition', 'intuitive-instincts'],
        'cognitive-alignment-rightLeaning': ['intuition-challenge', 'accept-intuition', 'intuitive-instincts'],
        'cognitive-alignment-right': ['intuition-challenge', 'accept-intuition', 'intuitive-instincts'],
        
        // Perceptual Focus - Structured side
        'perceptual-focus-strongLeft': ['clarity-challenge', 'vision-clarity-resistance', 'control-clarity'],
        'perceptual-focus-leftLeaning': ['clarity-challenge', 'vision-clarity-resistance', 'control-clarity'],
        'perceptual-focus-left': ['clarity-challenge', 'vision-clarity-resistance', 'control-clarity'],
        
        // Perceptual Focus - Fluid side
        'perceptual-focus-strongRight': ['accept-flexibility', 'dynamic-environment', 'accept-gradual-clarity'],
        'perceptual-focus-rightLeaning': ['accept-flexibility', 'dynamic-environment', 'accept-gradual-clarity'],
        'perceptual-focus-right': ['accept-flexibility', 'dynamic-environment', 'accept-gradual-clarity'],
        
        // Kinetic Drive - Structured side
        'kinetic-drive-strongLeft': ['structured-productivity', 'accept-structure', 'control-consistency'],
        'kinetic-drive-leftLeaning': ['structured-productivity', 'accept-structure', 'control-consistency'],
        'kinetic-drive-left': ['structured-productivity', 'accept-structure', 'control-consistency'],
        
        // Kinetic Drive - Fluid side
        'kinetic-drive-strongRight': ['action-challenge', 'spontaneous-productivity', 'accept-cycles'],
        'kinetic-drive-rightLeaning': ['action-challenge', 'spontaneous-productivity', 'accept-cycles'],
        'kinetic-drive-right': ['action-challenge', 'spontaneous-productivity', 'accept-cycles'],
        
        // Choice Navigation - Structured side
        'choice-navigation-strongLeft': ['decision-doubt', 'control-decisions', 'clear-instructions'],
        'choice-navigation-leftLeaning': ['decision-doubt', 'control-decisions', 'clear-instructions'],
        'choice-navigation-left': ['decision-doubt', 'control-decisions', 'clear-instructions'],
        
        // Choice Navigation - Fluid side
        'choice-navigation-strongRight': ['accept-intuition', 'intuitive-instincts', 'process-trust'],
        'choice-navigation-rightLeaning': ['accept-intuition', 'intuitive-instincts', 'process-trust'],
        'choice-navigation-right': ['accept-intuition', 'intuitive-instincts', 'process-trust'],
        
        // Resonance Field - Structured side
        'resonance-field-strongLeft': ['emotion-challenge', 'emotional-block', 'control-emotions'],
        'resonance-field-leftLeaning': ['emotion-challenge', 'emotional-block', 'control-emotions'],
        'resonance-field-left': ['emotion-challenge', 'emotional-block', 'control-emotions'],
        
        // Resonance Field - Fluid side
        'resonance-field-strongRight': ['accept-emotions', 'emotional-expression-resistance', 'emotional-inspiration'],
        'resonance-field-rightLeaning': ['accept-emotions', 'emotional-expression-resistance', 'emotional-inspiration'],
        'resonance-field-right': ['accept-emotions', 'emotional-expression-resistance', 'emotional-inspiration'],
        
        // Manifestation Rhythm - Structured side
        'manifestation-rhythm-strongLeft': ['structured-environment', 'consistency-challenge', 'rigid-routines'],
        'manifestation-rhythm-leftLeaning': ['structured-environment', 'consistency-challenge', 'rigid-routines'],
        'manifestation-rhythm-left': ['structured-environment', 'consistency-challenge', 'rigid-routines'],
        
        // Manifestation Rhythm - Fluid side
        'manifestation-rhythm-strongRight': ['accept-cycles', 'ignored-cycles', 'adaptive-productivity'],
        'manifestation-rhythm-rightLeaning': ['accept-cycles', 'ignored-cycles', 'adaptive-productivity'],
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
                    // Give extra weight to strong placements
                    if (placement === 'strongLeft' || placement === 'strongRight') {
                        score += 1.5;
                    } else {
                        score += 1;
                    }
                }
            });
        }
    });
    
    return score;
}

// Function to apply mastery influences to spectrum scores
function applyMasteryInfluences(numericScores, dominantValues) {
    const adjustedScores = {...numericScores};
    
    // Track which mastery values influenced each spectrum
    const influences = {};
    for (const spectrumId of Object.keys(numericScores)) {
        influences[spectrumId] = [];
    }
    
    // Apply influences from each category of mastery responses
    Object.keys(MASTERY_SPECTRUM_INFLUENCE).forEach(category => {
        if (dominantValues[category] && Array.isArray(dominantValues[category])) {
            // For each dominant value in this category
            dominantValues[category].forEach(value => {
                const influenceMap = MASTERY_SPECTRUM_INFLUENCE[category][value];
                
                // If this value has defined spectrum influences
                if (influenceMap) {
                    // Apply each influence to the appropriate spectrum
                    Object.entries(influenceMap).forEach(([spectrumId, influenceValue]) => {
                        if (adjustedScores[spectrumId] !== undefined) {
                            // Add the influence value to the spectrum score
                            adjustedScores[spectrumId] += influenceValue;
                            
                            // Record this influence for explanation later
                            influences[spectrumId].push({
                                category,
                                value,
                                influence: influenceValue
                            });
                        }
                    });
                }
            });
        }
    });
    
    // Cap scores to maintain -2 to +2 range
    for (const spectrum in adjustedScores) {
        adjustedScores[spectrum] = Math.max(-2, Math.min(2, adjustedScores[spectrum]));
    }
    
    return { 
        adjustedScores,
        influences
    };
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

    // For each answered question ID â†’ chosen value
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
