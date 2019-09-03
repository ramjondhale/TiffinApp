import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import { Actions } from 'react-native-router-flux';
import { MOBILE_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILED, 
    LOGIN_ERROR, 
    LOGIN_USER,
    LOGOUT_USER
} from './types';


export const mobileChanged = (text) => {
    return {
        type: MOBILE_CHANGED,
        payload: text
    };    
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };    
};
export const loginUser = ({ mobile, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                 'Accept': 'application/json',           
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'generateToken',
                param: {
                     mobile,
                     password
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {
                const { result } = data.response;
                if (result.token) {                   
                    RNSecureStorage.set('token', result.token, { accessible: ACCESSIBLE.WHEN_UNLOCKED })
                        .then((res) => {                                                   
                            dispatch({ type: LOGIN_USER_SUCCESS, payload: result.token });
                            Actions.main();   
                        }, (err) => {
                          alert(err);
                        });                                 
                   } else {
                    dispatch({ type: LOGIN_USER_FAILED, payload: result });
                }                      
            })
            .catch(() => {
                dispatch({ type: LOGIN_ERROR });
            });
    };
};
export const custLogout = () => {
    return (dispatch) => {
       dispatch({ type: LOGOUT_USER }); 
       Actions.auth();      
    };    
};
// export const getToken = () => {
//     return () => {
//         RNSecureStorage.get('token').then((val) => {
//            console.log(val);
//            }).catch((err) => {
//              alert(err);
//            }); 
//     };
// };
