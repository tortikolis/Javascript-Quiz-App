import React, { Fragment } from 'react';

export default ({questionText, questionCode, questionNumber, questionsCount}) => (
    
    <Fragment>
      <div className="questions-wrap">
        <h1>Question {`${questionNumber + 1} / ${questionsCount}`}</h1>
        <p className="lead">{questionText}</p>
        <div className="code-wrap alert alert-light">
          {questionCode.split("\n").map((line, index) => <div key={index} className='code-line'>{line}</div>)}
        </div>
      </div>
    </Fragment>

  );
