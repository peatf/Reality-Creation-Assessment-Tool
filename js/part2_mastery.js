// Part 2: Mastery Assessment Questions
const masteryAssessmentData = {
    // Core Priorities & Values (3 questions)
    corePriorities: [
        {
            id: "core-q1",
            text: "When it comes to crafting a life, what is the one area that you refuse to negotiate on? The thing that, if missing, would make everything else feel hollow?",
            options: [
                {
                    id: "core-q1-creative",
                    text: "The ability to express myself fully and create from truth (Creative Expression)",
                    value: "creative-expression"
                },
                {
                    id: "core-q1-financial",
                    text: "A reality where resources flow with ease and choice is never limited (Financial Abundance)",
                    value: "financial-abundance"
                },
                {
                    id: "core-q1-emotional",
                    text: "Depth, safety, and connection in how I experience emotions (Emotional Fulfillment)",
                    value: "emotional-fulfillment"
                },
                {
                    id: "core-q1-autonomy",
                    text: "The power to direct my own life without restriction (Personal Autonomy)",
                    value: "personal-autonomy"
                },
                {
                    id: "core-q1-relationships",
                    text: "Relationships that feel deep, real, and nourishing (Deep Relationships)",
                    value: "deep-relationships"
                },
                {
                    id: "core-q1-spiritual",
                    text: "A connection to something greater than myself, a thread of meaning that runs through everything (Spiritual Connection)",
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
    ],

    // Diagnosing Growth + Permission Areas (3 questions)
    growthAreas: [
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
    ],

    // Clarifying Acceptance & Alignment Needs (2 questions)
    alignmentNeeds: [
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
    ],

    // Discovering Your Natural Energy Patterns (4 questions)
    energyPatterns: [
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
};

// Generate Part 2: Mastery Assessment questions
function generateMasteryQuestions() {
    const container = document.getElementById('mastery-questions');
    container.innerHTML = '';
    
    // Create Core Priorities & Values section
    const prioritiesSection = document.createElement('div');
    prioritiesSection.className = 'mastery-section';
    
    const prioritiesTitle = document.createElement('h4');
    prioritiesTitle.className = 'section-title';
    prioritiesTitle.textContent = 'Core Priorities & Values';
    prioritiesSection.appendChild(prioritiesTitle);
    
    const prioritiesDesc = document.createElement('p');
    prioritiesDesc.className = 'section-description';
    prioritiesDesc.textContent = 'These questions help identify your deep values and non-negotiable priorities in the manifestation process.';
    prioritiesSection.appendChild(prioritiesDesc);
    
    // Add Core Priorities questions
    masteryAssessmentData.corePriorities.forEach(question => {
        const questionContainer = createQuestionElement(question, 'mastery');
        prioritiesSection.appendChild(questionContainer);
    });
    
    container.appendChild(prioritiesSection);
    
    // Create Growth & Permission Areas section
    const growthSection = document.createElement('div');
    growthSection.className = 'mastery-section';
    
    const growthTitle = document.createElement('h4');
    growthTitle.className = 'section-title';
    growthTitle.textContent = 'Growth & Permission Areas';
    growthSection.appendChild(growthTitle);
    
    const growthDesc = document.createElement('p');
    growthDesc.className = 'section-description';
    growthDesc.textContent = 'These questions help diagnose your current growth areas and friction points in your manifestation process.';
    growthSection.appendChild(growthDesc);
    
    // Add Growth Areas questions
    masteryAssessmentData.growthAreas.forEach(question => {
        const questionContainer = createQuestionElement(question, 'mastery');
        growthSection.appendChild(questionContainer);
    });
    
    container.appendChild(growthSection);
    
    // Create Acceptance & Alignment Needs section
    const alignmentSection = document.createElement('div');
    alignmentSection.className = 'mastery-section';
    
    const alignmentTitle = document.createElement('h4');
    alignmentTitle.className = 'section-title';
    alignmentTitle.textContent = 'Acceptance & Alignment Needs';
    alignmentSection.appendChild(alignmentTitle);
    
    const alignmentDesc = document.createElement('p');
    alignmentDesc.className = 'section-description';
    alignmentDesc.textContent = 'These questions help pinpoint areas requiring acceptance or alignment adjustments in your manifestation process.';
    alignmentSection.appendChild(alignmentDesc);
    
    // Add Alignment Needs questions
    masteryAssessmentData.alignmentNeeds.forEach(question => {
        const questionContainer = createQuestionElement(question, 'mastery');
        alignmentSection.appendChild(questionContainer);
    });
    
    container.appendChild(alignmentSection);
    
    // Create Natural Energy Patterns section
    const energySection = document.createElement('div');
    energySection.className = 'mastery-section';
    
    const energyTitle = document.createElement('h4');
    energyTitle.className = 'section-title';
    energyTitle.textContent = 'Natural Energy Patterns';
    energySection.appendChild(energyTitle);
    
    const energyDesc = document.createElement('p');
    energyDesc.className = 'section-description';
    energyDesc.textContent = 'These questions help uncover your hidden energetic preferences and needs for optimal manifestation.';
    energySection.appendChild(energyDesc);
    
    // Add Energy Patterns questions
    masteryAssessmentData.energyPatterns.forEach(question => {
        const questionContainer = createQuestionElement(question, 'mastery');
        energySection.appendChild(questionContainer);
    });
    
    container.appendChild(energySection);
}

// Helper function to create question elements
function createQuestionElement(question, type) {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';
    questionContainer.dataset.questionId = question.id;
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.text;
    questionContainer.appendChild(questionText);
    
    const answerOptions = document.createElement('div');
    answerOptions.className = 'answer-options';
    
    // Create radio options
    question.options.forEach(option => {
        const optionDiv = document.createElement('label');
        optionDiv.className = 'answer-option';
        optionDiv.htmlFor = option.id;
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = question.id;
        radio.id = option.id;
        radio.value = option.value;
        radio.addEventListener('change', function() {
            // Remove selected class from all options in this question
            const allOptions = questionContainer.querySelectorAll('.answer-option');
            allOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to this option
            optionDiv.classList.add('selected');
            
            // Store user response
            // userResponses.mastery is presumably declared somewhere globally.
            if (!userResponses.mastery) {
                userResponses.mastery = {};
            }
            userResponses.mastery[question.id] = option.value;
        });
        
        const optionText = document.createElement('span');
        optionText.textContent = option.text;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(optionText);
        answerOptions.appendChild(optionDiv);
    });
    
    questionContainer.appendChild(answerOptions);
    return questionContainer;
}

//==========================================
// NEWLY ADDED: Define calculateMasteryScores globally
//==========================================
window.calculateMasteryScores = function() {
    // This minimal example simply returns the user's selected answers
    // (stored in userResponses.mastery) so that scoring.js can access it.

    // If you want to do more advanced logic—like combining certain answers 
    // into numeric scores, counting frequencies, etc.—you can do it here.

    if (!window.userResponses || !window.userResponses.mastery) {
        return {};
    }

    // Return the entire mastery selection object as-is:
    return window.userResponses.mastery;
};
