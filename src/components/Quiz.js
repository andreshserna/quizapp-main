import Question from './Question';

function Quiz({ questions, onCheckedAnswer }) {

  const renderQuestions = questions.map((question) => {

    const mixAnswers = [...question.incorrectAnswers, question.correctAnswer]
      .sort(() => Math.random() - 0.5);
    // console.log(mixAnswers);
    // console.log(question)

    return (
      <Question 
      key={question.id} 
      question={question} 
      answers={mixAnswers}
      onCheckedAnswer={onCheckedAnswer} 
      />
    )
    });

  return (
    <div>

      <div>
        {renderQuestions}
      </div>

    </div>
  );
};

export default Quiz;