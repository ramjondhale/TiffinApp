
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };    
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };    
};
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        fetch('http://192.168.43.174/api/', {
            method: 'POST',
            headers: {    
                 'Accept': 'application/json',           
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name: 'generateToken',
                param: {
                    email,
                    pass: password
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: data });           
            })
            .catch(() => {
                dispatch({type: LOGIN_USER_FAILED })
            });
    };
};
