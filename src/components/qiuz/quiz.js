import React from 'react';
import { Component, Fragment } from 'react';
import QuizQuestion from './quizQuestion'
import QuizAnswer from './quizAnswers';
import ResultsModal from './resultsModal';
import { resetQuizAction, getAllQuestionsAction, valueOfAnswerAction, increaseCorrectCountAction, increaseQuestionNumberAction, showResultsAction } from '../../state/actions/quizActions';
import { connect } from 'react-redux';


class Quiz extends Component {
  
  componentDidMount() {
    this.props.getQuestions();
  }

  onAnswerClick = answerIsCorrect => {
    if(answerIsCorrect) {
      this.props.setValueOfAnswer('correct');
      this.props.increaseCorrectAnswerCount();
    } else {
      this.props.setValueOfAnswer('incorrect');
    }
  }

  nextQuestionHandler = () => {
    if(this.props.questionNumber < this.props.questions.length-1) {
      this.props.nextQuestion();
    } else {
      this.props.changeShowResults();
    }
  }

  resetQuiz = () => {
    this.props.resetState();
    this.props.getQuestions();
  }

  render(){
    const { questions, isAnswerCorrect, questionNumber, correctAnswersCount, showResults } = this.props;
    return(
      <Fragment>
        <ResultsModal resetBtnHandler={this.resetQuiz} score={correctAnswersCount} numOfQuestions={questions.length} show={showResults}/>
        <QuizQuestion 
        questionText={questions.length > 0? questions[questionNumber].questionText : ""}
        questionCode= {questions.length > 0? questions[questionNumber].questionCode : ""}
        questionNumber = {questionNumber}
        questionsCount = {questions.length}
        />
        <QuizAnswer 
        onButtonClick={this.nextQuestionHandler}
        answers={questions.length > 0 ? questions[questionNumber].answers: []}
        onAnswerClick = {this.onAnswerClick}
        isAnswerCorrect = {isAnswerCorrect}
        questionNumber = {questionNumber}
        />
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    questions: state.quiz.questions,
    getQuestionsErr: state.quiz.getQuestionsErr,
    isAnswerCorrect: state.quiz.isAnswerCorrect,
    correctAnswersCount: state.quiz.correctAnswersCount,
    questionNumber: state.quiz.questionNumber,
    showResults: state.quiz.showResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => { dispatch( getAllQuestionsAction() ) },
    setValueOfAnswer: value => { dispatch( valueOfAnswerAction(value) ) },
    increaseCorrectAnswerCount: () => { dispatch( increaseCorrectCountAction() ) },
    nextQuestion: () => { dispatch( increaseQuestionNumberAction() ); dispatch( valueOfAnswerAction('') ) },
    changeShowResults: () => { dispatch( showResultsAction() ) },
    resetState: () => { dispatch( resetQuizAction() ) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);