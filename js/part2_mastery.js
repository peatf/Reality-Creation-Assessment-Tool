// Part 2: Mastery Assessment Questions
const masteryAssessmentData = {
    // Core Priorities & Values (3 questions)
    corePriorities: [
        {
            id: "core-q1",
            text: "When considering what makes a manifestation process successful, which is most important to you?",
            options: [
                {
                    id: "core-q1-stability",
                    text: "Having a clear, stable process that provides a sense of control and predictability.",
                    value: "stability"
                },
                {
                    id: "core-q1-meaning",
                    text: "Creating meaningful outcomes that align with my deeper purpose and values.",
                    value: "meaning"
                },
                {
                    id: "core-q1-freedom",
                    text: "Maintaining freedom and flexibility to follow inspiration wherever it leads.",
                    value: "freedom"
                }
            ]
        },
        {
            id: "core-q2",
            text: "Which of these would be most difficult for you to compromise on in your manifestation process?",
            options: [
                {
                    id: "core-q2-practicality",
                    text: "Practical viability and tangible results that improve my concrete circumstances.",
                    value: "practicality"
                },
                {
                    id: "core-q2-authenticity",
                    text: "Alignment with my authentic self and deeper values, even if it requires more effort.",
                    value: "authenticity"
                },
                {
                    id: "core-q2-feeling",
                    text: "The feeling and energetic quality of my experience, regardless of how it looks to others.",
                    value: "feeling"
                }
            ]
        },
        {
            id: "core-q3",
            text: "Which of these feels most essential to your decision-making process?",
            options: [
                {
                    id: "core-q3-information",
                    text: "Having sufficient information and understanding before making decisions.",
                    value: "information"
                },
                {
                    id: "core-q3-integrity",
                    text: "Ensuring my choices align with my integrity and personal truth.",
                    value: "integrity"
                },
                {
                    id: "core-q3-possibility",
                    text: "Maintaining my sense of possibility and not settling for less than what feels right.",
                    value: "possibility"
                }
            ]
        }
    ],

    // Diagnosing Growth & Permission Areas (3 questions)
    growthAreas: [
        {
            id: "growth-q1",
            text: "Which of these areas do you feel would most benefit from development in your manifestation process?",
            options: [
                {
                    id: "growth-q1-trust",
                    text: "Developing greater trust in my intuitive guidance, especially when it contradicts logical analysis.",
                    value: "trust-intuition"
                },
                {
                    id: "growth-q1-action",
                    text: "Taking more consistent practical action to ground my visions in physical reality.",
                    value: "practical-action"
                },
                {
                    id: "growth-q1-focus",
                    text: "Maintaining focus and commitment to specific outcomes without getting distracted.",
                    value: "focus-commitment"
                }
            ]
        },
        {
            id: "growth-q2",
            text: "When you experience delays or challenges in manifestation, which tends to be your primary concern?",
            options: [
                {
                    id: "growth-q2-approach",
                    text: "Wondering if my approach is too unrealistic or lacking practical grounding.",
                    value: "doubt-approach"
                },
                {
                    id: "growth-q2-meaning",
                    text: "Trying to understand the deeper reasons or lessons behind the challenge.",
                    value: "seek-meaning"
                },
                {
                    id: "growth-q2-energy",
                    text: "Questioning if my energy or vibration is misaligned with my desire.",
                    value: "energy-misalignment"
                }
            ]
        },
        {
            id: "growth-q3",
            text: "Which of these feels like your greatest growth edge in the manifestation process?",
            options: [
                {
                    id: "growth-q3-trust",
                    text: "Learning to trust the unfolding process even when I can't see the entire path ahead.",
                    value: "trust-process"
                },
                {
                    id: "growth-q3-structure",
                    text: "Creating more structure and consistency in my manifestation practices.",
                    value: "develop-structure"
                },
                {
                    id: "growth-q3-attachment",
                    text: "Releasing attachment to specific outcomes and embracing more flow and flexibility.",
                    value: "release-attachment"
                }
            ]
        }
    ],

    // Clarifying Acceptance & Alignment Needs (2 questions)
    alignmentNeeds: [
        {
            id: "alignment-q1",
            text: "Which of these would be most helpful for you to fully accept in your manifestation process?",
            options: [
                {
                    id: "alignment-q1-timing",
                    text: "The natural timing of manifestation, even when it doesn't match my preferred timeline or expectations.",
                    value: "accept-timing"
                },
                {
                    id: "alignment-q1-uniqueness",
                    text: "My unique process, even when it looks different from what others teach or what works for others.",
                    value: "accept-uniqueness"
                },
                {
                    id: "alignment-q1-uncertainty",
                    text: "The inherent uncertainty and mystery that is part of the manifestation process.",
                    value: "accept-uncertainty"
                }
            ]
        },
        {
            id: "alignment-q2",
            text: "Which of these alignment aspects would most support your manifestation process?",
            options: [
                {
                    id: "alignment-q2-beliefs",
                    text: "Taking time to align my conscious intentions with my subconscious beliefs before expecting results.",
                    value: "align-beliefs"
                },
                {
                    id: "alignment-q2-balance",
                    text: "Finding my own unique balance between active creation and receptive allowing.",
                    value: "align-balance"
                },
                {
                    id: "alignment-q2-congruence",
                    text: "Ensuring congruence between what I say I want and what I'm energetically available for.",
                    value: "align-congruence"
                }
            ]
        }
    ],

    // Discovering Natural Energy Patterns (4 questions)
    energyPatterns: [
        {
            id: "energy-q1",
            text: "Which of these energy patterns feels most natural to you in the manifestation process?",
            options: [
                {
                    id: "energy-q1-clarity",
                    text: "Creating clear intentions and focused visualization of specific outcomes.",
                    value: "clarity-focus"
                },
                {
                    id: "energy-q1-openness",
                    text: "Maintaining openness and receptivity to divine guidance and unexpected opportunities.",
                    value: "openness-receptivity"
                },
                {
                    id: "energy-q1-creative",
                    text: "Following creative inspiration and expressing my desires through various forms.",
                    value: "creative-surge"
                }
            ]
        },
        {
            id: "energy-q2",
            text: "Which type of environment most supports your manifestation energy?",
            options: [
                {
                    id: "energy-q2-structured",
                    text: "Organized, minimal spaces with clear systems and minimal distractions.",
                    value: "structured-environment"
                },
                {
                    id: "energy-q2-harmonious",
                    text: "Harmonious, peaceful spaces that feel aesthetically pleasing and energetically balanced.",
                    value: "harmonious-environment"
                },
                {
                    id: "energy-q2-stimulating",
                    text: "Stimulating, variable environments rich with possibilities and inspiration.",
                    value: "stimulating-environment"
                }
            ]
        },
        {
            id: "energy-q3",
            text: "When you need to replenish your energy, which approach is most effective for you?",
            options: [
                {
                    id: "energy-q3-structure",
                    text: "Completing tasks, organizing my space, or creating clear boundaries.",
                    value: "replenish-structure"
                },
                {
                    id: "energy-q3-connection",
                    text: "Deep connection with others, meaningful conversation, or meditation.",
                    value: "replenish-connection"
                },
                {
                    id: "energy-q3-novelty",
                    text: "Exploring new ideas, experiencing novel situations, or expressing myself creatively.",
                    value: "replenish-novelty"
                }
            ]
        },
        {
            id: "energy-q4",
            text: "When you need to shift your energy to align with a desire, which approach works best?",
            options: [
                {
                    id: "energy-q4-clarify",
                    text: "Clarifying my intentions, visualizing specific outcomes, and taking deliberate action steps.",
                    value: "shift-clarify"
                },
                {
                    id: "energy-q4-feeling",
                    text: "Connecting with the feeling state of my desire and practicing gratitude and appreciation.",
                    value: "shift-feeling"
                },
                {
                    id: "energy-q4-vibration",
                    text: "Movement, music, or activities that bring me joy and raise my vibration.",
                    value: "shift-vibration"
                }
            ]
        }
    ]
};

// Function to generate Part 2: Mastery Assessment questions
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
