import { SET_SORT } from '../constants/ActionTypes';

const initialState = null;

const sorts = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT: {
            return action.payload
        }
        default:
            return state;
    }
};

export default sorts;