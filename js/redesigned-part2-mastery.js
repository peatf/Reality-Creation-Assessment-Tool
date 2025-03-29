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
            text: "Stayin open and receptive, letting things unfold without forcing the outcome",
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
        text: "When things are flowing and success feels natural, it's usually because you:",
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
            text: "Work within clear routines that offer structure and predictability",
            value: "structured-productivity"
          },
          {
            id: "energy-q3-freedom",
            text: "Have the freedom to follow your own flow throughout the day",
            value: "flexible-productivity"
          },
          {
            id: "energy-q3-emotions",
            text: "Feel emotionally connected to what you're creating, it has meaning",
            value: "emotional-productivity"
          },
          {
            id: "energy-q3-motivation",
            text: "Ride spontaneous bursts of inspiration and act on them quickly",
            value: "spontaneous-productivity"
          },
          {
            id: "energy-q3-change",
            text: "Shift your approach often, based on what the moment calls for",
            value: "adaptive-productivity"
          },
          {
            id: "energy-q3-balance",
            text: "Blend planning with intuition, adjusting as you go",
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

// Initialize Part 2 when loaded
document.addEventListener('DOMContentLoaded', function() {
  const progressContainer = document.querySelector('#part2-section .absolute.bottom-6 .flex.items-center.space-x-6');
  if (progressContainer) {
    progressContainer.innerHTML = '';
    masterySections.forEach((section, index) => {
      const indicator = document.createElement('div');
      indicator.className = `h-3 w-px ${index === 0 ? 'bg-amber-400' : 'bg-stone-300'}`;
      progressContainer.appendChild(indicator);
    });
  }
  fixCSSIssues();
});

// Make these functions available globally
window.generateMasteryQuestions = generateMasteryQuestions;
window.calculateMasteryScores = calculateMasteryScores;
window.determineDominantValues = determineDominantValues;

// Generate Part 2: Mastery Assessment questions
function generateMasteryQuestions() {
  const container = document.getElementById('mastery-questions');
  container.innerHTML = '';
  const currentSection = masterySections[currentSectionIndex];
  console.log("Generating questions for section:", currentSection, "Current section data:", JSON.stringify(currentSection, null, 2));

  currentSection.questions.forEach((question, questionIndex) => {
    console.log(`Creating question ${questionIndex + 1} with ID ${question.id}`);
    // Create question container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';
    questionContainer.dataset.questionId = question.id;
    // For one-question-at-a-time, mark only the first question as active.
    if (questionIndex === 0) {
      questionContainer.classList.add('active');
    }
    
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

    // Assemble question grid and add to container
    questionGrid.appendChild(questionNumberCol);
    questionGrid.appendChild(questionTextCol);
    questionContainer.appendChild(questionGrid);

    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'ml-12 space-y-4';

    // Add options
    question.options.forEach(option => {
      const optionContainer = document.createElement('div');
      optionContainer.className = `group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300
                ${userResponses.mastery && userResponses.mastery[question.id] === option.value 
                    ? 'bg-amber-50 border-l-2 border-amber-400 shadow-sm' 
                    : 'border-l-2 border-transparent hover:bg-white hover:shadow-sm'}`;
      optionContainer.dataset.optionId = option.id;
      optionContainer.dataset.optionValue = option.value;
      optionContainer.addEventListener('click', function() {
        selectMasteryOption(this, question.id, option.value);
      });
      const radioContainer = document.createElement('div');
      radioContainer.className = `mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 ${
        userResponses.mastery && userResponses.mastery[question.id] === option.value 
          ? 'border-amber-400 bg-amber-400' 
          : 'border-stone-300 group-hover:border-amber-300'
      }`;
      if (userResponses.mastery && userResponses.mastery[question.id] === option.value) {
        const radioDot = document.createElement('div');
        radioDot.className = 'flex h-full items-center justify-center';
        const innerDot = document.createElement('div');
        innerDot.className = 'h-1.5 w-1.5 rounded-full bg-white';
        radioDot.appendChild(innerDot);
        radioContainer.appendChild(radioDot);
      }
      const textContainer = document.createElement('div');
      textContainer.className = 'ml-4';
      const optionText = document.createElement('p');
      optionText.className = `text-base font-light ${
        userResponses.mastery && userResponses.mastery[question.id] === option.value 
          ? 'text-stone-800' 
          : 'text-stone-600 group-hover:text-stone-700'
      }`;
      optionText.textContent = option.text;
      textContainer.appendChild(optionText);
      optionContainer.appendChild(radioContainer);
      optionContainer.appendChild(textContainer);
      optionsContainer.appendChild(optionContainer);
    });
    questionContainer.appendChild(optionsContainer);
    container.appendChild(questionContainer);
  });

  updateSectionHeader();
  initSectionNavigation();
  showActiveQuestion();
}

// Returns the index of the active question within the current section
function getActiveQuestionIndex() {
  const container = document.getElementById('mastery-questions');
  const questions = container.querySelectorAll('.question-container');
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].classList.contains('active')) {
      return i;
    }
  }
  return -1;
}

// Advances to the next question if available, or if on the last question and all are answered, moves to next section
function nextQuestion() {
  const container = document.getElementById('mastery-questions');
  const questions = container.querySelectorAll('.question-container');
  const activeIndex = getActiveQuestionIndex();
  
  if (activeIndex === -1) return;

  const currentQuestion = questions[activeIndex];
  const questionId = currentQuestion.dataset.questionId;
  
  // Check if the current question is answered
  if (!userResponses.mastery || !userResponses.mastery[questionId]) {
    alert("Please answer this question before continuing.");
    return;
  }
  
  if (activeIndex < questions.length - 1) {
    // Move to next question within section
    currentQuestion.classList.remove('active');
    questions[activeIndex + 1].classList.add('active');
    showActiveQuestion();
    updateNavigationButtons(); // Update button visibility after changing questions
  } else {
    // On last question
    if (currentSectionIndex === masterySections.length - 1) {
      // If this is the last section, show submit button
      updateNavigationButtons();
    } else {
      // Otherwise move to next section
      nextSection();
    }
  }
}

// Goes to previous question if available; if at the first question, attempts to move to previous section
function prevQuestion() {
  const container = document.getElementById('mastery-questions');
  const questions = container.querySelectorAll('.question-container');
  const activeIndex = getActiveQuestionIndex();
  if (activeIndex > 0) {
    questions[activeIndex].classList.remove('active');
    questions[activeIndex - 1].classList.add('active');
    showActiveQuestion();
    updateNavigationButtons();
  } else {
    prevSection();
  }
}

// Handle mastery option selection
function selectMasteryOption(element, questionId, optionValue) {
  // Update user response
  if (!userResponses.mastery) {
    userResponses.mastery = {};
  }
  userResponses.mastery[questionId] = optionValue;
  
  // Find all options for this question
  const question = element.closest('.question-container');
  const allOptions = question.querySelectorAll('.group.relative.flex');
  
  // Reset all options
  allOptions.forEach(option => {
    option.className = 'group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:bg-white hover:shadow-sm';
    const radio = option.querySelector('.rounded-full');
    if (radio) {
      radio.className = 'mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 border-stone-300 group-hover:border-amber-300';
      const dot = radio.querySelector('.flex');
      if (dot) dot.remove();
    }
    const text = option.querySelector('p');
    if (text) {
      text.className = 'text-base font-light text-stone-600 group-hover:text-stone-700';
    }
  });
  
  // Apply selected style to clicked option
  element.className = 'group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300 bg-amber-50 border-l-2 border-amber-400 shadow-sm';
  const radio = element.querySelector('.rounded-full');
  if (radio) {
    radio.className = 'mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 border-amber-400 bg-amber-400';
    if (!radio.querySelector('.flex')) {
      const radioDot = document.createElement('div');
      radioDot.className = 'flex h-full items-center justify-center';
      const innerDot = document.createElement('div');
      innerDot.className = 'h-1.5 w-1.5 rounded-full bg-white';
      radioDot.appendChild(innerDot);
      radio.appendChild(radioDot);
    }
  }
  const text = element.querySelector('p');
  if (text) {
    text.className = 'text-base font-light text-stone-800';
  }
  
  // Update navigation buttons
  updateNavigationButtons();
}

// Update section header details and progress indicators
 function updateSectionHeader() {
  const currentSectionElement = document.getElementById('current-section');
  const totalSectionsElement = document.getElementById('total-sections');
  const sectionTitleElement = document.getElementById('section-title');
  const sectionDescriptionElement = document.getElementById('section-description');
  const sectionNumberElement = document.getElementById('section-number');
  const progressFillElement = document.getElementById('progress-fill-part2');

  if (currentSectionElement) {
    currentSectionElement.textContent = currentSectionIndex + 1;
  } else {
    console.warn("Element with id 'current-section' not found.");
  }

  if (totalSectionsElement) {
    totalSectionsElement.textContent = masterySections ? masterySections.length : '';
  } else {
    console.warn("Element with id 'total-sections' not found.");
  }

  const currentSection = masterySections[currentSectionIndex];

  if (sectionTitleElement) {
    sectionTitleElement.textContent = currentSection.title;
  }

  if (sectionDescriptionElement) {
    sectionDescriptionElement.textContent = currentSection.description;
  }

  if (sectionNumberElement) {
    sectionNumberElement.textContent = currentSectionIndex + 1;
  }

  if (progressFillElement) {
    progressFillElement.style.width = `${currentSection.progress}%`;
  }

  const progressDots = document.querySelectorAll('#part2-section .absolute.bottom-6 .flex.items-center.space-x-6 .h-3.w-px');
  if (progressDots && progressDots.length > 0) {
    progressDots.forEach((dot, index) => {
      dot.className = index === currentSectionIndex ? 'h-3 w-px bg-amber-400' : 'h-3 w-px bg-stone-300';
    });
  }
}

// Complete the initSectionNavigation function
function initSectionNavigation() {
  const prevBtn = document.getElementById('prev-section-btn');
  const nextBtn = document.getElementById('next-section-btn');
  const part2PrevBtn = document.getElementById('part2-prev');
  const submitBtn = document.getElementById('submit-assessment');

  // Find or create question navigation buttons
  let nextQuestionBtn = document.getElementById('next-question-btn');
  let prevQuestionBtn = document.getElementById('prev-question-btn');

  if (!nextQuestionBtn || !prevQuestionBtn) {
    const navFooter = document.querySelector('#part2-section .mt-16.pt-6.border-t.border-stone-200 .flex.items-center.justify-between');

    if (navFooter) {
      if (!nextQuestionBtn) {
        nextQuestionBtn = document.createElement('button');
        nextQuestionBtn.id = 'next-question-btn';
        nextQuestionBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest text-stone-700';
        nextQuestionBtn.innerHTML = `
          Next Question
          <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
        `;
        nextQuestionBtn.onclick = nextQuestion;

        if (nextBtn && nextBtn.parentNode) {
          nextBtn.parentNode.insertBefore(nextQuestionBtn, nextBtn);
        }
      }

      if (!prevQuestionBtn) {
        prevQuestionBtn = document.createElement('button');
        prevQuestionBtn.id = 'prev-question-btn';
        prevQuestionBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest text-stone-400 transition-all hover:text-stone-700';
        prevQuestionBtn.innerHTML = `
          <span class="mr-4 h-px w-8 bg-stone-300 transition-all group-hover:w-12 group-hover:bg-stone-500"></span>
          Previous Question
        `;
        prevQuestionBtn.onclick = prevQuestion;
        prevQuestionBtn.style.display = 'none';

        if (prevBtn && prevBtn.parentNode) {
          prevBtn.parentNode.insertBefore(prevQuestionBtn, prevBtn);
        }
      }
    }
  }

  // Setup section navigation
  if (currentSectionIndex === 0) {
    part2PrevBtn.style.display = 'flex';
    prevBtn.style.display = 'none';
  } else {
    part2PrevBtn.style.display = 'none';
    prevBtn.style.display = 'flex';
  }

  prevBtn.onclick = prevSection;
  nextBtn.onclick = nextSection;
  submitBtn.onclick = submitAssessment;

  // Configure next/prev question buttons
  const container = document.getElementById('mastery-questions');
  const questions = container.querySelectorAll('.question-container');
  const activeIndex = getActiveQuestionIndex();

  // Show/hide appropriate buttons based on question position
  updateNavigationButtons();

  // Update question counter
  const counter = document.querySelector('#part2-section .text-xs.font-light.text-stone-500');
  if (counter) {
    // Calculate the total questions across all sections before the current section
    let previousQuestions = 0;
    for (let i = 0; i < currentSectionIndex; i++) {
      previousQuestions += masterySections[i].questions.length;
    }
    
    // Current question number is the sum of previous questions + current active index + 1
    const currentQuestionNumber = previousQuestions + activeIndex + 1;
    
    // Total questions is the sum of all questions across all sections
    const totalQuestions = masterySections.reduce((sum, section) => sum + section.questions.length, 0);
    
    counter.innerHTML = `
Question <span id="current-question">${currentQuestionNumber}</span> of <span id="total-questions">${totalQuestions}</span> â€¢ Section ${currentSectionIndex + 1} of ${masterySections.length}
    `;
  }
}

// Update navigation button states based on current question status
function updateNavigationButtons() {
  const nextBtn = document.getElementById('next-section-btn');
  const submitBtn = document.getElementById('submit-assessment');
  const nextQuestionBtn = document.getElementById('next-question-btn');
  const prevQuestionBtn = document.getElementById('prev-question-btn');
  const container = document.getElementById('mastery-questions');
  
  if (!container) return;
  
  const questions = container.querySelectorAll('.question-container');
  const activeIndex = getActiveQuestionIndex();
  
  // Setup prev question button visibility
  if (prevQuestionBtn) {
    prevQuestionBtn.style.display = activeIndex > 0 ? 'flex' : 'none';
  }
  
  // Setup next question, next section and submit buttons visibility
  if (currentSectionIndex === masterySections.length - 1 && activeIndex === questions.length - 1) {
    // Last question of last section - show submit button only
    if (nextBtn) nextBtn.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'flex';
    if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
  } else if (activeIndex === questions.length - 1) {
    // Last question of non-final section - show next section button only
    if (nextBtn) nextBtn.style.display = 'flex';
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
  } else {
    // Middle questions - show next question button only
    if (nextBtn) nextBtn.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextQuestionBtn) nextQuestionBtn.style.display = 'flex';
  }
  
  // Update the question counter
  updateQuestionCounter(activeIndex, questions.length);
}

// Helper function to update the question counter
function updateQuestionCounter(currentIndex, totalQuestions) {
  const currentQuestionElement = document.getElementById('current-question');
  const totalQuestionsElement = document.getElementById('total-questions');
  
  if (currentQuestionElement && totalQuestionsElement) {
    // Calculate the total questions across all sections before the current section
    let previousQuestions = 0;
    for (let i = 0; i < currentSectionIndex; i++) {
      previousQuestions += masterySections[i].questions.length;
    }
    
    // Current question number is the sum of previous questions + current active index + 1
    const currentQuestionNumber = previousQuestions + currentIndex + 1;
    
    // Total questions is the sum of all questions across all sections
    const totalQuestions = masterySections.reduce((sum, section) => sum + section.questions.length, 0);
    
    currentQuestionElement.textContent = currentQuestionNumber;
    totalQuestionsElement.textContent = totalQuestions;
  }
}

// Go to previous section (if at the beginning of the current section)
function prevSection() {
  console.log("prevSection called. Current index:", currentSectionIndex);
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    generateMasteryQuestions();
    console.log("Moved to previous section:", currentSectionIndex);
  }
}

// Move to the next section (used when on the last question and all questions are answered)
function nextSection() {
  console.log("nextSection called. Current index:", currentSectionIndex);
  
  // Check if all questions in current section are answered
  const container = document.getElementById('mastery-questions');
  const questions = container.querySelectorAll('.question-container');
  let unanswered = 0;
  let unansweredIds = [];
  
  questions.forEach(q => {
    if (!userResponses.mastery || !userResponses.mastery[q.dataset.questionId]) {
      unanswered++;
      unansweredIds.push(q.dataset.questionId);
    }
  });
  
  if (unanswered > 0) {
    console.log("Unanswered questions:", unansweredIds);
    alert(`Please answer all questions in this section before continuing. You have ${unanswered} unanswered questions.`);
    return;
  }
  
  if (currentSectionIndex < masterySections.length - 1) {
    currentSectionIndex++;
    console.log("Moving to next section:", currentSectionIndex);
    generateMasteryQuestions();
  }
}

// Submit the assessment after verifying completion of the current section
function submitAssessment() {
  console.log("submitAssessment called");
  
  // Verify all questions are answered in the final section
  const container = document.getElementById('mastery-questions');
  const questions = container.querySelectorAll('.question-container');
  let unanswered = 0;
  
  questions.forEach(q => {
    if (!userResponses.mastery || !userResponses.mastery[q.dataset.questionId]) {
      unanswered++;
    }
  });
  
  if (unanswered > 0) {
    alert(`Please answer all questions in this section before submitting. You have ${unanswered} unanswered questions.`);
    return;
  }
  
  // All questions answered, proceed to results
  console.log("All questions answered. Proceeding to results.");
  // Make sure the results data is calculated before showing results
  window.completeResults = generateCompleteResults();
  showResults();
}

// Enforce one-question-at-a-time display based on active class
function showActiveQuestion() {
  const container = document.getElementById('mastery-questions');
  if (!container) return;
  
  const questions = container.querySelectorAll('.question-container');
  let activeFound = false;
  
  questions.forEach(question => {
    if (question.classList.contains('active')) {
      question.style.display = 'block';
      activeFound = true;
    } else {
      question.style.display = 'none';
    }
  });
  
  if (!activeFound && questions.length > 0) {
    questions[0].classList.add('active');
    questions[0].style.display = 'block';
  }
  
  console.log("Updated question display. Active question found:", activeFound);
}

// Override CSS rules to support one-question-at-a-time display
function fixCSSIssues() {
  const style = document.createElement('style');
  style.textContent = `
    /* Hide all question containers by default */
    #mastery-questions .question-container {
      display: none !important;
    }
    /* Show the active question */
    #mastery-questions .question-container.active {
      display: block !important;
    }
  `;
  document.head.appendChild(style);
  console.log("Added CSS overrides to support one-question-at-a-time display");
}
