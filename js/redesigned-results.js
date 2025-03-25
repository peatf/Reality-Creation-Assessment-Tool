// redesigned-results.js
// This file handles the results display functionality
// for the Reality Creation Assessment

// Spectrum priority order (for typology pair determination)
const SPECTRUM_PRIORITY_ORDER = [
    'cognitive-alignment',   // How users mentally process reality
    'kinetic-drive',         // How users take action and generate momentum
    'choice-navigation',     // Decision-making style
    'perceptual-focus',      // Clarity and openness in manifestation
    'resonance-field',       // Emotional interaction in manifestation
    'manifestation-rhythm'   // Sustainability and adaptability over time
];

// Typology Descriptions mapping
const typologyDescriptions = {
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
};

// Typology Pair templates
const typologyPairs = {
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
};

// Ideal Approaches templates
const idealApproaches = {
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
};

// Common Misalignments templates
const commonMisalignments = {
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
        "Abandoning projects when they require structured development",
        "Allowing too much flexibility without sufficient grounding"
    ],
    "fluid-fluid": [
        "Lacking sufficient grounding to manifest ideas into form",
        "Becoming scattered or unfocused without some organizing principles",
        "Avoiding practical action steps necessary for manifestation",
        "Abandoning projects when they require consistent effort",
        "Neglecting to create sufficient clarity around desires"
    ]
};

// ------------------------------
// FUNCTION DEFINITIONS
// ------------------------------

// Main function to generate and display results
function generateAndDisplayResults() {
    // Get all results data using the consolidated function
    const resultsData = generateCompleteResults();
    const { spectrumPlacements, typologyPair, dominantValues } = resultsData;
    
    // Generate sections
    generateTypologyPairSection(typologyPair);
    generateSpectrumDiagram(spectrumPlacements, typologyPair);
    generateIdealApproachesSection(typologyPair);
    generateMisalignmentsSection(typologyPair);
    generateMasteryPrioritiesSection(resultsData.masteryScores, dominantValues);
    generateStrategySection(typologyPair, dominantValues);
    
    // Initialize expandable sections and UI enhancements
    initExpandableSections();
    enhanceUIInteractions();
}

// Calculate typology scores
function calculateTypologyScores() {
    const placements = {};
    const scores = {};
    
    // Calculate placement for each spectrum based on user responses
    typologySpectrums.forEach(spectrum => {
        const questionIds = spectrum.questions.map(q => q.id);
        const responses = questionIds.map(id => userResponses.typology[id]);
        
        // Count occurrences of each value
        const leftCount = responses.filter(r => r === 'left').length;
        const balancedCount = responses.filter(r => r === 'balanced').length;
        const rightCount = responses.filter(r => r === 'right').length;
        
        // Store raw scores
        scores[spectrum.id] = {
            left: leftCount,
            balanced: balancedCount,
            right: rightCount
        };
        
        // Determine placement based on criteria
        let placement;
        if (responses[0] === responses[1]) {
            // Both answers identical → definitive placement
            placement = responses[0];
        } else {
            // Differing answers → default to Balanced
            placement = 'balanced';
        }
        
        placements[spectrum.id] = placement;
    });
    
    return {
        scores: scores,
        placements: placements
    };
}

// Determine typology pair based on spectrum placements
function determineTypologyPair(spectrumPlacements, dominantValues) {
    // Find Clear Spectrum Placements (left or right, not balanced)
    const clearPlacements = {};
    const clearSpectrums = [];
    
    Object.entries(spectrumPlacements).forEach(([spectrumId, placement]) => {
        if (placement === 'left' || placement === 'right') {
            clearPlacements[spectrumId] = placement;
            clearSpectrums.push(spectrumId);
        }
    });
    
    // Define placement mapping
    const placementMapping = {
        left: 'structured',
        balanced: 'balanced',
        right: 'fluid'
    };
    
    // Simplified logic – use defaults if needed
    const primarySpectrumId = clearSpectrums[0] || 'cognitive-alignment';
    const secondarySpectrumId = clearSpectrums[1] || 'kinetic-drive';
    
    const primaryPlacement = spectrumPlacements[primarySpectrumId] || 'right';
    const secondaryPlacement = spectrumPlacements[secondarySpectrumId] || 'left';
    
    const pairKey = `${placementMapping[primaryPlacement]}-${placementMapping[secondaryPlacement]}`;
    
    return {
        key: pairKey,
        primary: {
            spectrumId: primarySpectrumId,
            placement: primaryPlacement
        },
        secondary: {
            spectrumId: secondarySpectrumId,
            placement: secondaryPlacement
        }
    };
}

// Generate Typology Pair section (displays name and description)
function generateTypologyPairSection(typologyPair) {
    const container = document.getElementById('typology-pair');
    if (!container) return;
    
    const pairKey = typologyPair.key;
    const pairTemplate = typologyPairs[pairKey] || typologyPairs['fluid-structured'];
    
    container.innerHTML = `
        <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100">
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <div class="w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-400"></div>
                    </div>
                </div>
                <h2 class="text-3xl font-light text-stone-800 ml-4">${pairTemplate.name}</h2>
            </div>
            <p class="text-lg font-light text-stone-600 leading-relaxed">
                ${pairTemplate.description}
            </p>
        </div>
    `;
}

// Generate Spectrum Diagram
function generateSpectrumDiagram(spectrumPlacements, typologyPair) {
    const container = document.getElementById('spectrum-diagram');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Title section
    const titleSection = document.createElement('div');
    titleSection.className = 'flex items-center mb-16';
    titleSection.innerHTML = `
        <div class="h-px w-12 bg-stone-400 mr-4"></div>
        <h3 class="text-xl font-light text-stone-700 uppercase tracking-wider">Your Spectrum Map</h3>
    `;
    container.appendChild(titleSection);
    
    // Grid container for spectrums
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-12 gap-x-4 gap-y-20';
    
    // Add spectrum items
    typologySpectrums.forEach((spectrum, index) => {
        const placement = spectrumPlacements[spectrum.id] || 'balanced';
        
        // Calculate value position
        let value = 50;
        if (placement === 'left') value = 25;
        if (placement === 'right') value = 75;
        
        const isFullWidth = index === 0 || index === 3 || index === 5;
        const leftAligned = index === 1 || index === 4;
        const rightAligned = index === 2;
        
        const spectrumItem = document.createElement('div');
        spectrumItem.className = `relative ${
            isFullWidth ? 'col-span-12' : 
            leftAligned ? 'col-span-7 col-start-1' : 
            rightAligned ? 'col-span-7 col-start-6' : 'col-span-6'
        }`;
        
        const descriptionKey = `${spectrum.id}-${placement}`;
        const descriptionText = typologyDescriptions[descriptionKey] ? 
            typologyDescriptions[descriptionKey].description : 
            "This is your natural tendency along this spectrum.";
        
        spectrumItem.innerHTML = `
            <div class="absolute -top-10 ${
                leftAligned ? 'left-0' : 
                rightAligned ? 'right-0' : 
                'left-1/2 transform -translate-x-1/2'
            } flex items-center">
                <div class="w-6 h-6 mr-2 flex items-center justify-center">
                    <span class="text-xs font-light text-stone-400">${index + 1}</span>
                </div>
                <div class="h-px w-16 ${
                    placement === 'left' ? 'bg-blue-300' :
                    placement === 'right' ? 'bg-amber-300' : 'bg-green-300'
                }"></div>
            </div>
            
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-4 flex flex-col justify-between pr-2">
                    <div>
                        <div class="text-xs uppercase tracking-wider text-stone-400 mb-1">Spectrum</div>
                        <h4 class="text-lg font-light text-stone-700">${spectrum.name}</h4>
                    </div>
                    <div class="text-xs font-light text-stone-500 uppercase tracking-wider">
                        ${placement.charAt(0).toUpperCase() + placement.slice(1)}
                    </div>
                </div>
                
                <div class="col-span-1 flex justify-center">
                    <div class="h-full w-px bg-stone-200"></div>
                </div>
                
                <div class="col-span-7 flex flex-col">
                    <div class="mb-6 relative">
                        <div class="h-px w-full bg-stone-200"></div>
                        <div class="relative" style="margin-left: ${value}%">
                            <div class="absolute top-0 w-px h-16 transform -translate-x-1/2 ${
                                placement === 'left' ? 'bg-blue-400' :
                                placement === 'right' ? 'bg-amber-400' : 'bg-green-400'
                            }"></div>
                            <div class="absolute top-16 w-3 h-3 rounded-full transform -translate-x-1/2 ${
                                placement === 'left' ? 'bg-blue-400' :
                                placement === 'right' ? 'bg-amber-400' : 'bg-green-400'
                            }"></div>
                        </div>
                        
                        <div class="flex justify-between mt-20 text-xs tracking-wide text-stone-500">
                            <span>${spectrum.leftLabel}</span>
                            <span>${spectrum.rightLabel}</span>
                        </div>
                    </div>
                    
                    <p class="text-sm font-light text-stone-600 leading-relaxed">
                        ${descriptionText}
                    </p>
                </div>
            </div>
            
            ${isFullWidth ? 
                '<div class="absolute right-0 -bottom-12 w-24 h-px bg-stone-200 opacity-70"></div>' : ''}
            ${leftAligned ? 
                '<div class="absolute -right-8 top-1/2 w-16 h-px bg-stone-200 opacity-70"></div>' : ''}
            ${rightAligned ? 
                '<div class="absolute -left-8 top-1/2 w-16 h-px bg-stone-200 opacity-70"></div>' : ''}
        `;
        
        gridContainer.appendChild(spectrumItem);
    });
    
    container.appendChild(gridContainer);
    
    // Add legend
    const legend = document.createElement('div');
    legend.className = 'mt-24 flex justify-between items-end';
    legend.innerHTML = `
        <div class="grid grid-cols-3 gap-8 w-1/2">
            <div class="flex flex-col items-center">
                <div class="w-3 h-12 bg-blue-400 mb-3"></div>
                <span class="text-xs font-light uppercase tracking-wider text-stone-500">Structured</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-3 h-8 bg-green-400 mb-3"></div>
                <span class="text-xs font-light uppercase tracking-wider text-stone-500">Balanced</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-3 h-16 bg-amber-400 mb-3"></div>
                <span class="text-xs font-light uppercase tracking-wider text-stone-500">Intuitive</span>
            </div>
        </div>
        
        <div class="text-xs font-light text-stone-400 uppercase tracking-wider flex items-center">
            <div class="w-8 h-px bg-stone-300 mr-2"></div>
            <span>Your Reality Coordinates</span>
        </div>
    `;
    
    container.appendChild(legend);
}

// Generate Ideal Approaches section
function generateIdealApproachesSection(typologyPair) {
    const container = document.getElementById('ideal-approaches');
    if (!container) return;
    
    const pairKey = typologyPair.key;
    const approachesData = idealApproaches[pairKey] || idealApproaches['fluid-structured'];
    
    container.innerHTML = '';
    
    // Strengths card
    const strengthsCard = document.createElement('div');
    strengthsCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    strengthsCard.innerHTML = `
        <h3 class="text-xl font-light text-stone-800 mb-4">Your Natural Strengths</h3>
        <p class="text-base font-light text-stone-600">${approachesData.strengths}</p>
    `;
    container.appendChild(strengthsCard);
    
    // Approaches card
    const approachesCard = document.createElement('div');
    approachesCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const approachesHeader = document.createElement('h3');
    approachesHeader.className = 'text-xl font-light text-stone-800 mb-6';
    approachesHeader.textContent = 'Optimal Manifestation Approaches';
    approachesCard.appendChild(approachesHeader);
    
    const approachesList = document.createElement('div');
    approachesList.className = 'space-y-4';
    
    approachesData.approaches.forEach((approach, index) => {
        const approachItem = document.createElement('div');
        approachItem.className = 'flex items-start';
        approachItem.innerHTML = `
            <div class="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 shrink-0">
                <span class="text-sm font-medium text-amber-700">${index + 1}</span>
            </div>
            <p class="ml-4 text-base font-light text-stone-600">${approach}</p>
        `;
        approachesList.appendChild(approachItem);
    });
    
    approachesCard.appendChild(approachesList);
    container.appendChild(approachesCard);
}

// Generate Misalignments section
function generateMisalignmentsSection(typologyPair) {
    const container = document.getElementById('common-misalignments');
    if (!container) return;
    
    const pairKey = typologyPair.key;
    const misalignmentsData = commonMisalignments[pairKey] || commonMisalignments['fluid-structured'];
    
    container.innerHTML = '';
    
    const misalignmentsCard = document.createElement('div');
    misalignmentsCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const misalignmentsHeader = document.createElement('h3');
    misalignmentsHeader.className = 'text-xl font-light text-stone-800 mb-6';
    misalignmentsHeader.textContent = 'Approaches That May Create Friction';
    misalignmentsCard.appendChild(misalignmentsHeader);
    
    const misalignmentsList = document.createElement('div');
    misalignmentsList.className = 'space-y-4';
    
    misalignmentsData.forEach((misalignment, index) => {
        const misalignmentItem = document.createElement('div');
        misalignmentItem.className = 'flex items-start';
        misalignmentItem.innerHTML = `
            <div class="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center mt-0.5 shrink-0">
                <span class="text-sm font-medium text-stone-500">!</span>
            </div>
            <p class="ml-4 text-base font-light text-stone-600">${misalignment}</p>
        `;
        misalignmentsList.appendChild(misalignmentItem);
    });
    
    misalignmentsCard.appendChild(misalignmentsList);
    container.appendChild(misalignmentsCard);
}

// Generate Mastery Priorities section
function generateMasteryPrioritiesSection(masteryScores, dominantValues) {
    const container = document.getElementById('mastery-priorities');
    if (!container) return;
    
    container.innerHTML = '';
    
    const priorityDescriptions = {
        'creative-expression': 'You deeply value the freedom to express your creativity and bring new ideas into being.',
        'financial-abundance': 'You prioritize creating abundance and financial security in your life.',
        'emotional-fulfillment': 'Emotional depth and authentic connection are core values for you.',
        'personal-autonomy': 'Personal freedom and the ability to determine your own path are essential to you.',
        'deep-relationships': 'Meaningful connections and relationships are foundational to your well-being.',
        'spiritual-connection': 'Connection to something larger than yourself provides meaning and purpose in your life.',
        'craft-mastery': 'You value achieving excellence and mastery in your chosen field or craft.',
        'wealth-security': 'Financial stability and having abundant resources give you a sense of security and freedom.',
        'emotional-peace': 'Inner harmony and emotional balance are essential to your well-being.',
        'personal-freedom': 'The ability to make your own choices and direct your own life is fundamental to you.',
        'deep-connection': 'Profound relationships and connections with others fulfill your need for belonging.',
        'higher-meaning': 'Finding purpose and spiritual significance in your experiences gives your life meaning.',
        'confidence-trust': 'Having confidence in yourself and your abilities is a core value for you.',
        'peace-ease': 'You prioritize creating a life of peace, ease, and harmony.',
        'choice-autonomy': 'Having freedom of choice and autonomy in your actions is essential to you.',
        'stability-security': 'Feeling stable and secure provides the foundation for your other pursuits.',
        'passion-inspiration': 'Being inspired and feeling passionate about your activities fuels your drive.',
        'joy-excitement': 'Experiencing joy and excitement regularly is a priority in how you design your life.'
    };
    
    const growthDescriptions = {
        'consistency-challenge': 'Building greater consistency in your manifestation practices over time.',
        'clarity-challenge': 'Developing clearer vision around what you truly desire to manifest.',
        'action-challenge': 'Taking consistent inspired action toward your manifestations.',
        'intuition-challenge': 'Trusting your inner guidance more fully in your manifestation process.',
        'emotion-challenge': 'Managing emotional states to support your manifestation process.',
        'receiving-challenge': 'Opening yourself to receive the manifestations that are ready to come to you.',
        'decision-doubt': 'Developing greater confidence in your decision-making process.',
        'action-gap': 'Bridging the gap between your clear vision and consistent implementation.',
        'focus-challenge': 'Cultivating sustainable focus and follow-through on your priorities.',
        'emotional-block': 'Processing emotional barriers that may be blocking your manifestation flow.',
        'burnout-pattern': 'Creating sustainable rhythms that prevent burnout and support consistent energy.',
        'commitment-hesitation': 'Moving past hesitation and into full commitment with your manifestations.',
        'self-trust-resistance': 'Developing deeper trust in your own perceptions and intuitive guidance.',
        'risk-resistance': 'Building comfort with calculated risks that move you toward your desires.',
        'emotional-expression-resistance': 'Allowing fuller expression of your authentic emotions as part of your process.',
        'vision-clarity-resistance': 'Creating and maintaining clear vision despite resistance to specificity.',
        'momentum-resistance': 'Establishing consistent momentum despite internal resistance to sustained action.',
        'control-resistance': 'Developing comfort with uncertainty and releasing excessive control.'
    };
    
    // Core Values Card
    const valuesCard = document.createElement('div');
    valuesCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const valuesHeader = document.createElement('h3');
    valuesHeader.className = 'text-xl font-light text-stone-800 mb-4';
    valuesHeader.textContent = 'Your Core Values & Priorities';
    valuesCard.appendChild(valuesHeader);
    
    const valuesList = document.createElement('div');
    valuesList.className = 'space-y-3';
    
    if (dominantValues.corePriorities && dominantValues.corePriorities.length > 0) {
        dominantValues.corePriorities.forEach(value => {
            const valueItem = document.createElement('p');
            valueItem.className = 'text-base font-light text-stone-600';
            const description = priorityDescriptions[value] || 
                `You deeply value aspects related to ${value.replace(/-/g, ' ')}.`;
            valueItem.textContent = description;
            valuesList.appendChild(valueItem);
        });
    } else {
        const defaultValue = document.createElement('p');
        defaultValue.className = 'text-base font-light text-stone-600';
        defaultValue.textContent = 'You value balance and integration across multiple areas of your life.';
        valuesList.appendChild(defaultValue);
    }
    
    valuesCard.appendChild(valuesList);
    container.appendChild(valuesCard);
    
    // Growth Areas Card
    const growthCard = document.createElement('div');
    growthCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const growthHeader = document.createElement('h3');
    growthHeader.className = 'text-xl font-light text-stone-800 mb-4';
    growthHeader.textContent = 'Your Growth & Permission Areas';
    growthCard.appendChild(growthHeader);
    
    const growthList = document.createElement('div');
    growthList.className = 'space-y-3';
    
    if (dominantValues.growthAreas && dominantValues.growthAreas.length > 0) {
        dominantValues.growthAreas.forEach(value => {
            const growthItem = document.createElement('p');
            growthItem.className = 'text-base font-light text-stone-600';
            const description = growthDescriptions[value] || 
                `Developing greater awareness and skill in areas related to ${value.replace(/-/g, ' ')}.`;
            growthItem.textContent = description;
            growthList.appendChild(growthItem);
        });
    } else {
        const defaultGrowth = document.createElement('p');
        defaultGrowth.className = 'text-base font-light text-stone-600';
        defaultGrowth.textContent = 'Developing a balanced approach that honors both structure and intuition in your manifestation process.';
        growthList.appendChild(defaultGrowth);
    }
    
    growthCard.appendChild(growthList);
    container.appendChild(growthCard);
}

// Generate Strategy section
function generateStrategySection(typologyPair, dominantValues) {
    const container = document.getElementById('prescriptive-strategy');
    if (!container) return;
    
    container.innerHTML = '';
    
    // 1. Shifts section
    const shiftsSection = createExpandableSection(
        'Shifts Needed',
        generateTypologyShifts(typologyPair.key, dominantValues.growthAreas || [])
    );
    container.appendChild(shiftsSection);
    
    // 2. Permissions section
    const permissionsSection = createExpandableSection(
        'Acceptance Permissions',
        generateAcceptancePermissions(dominantValues.alignmentNeeds || [], typologyPair.key)
    );
    container.appendChild(permissionsSection);
    
    // 3. Tools section
    const toolsSection = createExpandableSection(
        'Energy Support Tools',
        generateEnergySupportTools(dominantValues.alignmentNeeds || [], dominantValues.energyPatterns || [], typologyPair.key)
    );
    container.appendChild(toolsSection);
}

// Helper function to create expandable sections
function createExpandableSection(title, items) {
    const sectionId = title.toLowerCase().replace(/\s+/g, '-');
    
    const section = document.createElement('div');
    section.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-sm border border-stone-100 overflow-hidden mb-6';
    section.id = `section-${sectionId}`;
    
    const header = document.createElement('button');
    header.className = 'expandable-header w-full flex items-center justify-between p-8';
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('aria-controls', `${sectionId}-content`);
    
    const headerTitle = document.createElement('h3');
    headerTitle.className = 'text-xl font-light text-stone-800';
    headerTitle.textContent = title;
    
    const headerIcon = document.createElement('div');
    headerIcon.className = 'expandable-icon transform transition-transform';
    headerIcon.innerHTML = `
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#78716C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    
    header.appendChild(headerTitle);
    header.appendChild(headerIcon);
    
    const content = document.createElement('div');
    content.className = 'expandable-content';
    content.id = `${sectionId}-content`;
    
    const itemsList = document.createElement('div');
    itemsList.className = 'space-y-4';
    
    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex items-start';
        
        const itemNumber = document.createElement('div');
        itemNumber.className = 'w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 shrink-0';
        
        const numberText = document.createElement('span');
        numberText.className = 'text-sm font-medium text-amber-700';
        numberText.textContent = index + 1;
        
        itemNumber.appendChild(numberText);
        
        const itemText = document.createElement('p');
        itemText.className = 'ml-4 text-base font-light text-stone-600';
        itemText.textContent = item;
        
        itemElement.appendChild(itemNumber);
        itemElement.appendChild(itemText);
        itemsList.appendChild(itemElement);
    });
    
    content.appendChild(itemsList);
    section.appendChild(header);
    section.appendChild(content);
    
    return section;
}

// Generate typology shifts based on typology pair and growth areas
function generateTypologyShifts(typologyKey, growthAreas) {
    const typeShifts = {
        "structured-structured": [
            "Create more space for intuitive insights and divine timing within your structured approach.",
            "Schedule regular 'intuition time' where you temporarily set aside analytical thinking and connect with your deeper knowing.",
            "Practice recognizing when precision is truly needed versus when flexibility would serve better."
        ],
        "structured-balanced": [
            "When you notice yourself defaulting to excessive structure, consciously shift to more intuitive approaches.",
            "Trust your ability to know when structure or flow is needed in each situation.",
            "Create flexible frameworks that provide enough structure for progress without restricting creative possibilities."
        ],
        "structured-fluid": [
            "Use your structured foundation to support rather than restrict your intuitive insights.",
            "Create simple systems that capture inspired ideas without overanalyzing them.",
            "Allow full creative exploration before organizing implementation."
        ],
        "balanced-structured": [
            "Recognize when your structured tendencies are serving you and when they're creating limitation.",
            "Create organized systems with built-in flexibility to honor both aspects of your nature.",
            "Practice trusting intuitive nudges even when they don't immediately make logical sense."
        ],
        "balanced-balanced": [
            "Avoid overthinking which approach to use in different situations.",
            "Trust your natural ability to select the right tool for each circumstance without excessive analysis.",
            "When facing important decisions, briefly check in with both your analytical mind and intuitive wisdom, then move forward with confidence."
        ],
        "balanced-fluid": [
            "Honor your intuitive nature while maintaining enough structure to manifest effectively.",
            "Create minimal frameworks that support rather than restrict your natural flow.",
            "Schedule regular grounding practices to balance your expansive tendencies."
        ],
        "fluid-structured": [
            "Create bridges between your intuitive insights and structured implementation to manifest your visions effectively.",
            "Allow your structured aspects to serve your intuitive vision rather than constraining it.",
            "Develop practices that help you maintain enough grounding when your intuitive aspects pull you into expansive states."
        ],
        "fluid-balanced": [
            "Maintain your intuitive leadership while incorporating practical elements that help manifest your visions.",
            "Create space for full creative flow followed by grounding practices.",
            "Use your balanced aspects to translate intuitive insights into actionable steps."
        ],
        "fluid-fluid": [
            "Incorporate minimal structure to help ground your expansive visions into reality.",
            "Schedule regular 'manifestation anchoring' sessions where you identify concrete steps.",
            "Remember that some form of consistent practice strengthens your natural gifts."
        ]
    };
    
    const shifts = typeShifts[typologyKey] || typeShifts["fluid-structured"];
    
    if (growthAreas.includes('consistency-challenge')) {
        shifts.push('Develop a flexible consistency framework that honors your natural rhythm while providing enough structure for momentum.');
    }
    if (growthAreas.includes('clarity-challenge')) {
        shifts.push('Create a clarity practice that combines analytical reflection with intuitive exploration to help crystallize your true desires.');
    }
    if (growthAreas.includes('action-challenge') || growthAreas.includes('action-gap')) {
        shifts.push('Design an action approach that aligns with your energy patterns—powerful bursts or steady progress based on your nature.');
    }
    if (growthAreas.includes('intuition-challenge') || growthAreas.includes('self-trust-resistance')) {
        shifts.push('Strengthen your intuition through regular practices that help you recognize, trust, and validate your inner knowing.');
    }
    if (growthAreas.includes('emotion-challenge') || growthAreas.includes('emotional-block')) {
        shifts.push('Develop emotional fluency practices that help you navigate emotional states without being overwhelmed or disconnected.');
    }
    if (growthAreas.includes('receiving-challenge')) {
        shifts.push('Create receiving rituals that help you open to and recognize manifestations as they emerge, especially in unexpected forms.');
    }
    if (growthAreas.includes('decision-doubt')) {
        shifts.push('Establish a personalized decision-making protocol that incorporates both analytical validation and intuitive confirmation.');
    }
    if (growthAreas.includes('focus-challenge')) {
        shifts.push('Design focus containers that work with your natural attention style, providing structure while allowing for flexibility.');
    }
    if (growthAreas.includes('burnout-pattern')) {
        shifts.push('Implement energy management practices that honor your natural cycles of output and restoration.');
    }
    if (growthAreas.includes('commitment-hesitation')) {
        shifts.push('Develop incremental commitment practices that allow you to build confidence and momentum without triggering resistance.');
    }
    
    return shifts;
}

// Generate acceptance permissions
function generateAcceptancePermissions(alignmentNeeds, typologyKey) {
    const typePermissions = {
        "structured-structured": [
            "Give yourself permission to embrace uncertainty and organic development as part of your process.",
            "Give yourself permission to trust your intuition even when it doesn't fit your logical framework.",
            "Give yourself permission to deviate from your plans when inspiration or circumstances call for it."
        ],
        "structured-balanced": [
            "Give yourself permission to trust your sense of when structure serves and when flexibility is needed.",
            "Give yourself permission to blend approaches rather than feeling you must choose one or the other.",
            "Give yourself permission to adjust your processes as you learn and grow."
        ],
        "structured-fluid": [
            "Give yourself permission to honor both your need for structure and your intuitive, flowing nature.",
            "Give yourself permission to create structures that flex and adapt rather than rigid frameworks.",
            "Give yourself permission to trust divine timing even when your plans suggest otherwise."
        ],
        "balanced-structured": [
            "Give yourself permission to adjust your approach as circumstances change without seeing it as inconsistency.",
            "Give yourself permission to use structure when it serves and flow when that's more appropriate.",
            "Give yourself permission to integrate seemingly opposite approaches into a cohesive process."
        ],
        "balanced-balanced": [
            "Give yourself permission to embrace your adaptability without committing to one 'correct' approach.",
            "Give yourself permission to synthesize different modalities rather than feeling you must specialize.",
            "Give yourself permission to be the bridge between different approaches and perspectives."
        ],
        "balanced-fluid": [
            "Give yourself permission to lead with intuition while creating just enough structure to support manifestation.",
            "Give yourself permission to follow inspiration while maintaining practical awareness.",
            "Give yourself permission to honor your need for both freedom and form."
        ],
        "fluid-structured": [
            "Give yourself permission to honor your intuitive knowing first, then engage your structured aspects for implementation.",
            "Give yourself permission to trust your intuition, even when you cannot immediately justify it logically.",
            "Give yourself permission to follow intuitive nudges without needing to justify or explain them."
        ],
        "fluid-balanced": [
            "Give yourself permission to follow inspiration and trust that practical implementation can follow organically.",
            "Give yourself permission to maintain your expansive vision while creating practical steps to achieve it.",
            "Give yourself permission to shift between visionary and practical modes as needed."
        ],
        "fluid-fluid": [
            "Give yourself permission to trust your fluid process even when others advocate for more structure.",
            "Give yourself permission to create in your own unique way, even if it seems unconventional.",
            "Give yourself permission to follow the energy rather than predetermined plans."
        ]
    };
    
    const permissions = typePermissions[typologyKey] || typePermissions["fluid-structured"];
    
    if (alignmentNeeds.includes('accept-cycles')) {
        permissions.push('Give yourself permission to honor your natural cycles rather than forcing constant output.');
    }
    if (alignmentNeeds.includes('accept-structure')) {
        permissions.push('Give yourself permission to create and maintain the structures you need, even if others thrive with more spontaneity.');
    }
    if (alignmentNeeds.includes('accept-emotions')) {
        permissions.push('Give yourself permission to acknowledge your emotional states without judgment.');
    }
    if (alignmentNeeds.includes('accept-gradual-clarity')) {
        permissions.push('Give yourself permission to allow clarity to emerge gradually rather than forcing immediate certainty.');
    }
    if (alignmentNeeds.includes('accept-intuition')) {
        permissions.push('Give yourself permission to trust your intuitive guidance, even without immediate logical justification.');
    }
    if (alignmentNeeds.includes('accept-flexibility')) {
        permissions.push('Give yourself permission to remain flexible and open rather than locking into fixed outcomes.');
    }
    if (alignmentNeeds.includes('control-outcomes')) {
        permissions.push('Give yourself permission to release attachment to specific timelines and forms.');
    }
    if (alignmentNeeds.includes('control-emotions')) {
        permissions.push('Give yourself permission to experience your full range of emotions as valuable information.');
    }
    if (alignmentNeeds.includes('control-consistency')) {
        permissions.push('Give yourself permission to work with your natural rhythm even if it doesn’t match external expectations.');
    }
    if (alignmentNeeds.includes('control-clarity')) {
        permissions.push('Give yourself permission to explore before committing to a clear vision.');
    }
    if (alignmentNeeds.includes('control-decisions')) {
        permissions.push('Give yourself permission to make decisions from multiple sources of wisdom.');
    }
    if (alignmentNeeds.includes('control-intuition')) {
        permissions.push('Give yourself permission to follow intuitive nudges without needing to justify them.');
    }
    
    return permissions;
}

// Generate energy support tools
function generateEnergySupportTools(alignmentNeeds, energyPatterns, typologyKey) {
    const typeTools = {
        "structured-structured": [
            "Structured intuition exercises with clear frameworks.",
            "Manifestation systems with built-in flexibility points.",
            "Regular intuition development practices with measurable outcomes."
        ],
        "structured-balanced": [
            "Alternating structure and flow practices that leverage both aspects.",
            "Decision frameworks that integrate analytical and intuitive components.",
            "Flexible routines with built-in creativity spaces."
        ],
        "structured-fluid": [
            "Structured containers for intuitive exploration that don't restrict creativity.",
            "Practices that help translate intuitive insights into actionable plans.",
            "Grounding rituals that help anchor expansive vision."
        ],
        "balanced-structured": [
            "Adaptable frameworks that flex with changing circumstances.",
            "Balance assessments to decide when to apply more structure or flow.",
            "Integration practices that honor both logical and intuitive approaches."
        ],
        "balanced-balanced": [
            "Integration practices to harmonize multiple manifestation approaches.",
            "Discernment tools for selecting the right approach for each context.",
            "Regular check-ins to assess what's needed in each situation."
        ],
        "balanced-fluid": [
            "Minimal planning systems that support your fluid nature with enough structure.",
            "Grounding practices to anchor your expansive energy.",
            "Intuitive decision-making frameworks with practical application steps."
        ],
        "fluid-structured": [
            "Intuition-led planning methods that start with inspired vision and then apply structure.",
            "Regular intuition check-ins that help you recognize and honor subtle guidance.",
            "Bridges between intuitive insights and practical action steps."
        ],
        "fluid-balanced": [
            "Vision anchoring practices to translate expansive ideas into projects.",
            "Fluid manifestation rituals with minimal yet sufficient structure.",
            "Integration practices that honor your visionary nature while providing practical steps."
        ],
        "fluid-fluid": [
            "Energetic alignment practices focused on vibrational matching.",
            "Minimal grounding techniques to support your expansive approach.",
            "Intuitive navigation tools for following energy without losing momentum."
        ]
    };
    
    const tools = typeTools[typologyKey] || typeTools["fluid-structured"];
    
    if (energyPatterns.includes('clear-instructions')) {
        tools.push('Structured templates and frameworks that provide clarity while allowing creativity.');
    }
    if (energyPatterns.includes('intuitive-instincts')) {
        tools.push('Regular intuition development practices to strengthen your natural guidance system.');
    }
    if (energyPatterns.includes('emotional-inspiration')) {
        tools.push('Emotional alignment practices to cultivate states that support your creative process.');
    }
    if (energyPatterns.includes('balanced-rhythm')) {
        tools.push('Rhythmic planning systems that alternate between structure and flow.');
    }
    if (energyPatterns.includes('gradual-clarity')) {
        tools.push('Progressive vision development practices that allow clarity to emerge over time.');
    }
    if (energyPatterns.includes('process-trust')) {
        tools.push('Trust-building practices that strengthen your connection to divine timing.');
    }
    if (energyPatterns.includes('rigid-routines')) {
        tools.push('Flexible structure frameworks that provide guidance without restriction.');
    }
    if (energyPatterns.includes('ignored-intuition')) {
        tools.push('Intuition validation practices to help you recognize and trust inner guidance.');
    }
    if (energyPatterns.includes('structured-productivity')) {
        tools.push('Manifestation routines with clear steps and measurable outcomes.');
    }
    if (energyPatterns.includes('flexible-productivity')) {
        tools.push('Adaptable planning systems that provide direction while allowing spontaneity.');
    }
    if (energyPatterns.includes('structured-environment')) {
        tools.push('Environmental organization practices that support calm focus and clarity.');
    }
    if (energyPatterns.includes('dynamic-environment')) {
        tools.push('Space design that allows for changing energy needs and creative stimulation.');
    }
    
    return tools;
}

// ------------------------------
// EVENT LISTENERS & GLOBAL ASSIGNMENTS
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('typology-tab').addEventListener('click', function() {
        showResultsTab('typology');
    });
    
    document.getElementById('approaches-tab').addEventListener('click', function() {
        showResultsTab('approaches');
    });
    
    document.getElementById('strategy-tab').addEventListener('click', function() {
        showResultsTab('strategy');
    });
    
    document.getElementById('print-results').addEventListener('click', function() {
        window.print();
    });
    
    document.getElementById('restart-assessment').addEventListener('click', function() {
        restartAssessment();
    });
});

function showResultsTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('text-amber-700');
        tab.classList.add('text-stone-500');
        const indicator = tab.querySelector('div');
        if (indicator) indicator.remove();
    });
    
    const selectedContent = document.getElementById(`${tabId}-content`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        void selectedContent.offsetWidth;
        selectedContent.classList.add('active');
    }
    
    const selectedTab = document.getElementById(`${tabId}-tab`);
    if (selectedTab) {
        selectedTab.classList.remove('text-stone-500');
        selectedTab.classList.add('text-amber-700');
        const indicator = document.createElement('div');
        indicator.className = 'absolute bottom-0 left-0 w-full h-0.5 bg-amber-400';
        selectedTab.appendChild(indicator);
    }
}

// Make functions available globally
window.generateAndDisplayResults = generateAndDisplayResults;
window.generateTypologyPairSection = generateTypologyPairSection;
window.generateSpectrumDiagram = generateSpectrumDiagram;
window.generateIdealApproachesSection = generateIdealApproachesSection;
window.generateMisalignmentsSection = generateMisalignmentsSection;
window.generateMasteryPrioritiesSection = generateMasteryPrioritiesSection;
window.generateStrategySection = generateStrategySection;
