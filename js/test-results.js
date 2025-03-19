/**
 * Reality Creation Assessment - Test Utility
 * 
 * This file contains test functions to verify accurate results generation
 * for all possible spectrum placements.
 * 
 * Usage: Call testAllTypologyPairs() from the browser console to run tests
 */

// Test all possible typology pair combinations
function testAllTypologyPairs() {
    console.log("Testing all possible typology pair combinations...");
    
    const spectrums = assessmentData.typologySpectrums.map(spectrum => spectrum.id);
    const placements = ['left', 'balanced', 'right'];
    
    // Track results for reporting
    const results = {
        total: 0,
        valid: 0,
        pairs: {}
    };
    
    // Generate all possible spectrum placement combinations
    for (const primary of spectrums) {
        for (const primaryPlacement of placements) {
            for (const secondary of spectrums) {
                if (primary === secondary) continue; // Skip same spectrum pair
                
                for (const secondaryPlacement of placements) {
                    results.total++;
                    
                    // Skip balanced-balanced pairs for variety
                    if (primaryPlacement === 'balanced' && secondaryPlacement === 'balanced') {
                        continue;
                    }
                    
                    // Create test placements
                    const testPlacements = {};
                    spectrums.forEach(s => {
                        testPlacements[s] = 'balanced'; // Default all to balanced
                    });
                    
                    // Set our test spectrums
                    testPlacements[primary] = primaryPlacement;
                    testPlacements[secondary] = secondaryPlacement;
                    
                    // Determine typology pair
                    const typologyPair = determineTypologyPair(testPlacements);
                    
                    // Validate result
                    const isValid = validateTypologyPair(typologyPair, primary, primaryPlacement, secondary, secondaryPlacement);
                    
                    if (isValid) {
                        results.valid++;
                    }
                    
                    // Track pair occurrence
                    const pairKey = typologyPair.key;
                    if (!results.pairs[pairKey]) {
                        results.pairs[pairKey] = 0;
                    }
                    results.pairs[pairKey]++;
                    
                    // Log individual test
                    console.log(
                        `Test: ${primary}(${primaryPlacement}) + ${secondary}(${secondaryPlacement}) → ` + 
                        `${typologyPair.key} → ${isValid ? '✓' : '✗'}`
                    );
                }
            }
        }
    }
    
    // Report results
    console.log(`Test completed: ${results.valid}/${results.total} valid typology pairs`);
    console.log("Typology pair distribution:");
    Object.entries(results.pairs).forEach(([pair, count]) => {
        console.log(`- ${pair}: ${count} combinations`);
    });
    
    return results;
}

// Validate typology pair determination
function validateTypologyPair(typologyPair, expectedPrimary, primaryPlacement, expectedSecondary, secondaryPlacement) {
    // Check if primary and secondary are correctly identified
    const primaryCorrect = typologyPair.primary.spectrumId === expectedPrimary && 
                          typologyPair.primary.placement === primaryPlacement;
    
    const secondaryCorrect = typologyPair.secondary.spectrumId === expectedSecondary && 
                            typologyPair.secondary.placement === secondaryPlacement;
    
    // Check if typology key matches the expected format
    const placementMap = {
        'left': 'structured',
        'balanced': 'balanced',
        'right': 'fluid'
    };
    
    const expectedKey = `${placementMap[primaryPlacement]}-${placementMap[secondaryPlacement]}`;
    const keyCorrect = typologyPair.key === expectedKey;
    
    return primaryCorrect && secondaryCorrect && keyCorrect;
}

// Test generation of mastery results
function testMasteryResults() {
    console.log("Testing mastery results generation...");
    
    // Create sample mastery responses
    const sampleResponses = {
        "core-q1": "stability",
        "core-q2": "authenticity",
        "core-q3": "integrity",
        "growth-q1": "trust-intuition",
        "growth-q2": "seek-meaning",
        "growth-q3": "trust-process",
        "alignment-q1": "accept-timing",
        "alignment-q2": "align-balance",
        "energy-q1": "clarity-focus",
        "energy-q2": "harmonious-environment",
        "energy-q3": "replenish-connection",
        "energy-q4": "shift-feeling"
    };
    
    // Backup current responses
    const backupResponses = {...userResponses.mastery};
    
    // Set test responses
    userResponses.mastery = sampleResponses;
    
    // Calculate mastery scores
    const masteryScores = calculateMasteryScores();
    const dominantValues = determineDominantValues(masteryScores);
    
    // Log results
    console.log("Mastery Scores:", masteryScores);
    console.log("Dominant Values:", dominantValues);
    
    // Validate results
    const validation = {
        hasCorePriorities: dominantValues.corePriorities.length > 0,
        hasGrowthAreas: dominantValues.growthAreas.length > 0,
        hasAlignmentNeeds: dominantValues.alignmentNeeds.length > 0,
        hasEnergyPatterns: dominantValues.energyPatterns.length > 0
    };
    
    console.log("Validation:", validation);
    
    // Restore original responses
    userResponses.mastery = backupResponses;
    
    return {
        masteryScores,
        dominantValues,
        validation
    };
}

// Test the entire results generation process
function testFullResultsGeneration() {
    console.log("Testing full results generation process...");
    
    // Create sample responses
    const sampleResponses = {
        typology: {
            "cognitive-q1": "left",
            "cognitive-q2": "left",
            "perceptual-q1": "balanced",
            "perceptual-q2": "balanced",
            "kinetic-q1": "right",
            "kinetic-q2": "right",
            "choice-q1": "balanced",
            "choice-q2": "balanced",
            "resonance-q1": "balanced",
            "resonance-q2": "balanced",
            "rhythm-q1": "balanced",
            "rhythm-q2": "balanced"
        },
        mastery: {
            "core-q1": "stability",
            "core-q2": "authenticity",
            "core-q3": "integrity",
            "growth-q1": "trust-intuition",
            "growth-q2": "seek-meaning",
            "growth-q3": "trust-process",
            "alignment-q1": "accept-timing",
            "alignment-q2": "align-balance",
            "energy-q1": "clarity-focus",
            "energy-q2": "harmonious-environment",
            "energy-q3": "replenish-connection",
            "energy-q4": "shift-feeling"
        }
    };
    
    // Backup current responses
    const backupResponses = {
        typology: {...userResponses.typology},
        mastery: {...userResponses.mastery}
    };
    
    // Set test responses
    userResponses = sampleResponses;
    
    try {
        // Calculate typology results
        const typologyResults = calculateTypologyScores();
        const spectrumPlacements = typologyResults.placements;
        
        // Determine typology pair
        const typologyPair = determineTypologyPair(spectrumPlacements);
        
        // Calculate mastery scores
        const masteryScores = calculateMasteryScores();
        const dominantValues = determineDominantValues(masteryScores);
        
        // Generate personalized insights
        const personalizedInsights = generatePersonalizedInsights(typologyPair, dominantValues);
        
        // Log all results
        console.log("Spectrum Placements:", spectrumPlacements);
        console.log("Typology Pair:", typologyPair);
        console.log("Dominant Values:", dominantValues);
        console.log("Personalized Insights:", personalizedInsights);
        
        console.log("✓ Full results generation test completed successfully");
        
        return {
            spectrumPlacements,
            typologyPair,
            dominantValues,
            personalizedInsights
        };
    } catch (error) {
        console.error("✗ Full results generation test failed:", error);
        return null;
    } finally {
        // Restore original responses
        userResponses = backupResponses;
    }
}

// Execute tests when this script is loaded in development mode
console.log("Reality Creation Assessment Test Utility loaded");
console.log("Run testAllTypologyPairs(), testMasteryResults(), or testFullResultsGeneration() to test");
