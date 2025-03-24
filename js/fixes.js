// Fix for overlapping progress indicator text and selection tracking issue
document.addEventListener('DOMContentLoaded', function() {
  // ===== FIX 1: Progress indicator text overlap =====
  // Fix the spacing between progress indicator text and visual elements
  function fixProgressIndicatorSpacing() {
    // Target the progress indicator text container in Part 2
    const progressLabels = document.querySelector('#part2-section .mb-12 .flex.justify-between.text-xs.uppercase.tracking-wider.text-stone-500');
    
    if (progressLabels) {
      // Increase margin bottom to prevent overlap
      progressLabels.style.marginBottom = '1.5rem';
      
      // Add more space below the progress bar
      const progressBar = progressLabels.nextElementSibling;
      if (progressBar) {
        progressBar.style.marginBottom = '2rem';
      }
    }
  }
  
  // ===== FIX 2: Answer selection tracking issue =====
  // Fix the issue with Next Question button not recognizing selected answers
  function fixAnswerSelectionTracking() {
    // Replace the selectMasteryOption function to properly track selections
    if (window.selectMasteryOption) {
      const originalSelectMasteryOption = window.selectMasteryOption;
      
      window.selectMasteryOption = function(element, questionId, optionValue) {
        // Initialize userResponses object if it doesn't exist
        if (!window.userResponses) {
          window.userResponses = { typology: {}, mastery: {} };
        }
        
        // Initialize mastery object if it doesn't exist
        if (!window.userResponses.mastery) {
          window.userResponses.mastery = {};
        }
        
        // Ensure the response is properly stored
        window.userResponses.mastery[questionId] = optionValue;
        
        // Now call the original function to handle UI updates
        originalSelectMasteryOption(element, questionId, optionValue);
        
        // Log the selection to verify it's being tracked (for debugging)
        console.log(`Question ${questionId} answered with: ${optionValue}`);
        console.log('Current userResponses:', window.userResponses);
      };
    }
    
    // Fix Next Question button handler
    const nextQuestionBtn = document.getElementById('next-question-btn');
    if (nextQuestionBtn) {
      // Replace the original click handler
      const originalOnClick = nextQuestionBtn.onclick;
      
      nextQuestionBtn.onclick = function(event) {
        if (originalOnClick) {
          // Before calling the original handler, ensure we have the current mastery responses
          const activeQuestion = document.querySelector('#mastery-questions .question-container.active');
          
          if (activeQuestion) {
            const questionId = activeQuestion.dataset.questionId;
            
            // Check if there's a selected option within this question
            const selectedOption = activeQuestion.querySelector('.bg-amber-50.border-l-2.border-amber-400');
            
            if (selectedOption && selectedOption.dataset.optionValue) {
              // Double-check that the selection is in userResponses
              if (!window.userResponses) {
                window.userResponses = { typology: {}, mastery: {} };
              }
              if (!window.userResponses.mastery) {
                window.userResponses.mastery = {};
              }
              
              // Ensure the response is stored
              window.userResponses.mastery[questionId] = selectedOption.dataset.optionValue;
              console.log(`Confirming question ${questionId} is answered with: ${selectedOption.dataset.optionValue}`);
            }
          }
          
          // Now call the original handler
          originalOnClick.call(this, event);
        }
      };
    }
  }
  
  // Apply both fixes
  setTimeout(function() {
    fixProgressIndicatorSpacing();
    fixAnswerSelectionTracking();
    
    // Add extra logging to debug the issue
    console.log("Fixes applied - UI spacing and answer tracking should now work correctly");
  }, 500);
});

// Additional fix for question navigation
function patchQuestionNavigation() {
  // This function will be called when the "Next Question" button is clicked
  function handleNextQuestion() {
    const activeQuestion = document.querySelector('#mastery-questions .question-container.active');
    if (!activeQuestion) return;
    
    const questionId = activeQuestion.dataset.questionId;
    const selectedOption = activeQuestion.querySelector('.bg-amber-50.border-l-2.border-amber-400');
    
    // If an option is selected, record it and proceed
    if (selectedOption && selectedOption.dataset.optionValue) {
      // Ensure userResponses exists
      if (!window.userResponses) window.userResponses = { typology: {}, mastery: {} };
      if (!window.userResponses.mastery) window.userResponses.mastery = {};
      
      // Record the selection
      window.userResponses.mastery[questionId] = selectedOption.dataset.optionValue;
      
      // Find the next question
      const questions = document.querySelectorAll('#mastery-questions .question-container');
      let currentIndex = Array.from(questions).findIndex(q => q.classList.contains('active'));
      
      if (currentIndex < questions.length - 1) {
        // Hide current question
        activeQuestion.style.display = 'none';
        activeQuestion.classList.remove('active');
        
        // Show next question
        const nextQuestion = questions[currentIndex + 1];
        nextQuestion.style.display = 'block';
        nextQuestion.classList.add('active');
        
        // Update question counter
        const counter = document.getElementById('current-question');
        if (counter) counter.textContent = currentIndex + 2;
        
        // Show/hide navigation buttons as needed
        const prevBtn = document.getElementById('prev-question-btn');
        const nextBtn = document.getElementById('next-question-btn');
        const nextSectionBtn = document.getElementById('next-section-btn');
        
        if (prevBtn) prevBtn.style.display = 'flex';
        
        if (currentIndex + 1 === questions.length - 1) {
          if (nextBtn) nextBtn.style.display = 'none';
          if (nextSectionBtn) nextSectionBtn.style.display = 'flex';
        }
      }
    } else {
      alert('Please answer the current question before proceeding.');
    }
  }

  // Wait for DOM to be ready
  window.addEventListener('load', function() {
    // Replace the Next Question button click handler
    const nextQuestionBtn = document.getElementById('next-question-btn');
    if (nextQuestionBtn) {
      nextQuestionBtn.onclick = handleNextQuestion;
    }
    
    // Create a MutationObserver to watch for dynamically added Next Question button
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];
            if (node.id === 'next-question-btn') {
              node.onclick = handleNextQuestion;
              break;
            }
          }
        }
      });
    });
    
    // Observe the container where the button might be added
    const navFooter = document.querySelector('#part2-section .mt-16.pt-6.border-t.border-stone-200 .flex.items-center.justify-between');
    if (navFooter) {
      observer.observe(navFooter, { childList: true, subtree: true });
    }
  });
}

// Call the additional fix
patchQuestionNavigation();
