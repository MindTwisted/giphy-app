import {LOAD_RANDOM_GIFS} from '../constants/ActionTypes';

const gifs = (state = {}, action) => {
    switch (action.type) {
        case LOAD_RANDOM_GIFS:
            return action.data;
        default:
            return state;
    }
};

export default gifs;