// export function limitChoices(questionId) {
//     const questionOptions = document.querySelectorAll(`input[name="${questionId}"]`);
//     const checkedOptions = document.querySelectorAll(`input[name="${questionId}"]:checked`);

//     const disableUnchecked = checkedOptions.length >= maxChoices[questionId];
//     questionOptions.forEach(option => option.disabled = !option.checked && disableUnchecked);
// }


// export function calculateScore() {
//     let score = 0;
//     let totalCorrectAnswers = 0;

//     Object.keys(correctAnswers).forEach(questionId => {
//         const checkedOptions = Array.from(document.querySelectorAll(`input[name="${questionId}"]:checked`));
//         checkedOptions.forEach(option => {
//             if (correctAnswers[questionId].includes(option.id)) {
//                 score++;
//             }
//         });
//         totalCorrectAnswers += correctAnswers[questionId].length;
//     });
//     return { score, totalCorrectAnswers };

// }
