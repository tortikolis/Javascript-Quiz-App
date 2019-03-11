import { fetchAllQuestions } from '../../services/getQuestions';
import { GET_QUESTIONS, GET_QUESTIONS_ERROR, SET_ANSWER_VALUE, INCREASE_CORRECT_COUNT, INCREASE_QUESTION_NUMBER, SHOW_RESULTS, RESET_QUIZ} from './types';

export const getAllQuestionsAction = () => {
  return (dispatch) => {
    fetchAllQuestions()
    .then( questions => {
      dispatch({type: GET_QUESTIONS, payload: questions})
    })
    .catch( err => {
      dispatch({type: GET_QUESTIONS_ERROR, error: err})
    })
  }
}

export const valueOfAnswerAction = (value) => {
  return {
    type: SET_ANSWER_VALUE,
    payload: value
  }
}

export const increaseCorrectCountAction = () => {
  return {
    type: INCREASE_CORRECT_COUNT,
  }
}

export const increaseQuestionNumberAction = () => {
  return {
    type: INCREASE_QUESTION_NUMBER,
  }
}

export const showResultsAction = () => {
  return {
    type: SHOW_RESULTS,
    payload: true
  }
}

export const resetQuizAction = () => {
  return {
    type: RESET_QUIZ,
  }
}