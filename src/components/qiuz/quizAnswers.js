import React, { Fragment } from 'react';

export default ({isAnswerCorrect, onButtonClick, onAnswerClick, answers}) => {

  const answerGiven = 
  isAnswerCorrect === 'correct' 
  ? <div className="alert alert-success" role="alert">Answer is CORRECT</div> 
  : <div className="alert alert-danger" role="alert">Answer is NOT CORRECT</div>

  const buttonClass = 
  answerStatus => `answer-option ${ answerStatus && isAnswerCorrect 
    ?  "btn btn-outline-success" 
    :"btn btn-outline-secondary"} `
  
  const buttonList = answers.map((answer, index) => ( 
  <li key={index}>
  <button 
  disabled={isAnswerCorrect} 
  className= {buttonClass(answer.isCorrect)} 
  onClick={event => onAnswerClick(answer.isCorrect)}>{answer.text}
  </button>
  </li>
  ))
  
  return(
    <Fragment>
    {isAnswerCorrect ? answerGiven : null}
    <ul>
      {buttonList} 
    </ul>
    <button onClick={onButtonClick} className="btn btn-info" disabled={!isAnswerCorrect}>NEXT QUESTION</button>
    </Fragment>
  )
};