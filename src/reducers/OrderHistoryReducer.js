import { ORDER_HISTORY_FETCH_SUCCESS, ORDER_HISTORY_FETCHING, ORDER_HISTORY_FETCH_ERROR } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false
};
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case ORDER_HISTORY_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case ORDER_HISTORY_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case ORDER_HISTORY_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };
        default:
            return state;
    }
};
