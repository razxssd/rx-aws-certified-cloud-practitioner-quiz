export const p = {};
/*const getItems = () => {
  var finalArr = []
  const question_cards = document.getElementsByClassName("exam-question-card");
  // @ts-ignore
  for (const item of question_cards) {
    var textQuestionArr = item.getElementsByClassName('card-text')
    textQuestionArr = textQuestionArr[0].innerText;


    var responsesArrComplete = [];
    var counterResponseCorrect = 0;
    var responsesArr = item.getElementsByClassName('multi-choice-item');
    for (const response of responsesArr) {

      responsesArrComplete.push({text: response.innerText, isCorrect: response.classList.contains('correct-hidden')})
      if (response.classList.contains('correct-hidden')) {
        counterResponseCorrect++
      }
    }

    finalArr.push({
      question: textQuestionArr,
      responses: responsesArrComplete,
      counterResponseCorrect
    })
  }
  return finalArr;
}

const composeQuiz = (finalArr) => {
  return finalArr.map((el) => {
    return {
      "question": el.question,
      "questionType": "text",
      "answerSelectionType": el.counterResponseCorrect === 1 ? "single" : "multiple",
      "answers": el.responses.map(el => el.text),
      "correctAnswer": el.counterResponseCorrect === 1 ? el.responses.findIndex((el, i) => {return el.isCorrect}) + 1 : el.responses.reduce((r, v, i) => r.concat(v.isCorrect === true ? i + 1 : []), []),
      "messageForCorrectAnswer": "Sei una branda, bravo!",
      "messageForIncorrectAnswer": "Puoi fare meglio di cosi, vai a guardarti allo specchio e poi riprova!",
      "point": "20"
    }
  })
}*/