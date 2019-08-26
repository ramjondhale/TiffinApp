import { SUBSCRIPTION_FETCHING, SUBSCRIPTION_FETCH_SUCCESS, SUBSCRIPTION_FETCH_ERROR } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false
};
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case SUBSCRIPTION_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case SUBSCRIPTION_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case SUBSCRIPTION_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };
        default:
            return state;
    }
};
