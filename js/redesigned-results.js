// redesigned-results.js
// This file handles the results display functionality
// for the Reality Creation Assessment


// Typology Descriptions mapping with modular phrases
// This expanded structure supports more granular positions on each spectrum
const typologyDescriptions = {
    // Cognitive Alignment - Structured Side
    "cognitive-alignment-strongLeft": {
        name: "Highly Rational",
        description: "You orient to reality firmly through logic, analysis, and tangible evidence. Understanding nearly always comes through reason, and you need verifiable clarity before accepting something as real.",
        phrases: {
            identity: "a logical thinker who values concrete evidence above all",
            strength: "analytical reasoning and evidence-based evaluation",
            approach: "You gather evidence, analyze patterns, and make decisions through systematic reasoning.",
            challenge: "allowing intuitive insights when logical paths aren't immediately obvious",
            growth: "learning to honor intuitive signals alongside your logical framework"
        }
    },
    "cognitive-alignment-leftLeaning": {
        name: "Rational",
        description: "You orient to reality through logic, analysis, and evidence. Understanding comes through reason, you need clarity you can track before you let something in as real.",
        phrases: {
            identity: "a predominantly logical thinker who appreciates structured reasoning",
            strength: "methodical thinking and clear analysis",
            approach: "You tend to seek logical explanations and evidence while remaining somewhat open to intuitive insights.",
            challenge: "recognizing when intuition offers value that logic cannot provide",
            growth: "developing comfort with both evidence-based and intuitive decision-making"
        }
    },
    "cognitive-alignment-balanced": {
        name: "Synthesizing",
        description: "You\'re a bridge between realms, braiding logic with inner knowing. You listen to both mind and intuition, translating between the two as you move through your process.",
        phrases: {
            identity: "a synthesizer who bridges logical and intuitive understanding",
            strength: "integrating multiple ways of knowing and processing information",
            approach: "You naturally weave between analytical thinking and intuitive insights, using both to navigate reality.",
            challenge: "trusting when to lead with logic and when to follow intuition",
            growth: "refining your ability to determine which approach serves best in different contexts"
        }
    },
    "cognitive-alignment-rightLeaning": {
        name: "Intuitively Guided",
        description: "You tend to trust inner knowing over pure logic. While you understand the value of analysis, you often find your truth through felt sense and inner resonance.",
        phrases: {
            identity: "an intuitive thinker who values inner knowing",
            strength: "sensing truth and possibilities beyond logical constructs",
            approach: "You follow intuitive signals first, then use logic to understand what your intuition has revealed.",
            challenge: "grounding intuitive insights so others can understand them",
            growth: "developing ways to validate and communicate intuitive knowledge"
        }
    },
    "cognitive-alignment-strongRight": {
        name: "Highly Intuitive",
        description: "You deeply trust what the body and spirit know before the mind can categorize it. Your truth rises almost exclusively through sensation, symbols, and inner resonance, rarely needing external proof to be felt as real.",
        phrases: {
            identity: "a highly intuitive being who navigates primarily through inner signals",
            strength: "direct knowing that bypasses rational analysis",
            approach: "You rely strongly on felt sense, inner vision, and energetic resonance to navigate reality.",
            challenge: "translating intuitive knowledge into forms others can understand",
            growth: "creating bridges between your intuitive knowing and shared reality"
        }
    },

    // Perceptual Focus
    "perceptual-focus-strongLeft": {
        name: "Highly Definitive",
        description: "You require exceptional clarity and detail in your vision. Precise specificity is essential for you, and you deeply believe that clearly articulated intentions manifest most effectively.",
        phrases: {
            identity: "a visionary with crystal-clear focus",
            strength: "creating detailed and precise visions of what you desire",
            approach: "You define your goals with remarkable specificity, clarifying exactly what you want before taking action.",
            challenge: "allowing for beneficial variations that weren't in your original plan",
            growth: "maintaining clarity while embracing unexpected beneficial outcomes"
        }
    },
    "perceptual-focus-leftLeaning": {
        name: "Definitive",
        description: "You feel strongest with a sharp, dialed-in vision. Specificity gives your energy a direction to flow toward. Clarity is a spell, it calls things in.",
        phrases: {
            identity: "a focused creator who values clarity",
            strength: "defining clear intentions that guide your manifestation process",
            approach: "You tend to focus on specific outcomes while remaining somewhat open to variations.",
            challenge: "maintaining flexibility when reality offers something different but valuable",
            growth: "holding vision firmly but not rigidly"
        }
    },
    "perceptual-focus-balanced": {
        name: "Adaptive",
        description: "You let clarity and curiosity sit side by side. You prefer to hold a vision without clenching it, staying precise and open at once.",
        phrases: {
            identity: "an adaptive creator who values both clarity and openness",
            strength: "holding clear intentions while remaining receptive to organic development",
            approach: "You naturally balance clear vision with openness to how things might unfold in unexpected ways.",
            challenge: "knowing when to focus more specifically versus when to remain open",
            growth: "refining your ability to shift between clarity and receptivity as needed"
        }
    },
    "perceptual-focus-rightLeaning": {
        name: "Receptive",
        description: "You keep your hands open. You don't lock into a vision, you listen for what's arriving. The future reveals itself as you move.",
        phrases: {
            identity: "a receptive creator who values openness and emergence",
            strength: "remaining open to unexpected possibilities and synchronicities",
            approach: "You tend to set general intentions while staying highly receptive to how things actually unfold.",
            challenge: "bringing enough focus to manifest specific outcomes when needed",
            growth: "developing the ability to apply focus without restricting flow"
        }
    },
    "perceptual-focus-strongRight": {
        name: "Highly Receptive",
        description: "You maintain exceptional openness to what wants to emerge. Rather than defining specific outcomes, you allow life to reveal itself organically, trusting that what arrives is often better than what could be planned.",
        phrases: {
            identity: "a highly receptive being who trusts life's unfolding",
            strength: "surrendering to the natural flow of emergence and synchronicity",
            approach: "You set very general intentions and then listen deeply to what life is bringing forward.",
            challenge: "creating enough structure to manifest when specific outcomes are needed",
            growth: "balancing complete receptivity with intentional creation"
        }
    },

    // Kinetic Drive
    "kinetic-drive-strongLeft": {
        name: "Highly Deliberate",
        description: "You move with exceptional intentionality and structure. Detailed plans, clear steps, and reliable systems are essential to your process, providing the foundation for all your actions.",
        phrases: {
            identity: "a methodical creator who thrives with comprehensive planning",
            strength: "creating thorough, structured plans that guide consistent action",
            approach: "You develop detailed plans with clear steps before taking significant action.",
            challenge: "adapting quickly when circumstances require deviation from plans",
            growth: "maintaining structure while developing greater flexibility"
        }
    },
    "kinetic-drive-leftLeaning": {
        name: "Deliberate",
        description: "You like to move with intention. Plans, steps, systems, they help you feel rooted. Structure is your launchpad.",
        phrases: {
            identity: "a purposeful creator who values intentional planning",
            strength: "taking focused action guided by clear strategies",
            approach: "You typically create plans before acting while allowing some room for adjustment.",
            challenge: "recognizing when spontaneous action would be more effective",
            growth: "balancing structured approach with timely opportunism"
        }
    },
    "kinetic-drive-balanced": {
        name: "Rhythmic",
        description: "You tune into the beat of the moment. You know when to push and when to pause, riding the natural rhythm of action and rest.",
        phrases: {
            identity: "a rhythmic creator who honors natural cycles",
            strength: "harmonizing structured action with spontaneous inspiration",
            approach: "You blend planning with intuitive timing, respecting the natural flow of energy.",
            challenge: "maintaining momentum when neither structure nor inspiration feels available",
            growth: "deepening your understanding of your unique energy cycles"
        }
    },
    "kinetic-drive-rightLeaning": {
        name: "Spontaneous",
        description: "You act in the moment the spark hits. Instinct leads. Planning takes the backseat. Your momentum comes from inspired action.",
        phrases: {
            identity: "an inspired creator who trusts spontaneous action",
            strength: "taking immediate action when inspiration strikes",
            approach: "You typically follow intuitive impulses while maintaining some awareness of overall direction.",
            challenge: "sustaining momentum when immediate inspiration isn't present",
            growth: "developing light structures that support without restricting flow"
        }
    },
    "kinetic-drive-strongRight": {
        name: "Highly Spontaneous",
        description: "You move almost exclusively in response to immediate inspiration. Detailed planning feels restrictive, and your greatest momentum comes from following energy as it arises in the moment.",
        phrases: {
            identity: "a highly intuitive creator who thrives on immediate impulse",
            strength: "taking bold, inspired action without hesitation",
            approach: "You act primarily on intuitive inspiration with minimal planning or preparation.",
            challenge: "maintaining consistency when not feeling immediately inspired",
            growth: "honoring your spontaneous nature while developing sustainable rhythms"
        }
    },

    // Choice Navigation
    "choice-navigation-strongLeft": {
        name: "Highly Calculative",
        description: "You approach decisions through comprehensive analysis. Every choice is carefully weighed, options are methodically evaluated, and you strongly prefer moving forward only when the path ahead is clear.",
        phrases: {
            identity: "a systematic decision-maker who values thorough analysis",
            strength: "making carefully considered choices with clear rationale",
            approach: "You thoroughly analyze options, weighing pros and cons before making decisions.",
            challenge: "making timely decisions when complete information isn't available",
            growth: "developing comfort with some uncertainty in the decision process"
        }
    },
    "choice-navigation-leftLeaning": {
        name: "Calculative",
        description: "You prefer a pause before the plunge. You look at the map, trace the paths, and make your move from strategy.",
        phrases: {
            identity: "a thoughtful decision-maker who values clarity",
            strength: "making well-considered choices with awareness of potential outcomes",
            approach: "You typically evaluate options before deciding while remaining somewhat open to intuitive guidance.",
            challenge: "recognizing when analysis is creating unnecessary delay",
            growth: "balancing thoughtful consideration with decisive action"
        }
    },
    "choice-navigation-balanced": {
        name: "Responsive",
        description: "You can shift between plan and pull, sensing when a decision needs logic, and when it just needs a yes from your body.",
        phrases: {
            identity: "an adaptive decision-maker who uses multiple inputs",
            strength: "appropriately matching your decision style to the situation at hand",
            approach: "You naturally integrate logical analysis with intuitive guidance when making choices.",
            challenge: "determining which approach serves best in ambiguous situations",
            growth: "deepening trust in your ability to choose the right approach for each decision"
        }
    },
    "choice-navigation-rightLeaning": {
        name: "Fluid",
        description: "You follow the river, not the roadmap. Your choices rise from the current of inner guidance, not external structure.",
        phrases: {
            identity: "an intuitive decision-maker who trusts inner guidance",
            strength: "making choices that align with deeper knowings and energy flows",
            approach: "You typically follow intuitive signals while maintaining some awareness of logical considerations.",
            challenge: "explaining your choices to those who need logical rationales",
            growth: "honoring your intuitive process while developing ways to communicate it"
        }
    },
    "choice-navigation-strongRight": {
        name: "Highly Fluid",
        description: "Your decisions emerge almost exclusively from intuitive knowing. You deeply trust the flow of life to guide your choices, with minimal need for analytical consideration or external validation.",
        phrases: {
            identity: "a highly intuitive navigator who follows energy currents",
            strength: "making aligned choices through direct inner knowing",
            approach: "You trust your intuitive signals implicitly, letting decisions emerge organically.",
            challenge: "communicating your process to those who rely on logical decision frameworks",
            growth: "creating bridges between your intuitive process and collaborative decisions"
        }
    },

    // Resonance Field
    "resonance-field-strongLeft": {
        name: "Highly Regulated",
        description: "You approach emotions with exceptional intentionality. Careful management of your emotional state is a core practice, and you excel at creating emotional stability to support your manifestation process.",
        phrases: {
            identity: "an emotionally disciplined creator who values stability",
            strength: "maintaining consistent emotional tone through intentional practices",
            approach: "You carefully cultivate beneficial emotional states and mindfully process challenging emotions.",
            challenge: "allowing emotional authenticity when it doesn't match your intended state",
            growth: "balancing emotional regulation with emotional honesty"
        }
    },
    "resonance-field-leftLeaning": {
        name: "Regulated",
        description: "You approach your emotional state with intention. You work with feeling like a sculptor, shaping it to support your path.",
        phrases: {
            identity: "an intentional creator who values emotional mastery",
            strength: "directing emotional energy toward desired outcomes",
            approach: "You typically manage your emotional state while allowing some natural expression.",
            challenge: "recognizing when emotional control becomes emotional suppression",
            growth: "developing greater emotional fluidity while maintaining core stability"
        }
    },
    "resonance-field-balanced": {
        name: "Attuned",
        description: "You can read the emotional weather inside and around you. You let feeling move, but you also know how to steady yourself in the storm.",
        phrases: {
            identity: "an emotionally attuned creator who values both expression and stability",
            strength: "navigating emotional currents with awareness and balance",
            approach: "You naturally allow emotional movement while maintaining a centered presence.",
            challenge: "finding the right balance between expression and regulation in each situation",
            growth: "deepening your emotional intelligence across varied circumstances"
        }
    },
    "resonance-field-rightLeaning": {
        name: "Expressive",
        description: "Your emotions are part of the magic. You don't try to control the tides, you ride them. Feeling leads the way.",
        phrases: {
            identity: "an emotionally expressive creator who values authenticity",
            strength: "allowing genuine emotional energy to fuel your creation process",
            approach: "You typically follow emotional currents while maintaining some awareness of emotional impact.",
            challenge: "creating stability when emotional waters run turbulent",
            growth: "honoring emotional expression while developing emotional resilience"
        }
    },
    "resonance-field-strongRight": {
        name: "Highly Expressive",
        description: "You experience emotions with remarkable intensity and authenticity. Rather than managing emotions, you surrender to their flow, allowing them to guide your creative process in profound ways.",
        phrases: {
            identity: "a deeply feeling creator who navigates through emotional currents",
            strength: "accessing powerful creative energy through emotional authenticity",
            approach: "You dive fully into emotional experiences, letting them guide your manifestation process.",
            challenge: "maintaining functioning when processing intense emotional states",
            growth: "developing emotional resilience without dampening emotional depth"
        }
    },

    // Manifestation Rhythm
    "manifestation-rhythm-strongLeft": {
        name: "Highly Structured",
        description: "You thrive with exceptionally clear timelines, consistent cycles, and established rituals. Structured routines are essential to your process, providing the container through which your creative energy flows most effectively.",
        phrases: {
            identity: "a methodical creator who values consistent routines",
            strength: "maintaining reliable rhythms that produce steady results",
            approach: "You establish clear structures and follow them with remarkable consistency.",
            challenge: "adapting when external circumstances disrupt your established patterns",
            growth: "developing flexible structures that can evolve as needed"
        }
    },
    "manifestation-rhythm-leftLeaning": {
        name: "Structured",
        description: "You thrive with timelines, cycles, and steady rituals. For you structure is not a cage, it's your container for creation.",
        phrases: {
            identity: "a consistent creator who values reliable rhythms",
            strength: "establishing supportive routines that build momentum",
            approach: "You typically create and follow structured patterns while allowing some variation.",
            challenge: "recognizing when structures need to evolve or be released",
            growth: "developing structures that support without restricting growth"
        }
    },
    "manifestation-rhythm-balanced": {
        name: "Sustainable",
        description: "You walk the middle path between consistency and flow. You build momentum that doesn't burn out.",
        phrases: {
            identity: "a balanced creator who values sustainable momentum",
            strength: "maintaining progress through both structure and flexibility",
            approach: "You naturally balance consistent practices with adaptability to changing conditions.",
            challenge: "knowing when to lean more toward structure versus flow",
            growth: "refining your ability to shift rhythms while maintaining momentum"
        }
    },
    "manifestation-rhythm-rightLeaning": {
        name: "Dynamic",
        description: "You're always evolving. You change how you create based on who you are right now, not who you were last week. Nothing is fixed, everything moves.",
        phrases: {
            identity: "an adaptable creator who values evolution and change",
            strength: "adjusting your approach to match current energy and circumstances",
            approach: "You typically follow what feels alive now while maintaining some awareness of continuity.",
            challenge: "creating enough consistency to build long-term momentum",
            growth: "honoring your need for variation while establishing gentle continuity"
        }
    },
    "manifestation-rhythm-strongRight": {
        name: "Highly Dynamic",
        description: "Your creative process is in constant evolution. You deeply resist fixed patterns and thrive when able to completely reinvent your approach based on current inspiration and energy levels.",
        phrases: {
            identity: "a highly fluid creator who thrives through constant renewal",
            strength: "bringing fresh energy through frequent reinvention of your process",
            approach: "You follow what feels most alive in each moment, allowing your process to transform continuously.",
            challenge: "completing longer-term projects that require sustained focus",
            growth: "developing minimalist continuity that supports without restricting evolution"
        }
    }
};

// Typology Pair templates with modular phrases for dynamic content generation
const typologyPairs = {
    "strongly-structured-strongly-structured": {
        name: "Master Architect",
        description: "You build with exceptional precision and methodology. You see reality like a detailed blueprint and bring visions to life through meticulous planning, clear systems, and consistent implementation. Your remarkable strength is in creating robust frameworks that reliably produce results.",
        phrases: {
            essence: "disciplined creation through comprehensive systems",
            strength: "creating highly structured frameworks that consistently produce results",
            challenge: "allowing space for the unexpected within your carefully designed plans",
            approach: "You meticulously design and implement systems, ensuring each element serves the greater structure.",
            growth: "learning to maintain your powerful structure while allowing for inspired deviation"
        }
    },
    "strongly-structured-structured": {
        name: "Strategic Architect",
        description: "You build with intention. You see reality like a blueprint and bring visions to life through clarity, planning, and steady movement. Your strength is in creating grounded systems that actually work. You're not just manifesting dreams, you're engineering them.",
        phrases: {
            essence: "methodical creation through clear structure",
            strength: "designing and implementing effective systems that produce reliable results",
            challenge: "recognizing when flexibility would better serve your objectives",
            approach: "You carefully plan and structure your manifestation process, ensuring each step builds logically upon the last.",
            growth: "developing the ability to adapt your structured approach when circumstances change"
        }
    },
    "structured-structured": {
        name: "Strategic Architect",
        description: "You build with intention. You see reality like a blueprint and bring visions to life through clarity, planning, and steady movement. Your strength is in creating grounded systems that actually work. You're not just manifesting dreams, you're engineering them.",
        phrases: {
            essence: "methodical creation through clear structure",
            strength: "designing and implementing effective systems that produce reliable results",
            challenge: "recognizing when flexibility would better serve your objectives",
            approach: "You carefully plan and structure your manifestation process, ensuring each step builds logically upon the last.",
            growth: "developing the ability to adapt your structured approach when circumstances change"
        }
    },
    "strongly-structured-balanced": {
        name: "Structured Integrator",
        description: "You lead with powerful structure but recognize the value of adaptation. Your mind organizes with remarkable precision, while still leaving space for organic development. You excel at creating systems that maintain their integrity while allowing for natural evolution.",
        phrases: {
            essence: "structured creation with space for adaptation",
            strength: "building robust systems that remain adaptable to changing conditions",
            challenge: "determining when to maintain structure versus when to allow flexibility",
            approach: "You create clear frameworks first, then allow for mindful adjustments as implementation proceeds.",
            growth: "further refining your ability to determine when structure serves and when flexibility is needed"
        }
    },
    "structured-balanced": {
        name: "Practical Synthesizer",
        description: "You lead with structure but make space for intuitive influence. Your mind organizes with ease, and your process flexes just enough to invite in surprise. You're pragmatic but not rigid. You listen for alignment before locking in a plan.",
        phrases: {
            essence: "practical creation with room for adaptation",
            strength: "balancing clear structure with openness to organic development",
            challenge: "trusting intuitive adjustments within your structured approach",
            approach: "You create frameworks that provide direction while remaining open to refinement as you progress.",
            growth: "deepening your trust in both structured planning and intuitive adjustment"
        }
    },
    "strongly-structured-fluid": {
        name: "Structured Visionary",
        description: "You bring powerful structure to intuitive vision. You excel at creating robust systems that serve inspired ideas, bringing exceptional discipline to creative flow. Your unique strength lies in translating ethereal concepts into practical reality with remarkable precision.",
        phrases: {
            essence: "bringing disciplined structure to intuitive vision",
            strength: "implementing highly organized systems that serve inspired ideas",
            challenge: "allowing intuitive guidance to sometimes redirect your structured approach",
            approach: "You receive intuitive insights, then apply methodical processes to manifest them in tangible form.",
            growth: "developing greater trust in the interplay between precise structure and intuitive guidance"
        }
    },
    "structured-fluid": {
        name: "Grounded Visionary",
        description: "You bring the sky to the ground. Structure is your anchor, intuition is your compass. You create from a steady center, but you're not afraid to pivot when inspiration calls. You hold form and flow in the same hand.",
        phrases: {
            essence: "bringing practical form to intuitive guidance",
            strength: "translating inspired ideas into workable structures",
            challenge: "maintaining momentum when structure and inspiration seem at odds",
            approach: "You balance structural thinking with intuitive listening, finding practical ways to implement inspired ideas.",
            growth: "developing even greater harmony between your structured and intuitive aspects"
        }
    },
    "structured-strongly-fluid": {
        name: "Anchor for Inspiration",
        description: "You bring essential grounding to powerful vision. Structure serves as your foundation while deep intuition guides your direction. You excel at creating just enough form to channel remarkably fluid creative energy, without restricting its natural flow.",
        phrases: {
            essence: "providing structural support for highly intuitive creation",
            strength: "anchoring visionary insights with practical implementation",
            challenge: "creating enough structure without dampening powerful inspiration",
            approach: "You receive strong intuitive guidance, then develop appropriate structures to bring it into form.",
            growth: "refining your ability to determine exactly how much structure serves each inspired vision"
        }
    },
    "balanced-strongly-structured": {
        name: "Adaptive Strategist",
        description: "You bring important flexibility to powerful structure. Your adaptability complements your exceptional discipline, allowing you to refine methodical approaches through responsive adjustment. You excel at maintaining structural integrity while evolving implementation.",
        phrases: {
            essence: "bringing adaptability to highly structured creation",
            strength: "maintaining structural integrity while allowing responsive evolution",
            challenge: "knowing when to preserve structure versus when to introduce adaptation",
            approach: "You respect established systems while introducing mindful adjustments to optimize outcomes.",
            growth: "developing even greater discernment about when each approach best serves"
        }
    },
    "balanced-structured": {
        name: "Integrated Strategist",
        description: "You adapt with intention. Your ability to synthesize meets your gift for execution. You're a shapeshifter who knows how to build. You move between insight and implementation with grace, grounding your vision in form.",
        phrases: {
            essence: "adaptive creation with meaningful structure",
            strength: "integrating multiple approaches while maintaining practical focus",
            challenge: "trusting your adaptability within structured contexts",
            approach: "You move fluidly between different perspectives, using structure to integrate what emerges.",
            growth: "deepening your trust in both your adaptive nature and structural abilities"
        }
    },
    "balanced-balanced": {
        name: "Harmonic Integrator",
        description: "You are the center point. You naturally hold paradox without needing to collapse it. Structure and flow, logic and feeling, none of it is separate in your world. You make wholeness feel like home.",
        phrases: {
            essence: "integrated creation that honors multiple approaches",
            strength: "harmonizing seemingly opposite approaches into cohesive wholes",
            challenge: "maintaining your center when external forces pull toward extremes",
            approach: "You naturally perceive multiple perspectives and weave them together in balanced implementation.",
            growth: "deepening your capacity to embody integration even in challenging circumstances"
        }
    },
    "balanced-fluid": {
        name: "Flowing Harmonizer",
        description: "You lead with inner harmony and move through life like water. You invite clarity but don't demand it. Your creative process is intuitive, expansive, and still somehow grounded. You trust the rhythm of things.",
        phrases: {
            essence: "harmonious creation through adaptable flow",
            strength: "maintaining center while flowing with intuitive guidance",
            challenge: "creating enough structure to manifest intuitive insights",
            approach: "You listen deeply to inner guidance while maintaining enough form to bring it into reality.",
            growth: "developing greater capacity to anchor your intuitive flow when needed"
        }
    },
    "balanced-strongly-fluid": {
        name: "Flow Navigator",
        description: "You bring essential grounding to highly intuitive creation. While honoring powerful creative currents, you maintain enough center to navigate them effectively. You excel at staying oriented within expansive vision, helping inspiration find tangible expression.",
        phrases: {
            essence: "providing centered awareness within highly intuitive flow",
            strength: "remaining oriented while swimming in deep creative currents",
            challenge: "maintaining enough structure to translate powerful inspiration into form",
            approach: "You honor intuitive guidance while providing just enough framework to manifest its essence.",
            growth: "refining your ability to remain effectively centered within highly fluid creation"
        }
    },
    "fluid-strongly-structured": {
        name: "Visionary Builder",
        description: "You begin with intuitive vision and bring it into form through exceptional discipline. Your intuition guides what wants to emerge, while your remarkable structural abilities determine how to manifest it effectively. You excel at bridging inspiration and methodical implementation.",
        phrases: {
            essence: "bringing intuitive vision into highly structured form",
            strength: "translating creative inspiration into robust practical systems",
            challenge: "maintaining creative flow while implementing detailed structure",
            approach: "You allow intuition to guide direction, then apply methodical processes to manifest the vision.",
            growth: "developing even greater harmony between your intuitive and highly structured aspects"
        }
    },
    "fluid-structured": {
        name: "Intuitive Implementer",
        description: "You begin with feeling and shape it into form. Vision comes first, but you know how to follow through. Your intuition guides the what, and your structured self handles the how. You're the bridge between idea and action.",
        phrases: {
            essence: "intuitive creation supported by practical implementation",
            strength: "receiving inspired guidance and bringing it into tangible form",
            challenge: "maintaining the essence of inspiration during the structuring process",
            approach: "You allow intuition to lead while developing supportive structures to manifest what emerges.",
            growth: "refining your ability to preserve inspired energy throughout implementation"
        }
    },
    "fluid-balanced": {
        name: "Visionary Harmonizer",
        description: "You lead with intuition but always keep one foot in the world. You're tapped into possibility while still attuned to what's needed now. You dance between realms, receiving, refining, and translating energy into form.",
        phrases: {
            essence: "intuitive creation with adaptive implementation",
            strength: "bringing inspired vision into reality through flexible approaches",
            challenge: "creating enough structure without limiting intuitive guidance",
            approach: "You follow intuitive direction while remaining responsive to what emerges during implementation.",
            growth: "developing greater trust in both your intuitive guidance and adaptive abilities"
        }
    },
    "fluid-fluid": {
        name: "Quantum Manifestor",
        description: "You create from the unseen. You don't manifest through steps, you manifest through state. You trust timing, you trust energy, and you trust yourself. Your reality bends in response to your being.",
        phrases: {
            essence: "intuitive creation through energetic alignment",
            strength: "manifesting through resonance rather than linear action",
            challenge: "bringing inspired visions into tangible form without restricting their essence",
            approach: "You align your energy with desired outcomes, allowing reality to reshape around your frequency.",
            growth: "developing greater capacity to maintain your state while engaging with practical reality"
        }
    },
    "fluid-strongly-fluid": {
        name: "Ethereal Creator",
        description: "You create almost entirely through energy, resonance, and state. Linear processes feel foreign to your deeply intuitive nature. You manifest by becoming the frequency of what you desire, trusting the universe to rearrange itself accordingly.",
        phrases: {
            essence: "creation through pure energetic alignment",
            strength: "accessing deeply intuitive knowledge and manifesting through resonance",
            challenge: "translating ethereal awareness into forms others can recognize",
            approach: "You tune into subtle energetic currents and allow reality to reshape itself around your aligned state.",
            growth: "developing ways to bridge your profound intuitive process with shared reality"
        }
    },
    "strongly-fluid-strongly-fluid": {
        name: "Pure Intuitive",
        description: "You create almost exclusively through energy, frequency, and direct knowing. Conventional manifestation approaches feel unnecessarily complex to your deeply intuitive nature. You access reality at the quantum level, where intention and manifestation are essentially one movement.",
        phrases: {
            essence: "creation through profound intuitive knowing",
            strength: "directly accessing the field where intention and manifestation merge",
            challenge: "interacting with conventional reality without diminishing your connection to source",
            approach: "You manifest primarily through being rather than doing, allowing reality to respond to your frequency.",
            growth: "developing bridges between your quantum awareness and the shared physical world"
        }
    },
    "strongly-fluid-fluid": {
        name: "Quantum Guide",
        description: "You access reality at remarkably subtle levels, where intention and manifestation are nearly simultaneous. Your highly developed intuitive abilities allow you to perceive possibilities beyond conventional awareness, bringing through insights that reshape understanding.",
        phrases: {
            essence: "creation through profound intuitive connection",
            strength: "accessing subtle dimensions of reality beyond conventional perception",
            challenge: "translating multidimensional awareness into linear communication",
            approach: "You align with the essence of what you wish to create, allowing it to emerge through energetic resonance.",
            growth: "developing ways to bridge your intuitive knowing with practical implementation"
        }
    },
    "strongly-fluid-balanced": {
        name: "Visionary Translator",
        description: "You access profound intuitive wisdom while maintaining enough center to translate it effectively. Your exceptional intuitive abilities perceive beyond conventional reality, while your balanced nature helps bridge these insights to practical application.",
        phrases: {
            essence: "bridging profound intuition with practical integration",
            strength: "translating multidimensional awareness into implementable guidance",
            challenge: "preserving the depth of intuitive knowledge during the translation process",
            approach: "You receive intuitive information at deep levels, then work to express it in accessible ways.",
            growth: "refining your ability to maintain intuitive connection while engaging with conventional reality"
        }
    },
    "strongly-structured-strongly-fluid": {
        name: "Dimensional Bridge",
        description: "You embody a remarkable synthesis of seemingly opposite approaches. Your exceptional structure provides tangible form for profound intuitive vision. You excel at creating robust systems that channel ethereal energy, bringing the invisible into powerful manifestation.",
        phrases: {
            essence: "bridging profound structure and deep intuition",
            strength: "creating powerful frameworks that channel intuitive wisdom",
            challenge: "maintaining the integrity of both structure and intuition simultaneously",
            approach: "You receive deep intuitive guidance, then apply exceptional organizational skills to bring it into form.",
            growth: "refining your unique ability to honor both highly structured and deeply intuitive aspects"
        }
    }
};

// Ideal Approaches templates
const idealApproaches = {
    "structured-structured": {
        strengths: "clarity, precision, consistency, methodical execution",
        approaches: [
            "Map out your manifestation path with solid plans and measurable milestones.",
            "Use visualizations that are crystal-clear and time-specific.",
            "Track your momentum like data, watch what builds, what stalls.",
            "Lock in routines that nourish your focus and energy.",
            "Apply logic to dissolve and learn from tension, don't just push through it."
        ]
    },
    "structured-balanced": {
        strengths: "strategic flexibility, practical intuition, organized adaptability",
        approaches: [
            "Build frameworks with clear priorities that can flex without falling apart.",
            "Move between planned structure and intuitive adjustments as needed.",
            "Trust data, but leave the door open for synchronicity.",
            "Keep consistent anchors while letting inspiration surprise you.",
            "Know when to pause, reflect, and let new clarity rise."
        ]
    },
    "structured-fluid": {
        strengths: "stable foundations, intuitive expansion, creative implementation",
        approaches: [
            "Set clear intentions and let them stretch in unexpected directions.",
            "Work in focused bursts, then unplug to receive what's next.",
            "Ground intuitive downloads through systems that support, not suffocate.",
            "Design rituals or systems that hold space for inspiration to land.",
            "Mix planning with energetic alignment like you're mixing paint."
        ]
    },
    "balanced-structured": {
        strengths: "adaptable systems, harmonized logic, grounded creativity",
        approaches: [
            "Adopt structures, adaptable frameworks that flow, not tight rope, more riverbank.",
            "Anchor consistent practices while evolving them over time.",
            "Let logic and intuition co-pilot your moves.",
            "Build systems that leave room for breath and built-in flexibility.",
            "Shift between doing phases and integrating alignment-focused phases."
        ]
    },
    "balanced-balanced": {
        strengths: "dynamic integration, responsive flow, holistic creation",
        approaches: [
            "Shape-shift between structure and intuition based on the moment.",
            "Blend the practical and the energetic in equal measure.",
            "Let your process evolve without losing its core.",
            "Plan without control, allow without passivity.",
            "Use both data and energy as feedback, not rules."
        ]
    },
    "balanced-fluid": {
        strengths: "intuitive adaptability, emotional attunement, expansive grounding",
        approaches: [
            "Let inner guidance lead, while maintaining practical grounding.",
            "Build soft structures that hold space, not pressure.",
            "Translate vision into action one inspired step at a time.",
            "Use intuitive practices with consistent implementation.",
            "Alternate between expansive exploration and focused integration."
        ]
    },
    "fluid-structured": {
        strengths: "intuitive discipline, inspired planning, grounded magic",
        approaches: [
            "Let your inner knowing set the vision, then map the moves.",
            "Create gentle structures that support your visionary nature.",
            "Let energy speak first, then act from that clarity.",
            "Use intuitive guidance to inform strategic planning.",
            "Implement consistent practices that honor your need for creative freedom."
        ]
    },
    "fluid-balanced": {
        strengths: "vision-driven harmony, adaptable flow, creative balance",
        approaches: [
            "Stay wide open to inspiration while maintaining practical awareness.",
            "Use minimal structures as soft landing pads for ideas.",
            "Ground your wildness in presence, not pressure.",
            "Notice when it's time for expansive vision and when it's time for focused execution.",
            "Let intuitive bursts be followed by integration, instead of cyclical thinking."
        ]
    },
    "fluid-fluid": {
        strengths: "energetic alignment, nonlinear magic, deep trust in the unseen",
        approaches: [
            "Make alignment your method. Vibe first, results second.",
            "Visualize from feeling, not from steps.",
            "Create from the pulse of inspiration, not the plan.",
            "Let synchronicity lead, you don't have to force it.",
            "Bring in structure only as a channel, never as a cage."
        ]
    }
};

// Common Misalignments templates
const commonMisalignments = {
    "structured-structured": [
        "Getting so locked into the plan that you leave no room for surprise",
        "Waiting for the \"perfect\" setup instead of moving with what you have",
        "Ignoring your intuition when it doesn't show up in a spreadsheet",
        "Getting discouraged when outcomes don't match the timeline you imagined",
        "Focusing too much on the method and forgetting the why"
    ],
    "structured-balanced": [
        "Reaching for structure when the moment is asking for softness",
        "Overthinking intuitive nudges until they lose their spark",
        "Building systems that start helpful and end up restrictive",
        "Getting impatient with things that unfold outside your control",
        "Writing off intuitive or nonlinear methods as unreliable"
    ],
    "structured-fluid": [
        "Trying to organize inspiration before it fully arrives",
        "Overriding your gut with what seems \"smarter\" on paper",
        "Creating rigid plans that don't leave room for breath",
        "Resisting surrender because it feels like giving up control",
        "Dismissing energy work or subtle shifts as not \"real\" progress"
    ],
    "balanced-structured": [
        "Defaulting to logic even when the call is emotional or energetic",
        "Imposing unnecessary systems just to feel safe",
        "Measuring your worth by results instead of resonance",
        "Doubting your own intuition if it can't be explained",
        "Resisting ease, mistaking it for inconsistency"
    ],
    "balanced-balanced": [
        "Second-guessing yourself when there's no clear \"right\" path",
        "Trying to include every approach and diluting your power",
        "Spreading energy too thin without anchoring it somewhere",
        "Switching gears too often to let anything root",
        "Avoiding full commitment in either direction, structure or surrender"
    ],
    "balanced-fluid": [
        "Staying in the dreamspace when action would actually help",
        "Losing your grounding in the swirl of possibility",
        "Avoiding structure because it feels like restriction",
        "Floating through phases that need some intentional rooting",
        "Ignoring data or plans that could strengthen your magic"
    ],
    "fluid-structured": [
        "Building cages when you meant to build containers",
        "Talking yourself out of intuitive truths if they sound too \"out there\"",
        "Prioritizing execution over alignment and burning out",
        "Rushing timelines instead of trusting divine pacing",
        "Downplaying your own vibrational work like it's not enough"
    ],
    "fluid-balanced": [
        "Resisting even the gentle structure that could support you",
        "Scattering your focus when it wants to be held",
        "Ignoring insights that could bring your vision into reality",
        "Walking away from ideas just when they're ready to root",
        "Mistaking flexibility for directionlessness"
    ],
    "fluid-fluid": [
        "Staying in the ethers without grounding your vision into form",
        "Letting ideas swirl endlessly without choosing one to land",
        "Avoiding tangible action that could magnetize what you want",
        "Starting and stopping when consistency wants to emerge",
        "Letting clarity remain optional when it's trying to knock"
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
            // Both answers identical â†’ definitive placement
            placement = responses[0];
        } else {
            // Differing answers â†’ default to Balanced
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
    
    // Simplified logic â€“ use defaults if needed
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

// Function to generate a dynamic result based on spectrum placements
function generateDynamicResult(spectrumPlacements, typologyPair) {
    // Collect phrases from each spectrum
    const spectrumPhrases = {};
    Object.entries(spectrumPlacements).forEach(([spectrumId, placement]) => {
        // Get the correct description object
        const descriptionKey = `${spectrumId}-${placement}`;
        const description = typologyDescriptions[descriptionKey];
        
        if (description && description.phrases) {
            spectrumPhrases[spectrumId] = description.phrases;
        } else {
            // Fallback to a similar placement if the exact one isn't found
            // Try to find the closest match
            let fallbackKey;
            if (placement.includes('Left') || placement === 'strongLeft') {
                fallbackKey = `${spectrumId}-left`;
            } else if (placement.includes('Right') || placement === 'strongRight') {
                fallbackKey = `${spectrumId}-right`;
            } else {
                fallbackKey = `${spectrumId}-balanced`;
            }
            
            if (typologyDescriptions[fallbackKey] && typologyDescriptions[fallbackKey].phrases) {
                spectrumPhrases[spectrumId] = typologyDescriptions[fallbackKey].phrases;
            }
        }
    });
    
    // Get the typology pair template
    const pairKey = typologyPair.key;
    const pairTemplate = typologyPairs[pairKey] || typologyPairs['fluid-structured'];
    
    // Combine phrases to create a cohesive result
    const result = {
        typologyName: pairTemplate.name,
        typologyDescription: pairTemplate.description,
        primaryIdentity: spectrumPhrases[typologyPair.primary.spectrumId]?.identity || "",
        secondaryIdentity: spectrumPhrases[typologyPair.secondary.spectrumId]?.identity || "",
        primaryStrength: spectrumPhrases[typologyPair.primary.spectrumId]?.strength || "",
        secondaryStrength: spectrumPhrases[typologyPair.secondary.spectrumId]?.strength || "",
        primaryChallenge: spectrumPhrases[typologyPair.primary.spectrumId]?.challenge || "",
        secondaryChallenge: spectrumPhrases[typologyPair.secondary.spectrumId]?.challenge || "",
        typologyEssence: pairTemplate.phrases?.essence || "",
        typologyApproach: pairTemplate.phrases?.approach || "",
        typologyStrength: pairTemplate.phrases?.strength || "",
        typologyChallenge: pairTemplate.phrases?.challenge || "",
        typologyGrowth: pairTemplate.phrases?.growth || ""
    };
    
    // Create custom paragraphs combining the various pieces
    result.identitySummary = `You are ${result.primaryIdentity} with qualities of ${result.secondaryIdentity}. Your ${pairTemplate.name} nature gives you a unique perspective on reality creation.`;
    
    result.strengthSummary = `Your primary strength lies in ${result.primaryStrength}, complemented by your ability for ${result.secondaryStrength}. This combination enables ${result.typologyStrength}.`;
    
    result.challengeSummary = `Your growth edge involves ${result.primaryChallenge} while also navigating ${result.secondaryChallenge}. As a ${pairTemplate.name}, your specific challenge is ${result.typologyChallenge}.`;
    
    result.approachSummary = `${result.typologyApproach} This reflects the essence of ${result.typologyEssence}.`;
    
    result.growthSummary = `Your path forward involves ${result.typologyGrowth}, which will help you fully embody your unique potential as a ${pairTemplate.name}.`;
    
    return result;
}

// Generate Typology Pair section (displays name and description)
function generateTypologyPairSection(typologyPair) {
    const container = document.getElementById('typology-pair');
    if (!container) return;
    
    const pairKey = typologyPair.key;
    const pairTemplate = typologyPairs[pairKey] || typologyPairs['fluid-structured'];
    
    // Get the complete results data
    const resultsData = window.completeResults || generateCompleteResults();
    window.completeResults = resultsData; // Store for later use
    
    // Generate dynamic content
    const dynamicResult = generateDynamicResult(resultsData.spectrumPlacements, typologyPair);
    
    container.innerHTML = `
        <div class="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100">
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <div class="w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-400"></div>
                    </div>
                </div>
                <h2 class="text-3xl font-light text-stone-800 ml-4">${dynamicResult.typologyName}</h2>
            </div>
            <p class="text-lg font-light text-stone-600 leading-relaxed mb-6">
                ${dynamicResult.typologyDescription}
            </p>
            <div class="mt-6 space-y-4 border-t border-stone-100 pt-6">
                <p class="text-base font-light text-stone-600 leading-relaxed">
                    ${dynamicResult.identitySummary}
                </p>
                <p class="text-base font-light text-stone-600 leading-relaxed">
                    ${dynamicResult.approachSummary}
                </p>
            </div>
        </div>
    `;
}

// Generate Spectrum Diagram with mastery influence indicators
function generateSpectrumDiagram(spectrumPlacements, typologyPair) {
    const container = document.getElementById('spectrum-diagram');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Title section
    const titleSection = document.createElement('div');
    titleSection.className = 'flex items-center mb-16';
    titleSection.innerHTML = `
        <div class="h-px w-12 bg-stone-400 mr-4"></div>
        <h3 class="text-xl font-light text-stone-700 uppercase tracking-wider">Your Energetic Range</h3>
    `;
    container.appendChild(titleSection);
    
    // Get the complete results data to access original scores and mastery influences
    const resultsData = window.completeResults || generateCompleteResults();
    
    // Grid container for spectrums
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-12 gap-x-4 gap-y-20';
    
    // Add spectrum items
    typologySpectrums.forEach((spectrum, index) => {
        const placement = spectrumPlacements[spectrum.id] || 'balanced';
        
        // Calculate value position (5 positions across the spectrum)
        let value = 50; // Default balanced position
        let placementLabel = 'Balanced';
        let placementColor = 'green-400';
        
        switch(placement) {
            case 'strongLeft':
                value = 10; // Strongly structured position
                placementLabel = 'Strongly Structured';
                placementColor = 'blue-600';
                break;
            case 'leftLeaning':
                value = 30; // Leaning structured position
                placementLabel = 'Leaning Structured';
                placementColor = 'blue-400';
                break;
            case 'left': // legacy support
                value = 25; 
                placementLabel = 'Structured';
                placementColor = 'blue-400';
                break;
            case 'balanced':
                value = 50; // Balanced position
                placementLabel = 'Balanced';
                placementColor = 'green-400';
                break;
            case 'right': // legacy support
                value = 75;
                placementLabel = 'Fluid';
                placementColor = 'amber-400';
                break;
            case 'rightLeaning':
                value = 70; // Leaning fluid position
                placementLabel = 'Leaning Fluid';
                placementColor = 'amber-400';
                break;
            case 'strongRight':
                value = 90; // Strongly fluid position
                placementLabel = 'Strongly Fluid';
                placementColor = 'amber-600';
                break;
        }
        
        // Check if this spectrum has mastery influences
        let hasMasteryInfluence = false;
        let masteryInfluenceHTML = '';
        
        if (resultsData.masteryInfluences && 
            resultsData.masteryInfluences[spectrum.id] && 
            resultsData.masteryInfluences[spectrum.id].length > 0) {
            
            hasMasteryInfluence = true;
            
            // Get original score position (before mastery influence)
            let originalValue = 50; // Default position
            const originalScore = resultsData.originalNumericScores[spectrum.id];
            
            if (originalScore <= -2) originalValue = 10;
            else if (originalScore === -1) originalValue = 30;
            else if (originalScore === 0) originalValue = 50;
            else if (originalScore === 1) originalValue = 70;
            else if (originalScore >= 2) originalValue = 90;
            
            // Create mastery influence indicator
            masteryInfluenceHTML = `
                <!-- Original position indicator (faded) -->
                <div class="absolute top-0 w-px h-6 transform -translate-x-1/2 bg-stone-400 opacity-40" style="left: ${originalValue}%"></div>
                <div class="absolute top-6 w-2 h-2 rounded-full transform -translate-x-1/2 bg-stone-400 opacity-40" style="left: ${originalValue}%"></div>
                
                <!-- Arrow showing the shift -->
                <div class="absolute top-3 h-px bg-stone-400 opacity-40" 
                     style="left: ${Math.min(originalValue, value)}%; 
                            width: ${Math.abs(value - originalValue)}%;">
                </div>
                
                <!-- Mastery influence indicator -->
                <div class="absolute top-36 flex items-center">
                    <div class="py-1 px-2 bg-amber-50 bg-opacity-90 rounded-md text-[9px] font-light text-amber-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                        Mastery Influenced
                    </div>
                </div>
            `;
        }
        
        const isFullWidth = index === 0 || index === 3 || index === 5;
        const leftAligned = index === 1 || index === 4;
        const rightAligned = index === 2;
        
        const spectrumItem = document.createElement('div');
        spectrumItem.className = `relative ${
            isFullWidth ? 'col-span-12' : 
            leftAligned ? 'col-span-7 col-start-1' : 
            rightAligned ? 'col-span-7 col-start-6' : 'col-span-6'
        }`;
        
        // Get the appropriate description
        let descriptionKey;
        if (placement === 'strongLeft') {
            descriptionKey = `${spectrum.id}-left`;
        } else if (placement === 'leftLeaning') {
            descriptionKey = `${spectrum.id}-left`;
        } else if (placement === 'rightLeaning') {
            descriptionKey = `${spectrum.id}-right`;
        } else if (placement === 'strongRight') {
            descriptionKey = `${spectrum.id}-right`;
        } else {
            descriptionKey = `${spectrum.id}-${placement}`;
        }
        
        const descriptionText = typologyDescriptions[descriptionKey] ? 
            typologyDescriptions[descriptionKey].description : 
            "This is your natural tendency along this spectrum.";
        
        // Generate HTML for mastery influences if there are any
        let masteryInfluencesDetailsHTML = '';
        if (hasMasteryInfluence) {
            const influences = resultsData.masteryInfluences[spectrum.id];
            
            masteryInfluencesDetailsHTML = `
                <div class="mt-4 pt-3 border-t border-stone-100">
                    <div class="text-[10px] font-medium uppercase tracking-wider text-amber-700 mb-2">
                        Mastery Influences
                    </div>
                    <div class="space-y-1">
            `;
            
            // Only show up to 2 influences to avoid overwhelming the user
            influences.slice(0, 2).forEach(influence => {
                // Format the value name
                const valueName = influence.value.replace(/-/g, ' ');
                
                // Format the category name
                let categoryName;
                switch(influence.category) {
                    case 'corePriorities': categoryName = 'Core Priority'; break;
                    case 'growthAreas': categoryName = 'Growth Area'; break;
                    case 'alignmentNeeds': categoryName = 'Alignment Need'; break;
                    case 'energyPatterns': categoryName = 'Energy Pattern'; break;
                    default: categoryName = influence.category;
                }
                
                // Determine direction text
                const directionText = influence.influence > 0 ? 
                    "increased fluid tendency" : 
                    "increased structured tendency";
                
                masteryInfluencesDetailsHTML += `
                    <div class="text-[9px] font-light text-stone-600">
                        Your <span class="text-amber-700">${categoryName}</span> of 
                        <span class="text-amber-700">${valueName}</span> 
                        ${directionText}
                    </div>
                `;
            });
            
            if (influences.length > 2) {
                masteryInfluencesDetailsHTML += `
                    <div class="text-[9px] font-light text-stone-500 italic">
                        + ${influences.length - 2} more influence${influences.length - 2 > 1 ? 's' : ''}
                    </div>
                `;
            }
            
            masteryInfluencesDetailsHTML += `
                    </div>
                </div>
            `;
        }
        
        spectrumItem.innerHTML = `
            <div class="absolute -top-10 ${
                leftAligned ? 'left-0' : 
                rightAligned ? 'right-0' : 
                'left-1/2 transform -translate-x-1/2'
            } flex items-center">
                <div class="w-6 h-6 mr-2 flex items-center justify-center">
                    <span class="text-xs font-light text-stone-400">${index + 1}</span>
                </div>
                <div class="h-px w-16 bg-${placementColor}"></div>
            </div>
            
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-4 flex flex-col justify-between pr-2">
                    <div>
                        <div class="text-xs uppercase tracking-wider text-stone-400 mb-1">Spectrum</div>
                        <h4 class="text-lg font-light text-stone-700">${spectrum.name}</h4>
                    </div>
                    <div class="text-xs font-light text-stone-500 uppercase tracking-wider">
                        ${placementLabel}
                    </div>
                </div>
                
                <div class="col-span-1 flex justify-center">
                    <div class="h-full w-px bg-stone-200"></div>
                </div>
                
                <div class="col-span-7 flex flex-col">
                    <div class="mb-6 relative">
                        <div class="h-px w-full bg-stone-200"></div>
                        
                        <!-- Position markers at 10%, 30%, 50%, 70%, 90% -->
                        <div class="absolute top-0 w-px h-4 transform -translate-x-1/2 bg-stone-200 opacity-30" style="left: 10%"></div>
                        <div class="absolute top-0 w-px h-4 transform -translate-x-1/2 bg-stone-200 opacity-30" style="left: 30%"></div>
                        <div class="absolute top-0 w-px h-4 transform -translate-x-1/2 bg-stone-200 opacity-30" style="left: 50%"></div>
                        <div class="absolute top-0 w-px h-4 transform -translate-x-1/2 bg-stone-200 opacity-30" style="left: 70%"></div>
                        <div class="absolute top-0 w-px h-4 transform -translate-x-1/2 bg-stone-200 opacity-30" style="left: 90%"></div>
                        
                        ${hasMasteryInfluence ? masteryInfluenceHTML : ''}
                        
                        <!-- Position indicator for this spectrum -->
                        <div class="relative" style="margin-left: ${value}%">
                            <div class="absolute top-0 w-px h-16 transform -translate-x-1/2 bg-${placementColor}"></div>
                            <div class="absolute top-16 w-3 h-3 rounded-full transform -translate-x-1/2 bg-${placementColor}"></div>
                        </div>
                        
                        <!-- Spectrum labels -->
                        <div class="flex justify-between mt-20 text-xs tracking-wide text-stone-500">
                            <span class="ml-1">${spectrum.leftLabel}</span>
                            <span class="mr-1">${spectrum.rightLabel}</span>
                        </div>
                        
                        <!-- Position labels -->
                        <div class="flex justify-between px-3 mt-2 text-[9px] uppercase tracking-wide text-stone-400 opacity-70">
                            <span style="transform: translateX(-5px)">Strong</span>
                            <span style="transform: translateX(-3px)">Lean</span>
                            <span style="transform: translateX(0px)">Balanced</span>
                            <span style="transform: translateX(3px)">Lean</span>
                            <span style="transform: translateX(5px)">Strong</span>
                        </div>
                    </div>
                    
                    <div>
                        <p class="text-sm font-light text-stone-600 leading-relaxed">
                            ${descriptionText}
                        </p>
                        ${masteryInfluencesDetailsHTML}
                    </div>
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
        <div class="grid grid-cols-5 gap-4 w-3/4">
            <div class="flex flex-col items-center">
                <div class="w-3 h-14 bg-blue-600 mb-3"></div>
                <span class="text-[9px] font-light uppercase tracking-wider text-stone-500">Strongly<br>Structured</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-3 h-12 bg-blue-400 mb-3"></div>
                <span class="text-[9px] font-light uppercase tracking-wider text-stone-500">Leaning<br>Structured</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-3 h-8 bg-green-400 mb-3"></div>
                <span class="text-[9px] font-light uppercase tracking-wider text-stone-500">Balanced</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-3 h-12 bg-amber-400 mb-3"></div>
                <span class="text-[9px] font-light uppercase tracking-wider text-stone-500">Leaning<br>Fluid</span>
            </div>
            <div class="flex flex-col items-center">
                <div class="w-3 h-14 bg-amber-600 mb-3"></div>
                <span class="text-[9px] font-light uppercase tracking-wider text-stone-500">Strongly<br>Fluid</span>
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
    
    // Get the complete results data and dynamic content
    const resultsData = window.completeResults || generateCompleteResults();
    const dynamicResult = generateDynamicResult(resultsData.spectrumPlacements, typologyPair);
    
    container.innerHTML = '';
    
    // Strengths card
    const strengthsCard = document.createElement('div');
    strengthsCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    strengthsCard.innerHTML = `
        <h3 class="text-xl font-light text-stone-800 mb-4">Your Core Strengths</h3>
        <p class="text-base font-light text-stone-600 mb-4">${approachesData.strengths}</p>
        <div class="mt-6 pt-4 border-t border-stone-100">
            <p class="text-base font-light text-stone-600">
                ${dynamicResult.strengthSummary}
            </p>
        </div>
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
    
    // Add growth path from dynamic content
    const growthSection = document.createElement('div');
    growthSection.className = 'mt-6 pt-4 border-t border-stone-100';
    growthSection.innerHTML = `
        <h4 class="text-sm font-medium text-stone-700 mb-2">Your Growth Path</h4>
        <p class="text-base font-light text-stone-600">
            ${dynamicResult.growthSummary}
        </p>
    `;
    approachesCard.appendChild(growthSection);
    
    container.appendChild(approachesCard);
}

// Generate Misalignments section
function generateMisalignmentsSection(typologyPair) {
    const container = document.getElementById('common-misalignments');
    if (!container) return;
    
    const pairKey = typologyPair.key;
    const misalignmentsData = commonMisalignments[pairKey] || commonMisalignments['fluid-structured'];
    
    // Get the dynamic result
    const resultsData = window.completeResults || generateCompleteResults();
    const dynamicResult = generateDynamicResult(resultsData.spectrumPlacements, typologyPair);
    
    container.innerHTML = '';
    
    const misalignmentsCard = document.createElement('div');
    misalignmentsCard.className = 'bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-stone-100';
    
    const misalignmentsHeader = document.createElement('h3');
    misalignmentsHeader.className = 'text-xl font-light text-stone-800 mb-6';
    misalignmentsHeader.textContent = 'Where Tension Might Show Up';
    misalignmentsCard.appendChild(misalignmentsHeader);
    
    // Add the challenge summary from dynamic content
    const challengeSummary = document.createElement('div');
    challengeSummary.className = 'mb-6 pb-4 border-b border-stone-100';
    challengeSummary.innerHTML = `
        <p class="text-base font-light text-stone-600 leading-relaxed">
            ${dynamicResult.challengeSummary}
        </p>
    `;
    misalignmentsCard.appendChild(challengeSummary);
    
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
'creative-expression': 'You\'re here to create, to birth new things into the world that carry your fingerprint. Expression isn\'t extra, it\'s essential.',
        'financial-abundance': 'You want your life to feel full, supported, resourced, and open. Money, for you, is about spaciousness and choice.',
        'emotional-fulfillment': 'Depth matters. You're not built for surface. You want real connection, real feeling, and the emotional truth of things.',
        'personal-autonomy': 'You need room to move. Authority to choose. A path that's yours, not someone else's map.',
        'deep-relationships': 'Intimacy and belonging ground you. You thrive in connection that sees you clearly and lets you show up whole.',
        'spiritual-connection': 'You feel the pull of something larger, a bigger rhythm, a sacred thread. You move best when you're plugged into it.',
        'craft-mastery': 'You value devotion. Getting so close to your craft that it becomes an extension of your being.',
        'wealth-security': 'You want to feel safe inside your life. A sense of grounded resourcing, not just surviving, but held.',
        'emotional-peace': 'You seek inner steadiness, the kind of calm that makes space for everything without being overtaken by anything.',
        'personal-freedom': 'You're here to follow your own compass. What matters is that it's yours.',
        'deep-connection': 'You want to be seen. Felt. Known. And to offer that same presence in return.',
        'higher-meaning': 'You're not just making moves, you're making meaning. There has to be a deeper thread running through it connected to the larger whole.',
        'confidence-trust': 'You want to feel yourself as solid, that your knowing can be trusted, that your steps are enough.',
        'peace-ease': 'Ease isn't laziness to you, it's alignment. You value softness that doesn't collapse your power.',
        'choice-autonomy': 'Being able to say yes or no from a rooted place is sacred. You need to feel like you're the one driving.',
        'stability-security': 'You're not afraid of change, but you want your foundation to hold while it happens.',
        'passion-inspiration': 'You move through desire. Aliveness fuels your work, when you're inspired, everything flows better.',
        'joy-excitement': 'You're here for pleasure. You want your life to feel good, to make space for deliciousness, for fun, for full-bodied yum.'
    };
    
    const growthDescriptions = {
        'consistency-challenge': 'You're learning how to build rhythm that doesn't drain you, consistency that comes from alignment, not force.',
        'clarity-challenge': 'You're in the process of tuning in to what you really want, beneath the noise, beyond the scripts.',
        'action-challenge': 'You're learning how to move with your energy, how to take steps that feel alive instead of obligatory.',
        'intuition-challenge': 'You're building trust in your inner knowing, letting it lead, even when the path doesn't look linear.',
        'emotion-challenge': 'You're expanding your capacity to feel without being swept away, using emotion as signal, not sabotage.',
        'receiving-challenge': 'You're opening to being met, to letting what you've called in actually arrive and be received.',
        'decision-doubt': 'You're strengthening your ability to choose, to trust that your inner compass is valid and enough.',
        'action-gap': 'You can see the vision, now you're bridging the space between knowing and doing.',
        'focus-challenge': 'You're practicing how to stay with something, not through pressure, but devotion.',
        'emotional-block': 'You're untangling stories that once protected you, but now hold you back, and making space for something new.',
        'burnout-pattern': 'You're learning how to move sustainably, honoring your cycles of output, rest, and restoration.',
        'commitment-hesitation': 'You're playing with what it means to go all in, not from urgency, but from inner yes.',
        'self-trust-resistance': 'You're rebuilding the bridge between you and your knowing, letting self-trust become your default.',
        'risk-resistance': 'You're getting more comfortable in the unknown, letting desire lead, even when the outcome isn't guaranteed.',
        'emotional-expression-resistance': 'You're allowing more of your emotional truth to surface, without needing it to be tidy or justified.',
        'vision-clarity-resistance': 'You're learning to hold a vision without fearing the specificity, letting clarity feel like empowerment, not pressure.',
        'momentum-resistance': 'You're discovering how to stay in motion, not from force, but from flow that builds on itself.',
        'control-resistance': 'You're softening your grip, letting go of the need to manage every outcome, and learning to co-create with life.'
    };
    
    // Cross-Spectrum Insights Section (if available)
    if (window.generateCrossSpectrumInsights) {
        // Get the complete results data
        const resultsData = window.completeResults || generateCompleteResults();
        
        // Generate cross-spectrum insights
        const crossSpectrumInsights = document.createElement('div');
        crossSpectrumInsights.className = 'mb-8';
        crossSpectrumInsights.innerHTML = window.generateCrossSpectrumInsights(
            resultsData.spectrumPlacements, 
            resultsData.numericScores
        );
        container.appendChild(crossSpectrumInsights);
    }
    
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
            "Make more space for your intuition to speak, even if it whispers at first.",
            "Set aside analytical thinking now and then, even 10 minutes of inner listening matters.",
            "Learn to sense when structure is serving, and when it's stalling the process."
        ],
        "structured-balanced": [
            "Notice when you're defaulting to structure out of habit, not alignment.",
            "Let yourself trust the part of you that knows when to plan and when to flow.",
            "Design containers that move with you, they don't have to stay rigid to be effective."
        ],
        "structured-fluid": [
            "Let structure support your intuition, not silence it.",
            "Create simple, open systems that hold ideas without analyzing them to death.",
            "Let your creativity stretch out before you try to shape it."
        ],
        "balanced-structured": [
            "Pay attention to when structure is helpful, and when it becomes armor.",
            "Build systems that adapt as you do, structure isn't meant to trap you.",
            "Let yourself act on nudges that don't always make logical sense."
        ],
        "balanced-balanced": [
            "Don't overthink your process. Let it be messy sometimes.",
            "You don't need a perfect plan. You already have the tools, use what's here.",
            "When it's time to choose, listen to both mind and body. Then move."
        ],
        "balanced-fluid": [
            "Honor your flow, but don't fear the structure that could support it.",
            "A little bit of grounding can help your creativity land.",
            "Make space for alignment, but also make space for follow-through."
        ],
        "fluid-structured": [
            "Let structure become a bridge, not a barricade.",
            "Let your structured side serve the vision, not try to control it.",
            "Use grounding rituals when your energy starts to float too far out."
        ],
        "fluid-balanced": [
            "Keep leading with your intuition, but let the practical side catch up.",
            "Create space for the vision to flow, then anchor it.",
            "Let your balanced nature turn inspiration into something you can touch."
        ],
        "fluid-fluid": [
            "Give your energy a place to land, a little structure goes a long way.",
            "Set aside time to anchor your dreams into form.",
            "Remember: consistency doesn't kill your magic, it channels it."
        ]
    };
    
    const shifts = typeShifts[typologyKey] || typeShifts["fluid-structured"];
    
    if (growthAreas.includes('consistency-challenge')) {
        shifts.push('Create a rhythm that fits you, not one that fights you. Let your consistency be flexible, alive, something that honors your cycles while still building momentum.');
    }
    if (growthAreas.includes('clarity-challenge')) {
        shifts.push('Blend reflection with inner listening. Let clarity come in layers, not lightning bolts. You're not behind for not knowing yet, you're in conversation.');
    }
    if (growthAreas.includes('action-challenge') || growthAreas.includes('action-gap')) {
        shifts.push('Align your action style with your natural energy. Some seasons are built for bursts, others for steady build. Know your wave, then ride it.');
    }
    if (growthAreas.includes('intuition-challenge') || growthAreas.includes('self-trust-resistance')) {
        shifts.push('Practice tuning in without immediately needing proof. Your knowing is valid, let it lead sometimes, even when it's quiet.');
    }
    if (growthAreas.includes('emotion-challenge') || growthAreas.includes('emotional-block')) {
        shifts.push('Give your emotions space without needing to fix or flatten them. Feeling deeply doesn't block creation, it is part of creation.');
    }
    if (growthAreas.includes('receiving-challenge')) {
        shifts.push('Create rituals that help you open, soften, notice. Sometimes what you asked for is already arriving, just not in the costume you expected.');
    }
    if (growthAreas.includes('decision-doubt')) {
        shifts.push('Design a decision-making style that blends analysis with intuition. Let both voices speak, then choose with your whole body.');
    }
    if (growthAreas.includes('focus-challenge')) {
        shifts.push('Make containers for your attention that work with, not against, your nature. Structure doesn't have to be strict, it can be sacred.');
    }
    if (growthAreas.includes('burnout-pattern')) {
        shifts.push('Honor your ebb as much as your flow. Sustainable energy doesn't come from pushing, it comes from rhythm, rest, and return.');
    }
    if (growthAreas.includes('commitment-hesitation')) {
        shifts.push('Find ways to commit gently, piece by piece, instead of forcing yourself to leap. You can go all in without abandoning yourself.');
    }
    
    return shifts;
}

// Generate acceptance permissions
function generateAcceptancePermissions(alignmentNeeds, typologyKey) {
    const typePermissions = {
        "structured-structured": [
            "You're allowed to not know. Let uncertainty be part of the process, not something to fix.",
            "You're allowed to trust your intuition, even if it doesn't match the data.",
            "You're allowed to pivot when inspiration pulls you somewhere new."
        ],
        "structured-balanced": [
            "You're allowed to sense when it's time to loosen the plan.",
            "You're allowed to be a blend, you don't have to pick a side.",
            "You're allowed to shift your systems as you grow."
        ],
        "structured-fluid": [
            "You're allowed to want structure and still be deeply intuitive.",
            "You're allowed to design containers that bend with you.",
            "You're allowed to trust timing over timelines."
        ],
        "balanced-structured": [
            "You're allowed to change your process without calling it inconsistency.",
            "You're allowed to lean into structure when it actually serves you.",
            "You're allowed to work with both logic and feeling, they're not in conflict."
        ],
        "balanced-balanced": [
            "You're allowed to not commit to one way of being.",
            "You're allowed to integrate without choosing a single lane.",
            "You're allowed to be the bridge, the in-between is a real place."
        ],
        "balanced-fluid": [
            "You're allowed to lead with your intuition and still be supported.",
            "You're allowed to follow what lights you up without abandoning the real world.",
            "You're allowed to hold freedom and form in the same breath."
        ],
        "fluid-structured": [
            "You're allowed to trust your knowing first, logic can catch up later.",
            "You're allowed to follow intuitive hits even when they don't make 'sense.'",
            "You're allowed to move without explaining every step."
        ],
        "fluid-balanced": [
            "You're allowed to let inspiration lead and structure follow.",
            "You're allowed to hold your big vision and still build it piece by piece.",
            "You're allowed to switch gears, dream, plan, dream again."
        ],
        "fluid-fluid": [
            "You're allowed to trust your way, even if it looks nothing like theirs.",
            "You're allowed to create how you create, it doesn't have to be conventional.",
            "You're allowed to follow energy instead of plans."
        ]
    };
    
    const permissions = typePermissions[typologyKey] || typePermissions["fluid-structured"];
    
    if (alignmentNeeds.includes('accept-cycles')) {
        permissions.push('You're allowed to move in waves. Constant output is not a requirement for worth.');
    }
    if (alignmentNeeds.includes('accept-structure')) {
        permissions.push('You're allowed to build what supports you, even if it's more structure than others need.');
    }
    if (alignmentNeeds.includes('accept-emotions')) {
        permissions.push('You're allowed to feel what you feel, no fixing, just listening.');
    }
    if (alignmentNeeds.includes('accept-gradual-clarity')) {
        permissions.push('You're allowed to let clarity emerge slowly. There's no deadline on knowing.');
    }
    if (alignmentNeeds.includes('accept-intuition')) {
        permissions.push('You're allowed to follow a nudge without a logical reason.');
    }
    if (alignmentNeeds.includes('accept-flexibility')) {
        permissions.push('You're allowed to stay open, even if others need things nailed down.');
    }
    if (alignmentNeeds.includes('control-outcomes')) {
        permissions.push('You're allowed to release the "how" and trust what's coming.');
    }
    if (alignmentNeeds.includes('control-emotions')) {
        permissions.push('You're allowed to ride the full range of your feelings, they're not a flaw.');
    }
    if (alignmentNeeds.includes('control-consistency')) {
        permissions.push('You're allowed to define consistency in a way that fits your rhythm.');
    }
    if (alignmentNeeds.includes('control-clarity')) {
        permissions.push('You're allowed to explore without committing on day one.');
    }
    if (alignmentNeeds.includes('control-decisions')) {
        permissions.push('You're allowed to make choices from both wisdom and wonder.');
    }
    if (alignmentNeeds.includes('control-intuition')) {
        permissions.push('You're allowed to follow your knowing without defending it.');
    }
    
    return permissions;
}

// Generate energy support tools
function generateEnergySupportTools(alignmentNeeds, energyPatterns, typologyKey) {
    const typeTools = {
        "structured-structured": [
            "Intuition practices with structure, prompts, frameworks, things with clear edges",
            "Systems that flex in small ways without losing integrity",
            "Measurable ways to track inner growth, your version of data, not just numbers"
        ],
        "structured-balanced": [
            "Rituals that alternate between planning and play",
            "Decision-making tools that let logic and intuition collaborate",
            "Routines with soft touchpoints for creativity to slip in"
        ],
        "structured-fluid": [
            "Containers for intuition that don't box it in",
            "Practices that turn sparks of insight into something real",
            "Grounding rituals that hold your energy without muting it"
        ],
        "balanced-structured": [
            "Systems that shift with your seasons",
            "Tools that help you feel when to lean into structure or soften into flow",
            "Integration practices that hold both strategy and soul"
        ],
        "balanced-balanced": [
            "Frameworks for weaving different modalities into a whole",
            "Tools that help you feel what's needed now, not what should work",
            "Regular check-ins to make space for inner recalibration"
        ],
        "balanced-fluid": [
            "Planning systems that breathe, minimal but supportive",
            "Practices that keep you tethered while you expand",
            "Frameworks for intuitive choices that still lead to grounded outcomes"
        ],
        "fluid-structured": [
            "Let vision come first, then build the scaffolding to hold it",
            "Intuition check-ins that ground you without overriding your fire",
            "Action steps that flow from energy, not obligation"
        ],
        "fluid-balanced": [
            "Anchor points for big ideas to start taking form",
            "Loose but reliable manifestation rituals",
            "Practices that translate intuitive hits into doable steps"
        ],
        "fluid-fluid": [
            "Alignment practices that bring your energy into coherence",
            "Gentle grounding tools, just enough to help you land without pinning you down",
            "Navigation practices that help you follow the thread without losing momentum"
        ]
    };
    
    const tools = typeTools[typologyKey] || typeTools["fluid-structured"];
    
    if (energyPatterns.includes('clear-instructions')) {
        tools.push('Templates that provide just enough clarity to get you started, no pressure to follow perfectly');
    }
    if (energyPatterns.includes('intuitive-instincts')) {
        tools.push('Practices that deepen your relationship with your gut knowing, not just to hear it, but to trust it');
    }
    if (energyPatterns.includes('emotional-inspiration')) {
        tools.push('Tools that support emotional state shifts without bypassing what's real');
    }
    if (energyPatterns.includes('balanced-rhythm')) {
        tools.push('Alternating structures that mirror your inner pulse, some days need flow, others need form');
    }
    if (energyPatterns.includes('gradual-clarity')) {
        tools.push('Layered clarity practices that let the vision reveal itself over time, not all at once');
    }
    if (energyPatterns.includes('process-trust')) {
        tools.push('Rituals that help you root into divine timing, even when results feel delayed');
    }
    if (energyPatterns.includes('rigid-routines')) {
        tools.push('Turn rigid routines into flexible frameworks, it still counts if it bends');
    }
    if (energyPatterns.includes('ignored-intuition')) {
        tools.push('Reflection prompts or body practices that help you catch and honor subtle intuitive moments');
    }
    if (energyPatterns.includes('structured-productivity')) {
        tools.push('Build rituals that lead to action, but still leave space to pause and realign');
    }
    if (energyPatterns.includes('flexible-productivity')) {
        tools.push('Adaptable planning that lets inspiration dictate direction without losing track');
    }
    if (energyPatterns.includes('structured-environment')) {
        tools.push('Organize your space in a way that gives your nervous system a break, less noise, more clarity');
    }
    if (energyPatterns.includes('dynamic-environment')) {
        tools.push('Create an environment that evolves with your energy, not just once, but often');
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
window.generateDynamicResult = generateDynamicResult;
window.generateTypologyPairSection = generateTypologyPairSection;
window.generateSpectrumDiagram = generateSpectrumDiagram;
window.generateIdealApproachesSection = generateIdealApproachesSection;
window.generateMisalignmentsSection = generateMisalignmentsSection;
window.generateMasteryPrioritiesSection = generateMasteryPrioritiesSection;
window.generateStrategySection = generateStrategySection;
