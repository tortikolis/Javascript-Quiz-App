import React from 'react';

export default ({score, numOfQuestions, show, resetBtnHandler}) => (
  show ?
  <div className='modal'>
    <div className='modal-score'>Your Score is: {score} out of {numOfQuestions} questions</div>
    <button onClick={resetBtnHandler} className="another-one btn btn-info">Play Another One</button>
  </div>
  :
  null
)