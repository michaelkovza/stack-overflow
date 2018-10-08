import fetch from "isomorphic-fetch";
import * as types from '../constants/ActionTypes';

const requestSearchQuestions = () => ({
   type: types.SEARCH_QUESTIONS
});

const receiveSearchQuestions = (questions) => ({
    type: types.SEARCH_QUESTIONS_SUCCESS,
    payload: questions
});

export const searchQuestions = (questionTitle) => dispatch => {

    if(questionTitle === '') {
        return
    }

    dispatch(requestSearchQuestions());

    return fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${questionTitle}&site=stackoverflow`, { method: 'GET' })
        .then(response => response.json())
        .then(responseObject => {
            dispatch(receiveSearchQuestions(responseObject.items))
        })
};
