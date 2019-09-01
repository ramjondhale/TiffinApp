import { FORM_UPDATE, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../actions/types';

const INITIAL_STATE = {
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    password: '',
    cpassword: '',
    flatno: '',
    landmark: '',
    building: '',
    area: '',
    loading: false,
    message: ''     
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case SIGN_UP_SUCCESS:
            return { INITIAL_STATE };
        case SIGN_UP:
            return { ...state, loading: true, message: '' };
        case SIGN_UP_ERROR:
            return { ...state, message: action.payload, loading: false };

        default:
            return state;
    }
};  
