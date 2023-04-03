import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    data: [],
    isLoading: false,
    error: null
};


const store = configureStore(
    {
        reducer: (state = initialState, action) => {
            switch (action.type) {
                case 'SET_DATA':
                    return {...state, data: action.payload};
                case 'SET_LOADING':
                    return {...state, isLoading: action.payload};
                case 'SET_ERROR':
                    return {...state, error: action.payload};
                default:
                    return state;
            }
        }
    }
);

const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const response = await axios.get('https://xhnwzq3h95.execute-api.us-east-1.amazonaws.com/prod/applications', {
                headers: {
                    'x-api-key': 'p53epkM6BX6XR8gSzrmZL3N6WAXYfKVWa0tOrYfM'
                }
            });
            dispatch({ type: 'SET_DATA', payload: response.data });
            dispatch({ type: 'SET_LOADING', payload: false });

        } catch (error) {
            dispatch({ type: 'SET_LOADING', payload: false });
            dispatch({ type: 'SET_ERROR', payload: error });
        }
    }
}

store.dispatch(fetchData());

export default store;