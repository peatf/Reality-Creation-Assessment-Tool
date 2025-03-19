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
function determineTypologyPair(spectrumPlacements, masteryPriorities = null) {
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
        // Calculate scores for each spectrum based on:
        // 1. Foundational importance (per RTF priority order)
        // 2. Alignment with mastery priorities (if available)
        const spectrumScores = {};
        
        clearSpectrums.forEach(spectrumId => {
            // Base score from foundational importance (inverse of index, so higher = more important)
            const foundationalScore = SPECTRUM_PRIORITY_ORDER.length - SPECTRUM_PRIORITY_ORDER.indexOf(spectrumId);
            
            // Additional score from mastery alignment if available
            let masteryAlignmentScore = 0;
            
            if (masteryPriorities) {
                // Increase score based on alignment with mastery priorities
                masteryAlignmentScore = calculateMasteryAlignmentScore(spectrumId, clearPlacements[spectrumId], masteryPriorities);
            }
            
            // Total score (weighted - foundational importance carries more weight)
            spectrumScores[spectrumId] = (foundationalScore * 2) + masteryAlignmentScore;
        });
        
        // Sort by total score (descending)
        const sortedSpectrums = [...clearSpectrums].sort((a, b) => spectrumScores[b] - spectrumScores[a]);
        
        // Start with top two scoring spectrums
        let primarySpectrumId = sortedSpectrums[0];
        let secondarySpectrumId = sortedSpectrums[1];
        
        // Check for complementary qualities (prefer combinations of different placements)
        // This implements the "balanced combination of complementary qualities" idea
        if (clearPlacements[primarySpectrumId] === clearPlacements[secondarySpectrumId]) {
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
    
    // Case C: Fewer than two clear placements (mostly Balanced)
    if (clearSpectrums.length === 1) {
        // We have one clear placement - pair it with the strongest balanced spectrum
        const primarySpectrumId = clearSpectrums[0];
        
        // Calculate scores for balanced spectrums based on:
        // 1. Foundational importance (per RTF priority order)
        // 2. Alignment with mastery priorities (if available)
        const balancedSpectrumScores = {};
        
        SPECTRUM_PRIORITY_ORDER.forEach(spectrumId => {
            if (!clearSpectrums.includes(spectrumId) && spectrumPlacements[spectrumId] === 'balanced') {
                // Base score from foundational importance
                const foundationalScore = SPECTRUM_PRIORITY_ORDER.length - SPECTRUM_PRIORITY_ORDER.indexOf(spectrumId);
                
                // Additional score from mastery alignment if available
                let masteryAlignmentScore = 0;
                
                if (masteryPriorities) {
                    // Increase score based on alignment with mastery priorities
                    masteryAlignmentScore = calculateMasteryAlignmentScore(spectrumId, 'balanced', masteryPriorities);
                }
                
                // Total score (weighted)
                balancedSpectrumScores[spectrumId] = (foundationalScore * 2) + masteryAlignmentScore;
            }
        });
        
        // Select the highest scoring balanced spectrum
        const sortedBalancedSpectrums = Object.keys(balancedSpectrumScores)
            .sort((a, b) => balancedSpectrumScores[b] - balancedSpectrumScores[a]);
        
        const secondarySpectrumId = sortedBalancedSpectrums[0];
        
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
    // Select the two most relevant spectrums based on priority and mastery alignment
    const balancedSpectrumScores = {};
    
    SPECTRUM_PRIORITY_ORDER.forEach(spectrumId => {
        if (spectrumPlacements[spectrumId] === 'balanced') {
            // Base score from foundational importance
            const foundationalScore = SPECTRUM_PRIORITY_ORDER.length - SPECTRUM_PRIORITY_ORDER.indexOf(spectrumId);
            
            // Additional score from mastery alignment if available
            let masteryAlignmentScore = 0;
            
            if (masteryPriorities) {
                masteryAlignmentScore = calculateMasteryAlignmentScore(spectrumId, 'balanced', masteryPriorities);
            }
            
            // Total score (weighted)
            balancedSpectrumScores[spectrumId] = (foundationalScore * 2) + masteryAlignmentScore;
        }
    });
    
    // Select the two highest scoring balanced spectrums
    const sortedBalancedSpectrums = Object.keys(balancedSpectrumScores)
        .sort((a, b) => balancedSpectrumScores[b] - balancedSpectrumScores[a]);
    
    const primarySpectrumId = sortedBalancedSpectrums[0];
    const secondarySpectrumId = sortedBalancedSpectrums[1];
    
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
function calculateMasteryAlignmentScore(spectrumId, placement, masteryPriorities) {
    let score = 0;
    
    // Map spectrum and placement combinations to relevant mastery priorities
    const alignmentMap = {
        // Cognitive Alignment
        'cognitive-alignment-left': ['information', 'stability', 'clarity-challenge'],
        'cognitive-alignment-right': ['intuition-challenge', 'trust-intuition', 'trust-process'],
        
        // Perceptual Focus
        'perceptual-focus-left': ['clarity-challenge', 'vision-clarity-resistance', 'control-clarity'],
        'perceptual-focus-right': ['accept-flexibility', 'possibility', 'accept-uncertainty'],
        
        // Kinetic Drive
        'kinetic-drive-left': ['structured-productivity', 'replenish-structure', 'control-consistency'],
        'kinetic-drive-right': ['action-challenge', 'spontaneous-productivity', 'flexibility'],
        
        // Choice Navigation
        'choice-navigation-left': ['decision-doubt', 'control-decisions', 'information'],
        'choice-navigation-right': ['accept-intuition', 'accept-uncertainty', 'intuitive-instincts'],
        
        // Resonance Field
        'resonance-field-left': ['emotion-challenge', 'emotional-block', 'control-emotions'],
        'resonance-field-right': ['accept-emotions', 'emotional-expression-resistance', 'feeling'],
        
        // Manifestation Rhythm
        'manifestation-rhythm-left': ['structured-environment', 'consistency-challenge', 'rigid-routines'],
        'manifestation-rhythm-right': ['accept-cycles', 'ignored-cycles', 'change']
    };
    
    const key = `${spectrumId}-${placement}`;
    const relevantPriorities = alignmentMap[key] || [];
    
    // Check all mastery priority categories
    ['corePriorities', 'growthAreas', 'alignmentNeeds', 'energyPatterns'].forEach(category => {
        if (masteryPriorities[category]) {
            // Add points for each matching priority
            masteryPriorities[category].forEach(priority => {
                if (relevantPriorities.includes(priority)) {
                    score += 1;
                }
            });
        }
    });
    
    return score;
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
// Add this to scoring.js
function getTypologyAndMasteryData() {
    // Calculate spectrum placements
    const typologyResults = calculateTypologyScores();
    const spectrumPlacements = typologyResults.placements;
    
    // Calculate mastery scores first to use in typology determination
    const masteryScores = calculateMasteryScores();
    const dominantValues = determineDominantValues(masteryScores);
    
    // Determine typology pair with mastery priorities for enhanced personalization
    const typologyPair = determineTypologyPair(spectrumPlacements, dominantValues);
    
    // Generate personalized insights
    const personalizedInsights = generatePersonalizedInsights(typologyPair, dominantValues);
    
    return {
        typologyResults,
        spectrumPlacements,
        typologyPair,
        masteryScores,
        dominantValues,
        personalizedInsights
    };
}
