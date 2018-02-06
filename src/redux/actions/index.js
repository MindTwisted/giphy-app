import * as types from '../constants/ActionTypes';
import axios from 'axios';

const storeGifs = (gifs) => {
    return {
        type: types.STORE_GIFS,
        data: gifs.data.data
    }
};

export const loadRandomGifs = (count) => {
    return (dispatch) => {
        return axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=jJ20VNa6Ah6L2rJwkQb6LS71TM6zbmVj&limit=${count}&rating=G`)
            .then((response) => {
                dispatch(storeGifs(response));
            })
            .catch((error) => {
                console.log(error);
            })
    }
};

export const searchGifs = (query, count, offset) => {
    return (dispatch) => {
        return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jJ20VNa6Ah6L2rJwkQb6LS71TM6zbmVj&q=${query}&limit=${count}&offset=${offset}&rating=G&lang=en`)
            .then((response) => {
                dispatch(storeGifs(response));
            })
            .catch((error) => {
                console.log(error);
            })
    }
};
