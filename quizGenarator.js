function generateQuiz() {
    // Funktion för att skapa HTML-struktur baserat på `quizQuestions`
}

function createQuiz() {
    const container = document.getElementById('quizContainer'); // Antag att du har en container i din HTML
    quizQuestions.forEach(question => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question';
  
      // Skapa frågetext
      const questionText = document.createElement('h6');
      questionText.textContent = question.text;
      questionElement.appendChild(questionText);
  
      // Skapa svarsalternativ
      question.options.forEach(option => {
        const optionInput = document.createElement('input');
        optionInput.type = 'checkbox';
        optionInput.name = question.id;
        optionInput.id = option.id;
  
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = option.id;
        optionLabel.textContent = option.text;
  
        questionElement.appendChild(optionInput);
        questionElement.appendChild(optionLabel);
      });
  
      container.appendChild(questionElement);
    });
  }
  
  // Kalla på funktionen när sidan laddas
  document.addEventListener('DOMContentLoaded', createQuiz);
  