import { SUBSCRIPTION_FETCHING, SUBSCRIPTION_FETCH_SUCCESS, SUBSCRIPTION_FETCH_ERROR,
      SKIP_DATE_CHANGE, SKIP_TIFFIN, SKIP_TIFFIN_SUCCESS, SKIP_TIFFIN_ERROR
      } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false,
    skipDate: ''
    
};
export default (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case SUBSCRIPTION_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case SUBSCRIPTION_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case SUBSCRIPTION_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };              
        case SKIP_DATE_CHANGE:
            return { ...state, skipDate: action.payload };  
        case SKIP_TIFFIN: 
            return { ...state, loading: true };
        case SKIP_TIFFIN_SUCCESS:
            return { ...state, loading: false };
       
        case SKIP_TIFFIN_ERROR:
                return { ...state, loading: false, message: 'Something went wrong!', visible: true };
        
        default:
            return state;
    }
};
