// Additional fixes for mastery section

// Fix for part 2 mastery question numbers
function fixMasteryQuestionNumbers() {
  // Select all question number containers in the mastery section
  const questionNumbers = document.querySelectorAll('#mastery-questions .col-span-2 .text-right.text-3xl');
  
  questionNumbers.forEach(numberElement => {
    // Apply styling directly to ensure proper display
    numberElement.style.display = 'flex';
    numberElement.style.justifyContent = 'center';
    numberElement.style.alignItems = 'center';
    numberElement.style.width = '40px';
    numberElement.style.height = '40px';
    numberElement.style.borderRadius = '50%';
    numberElement.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
    numberElement.style.color = '#b45309';
    numberElement.style.fontSize = '1.25rem';
    numberElement.style.marginLeft = 'auto';
  });
}

// Enhanced mastery option selection
function enhanceMasteryOptionSelection() {
  // Only proceed if the original function exists
  if (!window.selectMasteryOption) return;
  
  // Store the original function
  const originalSelectMasteryOption = window.selectMasteryOption;
  
  // Replace with enhanced version
  window.selectMasteryOption = function(element, questionId, optionValue) {
    // Call the original function
    originalSelectMasteryOption(element, questionId, optionValue);
    
    // Enhanced fixing of the radio dot alignment
    const radio = element.querySelector('.rounded-full');
    if (radio) {
      // Ensure proper radio styling
      radio.style.display = 'flex';
      radio.style.alignItems = 'center';
      radio.style.justifyContent = 'center';
      radio.style.position = 'relative';
      
      // Fix the dot container
      let dot = radio.querySelector('.flex.h-full.items-center.justify-center');
      if (!dot) {
        dot = document.createElement('div');
        dot.className = 'flex h-full items-center justify-center';
        radio.appendChild(dot);
      }
      
      // Ensure proper positioning
      dot.style.display = 'flex';
      dot.style.alignItems = 'center';
      dot.style.justifyContent = 'center';
      dot.style.position = 'absolute';
      dot.style.top = '0';
      dot.style.left = '0';
      dot.style.width = '100%';
      dot.style.height = '100%';
      
      // Ensure inner dot is properly styled
      let innerDot = dot.querySelector('.rounded-full.bg-white');
      if (!innerDot) {
        innerDot = document.createElement('div');
        innerDot.className = 'h-1.5 w-1.5 rounded-full bg-white';
        dot.appendChild(innerDot);
      }
      
      // Center the inner dot
      innerDot.style.margin = 'auto';
    }
    
    // Improve text alignment
    const text = element.querySelector('.ml-4');
    if (text) {
      text.style.display = 'flex';
      text.style.alignItems = 'center';
      
      const paragraph = text.querySelector('p');
      if (paragraph) {
        paragraph.style.paddingTop = '2px';
      }
    }
  };
}

// Completely remove background color for iframe embedding
function removeBackgroundColor() {
  const elements = [
    document.body,
    ...document.querySelectorAll('.bg-stone-50'),
    ...document.querySelectorAll('.introduction-section'),
    ...document.querySelectorAll('.assessment-section')
  ];
  
  elements.forEach(el => {
    if (el) el.style.backgroundColor = 'transparent';
  });
  
  // Make sure all content containers are also transparent
  const contentContainers = document.querySelectorAll('.relative.z-20.w-full.max-w-4xl.mx-auto.p-6');
  contentContainers.forEach(container => {
    if (container) container.style.backgroundColor = 'transparent';
  });
}

// Enhance the one-question-at-a-time display
function enhanceQuestionDisplay() {
  const questions = document.querySelectorAll('#mastery-questions .question-container');
  if (!questions.length) return;
  
  // Apply animation class to the active question
  questions.forEach(question => {
    if (question.classList.contains('active')) {
      question.style.animation = 'fadeIn 0.3s ease-out';
    }
  });
}

// Apply all mastery section fixes
function applyMasterySectionFixes() {
  fixMasteryQuestionNumbers();
  enhanceMasteryOptionSelection();
  removeBackgroundColor();
  enhanceQuestionDisplay();
  
  console.log("Applied additional mastery section fixes");
}

// Apply fixes when document is loaded
document.addEventListener('DOMContentLoaded', applyMasterySectionFixes);

// Also apply fixes when navigating between sections
if (window.nextSection) {
  const originalNextSection = window.nextSection;
  window.nextSection = function() {
    originalNextSection();
    // Apply fixes after section changes
    setTimeout(applyMasterySectionFixes, 100);
  };
}

if (window.prevSection) {
  const originalPrevSection = window.prevSection;
  window.prevSection = function() {
    originalPrevSection();
    // Apply fixes after section changes
    setTimeout(applyMasterySectionFixes, 100);
  };
}

// Also apply fixes when Part 2 is shown
if (window.showPart2) {
  const originalShowPart2 = window.showPart2;
  window.showPart2 = function() {
    originalShowPart2();
    // Apply fixes after Part 2 is shown
    setTimeout(applyMasterySectionFixes, 100);
  };
}

// Execute immediately if Part 2 is already visible
if (document.getElementById('part2-section') && 
    document.getElementById('part2-section').style.display !== 'none') {
  applyMasterySectionFixes();
}
