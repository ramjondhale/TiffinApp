import { FEATURES_FETCH_SUCCESS, FEATURES_FETCH_ERROR, FEATURES_FETCHING } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FEATURES_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case FEATURES_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case FEATURES_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };
        default:
            return state;
    }
};
