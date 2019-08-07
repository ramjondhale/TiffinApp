import { FEATURES_FETCH_SUCCESS, FEATURES_FETCH_ERROR } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FEATURES_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false };
        case FEATURES_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!' };
        default:
            return state;
    }
}