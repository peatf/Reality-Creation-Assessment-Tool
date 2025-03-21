// Part 2: Mastery Assessment Questions
// This file contains the logic for generating the Mastery Assessment questions

// Mastery Assessment Data Structure
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

//---------------------------------------------------------------------
// Generate Part 2: Mastery Assessment questions (Updated version)
//---------------------------------------------------------------------
function generateMasteryQuestions() {
    const container = document.getElementById('mastery-questions');
    container.innerHTML = '';
    
    // Create Core Priorities & Values section
    const prioritiesSection = createMasterySection(
        'Core Priorities & Values',
        'These questions help identify your deep values and non-negotiable priorities in the manifestation process.',
        'core-priorities',
        1
    );
    
    // Add Core Priorities questions
    masteryAssessmentData.corePriorities.forEach((question, index) => {
        const questionContainer = createMasteryQuestion(question, index + 1);
        prioritiesSection.appendChild(questionContainer);
    });
    
    container.appendChild(prioritiesSection);
    
    // Create Growth & Permission Areas section
    const growthSection = createMasterySection(
        'Growth & Permission Areas',
        'These questions help diagnose your current growth areas and friction points in your manifestation process.',
        'growth-areas',
        2
    );
    
    // Add Growth Areas questions
    masteryAssessmentData.growthAreas.forEach((question, index) => {
        const questionContainer = createMasteryQuestion(question, index + 1);
        growthSection.appendChild(questionContainer);
    });
    
    container.appendChild(growthSection);
    
    // Create Acceptance & Alignment Needs section
    const alignmentSection = createMasterySection(
        'Acceptance & Alignment Needs',
        'These questions help pinpoint areas requiring acceptance or alignment adjustments in your manifestation process.',
        'alignment-needs',
        3
    );
    
    // Add Alignment Needs questions
    masteryAssessmentData.alignmentNeeds.forEach((question, index) => {
        const questionContainer = createMasteryQuestion(question, index + 1);
        alignmentSection.appendChild(questionContainer);
    });
    
    container.appendChild(alignmentSection);
    
    // Create Natural Energy Patterns section
    const energySection = createMasterySection(
        'Natural Energy Patterns',
        'These questions help uncover your hidden energetic preferences and needs for optimal manifestation.',
        'energy-patterns',
        4
    );
    
    // Add Energy Patterns questions
    masteryAssessmentData.energyPatterns.forEach((question, index) => {
        const questionContainer = createMasteryQuestion(question, index + 1);
        energySection.appendChild(questionContainer);
    });
    
    container.appendChild(energySection);
    
    // Add section change handler
    initSectionNavigation();
}

//---------------------------------------------------------------------
// Helper function to create a section for the mastery assessment
//---------------------------------------------------------------------
function createMasterySection(title, description, id, sectionNumber) {
    const section = document.createElement('div');
    section.className = 'mastery-section';
    section.id = id;
    section.dataset.sectionNumber = sectionNumber;
    
    // Create section header with icon
    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'section-title';
    
    const titleIcon = document.createElement('div');
    titleIcon.className = 'section-title-icon';
    titleIcon.innerHTML = `<span>${sectionNumber}</span>`;
    
    const titleText = document.createElement('h4');
    titleText.className = 'section-title-text';
    titleText.textContent = title;
    
    sectionTitle.appendChild(titleIcon);
    sectionTitle.appendChild(titleText);
    
    // Create section description
    const sectionDesc = document.createElement('p');
    sectionDesc.className = 'section-description';
    sectionDesc.textContent = description;
    
    // Add header and description to section
    section.appendChild(sectionTitle);
    section.appendChild(sectionDesc);
    
    // Initially hide all sections except the first one
    if (sectionNumber > 1) {
        section.style.display = 'none';
    }
    
    return section;
}

//---------------------------------------------------------------------
// Helper function to create a question for the mastery assessment
//---------------------------------------------------------------------
function createMasteryQuestion(question, questionNumber) {
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
    
    const questionNumEl = document.createElement('div');
    questionNumEl.className = 'text-right text-3xl font-light text-stone-800';
    questionNumEl.textContent = `0${questionNumber}`;
    
    questionNumberCol.appendChild(questionLabel);
    questionNumberCol.appendChild(questionNumEl);
    
    // Question text column
    const questionTextCol = document.createElement('div');
    questionTextCol.className = 'col-span-10';
    
    const questionText = document.createElement('p');
    questionText.className = 'text-xl font-light leading-relaxed text-stone-700';
    questionText.textContent = question.text;
    
    questionTextCol.appendChild(questionText);
    
    // Assemble question grid
    questionGrid.appendChild(questionNumberCol);
    questionGrid.appendChild(questionTextCol);
    questionContainer.appendChild(questionGrid);
    
    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'ml-12 space-y-4';
    
    // Add each option
    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.dataset.optionId = option.id;
        optionDiv.dataset.value = option.value;
        
        // Add click event to register answer with robust checking and logging
        optionDiv.addEventListener('click', function() {
            // Remove selected class from all options in this question
            const allOptions = optionsContainer.querySelectorAll('.answer-option');
            allOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to this option
            this.classList.add('selected');
            
            // Check if global userResponses is defined and store the response
            if (typeof window.userResponses !== 'undefined') {
                if (!window.userResponses.mastery) {
                    window.userResponses.mastery = {};
                }
                window.userResponses.mastery[question.id] = option.value;
                console.log(`Set response for ${question.id}: ${option.value}`);
            } else {
                console.error("userResponses is not defined. Response not saved.");
            }
        });
        
        // Create radio button visual
        const radioVisual = document.createElement('div');
        radioVisual.className = 'answer-radio';
        
        const radioDot = document.createElement('div');
        radioDot.className = 'answer-radio-dot';
        radioVisual.appendChild(radioDot);
        
        // Create option text
        const optionText = document.createElement('div');
        optionText.className = 'answer-text';
        optionText.textContent = option.text;
        
        // Assemble option element
        optionDiv.appendChild(radioVisual);
        optionDiv.appendChild(optionText);
        optionsContainer.appendChild(optionDiv);
    });
    
    questionContainer.appendChild(optionsContainer);
    return questionContainer;
}

//---------------------------------------------------------------------
// Add navigation between sections in Part 2
//---------------------------------------------------------------------
function initSectionNavigation() {
    const sections = document.querySelectorAll('.mastery-section');
    if (sections.length === 0) return;
    
    console.log("Initializing section navigation with", sections.length, "sections");
    
    // Get navigation area in Part 2
    const navigationArea = document.querySelector('#part2 .navigation-buttons') || 
                          document.querySelector('#part2 .flex.items-center.justify-between');
    
    if (!navigationArea) {
        console.error("Navigation area not found in Part 2");
        return;
    }
    
    // Get existing buttons
    const prevButton = document.querySelector('#part2-prev');
    const submitButton = document.querySelector('#submit-assessment');
    
    if (!prevButton || !submitButton) {
        console.error("Navigation buttons not found:", prevButton, submitButton);
        return;
    }
    
    let currentSectionIndex = 0;
    
    // Function to update progress indication
    function updateProgress() {
        console.log("Updating progress to section", currentSectionIndex + 1);
        // Update progress text
        const sectionCountText = document.querySelector('#part2 .text-xs.font-light.text-stone-500');
        if (sectionCountText) {
            sectionCountText.textContent = `Section ${currentSectionIndex + 1} of ${sections.length}`;
        }
        
        // Update progress bar
        const progressFill = document.getElementById('progress-fill-part2');
        if (progressFill) {
            const progressPercentage = ((currentSectionIndex + 1) / sections.length) * 100;
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        // Update bottom progress dots if they exist
        const progressDots = document.querySelectorAll('#part2 .flex.items-center.space-x-6 .h-3.w-px');
        if (progressDots && progressDots.length > 0) {
            progressDots.forEach((dot, index) => {
                if (index === currentSectionIndex) {
                    dot.className = 'h-3 w-px bg-amber-400';
                } else {
                    dot.className = 'h-3 w-px bg-stone-300';
                }
            });
        }
    }
    
    // Create navigation buttons
    // First remove any existing section navigation buttons to avoid duplicates
    const existingPrevSection = document.getElementById('prev-section-btn');
    const existingNextSection = document.getElementById('next-section-btn');
    
    if (existingPrevSection) existingPrevSection.remove();
    if (existingNextSection) existingNextSection.remove();
    
    // Create new navigation buttons
    const prevSectionBtn = document.createElement('button');
    prevSectionBtn.id = 'prev-section-btn';
    prevSectionBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest transition-all text-stone-300 cursor-not-allowed';
    prevSectionBtn.innerHTML = `
        <span class="mr-4 h-px w-8 bg-stone-200"></span>
        Previous Section
    `;
    prevSectionBtn.style.display = 'none'; // Hide initially
    
    const nextSectionBtn = document.createElement('button');
    nextSectionBtn.id = 'next-section-btn';
    nextSectionBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest transition-all text-stone-700';
    nextSectionBtn.innerHTML = `
        Next Section
        <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
    `;
    
    // Add the buttons to the navigation area
    // Make sure to clear previous buttons to avoid duplicates
    navigationArea.innerHTML = '';
    navigationArea.appendChild(prevButton);
    navigationArea.appendChild(prevSectionBtn);
    navigationArea.appendChild(document.createElement('div')); // Spacer
    navigationArea.appendChild(nextSectionBtn);
    navigationArea.appendChild(submitButton);
    
    // Initially hide the submit button, show next section button
    submitButton.style.display = 'none';
    nextSectionBtn.style.display = 'block';
    
    // Navigation event handlers
    prevSectionBtn.addEventListener('click', function() {
        console.log("Previous section clicked, current index:", currentSectionIndex);
        if (currentSectionIndex > 0) {
            // Hide current section
            sections[currentSectionIndex].style.display = 'none';
            
            // Show previous section
            currentSectionIndex--;
            sections[currentSectionIndex].style.display = 'block';
            
            // Update button states
            if (currentSectionIndex === 0) {
                prevSectionBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest transition-all text-stone-300 cursor-not-allowed';
                prevSectionBtn.style.display = 'none';
                prevButton.style.display = 'flex';
            }
            
            // Show next section button, hide submit button
            nextSectionBtn.style.display = 'block';
            submitButton.style.display = 'none';
            
            // Update progress
            updateProgress();
            
            // Scroll to top of section
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    nextSectionBtn.addEventListener('click', function() {
        console.log("Next section clicked, current index:", currentSectionIndex);
        
        // Check if current section is answered
        const currentSectionQuestions = sections[currentSectionIndex].querySelectorAll('.question-container');
        let unansweredCount = 0;
        
        currentSectionQuestions.forEach(question => {
            const questionId = question.dataset.questionId;
            if (!userResponses.mastery[questionId]) {
                unansweredCount++;
                question.classList.add('unanswered');
                
                // Scroll to first unanswered question
                if (unansweredCount === 1) {
                    question.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                question.classList.remove('unanswered');
            }
        });
        
        if (unansweredCount > 0) {
            alert(`Please answer all questions in this section before continuing. You have ${unansweredCount} unanswered questions.`);
            return;
        }
        
        if (currentSectionIndex < sections.length - 1) {
            // Hide current section
            sections[currentSectionIndex].style.display = 'none';
            
            // Show next section
            currentSectionIndex++;
            sections[currentSectionIndex].style.display = 'block';
            
            // Update button states
            prevSectionBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-stone-700';
            prevSectionBtn.style.display = 'flex';
            prevButton.style.display = 'none';
            
            // If last section, show submit button
            if (currentSectionIndex === sections.length - 1) {
                nextSectionBtn.style.display = 'none';
                submitButton.style.display = 'flex';
            }
            
            // Update progress
            updateProgress();
            
            // Scroll to top of section
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    // Make sure the navigation area has the right layout
    navigationArea.style.display = 'flex';
    navigationArea.style.justifyContent = 'space-between';
    navigationArea.style.alignItems = 'center';
    
    // Initialize progress
    updateProgress();
}
//---------------------------------------------------------------------
// EXISTING: calculateMasteryScores (Numeric)
//---------------------------------------------------------------------
window.calculateMasteryScores = function() {
    // Make sure we have user responses
    if (!window.userResponses || !window.userResponses.mastery) {
        return {
            corePriorities: {},
            growthAreas: {},
            alignmentNeeds: {},
            energyPatterns: {}
        };
    }

    // Group answers into 4 categories (objects),
    // and each chosen value becomes a numeric count
    const result = {
        corePriorities: {},
        growthAreas: {},
        alignmentNeeds: {},
        energyPatterns: {}
    };

    // For each answered question ID → chosen value
    for (const [questionId, chosenValue] of Object.entries(window.userResponses.mastery)) {
        if (questionId.startsWith("core-")) {
            if (!result.corePriorities[chosenValue]) {
                result.corePriorities[chosenValue] = 0;
            }
            result.corePriorities[chosenValue]++;
        }
        else if (questionId.startsWith("growth-")) {
            if (!result.growthAreas[chosenValue]) {
                result.growthAreas[chosenValue] = 0;
            }
            result.growthAreas[chosenValue]++;
        }
        else if (questionId.startsWith("alignment-")) {
            if (!result.alignmentNeeds[chosenValue]) {
                result.alignmentNeeds[chosenValue] = 0;
            }
            result.alignmentNeeds[chosenValue]++;
        }
        else if (questionId.startsWith("energy-")) {
            if (!result.energyPatterns[chosenValue]) {
                result.energyPatterns[chosenValue] = 0;
            }
            result.energyPatterns[chosenValue]++;
        }
    }

    return result;
};
