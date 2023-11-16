// // document.addEventListener('DOMContentLoaded', () => {
// //     generateQuiz();
// //     // Eventuella andra initialiseringar
// // });




// // document.addEventListener('DOMContentLoaded', createQuiz);
// // // This event listener will be triggered when the DOM is fully loaded.
// // document.addEventListener('DOMContentLoaded', () => {
// //     // Call createQuiz from wherever it's defined
// //     createQuiz();

// //     // Set up the event listener for the submit button
// //     const submitBtn = document.getElementById('submitAnswers');
// //     if (submitBtn) {
// //         submitBtn.addEventListener('click', submitQuiz);
// //     }
// // });

// // // This function is responsible for handling the quiz submission.
// // function submitQuiz() {
// //     let score = 0; // Initialize score
// //     quizQuestions.forEach(question => {
// //         const selectedOptions = document.querySelectorAll(`input[name="${question.id}"]:checked`);
// //         const selectedAnswers = Array.from(selectedOptions).map(option => option.id);

// //         // Check if all selected answers are correct
// //         if (question.correctAnswer.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.every(answer => question.correctAnswer.includes(answer))) {
// //             score += 1; // Each fully correct answer increases the score
// //         }
// //     });

// //     // Display the score
// //     const resultDiv = document.getElementById('result');
// //     if (resultDiv) {
// //         resultDiv.textContent = `Your total score is: ${score} out of ${quizQuestions.length}`;
// //     }
// // }
// // main.js
// document.addEventListener('DOMContentLoaded', () => {
//     // Call createQuiz from wherever it's defined
//     createQuiz();

//     // Set up the event listener for the submit button
//     const submitBtn = document.getElementById('submitAnswers');
//     if (submitBtn) {
//         submitBtn.addEventListener('click', submitQuiz);
//     }
// });

// // This function is responsible for handling the quiz submission.
// function submitQuiz() {
//     let score = 0; // Initialize score
//     quizQuestions.forEach(question => {
//         const selectedOptions = document.querySelectorAll(`input[name="${question.id}"]:checked`);
//         const selectedAnswers = Array.from(selectedOptions).map(option => option.id);

//         // Check if all selected answers are correct
//         if (question.correctAnswer.every(answer => selectedAnswers.includes(answer)) && selectedAnswers.every(answer => question.correctAnswer.includes(answer))) {
//             score += 1; // Each fully correct answer increases the score
//         }
//     });

//     // Display the score
//     const resultDiv = document.getElementById('result');
//     if (resultDiv) {
//         resultDiv.textContent = `Your total score is: ${score} out of ${quizQuestions.length}`;
//     }
// }
document.addEventListener('DOMContentLoaded', () => {
    createQuiz();

    
    const submitBtn = document.getElementById('submitAnswers');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitQuiz);
    }

    const showAnswersBtn = document.getElementById('showCorrectAnswersButton');
    if (showAnswersBtn) {
        showAnswersBtn.addEventListener('click', highlightCorrectAnswers);
    }
});

function submitQuiz() {
    let score = 0; 
    quizQuestions.forEach(question => {
        const selectedOptions = document.querySelectorAll(`input[name="${question.id}"]:checked`);
        const selectedAnswers = Array.from(selectedOptions).map(option => option.id);

        if (question.correctAnswer.every(answer => selectedAnswers.includes(answer)) &&
            selectedAnswers.every(answer => question.correctAnswer.includes(answer))) {
            score += 1; 
        }
    });

    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = `Your total score is: ${score} out of ${quizQuestions.length}`;
    }

    const showAnswersBtn = document.getElementById('showCorrectAnswersButton');
    if (showAnswersBtn) {
        showAnswersBtn.style.display = 'block'; 
    }
}


function highlightCorrectAnswers() {
    // Reset any previous highlighting
    document.querySelectorAll('.correct-answer').forEach(element => {
        element.classList.remove('correct-answer');
    });

    quizQuestions.forEach(question => {
        // Highlight all correct answers
        question.correctAnswer.forEach(answer => {
            const correctOption = document.getElementById(answer);
            if (correctOption && correctOption.nextSibling && correctOption.nextSibling.tagName === 'LABEL') {
                correctOption.nextSibling.classList.add('correct-answer'); // Add class to highlight
            }
        });
    });
}
