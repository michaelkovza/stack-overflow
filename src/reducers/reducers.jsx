import { combineReducers } from 'redux';
import searchQuestions from './search-questions';
import sortType from './sort-by-type';

const reducers = {
    searchQuestions,
    sortType
};

export default combineReducers(reducers);
