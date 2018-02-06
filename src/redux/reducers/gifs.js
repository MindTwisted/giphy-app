import {STORE_GIFS} from '../constants/ActionTypes';

const gifs = (state = {}, action) => {
    switch (action.type) {
        case STORE_GIFS:
            return action.data;
        default:
            return state;
    }
};

export default gifs;