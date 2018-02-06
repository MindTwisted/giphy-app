import * as types from '../constants/ActionTypes';
import axios from 'axios';

const storeRandomGifs = (gifs) => {
    return {
        type: types.LOAD_RANDOM_GIFS,
        data: gifs.data.data
    }
};

export const loadRandomGifs = () => {
    return (dispatch) => {
        return axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=jJ20VNa6Ah6L2rJwkQb6LS71TM6zbmVj&limit=25&rating=G`)
            .then((response) => {
                dispatch(storeRandomGifs(response));
            })
            .catch((error) => {
                console.log(error);
            })
    }
};
