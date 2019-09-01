import { ACCOUNT_DETAILS_FETCH_SUCCESS, ACCOUNT_DETAILS_FETCHING, ACCOUNT_DETAILS_FETCH_ERROR } from '../actions/types';


const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false
};
export default (state = INITIAL_STATE, action) => {   
    switch (action.type) {       
        case ACCOUNT_DETAILS_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case ACCOUNT_DETAILS_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case ACCOUNT_DETAILS_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };
        default:
            return state;
    }
};
