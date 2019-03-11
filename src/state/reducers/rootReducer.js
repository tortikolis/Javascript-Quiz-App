import { combineReducers } from 'redux';
import { quizReducer } from './quizReducer';
import adminReducer from './adminReducer';
 
const rootReducer = combineReducers({
    quiz: quizReducer,
    admin: adminReducer
})

export default rootReducer;