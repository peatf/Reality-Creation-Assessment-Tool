// redesigned-assessment.js
// This file handles the main UI interactions and assessment logic
// for the Reality Creation Assessment

// User's assessment responses
let userResponses = {
    typology: {},
    mastery: {}
};

// Current section being displayed in Part 1
let currentSpectrumIndex = 0;

// Typology Spectrums data (same as in your original code)
const typologySpectrums = [
    {
            id: "cognitive-alignment",
            name: "Cognitive Alignment",
            description: "How you mentally interact with reality",
            leftLabel: "Rational",
            rightLabel: "Intuitive",
            questions: [
                {
                    id: "cognitive-q1",
                    text: "When a new idea lands, your first instinct is to:",
                    options: [
                        {
                            id: "cognitive-q1-left",
                            text: "Break it down logically: you want evidence before you let it in",
                            value: "left"
                        },
                        {
                            id: "cognitive-q1-balanced",
                            text: "Weigh it out: feel the logic, but also listen to your intuition",
                            value: "balanced"
                        },
                        {
                            id: "cognitive-q1-right",
                            text: "Trust your instincts or your gut if it clicks in your body, that's enough",
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
                            text: "Thorough analysis and careful reasoning.",
                            value: "left"
                        },
                        {
                            id: "cognitive-q2-balanced",
                            text: "A blend of logic and intuitive guidance.",
                            value: "balanced"
                        },
                        {
                            id: "cognitive-q2-right",
                            text: "Inner knowing and spontaneous insight.",
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
        },
];

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for navigation
    document.getElementById('start-assessment').addEventListener('click', startAssessment);
    document.getElementById('part1-next').addEventListener('click', function() {
        // Check if all spectrums have been answered before moving to Part 2
        if (currentSpectrumIndex >= typologySpectrums.length - 1) {
            showPart2();
        } else {
            // Show next spectrum section
            showNextSpectrum();
        }
    });
    document.getElementById('prev-spectrum').addEventListener('click', showPrevSpectrum);
    document.getElementById('part2-prev').addEventListener('click', showPart1);
    document.getElementById('submit-assessment').addEventListener('click', showResults);
    document.getElementById('restart-assessment').addEventListener('click', restartAssessment);
    document.getElementById('print-results').addEventListener('click', printResults);

    // Generate Part 1 questions (first spectrum only)
    generateTypologyQuestions();
    
    // Update header info for Part 1
    updateQuizHeader('part1');
});

// Start the assessment
function startAssessment() {
    document.getElementById('introduction-section').style.display = 'none';
    document.getElementById('part1-section').style.display = 'flex';
    
    // Reset current spectrum index
    currentSpectrumIndex = 0;
    
    // Generate first spectrum questions
    updateSpectrumQuestions();
    
    updateProgressIndicator('Part 1: Reality Creation Typology', 0);
}

// Display the next spectrum section in Part 1
function showNextSpectrum() {
    // Check if current spectrum questions are answered
    const spectrum = typologySpectrums[currentSpectrumIndex];
    let unansweredQuestions = 0;
    
    spectrum.questions.forEach(question => {
        if (!userResponses.typology[question.id]) {
            unansweredQuestions++;
        }
    });
    
    if (unansweredQuestions > 0) {
        alert(`Please answer all questions in this section before continuing. You have ${unansweredQuestions} unanswered questions.`);
        return;
    }
    
    // Move to next spectrum
    currentSpectrumIndex++;
    
    // Update UI to show next spectrum
    updateSpectrumQuestions();
    
    // Update next button text for last spectrum
    if (currentSpectrumIndex >= typologySpectrums.length - 1) {
        document.getElementById('part1-next').innerHTML = `
            Continue to Part 2
            <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
        `;
    } else {
        document.getElementById('part1-next').innerHTML = `
            Next Spectrum
            <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
        `;
    }
    
    // Update progress indicators
    updateProgressIndicator('Part 1', (currentSpectrumIndex / typologySpectrums.length) * 100);
}

// Display the previous spectrum section in Part 1
function showPrevSpectrum() {
    if (currentSpectrumIndex > 0) {
        currentSpectrumIndex--;
        updateSpectrumQuestions();
        
        // Update next button text (won't be the last spectrum anymore)
        document.getElementById('part1-next').innerHTML = `
            Next Spectrum
            <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
        `;
        
        // Update progress indicators
        updateProgressIndicator('Part 1', (currentSpectrumIndex / typologySpectrums.length) * 100);
    }
}

// Update spectrum questions based on current index
function updateSpectrumQuestions() {
    const container = document.getElementById('spectrum-questions');
    container.innerHTML = '';
    
    // Get current spectrum to display
    const spectrum = typologySpectrums[currentSpectrumIndex];
    
    // Update header text
    document.getElementById('spectrum-title').textContent = spectrum.name.toUpperCase();
    document.getElementById('spectrum-description').textContent = spectrum.description;
    document.getElementById('spectrum-counter').textContent = `SPECTRUM ${(currentSpectrumIndex + 1).toString().padStart(2, '0')}/${typologySpectrums.length.toString().padStart(2, '0')}`;
    
    // Create questions for this spectrum
    spectrum.questions.forEach((question, questionIndex) => {
        // Question container
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.dataset.questionId = question.id;
        
        // Grid for question and number
        const questionGrid = document.createElement('div');
        questionGrid.className = 'grid grid-cols-12 gap-4 mb-16';
        
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
        
        // Interactive spectrum visualization
        const visualizationContainer = document.createElement('div');
        visualizationContainer.className = 'mb-16';
        
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
        
        // Options container with tactile neumorphic styling
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'relative pt-6 pb-10';
        
        // Track line connecting options
        const optionsTrack = document.createElement('div');
        optionsTrack.className = 'absolute top-1/2 left-0 w-full h-0.5 bg-stone-200 transform -translate-y-1/2';
        optionsContainer.appendChild(optionsTrack);
        
        // Interactive options container
        const optionsGroup = document.createElement('div');
        optionsGroup.className = 'relative flex justify-between items-center mb-12';
        
        // Text descriptions container
        const optionsTextContainer = document.createElement('div');
        optionsTextContainer.className = 'flex justify-between px-2';
        
        // Create option buttons
        question.options.forEach((option) => {
            // Create option button
            const optionContainer = document.createElement('div');
            optionContainer.className = `relative w-16 h-16 rounded-full flex items-center justify-center z-10 
                cursor-pointer transition-all duration-300 shadow-md
                ${userResponses.typology[question.id] === option.value 
                    ? 'bg-gradient-to-br from-amber-300 to-amber-400 shadow-lg selected-option' 
                    : 'bg-white border border-stone-200 shadow-sm hover:shadow-md'}`;
            
            // Selection dot (only visible when selected)
            const selectionDot = document.createElement('div');
            selectionDot.className = 'w-3 h-3 bg-white rounded-full option-marker';
            if (userResponses.typology[question.id] !== option.value) {
                selectionDot.style.display = 'none';
            }
            
            // Position indicator line
            const positionLine = document.createElement('div');
            positionLine.className = `absolute -bottom-8 w-px h-6 transition-opacity duration-300
                ${userResponses.typology[question.id] === option.value 
                    ? 'bg-amber-400 opacity-100' 
                    : 'bg-stone-300 opacity-40'}`;
            
            // Add event listeners for selection
            optionContainer.addEventListener('click', () => {
                selectOption(question.id, option.value, optionsGroup, optionsTextContainer);
            });
            
            // Hover effects
            optionContainer.addEventListener('mouseenter', () => {
                if (userResponses.typology[question.id] !== option.value) {
                    optionContainer.classList.remove('border-stone-200');
                    optionContainer.classList.add('border-amber-200');
                    positionLine.classList.remove('bg-stone-300', 'opacity-40');
                    positionLine.classList.add('bg-amber-400', 'opacity-100');
                    
                    // Update text state on hover
                    const textBlock = optionsTextContainer.children[question.options.indexOf(option)];
                    textBlock.classList.remove('text-stone-500');
                    textBlock.classList.add('text-stone-700');
                    
                    // Show option label on hover
                    const labelElement = textBlock.querySelector('.option-label');
                    if (labelElement) labelElement.style.opacity = '1';
                }
            });
            
            optionContainer.addEventListener('mouseleave', () => {
                if (userResponses.typology[question.id] !== option.value) {
                    optionContainer.classList.add('border-stone-200');
                    optionContainer.classList.remove('border-amber-200');
                    positionLine.classList.add('bg-stone-300', 'opacity-40');
                    positionLine.classList.remove('bg-amber-400', 'opacity-100');
                    
                    // Reset text state when not hovering
                    const textBlock = optionsTextContainer.children[question.options.indexOf(option)];
                    textBlock.classList.add('text-stone-500');
                    textBlock.classList.remove('text-stone-700');
                    
                    // Hide option label when not hovering or selected
                    const labelElement = textBlock.querySelector('.option-label');
                    if (labelElement) labelElement.style.opacity = '0';
                }
            });
            
            // Add elements to container
            optionContainer.appendChild(selectionDot);
            
            // Create text block for this option
            const textBlock = document.createElement('div');
            textBlock.className = `w-1/3 px-4 transition-all duration-300 ${
                userResponses.typology[question.id] === option.value 
                    ? 'text-amber-800' 
                    : 'text-stone-500'
            }`;
            
            // Create label
            const optionLabel = document.createElement('div');
            optionLabel.className = `text-xs font-medium uppercase tracking-wider mb-2 transition-opacity ${
                userResponses.typology[question.id] === option.value 
                    ? 'opacity-100' 
                    : 'opacity-0'
            }`;
            optionLabel.textContent = option.label;
            
            // Create text
            const optionText = document.createElement('p');
            optionText.className = 'text-sm font-light';
            optionText.textContent = option.text;
            
            // Assemble text block
            textBlock.appendChild(optionLabel);
            textBlock.appendChild(optionText);
            optionsTextContainer.appendChild(textBlock);
            
            // Add option button to options group
            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'option-container';
            buttonWrapper.appendChild(optionContainer);
            buttonWrapper.appendChild(positionLine);
            
            optionsGroup.appendChild(buttonWrapper);
        });
        
        // Assemble visualization
        visualizationContainer.appendChild(spectrumLabels);
        visualizationContainer.appendChild(optionsContainer);
        optionsContainer.appendChild(optionsGroup);
        optionsContainer.appendChild(optionsTextContainer);
        
        // Add to question container
        questionContainer.appendChild(visualizationContainer);
        
        // Add to main container
        container.appendChild(questionContainer);
    });
    
    // Update navigation buttons
    const prevButton = document.getElementById('prev-spectrum');
    if (currentSpectrumIndex > 0) {
        prevButton.style.display = 'flex';
    } else {
        prevButton.style.display = 'none';
    }
    
    // Update progress indicators
    updateProgressIndicators();
    
    // Update current question number
    document.getElementById('current-question').textContent = (currentSpectrumIndex * 2 + 1);
    document.getElementById('total-questions').textContent = typologySpectrums.length * 2;
}

// Handle option selection in typology questions
function selectOption(questionId, optionValue, optionsGroup, optionsTextContainer) {
    // Update user response
    userResponses.typology[questionId] = optionValue;
    
    // Update visual state of options
    const optionButtons = optionsGroup.querySelectorAll('.option-container > div:first-child');
    const optionTexts = optionsTextContainer.children;
    
    // Reset all options
    optionButtons.forEach((button, index) => {
        // Reset button styling
        button.className = 'relative w-16 h-16 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 shadow-md bg-white border border-stone-200 shadow-sm hover:shadow-md';
        
        // Hide marker dot
        const marker = button.querySelector('.option-marker');
        if (marker) marker.style.display = 'none';
        
        // Reset position line
        const line = button.parentNode.querySelector('div:nth-child(2)');
        if (line) {
            line.classList.remove('bg-amber-400', 'opacity-100');
            line.classList.add('bg-stone-300', 'opacity-40');
        }
        
        // Reset text styling
        if (optionTexts[index]) {
            optionTexts[index].classList.remove('text-amber-800');
            optionTexts[index].classList.add('text-stone-500');
            
            // Hide label
            const label = optionTexts[index].querySelector('.option-label');
            if (label) label.style.opacity = '0';
        }
    });
    
    // Find and update the selected option
    optionButtons.forEach((button, index) => {
        const option = typologySpectrums[currentSpectrumIndex].questions[0].options[index];
        
        if (option.value === optionValue) {
            // Update button styling
            button.className = 'relative w-16 h-16 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 shadow-lg bg-gradient-to-br from-amber-300 to-amber-400 shadow-lg';
            
            // Show marker dot
            const marker = button.querySelector('.option-marker');
            if (marker) marker.style.display = 'block';
            
            // Update position line
            const line = button.parentNode.querySelector('div:nth-child(2)');
            if (line) {
                line.classList.add('bg-amber-400', 'opacity-100');
                line.classList.remove('bg-stone-300', 'opacity-40');
            }
            
            // Update text styling
            if (optionTexts[index]) {
                optionTexts[index].classList.add('text-amber-800');
                optionTexts[index].classList.remove('text-stone-500');
                
                // Show label
                const label = optionTexts[index].querySelector('.option-label');
                if (label) label.style.opacity = '1';
            }
        }
    });
    
    // Enable the next button if all questions are answered
    updateNextButtonState();
}

// Update the next button state based on question completion
function updateNextButtonState() {
    const spectrum = typologySpectrums[currentSpectrumIndex];
    const allAnswered = spectrum.questions.every(question => userResponses.typology[question.id]);
    
    const nextButton = document.getElementById('part1-next');
    
    if (allAnswered) {
        nextButton.classList.remove('text-stone-400', 'cursor-not-allowed');
        nextButton.classList.add('text-stone-700');
    } else {
        nextButton.classList.add('text-stone-400', 'cursor-not-allowed');
        nextButton.classList.remove('text-stone-700');
    }
}

// Helper function to update progress indicators
function updateProgressIndicators() {
    const container = document.getElementById('progress-indicators');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create indicators for each spectrum
    typologySpectrums.forEach((spectrum, index) => {
        const indicator = document.createElement('div');
        
        if (index === currentSpectrumIndex) {
            indicator.className = 'h-3 w-px bg-amber-400';
        } else {
            indicator.className = 'h-3 w-px bg-stone-300';
        }
        
        container.appendChild(indicator);
    });
}

// Generate Part 1: Typology Questions (initial setup only)
function generateTypologyQuestions() {
    // Create progress indicators for all spectrums
    const progressContainer = document.querySelector('#part1-section .absolute.bottom-6 .flex.items-center.space-x-6');
    if (progressContainer) {
        progressContainer.innerHTML = ''; // Clear existing indicators
        
        // Create indicators for each spectrum
        typologySpectrums.forEach((spectrum, index) => {
            const indicator = document.createElement('div');
            indicator.className = `h-3 w-px ${index === 0 ? 'bg-amber-400' : 'bg-stone-300'}`;
            progressContainer.appendChild(indicator);
        });
    }
}

// Update the header to reflect the current spectrum
function updateQuizHeader(part) {
    if (part === 'part1') {
        const currentSpectrum = typologySpectrums[currentSpectrumIndex];
        
        // Update spectrum counter
        const spectrumCounter = document.querySelector('#part1-section .text-xs.uppercase');
        if (spectrumCounter) {
            spectrumCounter.textContent = `SPECTRUM ${(currentSpectrumIndex + 1).toString().padStart(2, '0')}/${typologySpectrums.length.toString().padStart(2, '0')}`;
        }
        
        // Update spectrum title
        const spectrumTitle = document.getElementById('spectrum-title');
        if (spectrumTitle) {
            spectrumTitle.textContent = currentSpectrum.name.toUpperCase();
        }
        
        // Update spectrum description
        const spectrumDescription = document.getElementById('spectrum-description');
        if (spectrumDescription) {
            spectrumDescription.textContent = currentSpectrum.description;
        }
    }
}

// Update progress indicators based on current spectrum
function updateProgressIndicator(stage, percentage) {
    if (stage.includes('Part 1')) {
        // Calculate progress based on current spectrum
        const progressPercentage = ((currentSpectrumIndex + 1) / typologySpectrums.length) * 100;
        
        // Update spectrum progress dots
        const progressDots = document.querySelectorAll('#part1-section .absolute.bottom-6 .flex.items-center.space-x-6 .h-3.w-px');
        if (progressDots.length > 0) {
            progressDots.forEach((dot, index) => {
                if (index <= currentSpectrumIndex) {
                    dot.classList.remove('bg-stone-300');
                    dot.classList.add('bg-amber-400');
                } else {
                    dot.classList.remove('bg-amber-400');
                    dot.classList.add('bg-stone-300');
                }
            });
        }
    } else if (stage.includes('Part 2')) {
        // This is managed in part2_mastery.js
    } else if (stage.includes('Results')) {
        // Highlight the third progress dot
        document.querySelectorAll('#results-section .flex.items-center.space-x-6 .h-3.w-px').forEach((dot, index) => {
            if (index === 2) {
                dot.classList.add('bg-amber-400');
                dot.classList.remove('bg-stone-300');
            } else {
                dot.classList.add('bg-stone-300');
                dot.classList.remove('bg-amber-400');
            }
        });
    }
}

// Show Part 2 of the assessment
function showPart2() {
    // Check if all Part 1 questions are answered
    let unansweredQuestions = 0;
    
    typologySpectrums.forEach(spectrum => {
        spectrum.questions.forEach(question => {
            if (!userResponses.typology[question.id]) {
                unansweredQuestions++;
            }
        });
    });
    
    if (unansweredQuestions > 0) {
        alert(`Please answer all questions in Part 1. You have ${unansweredQuestions} unanswered questions.`);
        return;
    }

    document.getElementById('part1-section').style.display = 'none';
    document.getElementById('part2-section').style.display = 'flex';
    updateProgressIndicator('Part 2: Mastery Assessment', 50);

    // Generate Part 2 questions if not already generated
    if (document.getElementById('mastery-questions').children.length === 0) {
        generateMasteryQuestions();
    }
}

// Show Part 1 of the assessment
function showPart1() {
    document.getElementById('part2-section').style.display = 'none';
    document.getElementById('part1-section').style.display = 'flex';
    updateProgressIndicator('Part 1: Reality Creation Typology', 25);
}

// Show results
function showResults() {
    // This would check for unanswered questions in Part 2
    // Implemented in part2_mastery.js
    
    document.getElementById('part2-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'flex';
    updateProgressIndicator('Results', 100);

    // Generate and display results
    // Get all results data using the consolidated function first
    const resultsData = generateCompleteResults();
    generateAndDisplayResults();
}

// Restart the assessment
function restartAssessment() {
    // Clear user responses
    userResponses = {
        typology: {},
        mastery: {}
    };

    // Reset current spectrum index
    currentSpectrumIndex = 0;

    // Go back to introduction
    document.getElementById('results-section').style.display = 'none';
    document.getElementById('part1-section').style.display = 'none';
    document.getElementById('part2-section').style.display = 'none';
    document.getElementById('introduction-section').style.display = 'flex';
    
    // Reset progress indicators
    updateQuizHeader('part1');
    
    // Regenerate questions to ensure clean state
    generateTypologyQuestions();
    document.getElementById('mastery-questions').innerHTML = '';
    
    // Update next button text
    document.getElementById('part1-next').innerHTML = `
        Next Spectrum
        <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
    `;
}

// Print results
function printResults() {
    window.print();
}

// This will be implemented in the part2_mastery.js file
function generateMasteryQuestions() {
    // Placeholder - actual implementation will be in part2_mastery.js
    console.log("Generating mastery questions...");
}

// This will be implemented in the results.js file
function generateAndDisplayResults() {
    // Placeholder - actual implementation will be in results.js
    console.log("Generating results...");
}
