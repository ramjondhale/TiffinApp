import { Actions } from 'react-native-router-flux';
import { MOBILE_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAILED, 
        LOGIN_ERROR,
        LOGIN_USER,       
        LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = { 
    mobile: '',
    password: '',
    token: null,
    error: '',
    loading: false,
    login: false 
 };

export default (state = INITIAL_STATE, action) => {     
   switch (action.type) {
        case MOBILE_CHANGED:
            return { ...state, mobile: action.payload };  
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, login: true, error: '', loading: false }; 
        case LOGIN_USER_FAILED:
            return { ...state, error: action.payload, loading: false, login: false };
        case LOGIN_ERROR:
            return { ...state, error: 'Something went wrong!!.', loading: false, login: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '', login: false }; 
        case LOGOUT_USER: 
            return { ...state, mobile: '', password: '' };      
    default:
            return state;
   }
};
