import React, { Component } from 'react';
import TextArea from './TextArea';
import { connect } from 'react-redux';
import { questionTextAction, questionCodeAction, correctAnswerAction, incorrectAnswer1Action, incorrectAnswer2Action, resetFormAction } from '../../state/actions/adminActions';
import SendButton from './SendButton';
import Question from '../../entities/Question';
import { postQuestion } from '../../services/postQuestion';

class Admin extends Component {

  sendQuestionToServer = event => {
    event.preventDefault();
    const { questionText, questionCode, correctAnswer, incorrectAnswer1, incorrectAnswer2} = this.props;
    if(!questionText || !correctAnswer || !incorrectAnswer1 || !incorrectAnswer2) {
      return
    }
    const answers = [
      {text: correctAnswer, isCorrect: true},
      {text: incorrectAnswer1, isCorrect: false},
      {text: incorrectAnswer2, isCorrect: false}
    ]
    const question = new Question(questionText, questionCode, answers);
    postQuestion(JSON.stringify(question));
    this.props.resetForm();
  }

  render() {
    const { questionText, questionCode, correctAnswer, incorrectAnswer1, incorrectAnswer2, changeQuestionText, changeQuestionCode, changeCorrectAnswer, changeIncorrectAnswer1, changeIncorrectAnswer2 } = this.props;
    const fieldArr = [
      {field: questionText, handler: changeQuestionText }, 
      {field: questionCode, handler: changeQuestionCode}, 
      {field: correctAnswer, handler: changeCorrectAnswer}, 
      {field: incorrectAnswer1, handler: changeIncorrectAnswer1}, 
      {field: incorrectAnswer2, handler: changeIncorrectAnswer2}
    ];
    console.log('from admin:', this.props)
    return(
      <div className="container">
        <form>
          {fieldArr.map( item =>  <TextArea onChangeHandler={item.handler} name={item.field.name} value={item.field.value}/> )}
          <SendButton onClickHandler={this.sendQuestionToServer}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    questionText: state.admin.questionText, 
    questionCode: state.admin.questionCode,
    correctAnswer: state.admin.correctAnswer,
    incorrectAnswer1: state.admin.incorrectAnswer1,
    incorrectAnswer2: state.admin.incorrectAnswer2,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeQuestionText: event => { dispatch( questionTextAction(event.target.value) ) },
    changeQuestionCode: event => { dispatch( questionCodeAction(event.target.value) ) },
    changeCorrectAnswer: event => { dispatch( correctAnswerAction(event.target.value) ) },
    changeIncorrectAnswer1: event => { dispatch( incorrectAnswer1Action(event.target.value) ) },
    changeIncorrectAnswer2: event => { dispatch( incorrectAnswer2Action(event.target.value) ) },
    resetForm: () => { dispatch( resetFormAction() ) }
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin);