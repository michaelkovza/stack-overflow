import fetch from "isomorphic-fetch";
import * as types from '../constants/ActionTypes';

const requestSearchQuestions = () => ({
   type: types.SEARCH_QUESTIONS
});

const receiveSearchQuestions = (questions) => ({
    type: types.SEARCH_QUESTIONS_SUCCESS,
    payload: questions
});

const errorSearchQuestions = () => ({
    type: types.SEARCH_QUESTIONS_FAIL
});

export const searchQuestions = (questionTitle) => dispatch => {

    if(questionTitle === '') {
        return
    }

    dispatch(requestSearchQuestions());

    return fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${questionTitle}&site=stackoverflow`, { method: 'GET' })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            dispatch(errorSearchQuestions());
        }).then(parseResponse => dispatch(receiveSearchQuestions(parseResponse.items)))

};
