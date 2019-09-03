import RNSecureStorage from 'rn-secure-storage';
import { ACCOUNT_DETAILS_FETCHING, ACCOUNT_DETAILS_FETCH_SUCCESS, ACCOUNT_DETAILS_FETCH_ERROR } from './types';


export const accountDetailsFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: ACCOUNT_DETAILS_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({
                name: 'getCustomerDetails',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: ACCOUNT_DETAILS_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: ACCOUNT_DETAILS_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: ACCOUNT_DETAILS_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};
