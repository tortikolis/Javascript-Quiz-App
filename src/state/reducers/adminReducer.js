import { CHANGE_QUESTION_CODE_VALUE, CHANGE_CORRECT_ANSWER_VALUE, CHANGE_INCORRECT_ANSWER1_VALUE, CHANGE_INCORRECT_ANSWER2_VALUE, RESET_FORM, CHANGE_QUESTION_TEXT_VALUE } from '../actions/types';

const adminStartState = {
    questionText: {name: "Question Text", value: ''}, 
    questionCode: {name: "Question Code", value: ''},
    correctAnswer: {name: "Correct Answer", value: ''},
    incorrectAnswer1: {name: "Incorrect Answer #1", value: ''},
    incorrectAnswer2: {name: "Incorrect Answer #2", value: ''},
}

const adminReducer = (state = adminStartState, action) => {
  switch(action.type) {
    case CHANGE_QUESTION_TEXT_VALUE: 
      return {
        ...state,
        questionText: action.payload
      };
    case CHANGE_QUESTION_CODE_VALUE: 
    return {
      ...state,
      questionCode: action.payload
    }
    case CHANGE_CORRECT_ANSWER_VALUE: 
    return {
      ...state,
      correctAnswer: action.payload
    }
    case CHANGE_INCORRECT_ANSWER1_VALUE: 
    return {
      ...state,
      incorrectAnswer1: action.payload
    }
    case CHANGE_INCORRECT_ANSWER2_VALUE: 
    return {
      ...state,
      incorrectAnswer2: action.payload
    }
    case RESET_FORM:
    return adminStartState;
    
    default:
      return state;
  }
}

export default adminReducer;