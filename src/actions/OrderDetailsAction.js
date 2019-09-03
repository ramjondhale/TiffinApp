import RNSecureStorage from 'rn-secure-storage';
import { ORDER_DETAILS_FETCHING, ORDER_DETAILS_FETCH_SUCCESS, ORDER_DETAILS_FETCH_ERROR } from './types';


export const orderDetailsFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: ORDER_DETAILS_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({
                name: 'getTodaysOrders',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: ORDER_DETAILS_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: ORDER_DETAILS_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: ORDER_DETAILS_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};
