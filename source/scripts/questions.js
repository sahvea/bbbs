// раскрытие вопросов
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const questionTitle = question.querySelector('.question__title');
  const questionShowButton = question.querySelector('.question__show-button');
  const questionAnswer = question.querySelector('.question__answer');

  function handleAnswerShow() {
    questionShowButton.classList.toggle('question__show-button_active');
    questionAnswer.classList.toggle('question__answer_visible')
  }

  questionTitle.addEventListener('click', handleAnswerShow);
  questionShowButton.addEventListener('click', handleAnswerShow);

});
