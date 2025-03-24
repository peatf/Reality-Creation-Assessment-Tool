// redesigned-part2-mastery.js
// This file handles the Mastery Assessment (Part 2) functionality
// for the Reality Creation Assessment

// Mastery Assessment data
const masterySections = [
  {
    id: 'core-priorities',
    title: 'Core Priorities & Values',
    description:
      'These questions help identify your deep values and non-negotiable priorities in the manifestation process.',
    progress: 25,
    questions: [
      {
        id: "core-q1",
        text: "When it comes to crafting a life, what is the one area that you refuse to negotiate on? The thing that, if missing, would make everything else feel hollow?",
        options: [
          {
            id: "core-q1-creative",
            text: "The ability to express myself fully and create from truth",
            value: "creative-expression"
          },
          {
            id: "core-q1-financial",
            text: "A reality where resources flow with ease and choice is never limited",
            value: "financial-abundance"
          },
          {
            id: "core-q1-emotional",
            text: "Depth, safety, and connection in how I experience emotions",
            value: "emotional-fulfillment"
          },
          {
            id: "core-q1-autonomy",
            text: "The power to direct my own life without restriction",
            value: "personal-autonomy"
          },
          {
            id: "core-q1-relationships",
            text: "Relationships that feel deep, real, and nourishing",
            value: "deep-relationships"
          },
          {
            id: "core-q1-spiritual",
            text: "A connection to something greater than myself, a thread of meaning that runs through everything",
            value: "spiritual-connection"
          }
        ]
      },
      {
        id: "core-q2",
        text: "Which of these experiences, when you imagine living it fully, fills you with a deep sense of rightness? Which of these gives you access to the sensation of a \"mission complete\"?",
        options: [
          {
            id: "core-q2-mastery",
            text: "Reaching a level of mastery in my craft where my work is recognized and deeply valued",
            value: "craft-mastery"
          },
          {
            id: "core-q2-wealth",
            text: "Creating a reality where money is a source of expansion, over limitation, where wealth and security flow with ease",
            value: "wealth-security"
          },
          {
            id: "core-q2-peace",
            text: "Living in a state of emotional steadiness, where peace and well-being are my default, not something I have to chase",
            value: "emotional-peace"
          },
          {
            id: "core-q2-freedom",
            text: "Holding the reins of my own life, where my time, choices, and direction are entirely my own",
            value: "personal-freedom"
          },
          {
            id: "core-q2-connection",
            text: "Being surrounded by relationships that feel like home, nourishing, real, and deeply connected",
            value: "deep-connection"
          },
          {
            id: "core-q2-meaning",
            text: "Feeling anchored in something beyond myself, where meaning, mystery, and a higher connection guide my path",
            value: "higher-meaning"
          }
        ]
      },
      {
        id: "core-q3",
        text: "When you think of how you want to feel most often, which of these do you most want to consistently experience in your reality?",
        options: [
          {
            id: "core-q3-confidence",
            text: "Confidence & Self Trust",
            value: "confidence-trust"
          },
          {
            id: "core-q3-peace",
            text: "Peace & Ease",
            value: "peace-ease"
          },
          {
            id: "core-q3-choice",
            text: "Choice & Autonomy",
            value: "choice-autonomy"
          },
          {
            id: "core-q3-stability",
            text: "Stability & Security",
            value: "stability-security"
          },
          {
            id: "core-q3-passion",
            text: "Passion & Inspiration",
            value: "passion-inspiration"
          },
          {
            id: "core-q3-joy",
            text: "Joy & Excitement",
            value: "joy-excitement"
          }
        ]
      }
    ]
  },
  {
    id: 'growth-areas',
    title: 'Growth & Permission Areas',
    description:
      'These questions help diagnose your current growth areas and friction points in your manifestation process.',
    progress: 50,
    questions: [
      {
        id: "growth-q1",
        text: "Where do you often find friction or frustration in your manifestation journey?",
        options: [
          {
            id: "growth-q1-consistency",
            text: "Staying committed and consistent long-term",
            value: "consistency-challenge"
          },
          {
            id: "growth-q1-clarity",
            text: "Getting clear and decisive about what I truly want",
            value: "clarity-challenge"
          },
          {
            id: "growth-q1-action",
            text: "Taking inspired action consistently",
            value: "action-challenge"
          },
          {
            id: "growth-q1-intuition",
            text: "Trusting my intuition over external opinions",
            value: "intuition-challenge"
          },
          {
            id: "growth-q1-emotions",
            text: "Maintaining emotional stability",
            value: "emotion-challenge"
          },
          {
            id: "growth-q1-receiving",
            text: "Allowing myself to receive without forcing outcomes",
            value: "receiving-challenge"
          }
        ]
      },
      {
        id: "growth-q2",
        text: "Which statement resonates most deeply with your most recent challenges?",
        options: [
          {
            id: "growth-q2-doubt",
            text: "\"I often second-guess or doubt my decisions.\"",
            value: "decision-doubt"
          },
          {
            id: "growth-q2-action",
            text: "\"I can clearly envision what I want but struggle to act consistently.\"",
            value: "action-gap"
          },
          {
            id: "growth-q2-focus",
            text: "\"I act impulsively and struggle to sustain long-term focus.\"",
            value: "focus-challenge"
          },
          {
            id: "growth-q2-emotions",
            text: "\"I frequently feel emotionally overwhelmed or blocked.\"",
            value: "emotional-block"
          },
          {
            id: "growth-q2-burnout",
            text: "\"I push too hard, causing burnout instead of flow.\"",
            value: "burnout-pattern"
          },
          {
            id: "growth-q2-commitment",
            text: "\"I hesitate to fully commit, waiting for certainty.\"",
            value: "commitment-hesitation"
          }
        ]
      },
      {
        id: "growth-q3",
        text: "In which area do you tend to experience the most internal resistance?",
        options: [
          {
            id: "growth-q3-trust",
            text: "Trusting my own perceptions and intuition",
            value: "self-trust-resistance"
          },
          {
            id: "growth-q3-risk",
            text: "Taking calculated risks toward my desires",
            value: "risk-resistance"
          },
          {
            id: "growth-q3-emotion",
            text: "Allowing myself to fully express my emotions authentically",
            value: "emotional-expression-resistance"
          },
          {
            id: "growth-q3-vision",
            text: "Clearly defining and sticking to a specific vision",
            value: "vision-clarity-resistance"
          },
          {
            id: "growth-q3-momentum",
            text: "Maintaining a consistent rhythm and momentum",
            value: "momentum-resistance"
          },
          {
            id: "growth-q3-control",
            text: "Letting go of control and allowing the unexpected",
            value: "control-resistance"
          }
        ]
      }
    ]
  },
  {
    id: 'alignment-needs',
    title: 'Acceptance & Alignment Needs',
    description:
      'These questions help pinpoint areas requiring acceptance or alignment adjustments in your manifestation process.',
    progress: 75,
    questions: [
      {
        id: "alignment-q1",
        text: "Which of the following feels most relieving to imagine accepting about yourself?",
        options: [
          {
            id: "alignment-q1-cycles",
            text: "\"I naturally move in cycles; my momentum comes in waves.\"",
            value: "accept-cycles"
          },
          {
            id: "alignment-q1-structure",
            text: "\"I thrive best with structure, not constant spontaneity.\"",
            value: "accept-structure"
          },
          {
            id: "alignment-q1-emotions",
            text: "\"My emotions deeply influence my outcomes, and that's okay.\"",
            value: "accept-emotions"
          },
          {
            id: "alignment-q1-clarity",
            text: "\"Clarity for me emerges gradually rather than instantly.\"",
            value: "accept-gradual-clarity"
          },
          {
            id: "alignment-q1-intuition",
            text: "\"Trusting intuition can serve me as powerfully as logic.\"",
            value: "accept-intuition"
          },
          {
            id: "alignment-q1-flexibility",
            text: "\"My desire for spaciousness and flexibility outweighs my need for certainty.\"",
            value: "accept-flexibility"
          }
        ]
      },
      {
        id: "alignment-q2",
        text: "Which area do you sense you are trying hardest to force or control?",
        options: [
          {
            id: "alignment-q2-outcomes",
            text: "Outcomes and timing of my manifestations",
            value: "control-outcomes"
          },
          {
            id: "alignment-q2-emotions",
            text: "Emotions and inner states",
            value: "control-emotions"
          },
          {
            id: "alignment-q2-consistency",
            text: "Consistency and long-term momentum",
            value: "control-consistency"
          },
          {
            id: "alignment-q2-clarity",
            text: "Clarity and specificity of my vision",
            value: "control-clarity"
          },
          {
            id: "alignment-q2-decisions",
            text: "Decision-making and certainty",
            value: "control-decisions"
          },
          {
            id: "alignment-q2-intuition",
            text: "My intuitive impulses and inspiration",
            value: "control-intuition"
          }
        ]
      }
    ]
  },
  {
    id: 'energy-patterns',
    title: 'Natural Energy Patterns',
    description:
      'These questions help uncover your hidden energetic preferences and needs for optimal manifestation.',
    progress: 100,
    questions: [
      {
        id: "energy-q1",
        text: "When you naturally succeed at something, it's usually because you:",
        options: [
          {
            id: "energy-q1-instructions",
            text: "Had clear, step-by-step instructions",
            value: "clear-instructions"
          },
          {
            id: "energy-q1-intuition",
            text: "Followed your intuitive instincts spontaneously",
            value: "intuitive-instincts"
          },
          {
            id: "energy-q1-inspired",
            text: "Felt emotionally inspired and connected to the task",
            value: "emotional-inspiration"
          },
          {
            id: "energy-q1-rhythm",
            text: "Found the right rhythm between structure and flexibility",
            value: "balanced-rhythm"
          },
          {
            id: "energy-q1-clarity",
            text: "Allowed yourself time to ease into the clarity of the goal",
            value: "gradual-clarity"
          },
          {
            id: "energy-q1-trust",
            text: "Let go of control and trusted the process would unfold naturally",
            value: "process-trust"
          }
        ]
      },
      {
        id: "energy-q2",
        text: "If you look closely at when you've struggled or felt resistance, it often involved:",
        options: [
          {
            id: "energy-q2-rigid",
            text: "Trying to adhere to overly rigid routines",
            value: "rigid-routines"
          },
          {
            id: "energy-q2-intuition",
            text: "Ignoring intuitive signals or inner guidance",
            value: "ignored-intuition"
          },
          {
            id: "energy-q2-emotions",
            text: "Suppressing or disconnecting from your emotional states",
            value: "suppressed-emotions"
          },
          {
            id: "energy-q2-clarity",
            text: "Expecting immediate clarity without allowing yourself to experiment",
            value: "forced-clarity"
          },
          {
            id: "energy-q2-cycles",
            text: "Forcing consistent action instead of embracing your natural energy cycles",
            value: "ignored-cycles"
          },
          {
            id: "energy-q2-control",
            text: "Overplanning and trying to control outcomes tightly",
            value: "overcontrolling"
          }
        ]
      },
      {
        id: "energy-q3",
        text: "You feel most energized and naturally productive when you:",
        options: [
          {
            id: "energy-q3-routines",
            text: "Work within clearly structured routines",
            value: "structured-productivity"
          },
          {
            id: "energy-q3-freedom",
            text: "Allow yourself freedom and flexibility in your workflow",
            value: "flexible-productivity"
          },
          {
            id: "energy-q3-emotions",
            text: "Feel emotionally invested or inspired by the process",
            value: "emotional-productivity"
          },
          {
            id: "energy-q3-motivation",
            text: "Follow spontaneous bursts of motivation",
            value: "spontaneous-productivity"
          },
          {
            id: "energy-q3-change",
            text: "Give yourself permission to change your approach frequently",
            value: "adaptive-productivity"
          },
          {
            id: "energy-q3-balance",
            text: "Balance structured planning with intuitive adjustments",
            value: "balanced-productivity"
          }
        ]
      },
      {
        id: "energy-q4",
        text: "Your ideal supportive environment feels:",
        options: [
          {
            id: "energy-q4-calm",
            text: "Calm, structured, and predictable",
            value: "structured-environment"
          },
          {
            id: "energy-q4-stimulating",
            text: "Stimulating, flexible, and evolving",
            value: "dynamic-environment"
          },
          {
            id: "energy-q4-supportive",
            text: "Deeply supportive emotionally",
            value: "emotionally-supportive-environment"
          },
          {
            id: "energy-q4-inspiring",
            text: "Inspiring, adaptable, and intuitively affirming",
            value: "inspiring-environment"
          },
          {
            id: "energy-q4-balanced",
            text: "Balanced between clear planning and open-ended exploration",
            value: "balanced-environment"
          },
          {
            id: "energy-q4-pressure-free",
            text: "Free from pressure, allowing gradual clarity and organic flow",
            value: "pressure-free-environment"
          }
        ]
      }
    ]
  }
];

// Current section being displayed in Part 2
let currentSectionIndex = 0;

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

// Initialize Part 2 when loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize bottom progress indicators
  const progressContainer = document.querySelector('#part2-section .absolute.bottom-6 .flex.items-center.space-x-6');
  if (progressContainer) {
    progressContainer.innerHTML = ''; // Clear existing indicators

    // Create indicators for each section
    masterySections.forEach((section, index) => {
      const indicator = document.createElement('div');
      indicator.className = `h-3 w-px ${index === 0 ? 'bg-amber-400' : 'bg-stone-300'}`;
      progressContainer.appendChild(indicator);
    });
  }
});

// Make these functions available in the global scope for other files
window.generateMasteryQuestions = generateMasteryQuestions;
window.calculateMasteryScores = calculateMasteryScores;
window.determineDominantValues = determineDominantValues;

// Generate Part 2: Mastery Assessment questions
function generateMasteryQuestions() {
  const container = document.getElementById('mastery-questions');
  container.innerHTML = '';
  const currentSection = masterySections[currentSectionIndex];
  console.log("Generating questions for section:", currentSection,"Current section data:", JSON.stringify(masterySections[currentSectionIndex], null, 2));

  currentSection.questions.forEach((question, questionIndex) => {
    // Create question container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';
    questionContainer.dataset.questionId = question.id;

    // Create question grid
    const questionGrid = document.createElement('div');
    questionGrid.className = 'grid grid-cols-12 gap-4 mb-8';

    // Question number column
    const questionNumberCol = document.createElement('div');
    questionNumberCol.className = 'col-span-2';

    const questionLabel = document.createElement('div');
    questionLabel.className = 'text-xs font-medium uppercase tracking-widest text-stone-500 mb-1';
    questionLabel.textContent = 'Question';

    const questionNumber = document.createElement('div');
    questionNumber.className = 'text-right text-3xl font-light text-stone-800';
    questionNumber.textContent = questionIndex + 1;

    questionNumberCol.appendChild(questionLabel);
    questionNumberCol.appendChild(questionNumber);

    // Question text column
    const questionTextCol = document.createElement('div');
    questionTextCol.className = 'col-span-10';

    const questionText = document.createElement('p');
    questionText.className = 'text-xl font-light leading-relaxed text-stone-700';
    questionText.textContent = question.text;

    questionTextCol.appendChild(questionText);

    // Add columns to question grid
    questionGrid.appendChild(questionNumberCol);
    questionGrid.appendChild(questionTextCol);

    // Add question grid to container
    questionContainer.appendChild(questionGrid);

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'ml-12 space-y-4';

    // Add options
    question.options.forEach(option => {
      // Create option container
      const optionContainer = document.createElement('div');
      optionContainer.className = `group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300
                ${userResponses.mastery && userResponses.mastery[question.id] === option.value 
                    ? 'bg-amber-50 border-l-2 border-amber-400 shadow-sm' 
                    : 'border-l-2 border-transparent hover:bg-white hover:shadow-sm'}`;
      optionContainer.dataset.optionId = option.id;
      optionContainer.dataset.optionValue = option.value;

      // Add click handler
      optionContainer.addEventListener('click', function() {
        selectMasteryOption(this, question.id, option.value);
      });

      // Create radio visual
      const radioContainer = document.createElement('div');
      radioContainer.className = `mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 ${
        userResponses.mastery && userResponses.mastery[question.id] === option.value 
          ? 'border-amber-400 bg-amber-400' 
          : 'border-stone-300 group-hover:border-amber-300'
      }`;

      // Add dot for selected state
      if (userResponses.mastery && userResponses.mastery[question.id] === option.value) {
        const radioDot = document.createElement('div');
        radioDot.className = 'flex h-full items-center justify-center';

        const innerDot = document.createElement('div');
        innerDot.className = 'h-1.5 w-1.5 rounded-full bg-white';

        radioDot.appendChild(innerDot);
        radioContainer.appendChild(radioDot);
      }

      // Create text container
      const textContainer = document.createElement('div');
      textContainer.className = 'ml-4';

      // Create option text
      const optionText = document.createElement('p');
      optionText.className = `text-base font-light ${
        userResponses.mastery && userResponses.mastery[question.id] === option.value 
          ? 'text-stone-800' 
          : 'text-stone-600 group-hover:text-stone-700'
      }`;
      optionText.textContent = option.text;

      // Assemble option
      textContainer.appendChild(optionText);
      optionContainer.appendChild(radioContainer);
      optionContainer.appendChild(textContainer);
      optionsContainer.appendChild(optionContainer);
    });

    // Add options to question container
    questionContainer.appendChild(optionsContainer);

    // Add to main container
    container.appendChild(questionContainer);
  });

  // Update section header
  updateSectionHeader();

  // Initialize navigation buttons
  initSectionNavigation();
}

// Handle mastery option selection
function selectMasteryOption(element, questionId, optionValue) {
  // Update user responses
  if (!userResponses.mastery) {
    userResponses.mastery = {};
  }
  userResponses.mastery[questionId] = optionValue;

  // Find all options for this question
  const question = element.closest('.question-container');
  const allOptions = question.querySelectorAll('.group.relative.flex');

  // Reset all options
  allOptions.forEach(option => {
    // Reset container styles
    option.className = 'group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:bg-white hover:shadow-sm';

    // Reset radio button
    const radio = option.querySelector('.rounded-full');
    if (radio) {
      radio.className = 'mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 border-stone-300 group-hover:border-amber-300';

      // Remove dot if exists
      const dot = radio.querySelector('.flex');
      if (dot) dot.remove();
    }

    // Reset text
    const text = option.querySelector('p');
    if (text) {
      text.className = 'text-base font-light text-stone-600 group-hover:text-stone-700';
    }
  });

  // Set selected styles
  element.className = 'group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300 bg-amber-50 border-l-2 border-amber-400 shadow-sm';

  // Update radio button
  const radio = element.querySelector('.rounded-full');
  if (radio) {
    radio.className = 'mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 border-amber-400 bg-amber-400';

    // Add dot if not exists
    if (!radio.querySelector('.flex')) {
      const radioDot = document.createElement('div');
      radioDot.className = 'flex h-full items-center justify-center';

      const innerDot = document.createElement('div');
      innerDot.className = 'h-1.5 w-1.5 rounded-full bg-white';

      radioDot.appendChild(innerDot);
      radio.appendChild(radioDot);
    }
  }

  // Update text
  const text = element.querySelector('p');
  if (text) {
    text.className = 'text-base font-light text-stone-800';
  }
    const questions = container.querySelectorAll('.question-container');
  if (questions.length > 0) {
    questions[0].classList.add('active');
  }

  // Update navigation button state
  updateNavigationButtons();
}

function updateSectionHeader() {
  // Get header elements
  var currentSectionElement = document.getElementById('current-section');
  var totalSectionsElement = document.getElementById('total-sections');
  var sectionTitleElement = document.getElementById('section-title');
  var sectionDescriptionElement = document.getElementById('section-description');
  var sectionNumberElement = document.getElementById('section-number');
  var progressFillElement = document.getElementById('progress-fill-part2');
  
  // Check and update current and total sections if elements exist
  if (currentSectionElement) {
    currentSectionElement.textContent = currentSectionIndex + 1;
  } else {
    console.warn("Element with id 'current-section' not found.");
  }
  
  if (totalSectionsElement) {
    totalSectionsElement.textContent = masterySections ? masterySections.length : totalSections;
  } else {
    console.warn("Element with id 'total-sections' not found.");
  }
  
  // Assuming masterySections and currentSectionIndex are defined
  const currentSection = masterySections[currentSectionIndex];
  
  // Update title and description if elements exist
  if (sectionTitleElement) {
    sectionTitleElement.textContent = currentSection.title;
  }
  if (sectionDescriptionElement) {
    sectionDescriptionElement.textContent = currentSection.description;
  }
  if (sectionNumberElement) {
    sectionNumberElement.textContent = currentSectionIndex + 1;
  }
  
  // Update progress bar
  if (progressFillElement) {
    progressFillElement.style.width = `${currentSection.progress}%`;
  }
  
  // Update bottom progress indicators
  const progressDots = document.querySelectorAll('#part2-section .absolute.bottom-6 .flex.items-center.space-x-6 .h-3.w-px');
  if (progressDots && progressDots.length > 0) {
    progressDots.forEach((dot, index) => {
      dot.className = index === currentSectionIndex ? 'h-3 w-px bg-amber-400' : 'h-3 w-px bg-stone-300';
    });
  }
}

// Initialize section navigation
function initSectionNavigation() {
  // Get navigation buttons
  const prevSectionBtn = document.getElementById('prev-section-btn');
  const nextSectionBtn = document.getElementById('next-section-btn');
  const part2PrevBtn = document.getElementById('part2-prev');
  const submitBtn = document.getElementById('submit-assessment');

  // Update visibility based on current section
  if (currentSectionIndex === 0) {
    // First section - show Part 1 button, hide prev section button
    part2PrevBtn.style.display = 'flex';
    prevSectionBtn.style.display = 'none';
  } else {
    // Not first section - hide Part 1 button, show prev section button
    part2PrevBtn.style.display = 'none';
    prevSectionBtn.style.display = 'flex';
  }

  if (currentSectionIndex === masterySections.length - 1) {
    // Last section - hide next section button, show submit button
    nextSectionBtn.style.display = 'none';
    submitBtn.style.display = 'flex';
  } else {
    // Not last section - show next section button, hide submit button
    nextSectionBtn.style.display = 'flex';
    submitBtn.style.display = 'none';
  }

  // Add event listeners
  prevSectionBtn.onclick = prevSection;
  nextSectionBtn.onclick = nextSection;
  submitBtn.onclick = submitAssessment;

  // Update button states based on question completion
  updateNavigationButtons();
}

// Go to previous section
function prevSection() {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    generateMasteryQuestions();
  }
}

// Go to next section
function nextSection() {
  // Check if all questions in current section are answered
  const currentSection = masterySections[currentSectionIndex];
  let unansweredQuestions = 0;

  currentSection.questions.forEach(question => {
    if (!userResponses.mastery || !userResponses.mastery[question.id]) {
      unansweredQuestions++;
    }
  });

  if (unansweredQuestions > 0) {
    alert(`Please answer all questions in this section before continuing. You have ${unansweredQuestions} unanswered questions.`);
    return;
  }

  if (currentSectionIndex < masterySections.length - 1) {
    currentSectionIndex++;
    generateMasteryQuestions();
  }
}

// Submit the assessment and show results
function submitAssessment() {
  // Check if all questions in current section are answered
  const currentSection = masterySections[currentSectionIndex];
  let unansweredQuestions = 0;

  currentSection.questions.forEach(question => {
    if (!userResponses.mastery || !userResponses.mastery[question.id]) {
      unansweredQuestions++;
    }
  });

  if (unansweredQuestions > 0) {
    alert(`Please answer all questions in this section before continuing. You have ${unansweredQuestions} unanswered questions.`);
    return;
  }

  // Call showResults from main assessment.js
  showResults();
}

// Update navigation button states based on question completion
function updateNavigationButtons() {
  const nextSectionBtn = document.getElementById('next-section-btn');
  const submitBtn = document.getElementById('submit-assessment');

  // Get current section questions
  const currentSection = masterySections[currentSectionIndex];
  const allAnswered = currentSection.questions.every(question => userResponses.mastery && userResponses.mastery[question.id]);

  if (currentSectionIndex === masterySections.length - 1) {
    // Final section - update submit button
    if (allAnswered) {
      submitBtn.classList.remove('text-stone-400', 'cursor-not-allowed');
      submitBtn.classList.add('text-stone-700', 'hover:text-amber-700');
    } else {
      submitBtn.classList.add('text-stone-400', 'cursor-not-allowed');
      submitBtn.classList.remove('text-stone-700', 'hover:text-amber-700');
    }
  } else {
    // Not final section - update next button
    if (allAnswered) {
      nextSectionBtn.classList.remove('text-stone-400', 'cursor-not-allowed');
      nextSectionBtn.classList.add('text-stone-700');
    } else {
      nextSectionBtn.classList.add('text-stone-400', 'cursor-not-allowed');
      nextSectionBtn.classList.remove('text-stone-700');
    }
  }
}
