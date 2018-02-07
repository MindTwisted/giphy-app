import {STORE_GIFS, STORE_MORE_GIFS, STORE_RANDOM_SINGLE_GIF} from '../constants/ActionTypes';

const gifs = (state = {}, action) => {
    switch (action.type) {
        case STORE_GIFS:
            return action.data;
        case STORE_MORE_GIFS:
            return [
                ...state,
                ...action.data
            ];
        case STORE_RANDOM_SINGLE_GIF:
            return {
                singleGif: action.data
            };
        default:
            return state;
    }
};

export default gifs;