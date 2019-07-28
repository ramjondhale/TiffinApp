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
    loading: false 
 };

export default (state = INITIAL_STATE, action) => {
    console.log(action);
   switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };  
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, token: action.payload, error: '', loading: false };
        case LOGIN_USER_FAILED:
            return { ...state, error: action.payload, loading: false };
        case LOGIN_ERROR:
            return { ...state, error: 'Something went wrong!!.', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
    default:
            return state;
   }
};
