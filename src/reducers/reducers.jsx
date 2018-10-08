import { combineReducers } from 'redux';
import searchQuestions from './search-questions';
import sorts from './sorts';

const reducers = {
    searchQuestions,
    sorts
};

export default combineReducers(reducers);
