import { endpoint } from '../shared/constants';
import Question from '../entities/Question';
import mixArrayElements from '../helpers/mixArrayElements';

export const fetchAllQuestions = () => {
  return fetch(endpoint)
  .then(response => response.json())
  .then(response => response.map(item => { 
    const {questionText, questionCode, answers} = item;
    const randomizedAnswers = mixArrayElements(answers);
    return new Question(questionText, questionCode, randomizedAnswers)
  }))
  .catch(err => console.error('ERROR:', err))
}