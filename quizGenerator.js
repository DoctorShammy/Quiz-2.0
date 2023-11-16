
function createQuiz() {
  console.log("Creating quiz...", quizQuestions);
  const container = document.getElementById('quizContainer');
  quizQuestions.forEach(question => {
      // Create the question container element with Bootstrap classes
      const questionElement = document.createElement('div');
      questionElement.className = 'mb-3';

      // Create the question text as a header or paragraph with Bootstrap classes
      const questionText = document.createElement('h5');
      questionText.className = 'mb-2';
      questionText.textContent = question.text;
      questionElement.appendChild(questionText);

      // Wrap the checkboxes and labels in a div with Bootstrap form-check class
      question.options.forEach(option => {
          const optionWrapper = document.createElement('div');
          optionWrapper.className = 'form-check';

          // Create the checkbox input with Bootstrap classes
          const optionInput = document.createElement('input');
          optionInput.type = 'checkbox';
          optionInput.className = 'form-check-input';
          optionInput.name = question.id;
          optionInput.id = option.id;

          // Create the label with Bootstrap classes
          const optionLabel = document.createElement('label');
          optionLabel.className = 'form-check-label';
          optionLabel.htmlFor = option.id;
          optionLabel.textContent = option.text;

          // Append the input and label to the wrapper
          optionWrapper.appendChild(optionInput);
          optionWrapper.appendChild(optionLabel);

          // Append the wrapper to the question element
          questionElement.appendChild(optionWrapper);
      });

      // Append the question element to the container
      container.appendChild(questionElement);
  });
}

// Call the function when the page loads
// document.addEventListener('DOMContentLoaded', createQuiz);
  