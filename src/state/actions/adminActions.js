import { CHANGE_QUESTION_CODE_VALUE, CHANGE_CORRECT_ANSWER_VALUE, CHANGE_INCORRECT_ANSWER1_VALUE, CHANGE_INCORRECT_ANSWER2_VALUE, RESET_FORM, CHANGE_QUESTION_TEXT_VALUE } from './types';

export const questionTextAction = (val) => {
  return {
    type: CHANGE_QUESTION_TEXT_VALUE,
    payload: val
  }
}

export const questionCodeAction = (val) => {
  return {
    type: CHANGE_QUESTION_CODE_VALUE,
    payload: val
  }
}

export const correctAnswerAction = (val) => {
  return {
    type: CHANGE_CORRECT_ANSWER_VALUE,
    payload: val
  }
}

export const incorrectAnswer1Action = (val) => {
  return {
    type: CHANGE_INCORRECT_ANSWER1_VALUE,
    payload: val
  }
}

export const incorrectAnswer2Action = (val) => {
  return {
    type: CHANGE_INCORRECT_ANSWER2_VALUE,
    payload: val
  }
}

export const resetFormAction = () => {
  return {
    type: RESET_FORM,
    payload: ''
  }
}


