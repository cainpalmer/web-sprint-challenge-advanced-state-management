import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS'; 
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_NEW = 'ADD_NEW';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch({type: FETCH_START});
        axios.get('https://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: 'FETCH_SUCCESS', payload: res.data});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_FAIL', payload: err.message})
        })
    }
}

export const addNew = (smurf) => {
    return({type: ADD_NEW, payload: smurf})
}
export const errorMessage = (err) => {
    return({type: ERROR, payload: err})
}