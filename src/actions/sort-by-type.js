import * as types from '../constants/ActionTypes';

export const sortByType = (sortType) => ({
    type: types.SET_SORT,
    payload: sortType
});
