import { ORDER_DETAILS_FETCH_SUCCESS, ORDER_DETAILS_FETCHING, ORDER_DETAILS_FETCH_ERROR } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ORDER_DETAILS_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case ORDER_DETAILS_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case ORDER_DETAILS_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };
        default:
            return state;
    }
};
