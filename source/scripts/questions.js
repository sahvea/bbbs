// раскрытие вопроса
const questionShowButtons = document.querySelectorAll('.question__show-button');
//const questionCards = document.querySelectorAll('.question__card');
const questionAnswers = document.querySelectorAll('.question__answer');
//const questionAnswersArr = Array.from(questionAnswers);

Array.prototype.forEach.call(questionShowButtons, function (button) {
  button.addEventListener('click', function (evt) {
    button.classList.toggle('question__show-button_active');

    for (let item of questionAnswers) {
      item.classList.toggle('question__answer_visible');
    }

    /* questionAnswers.forEach(item => {
      if(!item.classList.contains('question__answer_visible')) {
        item.classList.add('question__answer_visible');
      } else {
        item.classList.remove('question__answer_visible');
      }
      //item.classList.toggle('question__answer_visible');
    }) */

  });

});
