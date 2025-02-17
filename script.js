//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');
  const progressLine = document.querySelector('.progress-line');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');
  
  let currentStep = 0;

  // Function to update the progress
  function updateProgress() {
    // Update circles' active state
    circles.forEach((circle, index) => {
      if (index <= currentStep) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    // Update progress line width
    const progressWidth = (currentStep / (circles.length - 1)) * 100;
    progressLine.style.width = `${progressWidth}%`;

    // Disable/Enable buttons
    if (currentStep === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentStep === circles.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }

  // Next button click event
  nextButton.addEventListener('click', function () {
    if (currentStep < circles.length - 1) {
      currentStep++;
      updateProgress();
    }
  });

  // Previous button click event
  prevButton.addEventListener('click', function () {
    if (currentStep > 0) {
      currentStep--;
      updateProgress();
    }
  });

  // Initial state setup
  updateProgress();
});
