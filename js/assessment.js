// Assessment Data Structure
const assessmentData = {
    // Part 1: Reality Creation Typology
    typologySpectrums: [
        {
            id: "cognitive-alignment",
            name: "Cognitive Alignment",
            description: "How you process information and make meaning of your experiences",
            leftLabel: "Structured",
            rightLabel: "Intuitive",
            questions: [
                {
                    id: "cognitive-q1",
                    text: "When approaching a new project or goal, I typically:",
                    options: [
                        {
                            id: "cognitive-q1-left",
                            text: "Create a detailed plan with specific steps, timelines, and measurable outcomes to ensure clarity and direction.",
                            value: "left"
                        },
                        {
                            id: "cognitive-q1-balanced",
                            text: "Develop a flexible framework that includes key milestones while remaining open to adjusting my approach as new information emerges.",
                            value: "balanced"
                        },
                        {
                            id: "cognitive-q1-right",
                            text: "Focus on the desired feeling and outcome, allowing the specific path to emerge organically as I follow intuitive nudges and inspiration.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "cognitive-q2",
                    text: "When making important decisions, I most trust:",
                    options: [
                        {
                            id: "cognitive-q2-left",
                            text: "Careful analysis of facts, data, and logical reasoning to reach the most rational conclusion.",
                            value: "left"
                        },
                        {
                            id: "cognitive-q2-balanced",
                            text: "A combination of analytical thinking and intuitive knowing, weighing both logical considerations and gut feelings.",
                            value: "balanced"
                        },
                        {
                            id: "cognitive-q2-right",
                            text: "My intuitive sense and inner knowing, even when I can't immediately articulate why I feel drawn to a particular choice.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "perceptual-focus",
            name: "Perceptual Focus",
            description: "How you direct your attention and perceive reality",
            leftLabel: "Precise",
            rightLabel: "Expansive",
            questions: [
                {
                    id: "perceptual-q1",
                    text: "When considering what's possible in my life, I tend to focus on:",
                    options: [
                        {
                            id: "perceptual-q1-left",
                            text: "What is realistic and achievable based on current circumstances, resources, and proven methods.",
                            value: "left"
                        },
                        {
                            id: "perceptual-q1-balanced",
                            text: "A balance between practical considerations and expansive possibilities, stretching beyond current limitations while remaining grounded.",
                            value: "balanced"
                        },
                        {
                            id: "perceptual-q1-right",
                            text: "Unlimited possibilities and potential, believing that reality is fluid and can transform in unexpected and miraculous ways.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "perceptual-q2",
                    text: "When observing the world around me, I most naturally notice:",
                    options: [
                        {
                            id: "perceptual-q2-left",
                            text: "Concrete details, specific patterns, and tangible elements that can be clearly observed and measured.",
                            value: "left"
                        },
                        {
                            id: "perceptual-q2-balanced",
                            text: "Both concrete details and subtle energies, appreciating the physical world while sensing the underlying connections.",
                            value: "balanced"
                        },
                        {
                            id: "perceptual-q2-right",
                            text: "Energy, vibration, and subtle patterns that exist beyond the physical realm, sensing the invisible forces at play.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "kinetic-drive",
            name: "Kinetic Drive",
            description: "How you generate momentum and take action",
            leftLabel: "Methodical",
            rightLabel: "Dynamic",
            questions: [
                {
                    id: "kinetic-q1",
                    text: "When working toward a goal, I prefer to:",
                    options: [
                        {
                            id: "kinetic-q1-left",
                            text: "Take consistent, methodical action with clear steps and measurable progress markers.",
                            value: "left"
                        },
                        {
                            id: "kinetic-q1-balanced",
                            text: "Alternate between periods of focused action and reflective pauses, adjusting my approach based on results and intuition.",
                            value: "balanced"
                        },
                        {
                            id: "kinetic-q1-right",
                            text: "Follow the flow of inspiration and energy, taking aligned action when it feels right rather than forcing a predetermined schedule.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "kinetic-q2",
                    text: "I feel most productive and effective when:",
                    options: [
                        {
                            id: "kinetic-q2-left",
                            text: "I've completed specific tasks according to plan and can see tangible evidence of my progress.",
                            value: "left"
                        },
                        {
                            id: "kinetic-q2-balanced",
                            text: "I've made meaningful progress through a combination of planned actions and inspired adjustments.",
                            value: "balanced"
                        },
                        {
                            id: "kinetic-q2-right",
                            text: "I've followed my energy and intuition, allowing my actions to unfold organically in alignment with my vision.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "choice-navigation",
            name: "Choice Navigation",
            description: "How you navigate decisions and determine your path",
            leftLabel: "Strategic",
            rightLabel: "Flowing",
            questions: [
                {
    id: "choice-q1",
    text: "When faced with multiple options or paths, I typically:",
    options: [
        {
            id: "choice-q1-left",
            text: "Analyze the pros and cons of each option, considering which path is most likely to lead to my desired outcome.",
            value: "left"
        },
        {
            id: "choice-q1-balanced",
            text: "Consider both practical factors and how each option feels energetically, seeking the path that balances feasibility with alignment.",
            value: "balanced"
        },
        {
            id: "choice-q1-right",
            text: "Tune into which option feels most aligned with my energy and highest good, trusting my intuitive guidance system.",
            value: "right"
        }
    ]
}
                {
                    id: "choice-q2",
                    text: "I know I've made the right decision when:",
                    options: [
                        {
                            id: "choice-q2-left",
                            text: "The results confirm that my choice was logical and led to the intended outcome.",
                            value: "left"
                        },
                        {
                            id: "choice-q2-balanced",
                            text: "The path unfolds with a balance of expected results and unexpected gifts that feel aligned with my growth.",
                            value: "balanced"
                        },
                        {
                            id: "choice-q2-right",
                            text: "I feel a deep sense of rightness and flow, even if the external results aren't immediately visible or understood by others.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "resonance-field",
            name: "Resonance Field",
            description: "How you connect with and influence your environment",
            leftLabel: "Focused",
            rightLabel: "Expansive",
            questions: [
                {
                    id: "resonance-q1",
                    text: "I believe my relationship with external reality is primarily:",
                    options: [
                        {
                            id: "resonance-q1-left",
                            text: "Based on my ability to understand objective conditions and adapt my actions to work effectively within established systems.",
                            value: "left"
                        },
                        {
                            id: "resonance-q1-balanced",
                            text: "A co-creative dance where I both respond to existing conditions and influence outcomes through my energy and intentions.",
                            value: "balanced"
                        },
                        {
                            id: "resonance-q1-right",
                            text: "A direct reflection of my consciousness, where external circumstances mirror my internal state and shift as I change my vibration.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "resonance-q2",
                    text: "When I want to create change in my life, I focus most on:",
                    options: [
                        {
                            id: "resonance-q2-left",
                            text: "Taking strategic action steps that directly address the specific conditions I want to change.",
                            value: "left"
                        },
                        {
                            id: "resonance-q2-balanced",
                            text: "Aligning my internal state with my desired outcome while taking inspired action steps that feel congruent.",
                            value: "balanced"
                        },
                        {
                            id: "resonance-q2-right",
                            text: "Shifting my energy, beliefs, and vibration to match my desired reality, trusting that external circumstances will reorganize accordingly.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "manifestation-rhythm",
            name: "Manifestation Rhythm",
            description: "Your natural timing and flow in the manifestation process",
            leftLabel: "Sequential",
            rightLabel: "Cyclical",
            questions: [
                {
                    id: "rhythm-q1",
                    text: "My preferred pace for creating results is:",
                    options: [
                        {
                            id: "rhythm-q1-left",
                            text: "Steady and methodical, with clear milestones and consistent progress toward well-defined outcomes.",
                            value: "left"
                        },
                        {
                            id: "rhythm-q1-balanced",
                            text: "Rhythmic and flexible, alternating between periods of focused action and receptive integration.",
                            value: "balanced"
                        },
                        {
                            id: "rhythm-q1-right",
                            text: "Organic and intuitive, following natural cycles of expansion and contraction without forcing artificial timelines.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "rhythm-q2",
                    text: "When manifesting something important, I believe the process works best when:",
                    options: [
                        {
                            id: "rhythm-q2-left",
                            text: "I create a clear plan with specific action steps and follow through consistently until I achieve my desired outcome.",
                            value: "left"
                        },
                        {
                            id: "rhythm-q2-balanced",
                            text: "I set clear intentions and take aligned action while remaining open to unexpected opportunities and divine timing.",
                            value: "balanced"
                        }
                        {
                            id: "rhythm-q2-right",
                            text: "I surrender to the natural unfolding of the process, focusing on energetic alignment and allowing the universe to determine the perfect timing and path.",
                            value: "right"
                        }
                    ]
                }
            ]
        }
    ],

    // Typology Pair Definitions
    typologyPairs: {
        "structured-structured": {
            name: "Strategic Architect",
            description: "You are a methodical creator who thrives with clear structure and logical processes. Your approach to reality creation emphasizes careful planning, consistent action, and measurable results. You excel at creating solid foundations and implementing systematic approaches to manifestation."
        },
        "structured-balanced": {
            name: "Practical Synthesizer",
            description: "You lead with structured approaches while maintaining balanced integration in your process. Your methodical nature and analytical mind guide your manifestation work, yet you naturally incorporate intuitive elements to enhance your primarily logical approach."
        },
        "structured-fluid": {
            name: "Grounded Visionary",
            description: "You combine structured foundations with fluid expansion in your creation process. Your methodical core provides stability while your secondary intuitive nature allows for inspired adaptation and energetic awareness within your primarily structured approach."
        },
        "balanced-structured": {
            name: "Integrated Strategist",
            description: "You lead with balanced integration while incorporating structured elements in your approach. Your adaptable nature allows you to harmonize different modalities, with a secondary emphasis on methodical implementation and logical analysis."
        },
        "balanced-balanced": {
            name: "Harmonic Integrator",
            description: "You are naturally centered in balanced integration across all aspects of reality creation. Your approach emphasizes adaptability, harmony between structure and flow, and the ability to synthesize seemingly opposite modalities into cohesive creation processes."
        },
        "balanced-fluid": {
            name: "Flowing Harmonizer",
            description: "You lead with balanced integration while incorporating fluid elements in your approach. Your adaptable nature allows you to harmonize different modalities, with a secondary emphasis on intuitive flow and energetic alignment."
        },
        "fluid-structured": {
            name: "Intuitive Implementer",
            description: "You lead with intuitive flow while incorporating structured elements in your approach. Your expansive perception and spiritual connection guide your manifestation process, yet you naturally incorporate methodical elements to ground your primarily intuitive approach."
        },
        "fluid-balanced": {
            name: "Visionary Harmonizer",
            description: "You lead with intuitive flow while maintaining balanced integration in your approach. Your expansive perception and spiritual connection guide your manifestation process, yet you naturally incorporate practical elements to bring your visions into form."
        },
        "fluid-fluid": {
            name: "Quantum Manifestor",
            description: "You are a naturally expansive creator who thrives in fluid, intuitive reality creation. Your approach emphasizes energetic alignment, inspired action, and trust in divine timing. You excel at sensing possibilities beyond conventional limitations and allowing manifestations to emerge through alignment rather than force."
        }
    },
    // Ideal Approaches based on Typology Pair
    idealApproaches: {
        "structured-structured": {
            strengths: "Clarity, precision, consistency, methodical implementation, logical analysis",
            approaches: [
                "Create detailed manifestation plans with clear milestones and action steps",
                "Use structured visualization practices with specific details and consistent timing",
                "Implement systems to track progress and measure results",
                "Establish regular routines that support your manifestation process",
                "Use analytical approaches to identify and remove obstacles"
            ]
        },
        "structured-balanced": {
            strengths: "Strategic thinking, adaptable structure, practical integration, methodical flexibility",
            approaches: [
                "Create flexible frameworks with clear priorities but adaptable implementation",
                "Alternate between structured planning and intuitive adjustment periods",
                "Use data-driven approaches while remaining open to unexpected opportunities",
                "Implement consistent practices with room for spontaneous inspiration",
                "Balance focused action with reflective integration periods"
            ]
        },
        "structured-fluid": {
            strengths: "Grounded vision, practical intuition, structured creativity, methodical expansion",
            approaches: [
                "Begin with clear intentions and frameworks, then allow intuitive expansion",
                "Alternate between focused action periods and intuitive connection time",
                "Use structured practices to ground and implement inspired insights",
                "Create systems that support rather than restrict your creative flow",
                "Balance analytical planning with energetic alignment practices"
            ]
        },
        "balanced-structured": {
            strengths: "Adaptive precision, integrated analysis, flexible structure, harmonious implementation",
            approaches: [
                "Use adaptable frameworks that provide structure without rigidity",
                "Implement consistent practices while allowing for natural evolution",
                "Balance analytical approaches with intuitive check-ins",
                "Create organized systems with built-in flexibility",
                "Alternate between action-focused and alignment-focused phases"
            ]
        },
        "balanced-balanced": {
            strengths: "Integration, adaptability, harmonious action, balanced perception, unified approach",
            approaches: [
                "Fluidly move between structured and intuitive approaches as needed",
                "Create integrated practices that honor both logical and intuitive aspects",
                "Maintain core consistency while allowing natural evolution",
                "Balance planning and allowing in equal measure",
                "Use both analytical and energetic approaches to overcome challenges"
            ]
        },
        "balanced-fluid": {
            strengths: "Flowing integration, intuitive balance, expansive harmony, adaptive intuition",
            approaches: [
                "Lead with intuitive approaches while maintaining practical grounding",
                "Create flexible structures that support rather than limit your natural flow",
                "Balance energetic alignment with tangible action steps",
                "Use intuitive practices with consistent implementation",
                "Alternate between expansive exploration and focused integration"
            ]
        },
        "fluid-structured": {
            strengths: "Structured intuition, grounded expansion, practical flow, organized creativity",
            approaches: [
                "Anchor intuitive insights with practical implementation strategies",
                "Create flexible structures that support your visionary nature",
                "Balance energetic practices with tangible action steps",
                "Use intuitive guidance to inform strategic planning",
                "Implement consistent practices that honor your need for creative freedom"
            ]
        },
        "fluid-balanced": {
            strengths: "Visionary integration, expansive harmony, intuitive adaptation, flowing balance",
            approaches: [
                "Lead with intuitive and energetic approaches while maintaining practical awareness",
                "Create minimal structures that support rather than restrict your natural flow",
                "Use your strong intuitive abilities while staying grounded in practical reality",
                "Balance expansive vision with focused implementation",
                "Alternate between pure creative flow and integrative consolidation"
            ]
        },
        "fluid-fluid": {
            strengths: "Expansive vision, energetic sensitivity, intuitive flow, quantum perception, creative inspiration",
            approaches: [
                "Focus primarily on energetic alignment and vibrational matching",
                "Use visualization and feeling-based manifestation practices",
                "Create from inspired flow rather than predetermined plans",
                "Trust divine timing and synchronistic opportunities",
                "Implement just enough structure to channel your expansive energy"
            ]
        }
    },
    // Common Misalignments based on Typology Pair
    commonMisalignments: {
        "structured-structured": [
            "Becoming too rigid or inflexible in your manifestation approach",
            "Overplanning without taking sufficient action",
            "Dismissing intuitive insights that don't fit your logical framework",
            "Becoming discouraged when results don't follow your expected timeline",
            "Focusing too much on the 'how' rather than the desired outcome"
        ],
        "structured-balanced": [
            "Defaulting to structure when flexibility would be more effective",
            "Overanalyzing intuitive nudges instead of trusting them",
            "Creating overly complex systems that limit natural flow",
            "Becoming impatient with processes that require organic unfolding",
            "Dismissing approaches that seem too unstructured or intuitive"
        ],
        "structured-fluid": [
            "Imposing excessive structure on naturally flowing processes",
            "Overriding intuitive guidance with logical analysis",
            "Creating rigid plans that don't allow for inspired adjustments",
            "Becoming frustrated when manifestations require surrender",
            "Dismissing the energetic and vibrational aspects of creation"
        ],
        "balanced-structured": [
            "Defaulting to analytical approaches when intuition would serve better",
            "Creating unnecessary structure that limits your natural adaptability",
            "Becoming too focused on tangible results and ignoring the process",
            "Undervaluing your intuitive insights in favor of logical approaches",
            "Resisting the natural flow of manifestation with excessive control"
        ],
        "balanced-balanced": [
            "Becoming indecisive when clear direction is needed",
            "Overcomplicating your approach by trying to incorporate too many modalities",
            "Lacking sufficient focus or specificity in your manifestation practice",
            "Adjusting your approach too frequently without allowing momentum",
            "Avoiding full commitment to either structured or intuitive approaches"
        ],
        "balanced-fluid": [
            "Defaulting to intuitive approaches when structure would be more effective",
            "Lacking sufficient grounding for your expansive vision",
            "Becoming too abstract without practical implementation",
            "Resisting necessary structure and consistency",
            "Avoiding analytical approaches that would support manifestation"
        ],
        "fluid-structured": [
            "Imposing unnecessary structure that restricts your natural flow",
            "Doubting your intuitive insights when they don't seem logical",
            "Becoming too focused on practical action at the expense of alignment",
            "Rushing the manifestation process instead of allowing divine timing",
            "Undervaluing the power of your energetic and vibrational work"
        ],
        "fluid-balanced": [
            "Resisting practical structure and consistency",
            "Becoming scattered when focus would be more effective",
            "Neglecting logical analysis that would support manifestation",
            "Abandoning projects when they require structured development"
        ],
        "fluid-fluid": [
            "Lacking sufficient grounding to manifest ideas into form",
            "Becoming scattered or unfocused without some organizing principles",
            "Avoiding practical action steps necessary for manifestation",
            "Abandoning projects when they require consistent effort",
            "Neglecting to create sufficient clarity around desires"
        ]
    }
};
// Add this right after the commonMisalignments object in the assessmentData

// Typology Descriptions
typologyDescriptions: {
    "cognitive-alignment-left": {
        name: "Rational",
        description: "You process reality through logical thinking, analysis, and evidence. You need clarity and reasoning before accepting something as true or real."
    },
    "cognitive-alignment-balanced": {
        name: "Synthesizing",
        description: "You blend logic with intuition, using both analytical thinking and inner knowing to navigate reality creation."
    },
    "cognitive-alignment-right": {
        name: "Intuitive",
        description: "You trust inner knowing and direct experience over logic. Your intuition guides your perception and decisions in reality creation."
    },
    "perceptual-focus-left": {
        name: "Definitive",
        description: "You need a clear, well-defined vision to manifest effectively. Precision and specificity help you create with confidence."
    },
    "perceptual-focus-balanced": {
        name: "Adaptive",
        description: "You balance specificity with openness, allowing clarity and fluidity to coexist in your manifestation process."
    },
    "perceptual-focus-right": {
        name: "Receptive",
        description: "You prefer to stay open to unfolding surprises rather than locking into a fixed vision. Possibilities emerge as you remain receptive."
    },
    "kinetic-drive-left": {
        name: "Deliberate",
        description: "You move intentionally, preferring structured execution and planning. Methodical action gives you confidence and momentum."
    },
    "kinetic-drive-balanced": {
        name: "Rhythmic",
        description: "You adapt speed and timing to the moment, shifting between planning and action seamlessly as needed."
    },
    "kinetic-drive-right": {
        name: "Spontaneous",
        description: "You act quickly, following instinct and momentum rather than detailed planning. Inspired action drives your manifestation."
    },
    "choice-navigation-left": {
        name: "Calculative",
        description: "You prefer making decisions carefully, weighing options before acting. Strategic planning gives you clarity and confidence."
    },
    "choice-navigation-balanced": {
        name: "Balanced",
        description: "You balance strategic decisions with intuitive responsiveness, knowing when to plan and when to flow with opportunities."
    },
    "choice-navigation-right": {
        name: "Fluid",
        description: "You make decisions based on instinct, trusting the path as it unfolds. Your choices flow naturally from inner guidance."
    },
    "resonance-field-left": {
        name: "Regulated",
        description: "You regulate emotions intentionally, cultivating specific states for focused manifestation. Emotional management is key to your process."
    },
    "resonance-field-balanced": {
        name: "Attuned",
        description: "You move between emotional influence and stability, adjusting as needed and using feelings as informative guidance."
    },
    "resonance-field-right": {
        name: "Expressive",
        description: "You let emotions naturally shape reality, allowing mood and energy shifts to guide your manifestation process."
    },
    "manifestation-rhythm-left": {
        name: "Structured",
        description: "You thrive in predictable cycles, working best with structured phases and deadlines. Consistency is your key to manifestation."
    },
    "manifestation-rhythm-balanced": {
        name: "Sustainable",
        description: "You can adapt while maintaining steady momentum, balancing external structure with inner flow for sustainable progress."
    },
    "manifestation-rhythm-right": {
        name: "Dynamic",
        description: "You shift approaches fluidly, reinventing your manifestation process based on current needs and inspiration. Evolution is constant."
    }
},

// Results Templates
resultsTemplates: {
    typologyPairs: assessmentData.typologyPairs,
    idealApproaches: assessmentData.idealApproaches,
    misalignments: assessmentData.commonMisalignments
}
// User's assessment responses
let userResponses = {
    typology: {},
    mastery: {}
};
// Initialize the assessment
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for navigation
    document.getElementById('start-assessment').addEventListener('click', startAssessment);
    document.getElementById('part1-next').addEventListener('click', showPart2);
    document.getElementById('part2-prev').addEventListener('click', showPart1);
    document.getElementById('submit-assessment').addEventListener('click', showResults);
    document.getElementById('restart-assessment').addEventListener('click', restartAssessment);
    document.getElementById('print-results').addEventListener('click', printResults);
    // Generate Part 1 questions
    generateTypologyQuestions();
});
// Start the assessment
function startAssessment() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('part1').style.display = 'block';
}
// Generate Part 1: Typology Questions
function generateTypologyQuestions() {
    const container = document.getElementById('spectrum-questions');
    container.innerHTML = '';
    assessmentData.typologySpectrums.forEach(spectrum => {
        // Create spectrum section
        const spectrumSection = document.createElement('div');
        spectrumSection.className = 'spectrum-section';
        
        // Add spectrum title and description
        const spectrumTitle = document.createElement('h4');
        spectrumTitle.className = 'spectrum-title';
        spectrumTitle.textContent = spectrum.name;
        spectrumSection.appendChild(spectrumTitle);
        
        const spectrumDesc = document.createElement('p');
        spectrumDesc.className = 'spectrum-description';
        spectrumDesc.textContent = spectrum.description;
        spectrumSection.appendChild(spectrumDesc);
        
        // Add questions for this spectrum
        spectrum.questions.forEach(question => {
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
                    userResponses.typology[question.id] = option.value;
                });
                
                const optionText = document.createElement('span');
                optionText.textContent = option.text;
                
                optionDiv.appendChild(radio);
                optionDiv.appendChild(optionText);
                answerOptions.appendChild(optionDiv);
            });
            
            questionContainer.appendChild(answerOptions);
            spectrumSection.appendChild(questionContainer);
        });
        
        container.appendChild(spectrumSection);
    });
}
// Show Part 2 of the assessment
function showPart2() {
// Show Part 2 of the assessment
function showPart2() {
    // Check if all Part 1 questions are answered
    const unansweredQuestions = checkUnansweredQuestions('part1');
    
    if (unansweredQuestions > 0) {
        alert(`Please answer all questions in Part 1. You have ${unansweredQuestions} unanswered questions.`);
        return;
    }
    
    document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
    
    // Generate Part 2 questions if not already generated
    if (document.getElementById('mastery-questions').children.length === 0) {
        generateMasteryQuestions();
    }
}
// Show Part 1 of the assessment
function showPart1() {
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part1').style.display = 'block';
}
// Check for unanswered questions
function checkUnansweredQuestions(partId) {
    let questionContainers;
    
    if (partId === 'part1') {
        questionContainers = document.querySelectorAll('#spectrum-questions .question-container');
    } else if (partId === 'part2') {
        questionContainers = document.querySelectorAll('#mastery-questions .question-container');
    }
    
    let unansweredCount = 0;
    
    questionContainers.forEach(container => {
        const answered = container.querySelector('input[type="radio"]:checked');
        if (!answered) {
            unansweredCount++;
            container.classList.add('unanswered');
        } else {
            container.classList.remove('unanswered');
        }
    });
    
    return unansweredCount;
}
// Part 2 questions generation is implemented in part2_mastery.js
// Show results
function showResults() {
    // Check if all Part 2 questions are answered
    const unansweredQuestions = checkUnansweredQuestions('part2');
    
    if (unansweredQuestions > 0) {
        alert(`Please answer all questions in Part 2. You have ${unansweredQuestions} unanswered questions.`);
        return;
    }
    
    document.getElementById('part2').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Calculate and display results
    generateAndDisplayResults();
}
// Calculate and display results function is implemented in results.js
// Spectrum placement calculation is implemented in scoring.js
// Typology pair determination is implemented in scoring.js
// Results generation functions are implemented in results.js
// Restart the assessment
function restartAssessment() {
    // Clear all selections
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        radio.checked = false;
    });
    
    document.querySelectorAll('.answer-option.selected').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Clear user responses
    userResponses = {
        typology: {},
        mastery: {}
    };
    
    // Go back to introduction
    document.getElementById('results').style.display = 'none';
    document.getElementById('introduction').style.display = 'block';
}
// Print results
function printResults() {
    window.print();
}
    // Print results
function printResults() {
    window.print();
}

// Add this new function after printResults()
// Improved function to check for unanswered questions with visual highlighting
function checkUnansweredQuestions(partId) {
    let questionContainers;
    
    if (partId === 'part1') {
        questionContainers = document.querySelectorAll('#spectrum-questions .question-container');
    } else if (partId === 'part2') {
        questionContainers = document.querySelectorAll('#mastery-questions .question-container');
    }
    
    let unansweredCount = 0;
    
    // Clear any previous highlighting
    questionContainers.forEach(container => {
        container.classList.remove('unanswered');
    });
    
    // Check each question and highlight unanswered ones
    questionContainers.forEach(container => {
        const answered = container.querySelector('input[type="radio"]:checked');
        if (!answered) {
            unansweredCount++;
            container.classList.add('unanswered');
            
            // Scroll to first unanswered question
            if (unansweredCount === 1) {
                container.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
    
    return unansweredCount;
}

// Add these progress indicator functions
// Update progress indicator
function updateProgressIndicator(stage, percentage) {
    const progressContainer = document.getElementById('progress-container');
    const progressStage = document.getElementById('progress-stage');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressFill = document.getElementById('progress-fill');
    
    // Show progress bar if hidden
    progressContainer.style.display = 'block';
    
    // Update stage text
    progressStage.textContent = stage;
    
    // Update percentage
    progressPercentage.textContent = `${percentage}%`;
    
    // Update fill width
    progressFill.style.width = `${percentage}%`;
}
