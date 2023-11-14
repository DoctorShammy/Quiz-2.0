const correctAnswers = {
    'question1': ['b', 'c'], 
    'question2': ['option2b', 'option2d'],
    'question3': ['option3a', 'option3d'],
    'question4': ['option4a', 'option4c','option4d'],
    'question5': ['option5b', 'option5c','option5d'],
    'question6': ['option6c', 'option6d'],
    'question7': ['option7a', 'option7b', 'option7c', 'option7d']     
  };
  const maxChoices = {
  'question1': 2, 
  'question2': 2,
  'question3': 2, 
  'question4': 3, 
  'question5': 3, 
  'question6': 2, 
  'question7': 4, 

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

// function limitChoices(questionId) {
//   const questionOptions = document.querySelectorAll(`input[name="${questionId}"]`);
//   const checkedOptions = document.querySelectorAll(`input[name="${questionId}"]:checked`);

//   const disableUnchecked = checkedOptions.length >= maxChoices[questionId];
//   questionOptions.forEach(option => option.disabled = !option.checked && disableUnchecked);
// }

// Object.keys(maxChoices).forEach(questionId => {
//   const questionOptions = document.querySelectorAll(`input[name="${questionId}"]`);

//   questionOptions.forEach(option => {
//     option.addEventListener('click', () => limitChoices(questionId));
//   });
// });

// document.getElementById('submitAnswers').addEventListener('click', () => {
//   let score = 0;
//   let totalCorrectAnswers = 0;

//   Object.keys(correctAnswers).forEach(questionId => {
//     const checkedOptions = Array.from(document.querySelectorAll(`input[name="${questionId}"]:checked`));
//     checkedOptions.forEach(option => {
//       if (correctAnswers[questionId].includes(option.id)) {
//         score++;
//       }
//     });
//     totalCorrectAnswers += correctAnswers[questionId].length;
//   });

//   const resultDiv = document.getElementById('result');
//   resultDiv.textContent = `Your score is ${score}/${totalCorrectAnswers}.`;
// });
// document.getElementById('showCorrectAnswersButton').addEventListener('click', showCorrectAnswers);

// function showCorrectAnswers() {
//     const correctAnswersDiv = document.getElementById('correctAnswers');
//     let answersHtml = '<h2>Correct Answers</h2>';
//     Object.keys(correctAnswers).forEach(questionId => {
//         const correctOptions = correctAnswers[questionId];
//         let questionOptionsText = '';

//         correctOptions.forEach(option => {
//             const optionElement = document.getElementById(option);
//             console.log('Option Element:', optionElement);
//             if (optionElement) {
//               console.log('Label:', optionElement.labels[0].textContent);
//                 questionOptionsText += `${optionElement.labels[0].textContent.trim()[0]}, `;
//             }
//         });

//         if (questionOptionsText) {
//             answersHtml += `<p><strong>Question ${questionId.charAt(questionId.length - 1)}</strong>: ${questionOptionsText.slice(0, -2)}</p>`;
//         }
//     });
//     correctAnswersDiv.innerHTML = answersHtml;
// }

