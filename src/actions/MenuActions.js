import RNSecureStorage from 'rn-secure-storage';
import { MENU_FETCH_SUCCESS, MENU_FETCH_ERROR, MENU_FETCHING } from './types';

export const menuFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: MENU_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'getMenu',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: MENU_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: MENU_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: MENU_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};
