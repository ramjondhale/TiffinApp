import { EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAILED, 
        LOGIN_ERROR,
        LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    token: null,
    error: '',
    loading: false,
    login: false 
 };

export default (state = INITIAL_STATE, action) => {   
    console.log(action);
   switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };  
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, login: true, error: '', loading: false, email: '', password: '' };
        case LOGIN_USER_FAILED:
            return { ...state, error: action.payload, loading: false, login: false };
        case LOGIN_ERROR:
            return { ...state, error: 'Something went wrong!!.', loading: false, login: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '', login: false };
    default:
            return state;
   }
};
