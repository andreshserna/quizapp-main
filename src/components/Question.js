import React from 'react';

export default function Question({ question, answers, onCheckedAnswer }) {

  const onShowAnswer = () => {
    alert(`The corrrect answer is: ${question.correctAnswer}`)
  }

  const answersList = answers.map((answer, index) => {
    return (
      <div key={index}>
        <input
          name={question.difficulty}
          type="radio"
          value={answer}
          onClick={() => onCheckedAnswer(answer)}
        />
        <label>{answer}</label><br />
      </div>
    )
  });


  return (
    <div className='quizapp_question'>
      <h4>Category: {question.category}</h4>
      <h2>{question.question}</h2>
      <fieldset className='quizapp_options'>
        {answersList}
      </fieldset>
      <button className='quizapp_show' onClick={onShowAnswer}>Show Correct Answer</button>
    </div>
  )
}
