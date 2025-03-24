// Scoring System for Reality Creation Assessment

// Calculate mastery scores for result generation
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

// Make these functions available in the global scope for other files
window.calculateMasteryScores = calculateMasteryScores;
window.determineDominantValues = determineDominantValues;
