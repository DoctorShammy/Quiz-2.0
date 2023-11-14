const correctAnswers = {
    'question1': ['b'], 
    'question2': ['option2d'],
    'question3': ['option3c'],
    'question4': ['option4d'],
    'question5': ['option5a',],
    'question6': ['option6b'],
    'question7': ['option7d'],     
    'question8': ['option8b'],     
    'question9': ['option9a']     
  };
  const maxChoices = {
  'question1': 1, 
  'question2': 1,
  'question3': 1, 
  'question4': 1, 
  'question5': 1, 
  'question6': 1, 
  'question7': 1, 
  'question8': 1, 
  'question9': 1

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

  document.getElementById('submitAnswers').addEventListener('click', function() {

    document.getElementById('showCorrectAnswersButton').style.display = 'block';
});

document.getElementById('showCorrectAnswersButton').addEventListener('click', showCorrectAnswers);

function showCorrectAnswers() {
    const correctAnswersDiv = document.getElementById('correctAnswers');
    let answersHtml = '<h2>Correct Answers</h2>';
    Object.keys(correctAnswers).forEach(questionId => {
        const correctOptions = correctAnswers[questionId];
        let questionOptionsText = '';

        correctOptions.forEach(option => {
            const optionElement = document.getElementById(option);
            console.log('Option Element:', optionElement);
            if (optionElement) {
              console.log('Label:', optionElement.labels[0].textContent);
                questionOptionsText += `${optionElement.labels[0].textContent.trim()[0]}, `;
            }
        });

        if (questionOptionsText) {
            answersHtml += `<p><strong>Question ${questionId.charAt(questionId.length - 1)}</strong>: ${questionOptionsText.slice(0, -2)}</p>`;
        }
    });
    correctAnswersDiv.innerHTML = answersHtml;
}

      
 

