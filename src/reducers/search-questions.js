import {
    SEARCH_QUESTIONS,
    SEARCH_QUESTIONS_SUCCESS,
    SEARCH_QUESTIONS_FAIL
} from "../constants/ActionTypes";

const defaultState = {
    questions: null,
    isFetching: false,
    error: null
};

const searchQuestions = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_QUESTIONS:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case SEARCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload,
                isFetching: false,
                error: null
            };
        case SEARCH_QUESTIONS_FAIL:
            return {
                ...state,
                questions: null,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }

};

export default searchQuestions;
