import { GET_QUESTIONS, GET_QUESTIONS_ERROR, SET_ANSWER_VALUE, INCREASE_CORRECT_COUNT, INCREASE_QUESTION_NUMBER, SHOW_RESULTS, RESET_QUIZ} from '../actions/types';

const quizInitState = {
  questions: [],
  isAnswerCorrect: "",
  correctAnswersCount: 0,
  questionNumber: 0,
  showResults: false
}


export const quizReducer = (state = quizInitState, action) => {
  switch(action.type) {
    case GET_QUESTIONS:
    return { 
      ...state,
      questions: action.payload
    }
    case GET_QUESTIONS_ERROR: 
    return {
      ...state,
      getQuestionsErr: action.error
    }
    case SET_ANSWER_VALUE:
    return {
      ...state,
      isAnswerCorrect: action.payload
    }
    case INCREASE_CORRECT_COUNT:
    return {
      ...state,
      correctAnswersCount: state.correctAnswersCount + 1
    }
    case INCREASE_QUESTION_NUMBER:
    return {
      ...state,
      questionNumber: state.questionNumber += 1
    }
    case SHOW_RESULTS:
    return {
      ...state,
      showResults: action.payload
    }

    case RESET_QUIZ:
    return quizInitState;

    default: 
    return state;
  }
}