const correctAnswers = {
    'question1': ['option1b'], 
    'question2': ['option2d'],
    'question3': ['option3c'],
    'question4': ['option4d'],
    'question5': ['option5a',],
    'question6': ['option6b'],
    'question7': ['option7d']     
  };
  const maxChoices = {
  'question1': 1, 
  'question2': 1,
  'question3': 1, 
  'question4': 1, 
  'question5': 1, 
  'question6': 1, 
  'question7': 1, 

  };  

  function limitChoices(questionId) {
    const questionOptions = document.querySelectorAll(`input[name="${questionId}"]`);
    const checkedOptions = document.querySelectorAll(`input[name="${questionId}"]:checked`);
  
    const disableUnchecked = checkedOptions.length >= maxChoices[questionId];
    questionOptions.forEach(option => option.disabled = !option.checked && disableUnchecked);
  }
  
  Object.keys(maxChoices).forEach(questionId => {
    const questionOptions = document.querySelectorAll(`input[name="${questionId}"]`);
  
    questionOptions.forEach(option => {
      option.addEventListener('click', () => limitChoices(questionId));
    });
  });
  
  document.getElementById('submitAnswers').addEventListener('click', () => {
    let score = 0;
    let totalCorrectAnswers = 0;
  
    Object.keys(correctAnswers).forEach(questionId => {
      const checkedOptions = Array.from(document.querySelectorAll(`input[name="${questionId}"]:checked`));
      checkedOptions.forEach(option => {
        if (correctAnswers[questionId].includes(option.id)) {
          score++;
        }
      });
      totalCorrectAnswers += correctAnswers[questionId].length;
    });
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your score is ${score}/${totalCorrectAnswers}.`;
  });

  document.getElementById('showCorrectAnswersButton').addEventListener('click', showCorrectAnswers);

    function showCorrectAnswers() {
        const correctAnswersDiv = document.getElementById('correctAnswers');
        let answersHtml='<h2>Correct Answers</h2>';
        Object.keys(correctAnswers).forEach(questionId => {
          const correctOptions = correctAnswers[questionId];
          const questionElement = document.getElementById(questionId);
      
          if (questionElement) {
            answersHtml += `<p><strong>${questionElement.textContent}</strong>: ${correctOptions.join(', ')}</p>`;
        }
        });
        correctAnswersDiv.innerHTML = answersHtml;

        //ändra så att man får fram a) b) c) d) istället för hela texten

      }
      
 

