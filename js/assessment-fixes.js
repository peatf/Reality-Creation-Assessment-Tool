/**
 * Comprehensive Fix for Reality Creation Assessment
 * 
 * This script addresses multiple issues:
 * 1. Progress indicator text overlap in Part 2
 * 2. Question selection tracking in mastery section
 * 3. Section navigation between Core Priorities, Growth Areas, and Alignment Needs
 * 4. Missing questions when advancing to new sections
 * 5. Error with current-section element being null
 * 
 * Simply add this script at the end of your index.html file before the closing </body> tag
 */

(function() {
  // Run when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Fix for the section navigation and missing questions issue
    const fixAssessmentNavigation = function() {
      console.log("Applying comprehensive fixes to assessment...");
      
      // ----- FIX 1: PROGRESS INDICATOR SPACING -----
      const fixProgressSpacing = function() {
        // Create a style element to add our CSS fixes
        const style = document.createElement('style');
        style.textContent = `
          /* Fix for progress indicator spacing */
          #part2-section .mb-12 {
            margin-bottom: 4rem !important;
          }
          #part2-section .mb-12 .flex.justify-between.text-xs.uppercase.tracking-wider.text-stone-500 {
            margin-bottom: 1.5rem !important;
          }
          #part2-section .mb-12 .h-0\\.5.w-full.bg-stone-200 {
            position: relative;
            margin-bottom: 2rem !important;
          }
          
          /* Make sure mastery questions display properly */
          #mastery-questions .question-container.active {
            display: block !important;
          }
          
          /* Fix sections */
          #part2-section #section-title, 
          #part2-section #section-description, 
          #part2-section #section-number {
            transition: all 0.3s ease-in-out;
          }
        `;
        document.head.appendChild(style);
        console.log("Applied progress spacing fixes");
      };
      
      // ----- FIX 2: SECTION NAVIGATION SYSTEM -----
      const fixSectionNavigation = function() {
        // Ensure userResponses exists globally
        if (typeof window.userResponses === 'undefined') {
          window.userResponses = {
            typology: {},
            mastery: {}
          };
        }
        
        // Global variables to track sections
        window.currentSectionIndex = 0;
        
        // Master data: this recreates the key data structures if they're missing
        if (typeof window.masterySections === 'undefined') {
          window.masterySections = [
            {
              id: 'core-priorities',
              title: 'Core Priorities & Values',
              description: 'These questions help identify your deep values and non-negotiable priorities in the manifestation process.',
              progress: 25
            },
            {
              id: 'growth-areas',
              title: 'Growth & Permission Areas',
              description: 'These questions help diagnose your current growth areas and friction points in your manifestation process.',
              progress: 50
            },
            {
              id: 'alignment-needs',
              title: 'Acceptance & Alignment Needs',
              description: 'These questions help pinpoint areas requiring acceptance or alignment adjustments in your manifestation process.',
              progress: 75
            },
            {
              id: 'energy-patterns',
              title: 'Natural Energy Patterns',
              description: 'These questions help uncover your hidden energetic preferences and needs for optimal manifestation.',
              progress: 100
            }
          ];
        }
        
        // ----- IMPROVE SECTION NAVIGATION -----
        // Completely redefine nextSection and prevSection functions
        window.nextSection = function() {
          // Get current section's mastery questions
          const currentSection = window.masterySections[window.currentSectionIndex];
          let allAnswered = true;
          
          // Check if all questions in the current section are answered
          const masteryQuestions = document.getElementById('mastery-questions');
          const questionContainers = masteryQuestions.querySelectorAll('.question-container');
          
          questionContainers.forEach(question => {
            const questionId = question.dataset.questionId;
            if (questionId && questionId.startsWith(currentSection.id.split('-')[0])) {
              if (!window.userResponses.mastery[questionId]) {
                allAnswered = false;
              }
            }
          });
          
          if (!allAnswered) {
            alert(`Please answer all questions in this section before continuing.`);
            return;
          }
          
          // Move to next section if not at the end
          if (window.currentSectionIndex < window.masterySections.length - 1) {
            window.currentSectionIndex++;
            console.log(`Moving to section ${window.currentSectionIndex}`);
            window.generateMasteryQuestions();
            updateNavigationUI();
          }
        };
        
        window.prevSection = function() {
          if (window.currentSectionIndex > 0) {
            window.currentSectionIndex--;
            console.log(`Moving back to section ${window.currentSectionIndex}`);
            window.generateMasteryQuestions();
            updateNavigationUI();
          }
        };
        
        // Enhance the question selection function
        const enhanceQuestionSelection = function() {
          if (typeof window.selectMasteryOption === 'function') {
            const originalSelectMasteryOption = window.selectMasteryOption;
            
            window.selectMasteryOption = function(element, questionId, optionValue) {
              console.log(`Selection registered: ${questionId} = ${optionValue}`);
              
              // Ensure the mastery object exists
              if (!window.userResponses.mastery) {
                window.userResponses.mastery = {};
              }
              
              // Store the response
              window.userResponses.mastery[questionId] = optionValue;
              
              // Call the original function for UI updates
              originalSelectMasteryOption(element, questionId, optionValue);
              
              // Update navigation button states
              updateNavigationUI();
            };
          }
        };
        
        // ----- IMPROVE QUESTION GENERATION -----
        // If the generateMasteryQuestions function exists, enhance it
        if (typeof window.generateMasteryQuestions === 'function') {
          const originalGenerateMasteryQuestions = window.generateMasteryQuestions;
          
          window.generateMasteryQuestions = function() {
            // First, call the original function to generate the basic structure
            originalGenerateMasteryQuestions();
            
            // Then, enhance the section header with the correct information
            updateSectionHeader();
            
            // Make sure the right questions are visible
            ensureCorrectQuestionsVisible();
            
            console.log(`Generated questions for section ${window.currentSectionIndex}`);
          };
        }
        
        // ----- HELPER FUNCTIONS -----
        // Update section header with current section information
        function updateSectionHeader() {
          const section = window.masterySections[window.currentSectionIndex];
          
          // Get all the header elements
          const titleElement = document.getElementById('section-title');
          const descElement = document.getElementById('section-description');
          const numberElement = document.getElementById('section-number');
          const currentSectionElement = document.getElementById('current-section');
          const totalSectionsElement = document.getElementById('total-sections');
          
          // Safely update each element if it exists
          if (titleElement) titleElement.textContent = section.title;
          if (descElement) descElement.textContent = section.description;
          if (numberElement) numberElement.textContent = window.currentSectionIndex + 1;
          
          // Update section counter
          if (currentSectionElement) currentSectionElement.textContent = window.currentSectionIndex + 1;
          if (totalSectionsElement) totalSectionsElement.textContent = window.masterySections.length;
          
          // Update progress bar
          const progressFill = document.getElementById('progress-fill-part2');
          if (progressFill) {
            progressFill.style.width = `${section.progress}%`;
          }
          
          // Update bottom progress indicators
          const progressDots = document.querySelectorAll('#part2-section .absolute.bottom-6 .flex.items-center.space-x-6 .h-3.w-px');
          if (progressDots && progressDots.length > 0) {
            progressDots.forEach((dot, index) => {
              if (index === window.currentSectionIndex) {
                dot.className = 'h-3 w-px bg-amber-400';
              } else {
                dot.className = 'h-3 w-px bg-stone-300';
              }
            });
          }
        }
        
        // Make sure the correct questions are visible for the current section
        function ensureCorrectQuestionsVisible() {
          const section = window.masterySections[window.currentSectionIndex];
          const sectionPrefix = section.id.split('-')[0]; // 'core', 'growth', etc.
          
          // Get all question containers
          const questionsContainer = document.getElementById('mastery-questions');
          if (!questionsContainer) return;
          
          const allQuestions = questionsContainer.querySelectorAll('.question-container');
          
          // Find questions for current section
          let sectionQuestions = [];
          allQuestions.forEach(question => {
            const questionId = question.dataset.questionId;
            if (questionId && questionId.startsWith(sectionPrefix)) {
              sectionQuestions.push(question);
              
              // Make sure this question is visible (no display:none)
              question.style.display = 'block';
              question.classList.add('active');
            } else {
              // Hide questions from other sections
              question.style.display = 'none';
              question.classList.remove('active');
            }
          });
          
          console.log(`Found ${sectionQuestions.length} questions for section ${sectionPrefix}`);
          
          // If no questions for this section, they may need to be generated
          if (sectionQuestions.length === 0) {
            console.warn(`No questions found for section ${sectionPrefix}. Attempting to fix...`);
            regenerateQuestionsForSection(section);
          }
        }
        
        // Update UI state of navigation buttons
        function updateNavigationUI() {
          const prevSectionBtn = document.getElementById('prev-section-btn');
          const nextSectionBtn = document.getElementById('next-section-btn');
          const submitBtn = document.getElementById('submit-assessment');
          const part2PrevBtn = document.getElementById('part2-prev');
          
          // Previous section button visibility
          if (window.currentSectionIndex === 0) {
            if (prevSectionBtn) prevSectionBtn.style.display = 'none';
            if (part2PrevBtn) part2PrevBtn.style.display = 'flex';
          } else {
            if (prevSectionBtn) prevSectionBtn.style.display = 'flex';
            if (part2PrevBtn) part2PrevBtn.style.display = 'none';
          }
          
          // Next section/submit button visibility
          if (window.currentSectionIndex === window.masterySections.length - 1) {
            if (nextSectionBtn) nextSectionBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'flex';
          } else {
            if (nextSectionBtn) nextSectionBtn.style.display = 'flex';
            if (submitBtn) submitBtn.style.display = 'none';
          }
        }
        
        // In case questions are missing for a section, try to regenerate them
        function regenerateQuestionsForSection(section) {
          const questionsContainer = document.getElementById('mastery-questions');
          if (!questionsContainer) return;
          
          // This is a fallback generator for questions if they're missing
          console.log(`Attempting to regenerate questions for ${section.id}`);
          
          // This is just a basic template to ensure something shows up
          // You should replace this with the actual question data for your sections
          let sectionQuestions = [];
          
          if (section.id === 'core-priorities') {
            sectionQuestions = [
              {
                id: "core-q1",
                text: "When it comes to crafting a life, what is the one area that you refuse to negotiate on?",
                options: [
                  { id: "core-q1-a", text: "Creative expression and authenticity", value: "creative-expression" },
                  { id: "core-q1-b", text: "Financial abundance and security", value: "financial-abundance" },
                  { id: "core-q1-c", text: "Emotional fulfillment and well-being", value: "emotional-fulfillment" }
                ]
              }
            ];
          } else if (section.id === 'growth-areas') {
            sectionQuestions = [
              {
                id: "growth-q1",
                text: "Where do you often find friction or frustration in your manifestation journey?",
                options: [
                  { id: "growth-q1-a", text: "Staying consistent long-term", value: "consistency-challenge" },
                  { id: "growth-q1-b", text: "Getting clear about what I truly want", value: "clarity-challenge" },
                  { id: "growth-q1-c", text: "Taking inspired action consistently", value: "action-challenge" }
                ]
              }
            ];
          } else if (section.id === 'alignment-needs') {
            sectionQuestions = [
              {
                id: "alignment-q1",
                text: "Which of the following feels most relieving to accept about yourself?",
                options: [
                  { id: "alignment-q1-a", text: "I naturally move in cycles; my momentum comes in waves", value: "accept-cycles" },
                  { id: "alignment-q1-b", text: "I thrive best with structure, not constant spontaneity", value: "accept-structure" },
                  { id: "alignment-q1-c", text: "My emotions deeply influence my outcomes, and that's okay", value: "accept-emotions" }
                ]
              }
            ];
          } else if (section.id === 'energy-patterns') {
            sectionQuestions = [
              {
                id: "energy-q1",
                text: "When you naturally succeed at something, it's usually because you:",
                options: [
                  { id: "energy-q1-a", text: "Had clear, step-by-step instructions", value: "clear-instructions" },
                  { id: "energy-q1-b", text: "Followed your intuitive instincts", value: "intuitive-instincts" },
                  { id: "energy-q1-c", text: "Felt emotionally inspired by the task", value: "emotional-inspiration" }
                ]
              }
            ];
          }
          
          // Generate HTML for these questions
          sectionQuestions.forEach((question, index) => {
            const questionContainer = document.createElement('div');
            questionContainer.className = 'question-container active';
            questionContainer.dataset.questionId = question.id;
            questionContainer.style.display = 'block';
            
            // Create basic question layout
            questionContainer.innerHTML = `
              <div class="grid grid-cols-12 gap-4 mb-8">
                <div class="col-span-2">
                  <div class="text-xs font-medium uppercase tracking-widest text-stone-500 mb-1">Question</div>
                  <div class="text-right text-3xl font-light text-stone-800">${index + 1}</div>
                </div>
                <div class="col-span-10">
                  <p class="text-xl font-light leading-relaxed text-stone-700">${question.text}</p>
                </div>
              </div>
              <div class="ml-12 space-y-4">
                ${question.options.map(option => `
                  <div class="group relative flex cursor-pointer items-start p-5 rounded-lg transition-all duration-300 border-l-2 border-transparent hover:bg-white hover:shadow-sm"
                       data-option-id="${option.id}" 
                       data-option-value="${option.value}"
                       onclick="selectMasteryOption(this, '${question.id}', '${option.value}')">
                    <div class="mt-1 h-4 w-4 shrink-0 rounded-full border transition-all duration-300 border-stone-300 group-hover:border-amber-300"></div>
                    <div class="ml-4">
                      <p class="text-base font-light text-stone-600 group-hover:text-stone-700">${option.text}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            `;
            
            questionsContainer.appendChild(questionContainer);
          });
          
          console.log(`Generated ${sectionQuestions.length} fallback questions for ${section.id}`);
        }
        
        // Apply all our section navigation enhancements
        enhanceQuestionSelection();
        updateSectionHeader();
        updateNavigationUI();
        
        // Fix the navigation button event listeners
        const nextSectionBtn = document.getElementById('next-section-btn');
        if (nextSectionBtn) {
          // Remove any existing listeners by cloning and replacing
          const newNextBtn = nextSectionBtn.cloneNode(true);
          nextSectionBtn.parentNode.replaceChild(newNextBtn, nextSectionBtn);
          newNextBtn.addEventListener('click', window.nextSection);
        }
        
        const prevSectionBtn = document.getElementById('prev-section-btn');
        if (prevSectionBtn) {
          const newPrevBtn = prevSectionBtn.cloneNode(true);
          prevSectionBtn.parentNode.replaceChild(newPrevBtn, prevSectionBtn);
          newPrevBtn.addEventListener('click', window.prevSection);
        }
        
        console.log("Fixed section navigation and question display");
      };
      
      // Apply all our fixes
      fixProgressSpacing();
      fixSectionNavigation();
      
      // Ensure the correct questions are initially visible
      setTimeout(() => {
        const masteryQuestions = document.getElementById('mastery-questions');
        if (masteryQuestions) {
          const section = window.masterySections[window.currentSectionIndex];
          const sectionPrefix = section ? section.id.split('-')[0] : 'core';
          
          const visibleQuestions = Array.from(masteryQuestions.querySelectorAll('.question-container'))
            .filter(q => q.style.display !== 'none' && 
                         q.dataset.questionId && 
                         q.dataset.questionId.startsWith(sectionPrefix));
          
          console.log(`Initially visible questions for ${sectionPrefix}: ${visibleQuestions.length}`);
          
          if (visibleQuestions.length === 0) {
            console.log("No visible questions initially - forcing question generation");
            if (typeof window.generateMasteryQuestions === 'function') {
              window.generateMasteryQuestions();
            }
          }
        }
      }, 500);
    };
    
    // Apply fixes when part2-section is displayed
    function checkAndApplyFixes() {
      const part2Section = document.getElementById('part2-section');
      if (part2Section && part2Section.style.display !== 'none') {
        console.log("Part 2 is visible - applying fixes");
        fixAssessmentNavigation();
      }
    }
    
    // Multiple hooks to ensure our fixes are applied at the right time
    
    // 1. Check immediately on load
    checkAndApplyFixes();
    
    // 2. Listen for clicks on buttons that navigate to Part 2
    document.addEventListener('click', function(event) {
      if (event.target && (
          event.target.id === 'part1-next' ||
          event.target.closest('#part1-next') ||
          event.target.id === 'next-spectrum')) {
        setTimeout(checkAndApplyFixes, 200);
      }
    });
    
    // 3. Use MutationObserver to detect when Part 2 becomes visible
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.target.id === 'part2-section' && 
            mutation.attributeName === 'style' &&
            mutation.target.style.display !== 'none') {
          fixAssessmentNavigation();
        }
      });
    });
    
    const part2Section = document.getElementById('part2-section');
    if (part2Section) {
      observer.observe(part2Section, { attributes: true });
    }
    
    console.log("Comprehensive assessment fixes initialization complete");
  });
})();
