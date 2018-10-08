import * as types from '../constants/ActionTypes';

export const sortByAnswers = (sortType) => ({
    type: types.SET_SORT,
    payload: sortType
});

export const sortByDate = (sortType) => ({
    type: types.SET_SORT,
    payload: sortType
});
