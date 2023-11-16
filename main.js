 function limitChoices(questionId) {
    const questionOptions = document.querySelectorAll(`input[name="${questionId}"]`);
    const checkedOptions = document.querySelectorAll(`input[name="${questionId}"]:checked`);

    const question = quizQuestions.find(q => q.id === questionId);
    const maxChoicesForQuestion = question ? question.maxChoices : 0;

    const disableUnchecked = checkedOptions.length >= maxChoicesForQuestion;
    questionOptions.forEach(option => option.disabled = !option.checked && disableUnchecked);
}


 function calculateScore() {
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
    return { score, totalCorrectAnswers };

}
document.addEventListener('DOMContentLoaded', () => {
    createQuiz();

 quizQuestions.forEach(question => {
    const questionOptions = document.querySelectorAll(`input[name="${question.id}"]`);
    questionOptions.forEach(option => {
        option.addEventListener('click', () => limitChoices(question.id));
    });
});
    
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
    let totalPossibleScore = 0;

    quizQuestions.forEach(question => {
        totalPossibleScore += question.correctAnswer.length;

        const selectedOptions = document.querySelectorAll(`input[name="${question.id}"]:checked`);
        const selectedAnswers = Array.from(selectedOptions).map(option => option.id);
       
        selectedAnswers.forEach(answer => {
            if (question.correctAnswer.includes(answer)) {
                score += 1;
      
            }
        });
    });

    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = `Your total score is: ${score} out of ${totalPossibleScore}`;
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    const showAnswersBtn = document.getElementById('showCorrectAnswersButton');
    if (showAnswersBtn) {
        showAnswersBtn.style.display = 'block'; 
        resultDiv.scrollIntoView({ behavior: 'smooth' });

    }
}


function highlightCorrectAnswers() {
    document.querySelectorAll('.correct-answer').forEach(element => {
        element.classList.remove('correct-answer');
    });

    quizQuestions.forEach(question => {
        question.correctAnswer.forEach(answerId => {
            const correctOption = document.getElementById(answerId);
            if (correctOption) {
                const associatedLabels = correctOption.labels;
                if (associatedLabels && associatedLabels.length > 0) {
                    associatedLabels[0].classList.add('correct-answer');
                }
            }
        });
    });


}
