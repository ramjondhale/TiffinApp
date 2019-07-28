
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED ,LOGIN_ERROR, LOGIN_USER } from './types';

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
        dispatch({ type: LOGIN_USER });
        fetch('http://192.168.43.174/api/', {
            method: 'POST',
            headers: {    
                 'Accept': 'application/json',           
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'generateToken',
                param: {
                    email,
                    pass: password
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {
                const { result } = data.response;
                if (result.token) {

                    dispatch({ type: LOGIN_USER_SUCCESS, payload: result.token });     
                } else {
                    dispatch({type: LOGIN_USER_FAILED, payload: result })
                }
                      
            })
            .catch(() => {
                dispatch({ type: LOGIN_ERROR });
            });
    };
};
