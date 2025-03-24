// Fix for Part 2 Mastery section to show one question at a time
function enhanceMasterySection() {
  // Get questions container
  const questionsContainer = document.getElementById('mastery-questions');
  if (!questionsContainer) return;
  
  // Get all question containers
  const questions = questionsContainer.querySelectorAll('.question-container');
  if (questions.length === 0) return;
  
  // Track current question index
  let currentQuestionIndex = 0;
  
  // Function to show only the current question
  function showCurrentQuestion() {
    questions.forEach((question, index) => {
      if (index === currentQuestionIndex) {
        question.classList.add('active');
      } else {
        question.classList.remove('active');
      }
    });
    
    // Update question counter
    const questionCounter = document.querySelector('#part2-section .text-xs.font-light.text-stone-500');
    if (questionCounter) {
      const sectionIndex = parseInt(document.getElementById('current-section').textContent) || 1;
      const totalSections = parseInt(document.getElementById('total-sections').textContent) || 3;
      
      questionCounter.innerHTML = `
        Question <span id="current-question">${currentQuestionIndex + 1}</span> of 
        <span id="total-questions">${questions.length}</span> • Section ${sectionIndex} of ${totalSections}
      `;
    }
    
    // Show/hide navigation buttons based on question index
    updateNavigationButtons();
  }
  
  // Handle next question button
  const nextBtn = document.getElementById('next-question-btn');
  if (!nextBtn) {
    // Create next question button if it doesn't exist
    const nextBtn = document.createElement('button');
    nextBtn.id = 'next-question-btn';
    nextBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest text-stone-700';
    nextBtn.innerHTML = `
      Next Question
      <span class="ml-4 h-px w-8 bg-stone-500 group-hover:w-12"></span>
    `;
    
    // Insert before next section button
    const nextSectionBtn = document.getElementById('next-section-btn');
    if (nextSectionBtn && nextSectionBtn.parentNode) {
      nextSectionBtn.style.display = 'none'; // Hide next section button initially
      nextSectionBtn.parentNode.insertBefore(nextBtn, nextSectionBtn);
    }
    
    // Add click handler
    nextBtn.addEventListener('click', () => {
      // Check if current question is answered
      const currentQuestion = questions[currentQuestionIndex];
      const questionId = currentQuestion.dataset.questionId;
      
      if (!userResponses.mastery || !userResponses.mastery[questionId]) {
        alert('Please answer the current question before proceeding.');
        return;
      }
      
      // Go to next question
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showCurrentQuestion();
      }
    });
  }
  
  // Handle prev question button
  const prevQuestionBtn = document.getElementById('prev-question-btn');
  if (!prevQuestionBtn) {
    // Create prev question button if it doesn't exist
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prev-question-btn';
    prevBtn.className = 'group flex items-center text-xs font-medium uppercase tracking-widest text-stone-400 transition-all hover:text-stone-700';
    prevBtn.innerHTML = `
      <span class="mr-4 h-px w-8 bg-stone-300 transition-all group-hover:w-12 group-hover:bg-stone-500"></span>
      Previous Question
    `;
    
    // Insert before previous section button
    const prevSectionBtn = document.getElementById('prev-section-btn');
    if (prevSectionBtn && prevSectionBtn.parentNode) {
      prevBtn.style.display = 'none'; // Hide prev question button initially
      prevSectionBtn.parentNode.insertBefore(prevBtn, prevSectionBtn);
    }
    
    // Add click handler
    prevBtn.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();
      }
    });
  }
  
  // Function to update navigation buttons
  function updateNavigationButtons() {
    const nextBtn = document.getElementById('next-question-btn');
    const prevBtn = document.getElementById('prev-question-btn');
    const nextSectionBtn = document.getElementById('next-section-btn');
    
    if (prevBtn) {
      prevBtn.style.display = currentQuestionIndex > 0 ? 'flex' : 'none';
    }
    
    if (nextBtn && nextSectionBtn) {
      if (currentQuestionIndex < questions.length - 1) {
        nextBtn.style.display = 'flex';
        nextSectionBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'none';
        nextSectionBtn.style.display = 'flex';
      }
    }
    
    // Disable/enable next section button based on completion
    if (nextSectionBtn) {
      // Check if all questions are answered
      const allAnswered = Array.from(questions).every(question => {
        const questionId = question.dataset.questionId;
        return userResponses.mastery && userResponses.mastery[questionId];
      });
      
      if (allAnswered) {
        nextSectionBtn.classList.remove('text-stone-400', 'cursor-not-allowed');
        nextSectionBtn.classList.add('text-stone-700');
      } else {
        nextSectionBtn.classList.add('text-stone-400', 'cursor-not-allowed');
        nextSectionBtn.classList.remove('text-stone-700');
      }
    }
  }
  
  // Initialize: show first question
  showCurrentQuestion();
  
  // Override the section navigation to reset question index
  const originalNextSection = window.nextSection;
  const originalPrevSection = window.prevSection;
  
  window.nextSection = function() {
    // Reset question index when going to next section
    currentQuestionIndex = 0;
    originalNextSection();
    // Reset the display after new questions are loaded
    setTimeout(() => {
      showCurrentQuestion();
    }, 100);
  };
  
  window.prevSection = function() {
    // Reset question index when going to previous section
    currentQuestionIndex = 0;
    originalPrevSection();
    // Reset the display after new questions are loaded
    setTimeout(() => {
      showCurrentQuestion();
    }, 100);
  };
}

// Fix the floating dust animation
function enhanceBackgroundAnimation() {
  // Get all canvases
  const canvases = document.querySelectorAll('.background-canvas');
  
  canvases.forEach(canvas => {
    if (!canvas || !canvas.getContext) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const connectionThreshold = 160;
    
    // Create more particles for a better effect
    for (let i = 0; i < 18; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.6 - 0.3,
        vy: Math.random() * 0.6 - 0.3,
        color: i % 3 === 0 ? '#f0e6d2' : 
               i % 3 === 1 ? '#e2d8c6' : '#d5cfc0'
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(180, 170, 160, 0.03)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionThreshold) {
            const opacity = 1 - (distance / connectionThreshold);
            ctx.strokeStyle = `rgba(180, 170, 160, ${opacity * 0.04})`;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    animate();
  });
}

// Fix selection dot alignment in Part 2 Mastery section
function fixSelectionDotAlignment() {
  // Enhance the selectMasteryOption function
  if (window.selectMasteryOption) {
    const originalSelectMasteryOption = window.selectMasteryOption;
    
    window.selectMasteryOption = function(element, questionId, optionValue) {
      // Call the original function
      originalSelectMasteryOption(element, questionId, optionValue);
      
      // Fix the dot alignment for the selected option
      const radio = element.querySelector('.rounded-full');
      if (radio) {
        // Ensure the dot container is centered
        let dot = radio.querySelector('.flex.h-full.items-center.justify-center');
        if (!dot) {
          dot = document.createElement('div');
          dot.className = 'flex h-full items-center justify-center';
          radio.appendChild(dot);
        }
        
        // Ensure the inner dot is centered
        let innerDot = dot.querySelector('.rounded-full.bg-white');
        if (!innerDot) {
          innerDot = document.createElement('div');
          innerDot.className = 'h-1.5 w-1.5 rounded-full bg-white';
          dot.appendChild(innerDot);
        }
        
        // Apply CSS to ensure centering
        dot.style.display = 'flex';
        dot.style.alignItems = 'center';
        dot.style.justifyContent = 'center';
        dot.style.width = '100%';
        dot.style.height = '100%';
      }
    };
  }
}

// Fix alignment issues in spectrum diagram
function fixSpectrumDiagramAlignment() {
  // Fix for spectrum indicators in results page
  const spectrumDiagram = document.getElementById('spectrum-diagram');
  if (!spectrumDiagram) return;
  
  // Get all spectrum items
  const spectrumItems = spectrumDiagram.querySelectorAll('.relative[style*="margin-left"]');
  
  spectrumItems.forEach(item => {
    // Find and adjust the indicator line
    const indicatorLine = item.querySelector('.absolute.top-0.w-px');
    if (indicatorLine) {
      indicatorLine.style.height = '12px';
      indicatorLine.style.transform = 'translateX(-50%)';
    }
    
    // Find and adjust the indicator dot
    const indicatorDot = item.querySelector('.absolute.top-16');
    if (indicatorDot) {
      indicatorDot.style.top = '12px';
      indicatorDot.style.width = '8px';
      indicatorDot.style.height = '8px';
      indicatorDot.style.transform = 'translateX(-50%)';
    }
  });
  
  // Add more space between indicator and text
  const descriptionTexts = spectrumDiagram.querySelectorAll('.text-sm.font-light.text-stone-600');
  descriptionTexts.forEach(text => {
    text.style.marginTop = '12px';
  });
}

// Enhance approaches and misalignments alignment
function fixApproachesAlignment() {
  // Fix alignment of approach numbers and text
  const approachItems = document.querySelectorAll('.approach-item, .flex.items-start');
  
  approachItems.forEach(item => {
    const number = item.querySelector('.w-6.h-6.rounded-full');
    if (number) {
      number.style.display = 'flex';
      number.style.alignItems = 'center';
      number.style.justifyContent = 'center';
      number.style.minWidth = '24px';
      number.style.textAlign = 'center';
    }
    
    const text = item.querySelector('.ml-4');
    if (text) {
      text.style.display = 'flex';
      text.style.alignItems = 'center';
      text.style.paddingTop = '3px';
    }
  });
}

// Main enhancement function to apply all fixes
function enhanceRealityCreationAssessment() {
  // Apply background fixes
  enhanceBackgroundAnimation();
  
  // Fix mastery section to show one question at a time
  enhanceMasterySection();
  
  // Fix selection dot alignment
  fixSelectionDotAlignment();
  
  // Fix spectrum diagram alignment
  setTimeout(fixSpectrumDiagramAlignment, 500);
  
  // Fix approaches and misalignments alignment
  setTimeout(fixApproachesAlignment, 500);
  
  console.log("Reality Creation Assessment enhancements applied");
}

// Apply fixes when document is ready
document.addEventListener('DOMContentLoaded', enhanceRealityCreationAssessment);

// Also apply fixes when results are shown
if (window.showResults) {
  const originalShowResults = window.showResults;
  window.showResults = function() {
    originalShowResults();
    setTimeout(() => {
      fixSpectrumDiagramAlignment();
      fixApproachesAlignment();
    }, 500);
  };
}
