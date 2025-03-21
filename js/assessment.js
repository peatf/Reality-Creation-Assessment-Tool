// Assessment Data Structure
const assessmentData = {
    // Part 1: Reality Creation Typology
    typologySpectrums: [
        {
            id: "cognitive-alignment",
            name: "Cognitive Alignment",
            description: "How you mentally interact with reality",
            leftLabel: "Rational",
            rightLabel: "Intuitive",
            questions: [
                {
                    id: "cognitive-q1",
                    text: "When encountering new ideas around spirituality, you typically:",
                    options: [
                        {
                            id: "cognitive-q1-left",
                            text: "Immediately look for logical proof or evidence.",
                            value: "left"
                        },
                        {
                            id: "cognitive-q1-balanced",
                            text: "Consider logic but remain open to intuitive impressions.",
                            value: "balanced"
                        },
                        {
                            id: "cognitive-q1-right",
                            text: "Trust your gut feeling or intuition, regardless of external validation.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "cognitive-q2",
                    text: "What feels most trustworthy to you when making important choices?",
                    options: [
                        {
                            id: "cognitive-q2-left",
                            text: "Thorough analysis and careful reasoning",
                            value: "left"
                        },
                        {
                            id: "cognitive-q2-balanced",
                            text: "A blend of logic and intuitive guidance",
                            value: "balanced"
                        },
                        {
                            id: "cognitive-q2-right",
                            text: "Inner knowing and spontaneous insight",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "perceptual-focus",
            name: "Perceptual Focus",
            description: "Clarity and openness in manifestation",
            leftLabel: "Definitive",
            rightLabel: "Receptive",
            questions: [
                {
                    id: "perceptual-q1",
                    text: "When envisioning your goals, you prefer:",
                    options: [
                        {
                            id: "perceptual-q1-left",
                            text: "Precise, detailed visions of exactly what you want.",
                            value: "left"
                        },
                        {
                            id: "perceptual-q1-balanced",
                            text: "A general vision with some specifics, leaving space for surprises.",
                            value: "balanced"
                        },
                        {
                            id: "perceptual-q1-right",
                            text: "Staying open and allowing your vision to evolve naturally over time.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "perceptual-q2",
                    text: "You feel most comfortable manifesting when:",
                    options: [
                        {
                            id: "perceptual-q2-left",
                            text: "You know exactly what you're aiming for.",
                            value: "left"
                        },
                        {
                            id: "perceptual-q2-balanced",
                            text: "You have clear intentions but remain flexible in details.",
                            value: "balanced"
                        },
                        {
                            id: "perceptual-q2-right",
                            text: "You trust life to surprise you in positive ways.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "kinetic-drive",
            name: "Kinetic Drive",
            description: "How you approach action and momentum",
            leftLabel: "Deliberate",
            rightLabel: "Spontaneous",
            questions: [
                {
                    id: "kinetic-q1",
                    text: "Your typical action-taking style looks like:",
                    options: [
                        {
                            id: "kinetic-q1-left",
                            text: "Thoughtful and intentional, with detailed plans.",
                            value: "left"
                        },
                        {
                            id: "kinetic-q1-balanced",
                            text: "Adaptive—adjusting your pacing based on current circumstances.",
                            value: "balanced"
                        },
                        {
                            id: "kinetic-q1-right",
                            text: "Quick and spontaneous—trusting instinct to guide you.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "kinetic-q2",
                    text: "Momentum feels most natural to you when:",
                    options: [
                        {
                            id: "kinetic-q2-left",
                            text: "Following a structured action plan.",
                            value: "left"
                        },
                        {
                            id: "kinetic-q2-balanced",
                            text: "Flowing between structured and spontaneous bursts of activity.",
                            value: "balanced"
                        },
                        {
                            id: "kinetic-q2-right",
                            text: "Acting in spontaneous bursts without detailed planning.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "choice-navigation",
            name: "Choice Navigation",
            description: "Decision-making style",
            leftLabel: "Calculative",
            rightLabel: "Fluid",
            questions: [
                {
                    id: "choice-q1",
                    text: "When making important decisions, you tend to:",
                    options: [
                        {
                            id: "choice-q1-left",
                            text: "Carefully weigh every option to ensure clarity.",
                            value: "left"
                        },
                        {
                            id: "choice-q1-balanced",
                            text: "Use logic and intuition equally, adjusting as needed.",
                            value: "balanced"
                        },
                        {
                            id: "choice-q1-right",
                            text: "Trust your intuition and let decisions unfold naturally.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "choice-q2",
                    text: "Your approach to uncertainty usually involves:",
                    options: [
                        {
                            id: "choice-q2-left",
                            text: "Making precise plans to minimize unpredictability.",
                            value: "left"
                        },
                        {
                            id: "choice-q2-balanced",
                            text: "Finding a comfortable balance between planning and flexibility.",
                            value: "balanced"
                        },
                        {
                            id: "choice-q2-right",
                            text: "Staying open and responding intuitively as things unfold.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "resonance-field",
            name: "Resonance Field",
            description: "Emotional interaction in manifestation",
            leftLabel: "Regulated",
            rightLabel: "Expressive",
            questions: [
                {
                    id: "resonance-q1",
                    text: "When strong emotions arise, you usually:",
                    options: [
                        {
                            id: "resonance-q1-left",
                            text: "Pause to regulate and stabilize before taking action.",
                            value: "left"
                        },
                        {
                            id: "resonance-q1-balanced",
                            text: "Allow yourself to feel emotions fully, then adjust as needed.",
                            value: "balanced"
                        },
                        {
                            id: "resonance-q1-right",
                            text: "Let your emotions immediately shape your actions and next steps.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "resonance-q2",
                    text: "Your most effective manifestations occur when you:",
                    options: [
                        {
                            id: "resonance-q2-left",
                            text: "Intentionally cultivate emotional stability.",
                            value: "left"
                        },
                        {
                            id: "resonance-q2-balanced",
                            text: "Allow emotions to inform your process but maintain some stability.",
                            value: "balanced"
                        },
                        {
                            id: "resonance-q2-right",
                            text: "Freely channel emotional energy into creating outcomes.",
                            value: "right"
                        }
                    ]
                }
            ]
        },
        {
            id: "manifestation-rhythm",
            name: "Manifestation Rhythm",
            description: "Sustainability and adaptability over time",
            leftLabel: "Structured",
            rightLabel: "Dynamic",
            questions: [
                {
                    id: "rhythm-q1",
                    text: "You maintain long-term consistency best when:",
                    options: [
                        {
                            id: "rhythm-q1-left",
                            text: "Following predictable cycles and clear routines.",
                            value: "left"
                        },
                        {
                            id: "rhythm-q1-balanced",
                            text: "Balancing consistent routines with occasional shifts in approach.",
                            value: "balanced"
                        },
                        {
                            id: "rhythm-q1-right",
                            text: "Frequently adjusting your methods based on inspiration and changing energy.",
                            value: "right"
                        }
                    ]
                },
                {
                    id: "rhythm-q2",
                    text: "Your ideal creative process looks most like:",
                    options: [
                        {
                            id: "rhythm-q2-left",
                            text: "A structured series of clearly defined steps.",
                            value: "left"
                        },
                        {
                            id: "rhythm-q2-balanced",
                            text: "A sustainable rhythm blending structure and flow.",
                            value: "balanced"
                        },
                        {
                            id: "rhythm-q2-right",
                            text: "A dynamic process that evolves as inspiration strikes.",
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
    },

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
    
    resultsTemplates: {}
};

// Initialize resultsTemplates after the object is defined
assessmentData.resultsTemplates = {
    typologyPairs: assessmentData.typologyPairs,
    idealApproaches: assessmentData.idealApproaches,
    misalignments: assessmentData.commonMisalignments
};

// User's assessment responses
let userResponses = {
    typology: {},
    mastery: {}
};

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
    
    // Update header info for Part 1
    updateQuizHeader('part1');
});

// Start the assessment
function startAssessment() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('part1').style.display = 'block';
    updateProgressIndicator('Part 1: Reality Creation Typology', 0);
}

// Generate Part 1: Typology Questions
function generateTypologyQuestions() {
    const container = document.getElementById('spectrum-questions');
    container.innerHTML = '';

    assessmentData.typologySpectrums.forEach((spectrum, spectrumIndex) => {
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
        spectrum.questions.forEach((question, questionIndex) => {
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
            questionNumber.textContent = `0${questionIndex + 1}`;
            
            questionNumberCol.appendChild(questionLabel);
            questionNumberCol.appendChild(questionNumber);
            
            // Question text column
            const questionTextCol = document.createElement('div');
            questionTextCol.className = 'col-span-10';
            
            const questionText = document.createElement('p');
            questionText.className = 'text-2xl font-light leading-relaxed text-stone-700';
            questionText.textContent = question.text;
            
            questionTextCol.appendChild(questionText);
            
            // Add columns to grid
            questionGrid.appendChild(questionNumberCol);
            questionGrid.appendChild(questionTextCol);
            questionContainer.appendChild(questionGrid);

            // Create interactive spectrum visualization
            const visualization = document.createElement('div');
            visualization.className = 'mb-16';
            
            // Spectrum labels
            const spectrumLabels = document.createElement('div');
            spectrumLabels.className = 'flex justify-between items-center mb-8';
            
            const leftLabel = document.createElement('div');
            leftLabel.className = 'text-xs font-medium uppercase tracking-wide text-stone-500';
            leftLabel.textContent = spectrum.leftLabel;
            
            const trackLine = document.createElement('div');
            trackLine.className = 'flex-1 h-0.5 mx-6 bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 rounded-full';
            
            const rightLabel = document.createElement('div');
            rightLabel.className = 'text-xs font-medium uppercase tracking-wide text-stone-500';
            rightLabel.textContent = spectrum.rightLabel;
            
            spectrumLabels.appendChild(leftLabel);
            spectrumLabels.appendChild(trackLine);
            spectrumLabels.appendChild(rightLabel);
            
            // Option selection with neumorphic styling
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'relative pt-6 pb-10';
            
            // Track line connecting the options
            const trackConnect = document.createElement('div');
            trackConnect.className = 'absolute top-1/2 left-0 w-full h-0.5 bg-stone-200 transform -translate-y-1/2';
            optionsContainer.appendChild(trackConnect);
            
            // Interactive options
            const optionsGroup = document.createElement('div');
            optionsGroup.className = 'relative flex justify-between items-center mb-12';
            
            // Create options
            question.options.forEach((option, optionIndex) => {
                const optionContainer = document.createElement('div');
                optionContainer.className = 'option-container';
                
                const optionButton = document.createElement('div');
                optionButton.className = 'option-button';
                optionButton.dataset.optionId = option.id;
                optionButton.dataset.value = option.value;
                
                // Create inner marker that appears when selected
                const optionMarker = document.createElement('div');
                optionMarker.className = 'option-marker';
                optionButton.appendChild(optionMarker);
                
                // Add click event
                optionButton.addEventListener('click', function() {
                    // Remove selected class from all options in this question
                    const allButtons = optionsGroup.querySelectorAll('.option-button');
                    allButtons.forEach(btn => btn.classList.remove('selected'));
                    
                    // Add selected class to this option
                    this.classList.add('selected');
                    
                    // Store user response
                    userResponses.typology[question.id] = option.value;
                });
                
                // Create position indicator line
                const positionLine = document.createElement('div');
                positionLine.className = 'option-position-line';
                
                // Create text description
                const optionTextContainer = document.createElement('div');
                optionTextContainer.className = 'option-text';
                
                const optionLabel = document.createElement('div');
                optionLabel.className = 'option-label';
                
                // Set label text based on position
                let labelText = '';
                if (option.value === 'left') {
                    labelText = spectrum.leftLabel;
                } else if (option.value === 'balanced') {
                    labelText = 'BALANCED';
                } else if (option.value === 'right') {
                    labelText = spectrum.rightLabel;
                }
                optionLabel.textContent = labelText;
                
                const optionText = document.createElement('p');
                optionText.className = 'text-sm font-light';
                optionText.textContent = option.text;
                
                optionTextContainer.appendChild(optionLabel);
                optionTextContainer.appendChild(optionText);
                
                // Assemble option container
                optionContainer.appendChild(optionButton);
                optionContainer.appendChild(positionLine);
                optionContainer.appendChild(optionTextContainer);
                
                optionsGroup.appendChild(optionContainer);
            });
            
            // Add options to the container
            optionsContainer.appendChild(optionsGroup);
            
            // Add visualization to question container
            visualization.appendChild(spectrumLabels);
            visualization.appendChild(optionsContainer);
            questionContainer.appendChild(visualization);
            
            // Add to spectrum section
            spectrumSection.appendChild(questionContainer);
        });

        container.appendChild(spectrumSection);
    });
    
    // Update progress indicator
    updateProgressIndicator('Part 1: Reality Creation Typology', 0);
}

// Update the header information for the current quiz section
function updateQuizHeader(part) {
    if (part === 'part1') {
        // Update active spectrum info based on current view
        const currentSpectrum = assessmentData.typologySpectrums[0]; // Default to first spectrum
        
        // Update header text
        document.querySelector('#part1 .text-xs.uppercase').textContent = `SPECTRUM 01/0${assessmentData.typologySpectrums.length}`;
        document.querySelector('#part1 h1').textContent = 'REALITY CREATION TYPOLOGY';
        document.querySelector('#part1 h1 + p').textContent = currentSpectrum.description;
    } else if (part === 'part2') {
        // Update progress indicator
        const progressFill = document.getElementById('progress-fill-part2');
        progressFill.style.width = '33%'; // Start with the first section
    }
}

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
    updateProgressIndicator('Part 2: Mastery Assessment', 50);

    // Generate Part 2 questions if not already generated
    if (document.getElementById('mastery-questions').children.length === 0) {
        generateMasteryQuestions();
    }
    
    // Update header info for Part 2
    updateQuizHeader('part2');
}

// Show Part 1 of the assessment
function showPart1() {
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part1').style.display = 'block';
    updateProgressIndicator('Part 1: Reality Creation Typology', 25);
}

// Check for unanswered questions (visually highlight them)
function checkUnansweredQuestions(partId) {
    let unansweredCount = 0;
    
    if (partId === 'part1') {
        // Get all questions in Part 1
        const questions = document.querySelectorAll('#spectrum-questions .question-container');
        
        questions.forEach(question => {
            const questionId = question.dataset.questionId;
            const isAnswered = userResponses.typology[questionId] !== undefined;
            
            if (!isAnswered) {
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
    } else if (partId === 'part2') {
        // Get all questions in Part 2
        const questions = document.querySelectorAll('#mastery-questions .question-container');
        
        questions.forEach(question => {
            const questionId = question.dataset.questionId;
            const isAnswered = userResponses.mastery[questionId] !== undefined;
            
            if (!isAnswered) {
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
    }
    
    return unansweredCount;
}

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
    updateProgressIndicator('Results', 100);

    // Calculate and display results (implemented in results.js)
    generateAndDisplayResults();
}

// Update progress indicator
function updateProgressIndicator(stage, percentage) {
    // For visual indication of progress, update the progress markers in the UI
    if (stage.includes('Part 1')) {
        // Highlight the first progress dot
        document.querySelectorAll('#part1 .flex.items-center.space-x-6 .h-3.w-px').forEach((dot, index) => {
            if (index === 0) {
                dot.classList.add('bg-amber-400');
            } else {
                dot.classList.add('bg-stone-300');
            }
        });
    } else if (stage.includes('Part 2')) {
        // Highlight the second progress dot
        document.querySelectorAll('#part2 .flex.items-center.space-x-6 .h-3.w-px').forEach((dot, index) => {
            if (index === 1) {
                dot.classList.add('bg-amber-400');
            } else {
                dot.classList.add('bg-stone-300');
            }
        });
        
        // Update the progress bar
        const progressFill = document.getElementById('progress-fill-part2');
        if (progressFill) {
            progressFill.style.width = '50%';
        }
    } else if (stage.includes('Results')) {
        // Highlight the third progress dot
        document.querySelectorAll('#results .flex.items-center.space-x-6 .h-3.w-px').forEach((dot, index) => {
            if (index === 2) {
                dot.classList.add('bg-amber-400');
            } else {
                dot.classList.add('bg-stone-300');
            }
        });
    }
}

// Restart the assessment
function restartAssessment() {
    // Clear all selections
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.classList.remove('selected');
    });
    
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.classList.remove('selected');
    });

    // Clear user responses
    userResponses = {
        typology: {},
        mastery: {}
    };

    // Go back to introduction
    document.getElementById('results').style.display = 'none';
    document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('introduction').style.display = 'block';
    
    // Reset progress indicators
    updateQuizHeader('part1');
    
    // Regenerate questions to ensure clean state
    generateTypologyQuestions();
    document.getElementById('mastery-questions').innerHTML = '';
}

// Print results
function printResults() {
    window.print();
}

// (Placeholder) Generate Part 2 questions in part2_mastery.js
function generateMasteryQuestions() {
    // This function would dynamically create mastery questions (separate file logic).
    // We'll leave it here as a placeholder to prevent errors if the file is missing.
}

// (Placeholder) Results generation function in results.js
function generateAndDisplayResults() {
    // Use scoring.js logic and fill #results with final info.
    // Left blank here as an example stub.
}
