
import { Actions } from 'react-native-router-flux';
import { FORM_UPDATE, SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS } from './types';


export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    };
};
export const createAccount = ({ fname, lname, mobile, email, password, flatno, landmark, building, area }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_UP });
        fetch('http://192.168.43.174/TiffinAppApi/', {
            method: 'POST',
            headers: {    
                 Accept: 'application/json',           
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'createAccount',
                param: {
                    fname,
                    lname,
                    mobile,
                    email,
                    password,
                    flatno,
                    landmark,
                    building,
                    area
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {   
                if (data.response.status === 200) {
                    dispatch({ type: SIGN_UP_SUCCESS, payload: data });
                    Actions.login();
                } else {
                    dispatch({ type: SIGN_UP_ERROR, payload: data.error.message });
                }       
                })
            .catch(() => {
                dispatch({ type: SIGN_UP_ERROR, payload: 'Something Went Wrong!!! ' });
            });
    };
};
