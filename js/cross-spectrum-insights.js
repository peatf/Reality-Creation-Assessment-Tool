// cross-spectrum-insights.js
// This file provides cross-spectrum analysis by identifying patterns
// in spectrum combinations and generating tailored insights

// Define the insights rule engine
const insightsRuleEngine = {
    // Rules are stored by category, with each rule having:
    // - conditions: function that evaluates spectrumScores and returns true/false
    // - insight: the text insight to show when conditions are met
    // - priority: numeric priority (higher = more important to show)
    
    // Creative Process insights
    creativeProcess: [
        {
            conditions: (spectrumScores) => {
                return spectrumScores['cognitive-alignment'] <= -1 && 
                       spectrumScores['perceptual-focus'] <= -1;
            },
            insight: "You thrive with clear direction and detailed plans. Your creative process benefits from structured thinking frameworks that help transform abstract ideas into concrete steps.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['cognitive-alignment'] >= 1 && 
                       spectrumScores['perceptual-focus'] >= 1;
            },
            insight: "Your creative process thrives on openness and possibility. You receive inspiration best when you drop rigid expectations and allow intuitive insights to emerge organically.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['cognitive-alignment'] <= -1 && 
                       spectrumScores['perceptual-focus'] >= 1;
            },
            insight: "You have an interesting combination of logical thinking and open receptivity. This allows you to remain open to possibilities while applying clear reasoning to evaluate which directions deserve pursuit.",
            priority: 6
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['cognitive-alignment'] >= 1 && 
                       spectrumScores['perceptual-focus'] <= -1;
            },
            insight: "Your intuitive cognition paired with definitive focus gives you an uncommon ability to receive clear intuitive visions. You trust your inner knowing while maintaining laser focus on specific outcomes.",
            priority: 6
        }
    ],
    
    // Decision Making insights
    decisionMaking: [
        {
            conditions: (spectrumScores) => {
                return spectrumScores['choice-navigation'] <= -1 && 
                       spectrumScores['kinetic-drive'] <= -1;
            },
            insight: "You make decisions most effectively through thoughtful analysis and well-designed processes. Creating decision frameworks with clear criteria helps you make choices with confidence.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['choice-navigation'] >= 1 && 
                       spectrumScores['kinetic-drive'] >= 1;
            },
            insight: "Your decisions emerge most naturally through intuitive impulse rather than analysis. You benefit from trusting the spontaneous knowing that arises, then acting quickly on that guidance.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['choice-navigation'] <= -1 && 
                       spectrumScores['resonance-field'] >= 1;
            },
            insight: "While you prefer analytical decision-making, your emotional expressiveness provides important data. Developing practices to incorporate emotional wisdom into your logical frameworks will lead to more holistic choices.",
            priority: 6
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['choice-navigation'] >= 1 && 
                       spectrumScores['resonance-field'] <= -1;
            },
            insight: "Your intuitive decision-making paired with emotional regulation creates an interesting dynamic. You benefit from practices that help you distinguish between intuitive guidance and emotional reactions.",
            priority: 6
        }
    ],
    
    // Energy Management insights
    energyManagement: [
        {
            conditions: (spectrumScores) => {
                return spectrumScores['manifestation-rhythm'] <= -1 && 
                       spectrumScores['kinetic-drive'] <= -1;
            },
            insight: "Your energy thrives with consistent routines and deliberate action. Creating structured habits and clearly defined work periods helps you maintain productive momentum.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['manifestation-rhythm'] >= 1 && 
                       spectrumScores['kinetic-drive'] >= 1;
            },
            insight: "Your energy naturally ebbs and flows in dynamic cycles. Rather than fighting this pattern, design a flexible approach that allows you to ride waves of inspiration when they arise.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['manifestation-rhythm'] >= 1 && 
                       spectrumScores['kinetic-drive'] <= -1;
            },
            insight: "Your dynamic rhythm paired with deliberate action creates an interesting tension. You benefit from creating flexible structures that can adapt to your changing energy while maintaining enough consistency for progress.",
            priority: 6
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['manifestation-rhythm'] <= -1 && 
                       spectrumScores['kinetic-drive'] >= 1;
            },
            insight: "Your structured rhythm combined with spontaneous action tendencies creates a productive balance. You thrive with consistent routines that still leave room for inspired action when it arises.",
            priority: 6
        }
    ],
    
    // Emotional Patterns insights
    emotionalPatterns: [
        {
            conditions: (spectrumScores) => {
                return spectrumScores['resonance-field'] <= -1 && 
                       spectrumScores['cognitive-alignment'] <= -1;
            },
            insight: "You approach emotions through the lens of logical understanding. Creating frameworks to process and integrate emotional experiences helps you maintain both emotional stability and clear thinking.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['resonance-field'] >= 1 && 
                       spectrumScores['cognitive-alignment'] >= 1;
            },
            insight: "Your emotional and intuitive systems are deeply interconnected. You receive guidance through feeling, and your emotions serve as important messengers about alignment and direction.",
            priority: 5
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['resonance-field'] <= -1 && 
                       spectrumScores['manifestation-rhythm'] >= 1;
            },
            insight: "While you regulate your emotions carefully, your dynamic manifestation rhythm creates an interesting tension. Creating flexible but consistent emotional practices helps you maintain both stability and adaptability.",
            priority: 6
        },
        {
            conditions: (spectrumScores) => {
                return spectrumScores['resonance-field'] >= 1 && 
                       spectrumScores['choice-navigation'] <= -1;
            },
            insight: "Your emotional expressiveness combined with analytical decision-making creates a powerful balance. You benefit from allowing emotions to flow freely while using structured approaches when making important choices.",
            priority: 6
        }
    ],
    
    // Adaptability insights
    adaptability: [
        {
            conditions: (spectrumScores) => {
                const structuredCount = Object.values(spectrumScores).filter(score => score <= -1).length;
                return structuredCount >= 4;
            },
            insight: "Your strongly structured approach across multiple areas gives you exceptional consistency, but may create challenges during times of rapid change. Developing specific flexibility practices will help you adapt when circumstances require it.",
            priority: 7
        },
        {
            conditions: (spectrumScores) => {
                const fluidCount = Object.values(spectrumScores).filter(score => score >= 1).length;
                return fluidCount >= 4;
            },
            insight: "Your highly fluid approach across multiple areas gives you remarkable adaptability, but may create challenges with long-term consistency. Developing minimal but reliable anchoring practices will support sustainable progress.",
            priority: 7
        },
        {
            conditions: (spectrumScores) => {
                const extremeCount = Object.values(spectrumScores).filter(score => Math.abs(score) >= 2).length;
                return extremeCount >= 3;
            },
            insight: "Your profile shows strong tendencies across multiple spectrums, indicating clear preferences in how you operate. While this creates clarity, developing flexibility in your approach will help you navigate varied circumstances more effectively.",
            priority: 6
        },
        {
            conditions: (spectrumScores) => {
                const balancedCount = Object.values(spectrumScores).filter(score => score === 0).length;
                return balancedCount >= 3;
            },
            insight: "Your balanced approach across multiple spectrums gives you natural adaptability and integration. You easily shift between different modes of operation based on what each situation requires.",
            priority: 6
        }
    ]
};

// Function to analyze spectrum scores and generate relevant insights
function analyzeSpectrumCombinations(spectrumPlacements, numericScores) {
    // Ensure numericScores has all required properties
    if (!numericScores || typeof numericScores !== 'object') {
        console.error('numericScores is undefined or not an object');
        numericScores = {
            'cognitive-alignment': 0,
            'perceptual-focus': 0,
            'kinetic-drive': 0,
            'choice-navigation': 0,
            'resonance-field': 0,
            'manifestation-rhythm': 0
        };
    }
    
    const insights = {
        creativeProcess: [],
        decisionMaking: [],
        emotionalPatterns: [],
        energyManagement: [],
        adaptability: []
    };
    
    // Process each category of insights
    Object.entries(insightsRuleEngine).forEach(([category, rules]) => {
        // Apply each rule to see if conditions are met
        rules.forEach(rule => {
            try {
                if (rule.conditions(numericScores)) {
                    insights[category].push({
                        text: rule.insight,
                        priority: rule.priority
                    });
                }
            } catch (error) {
                console.log(`Error processing rule in category ${category}:`, error);
            }
        });
        
        // Sort by priority (higher first)
        insights[category].sort((a, b) => b.priority - a.priority);
    });
    
    return insights;
}

// Function to generate the cross-spectrum insights section for the results page
function generateCrossSpectrumInsights(spectrumPlacements, numericScores) {
    // Analyze the spectrum combinations
    const insights = analyzeSpectrumCombinations(spectrumPlacements, numericScores);
    
    // Prepare the HTML for the insights section
    let html = `
        <div class="space-y-6">
            <div class="flex items-center mb-6">
                <div class="h-px w-12 bg-stone-400 mr-4"></div>
                <h3 class="text-xl font-light text-stone-700 uppercase tracking-wider">Cross-Spectrum Insights</h3>
            </div>
    `;
    
    // Add each category of insights
    Object.entries(insights).forEach(([category, categoryInsights]) => {
        // Only show category if it has insights
        if (categoryInsights.length > 0) {
            // Format the category name for display
            const formattedCategory = category.replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());
            
            html += `
                <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100 mb-6">
                    <h4 class="text-lg font-light text-stone-700 mb-4">${formattedCategory}</h4>
                    <div class="space-y-4">
            `;
            
            // Add the insights for this category (limit to 2 per category)
            categoryInsights.slice(0, 2).forEach(insight => {
                html += `
                    <p class="text-base font-light text-stone-600 leading-relaxed">
                        ${insight.text}
                    </p>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        }
    });
    
    html += `</div>`;
    return html;
}

// Make functions available globally
window.analyzeSpectrumCombinations = analyzeSpectrumCombinations;
window.generateCrossSpectrumInsights = generateCrossSpectrumInsights;
