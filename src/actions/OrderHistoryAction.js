import RNSecureStorage from 'rn-secure-storage';
import { ORDER_HISTORY_FETCHING, ORDER_HISTORY_FETCH_SUCCESS, ORDER_HISTORY_FETCH_ERROR } from './types';


export const orderHistoryFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: ORDER_HISTORY_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({
                name: 'getOrdersHistory',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: ORDER_HISTORY_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: ORDER_HISTORY_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: ORDER_HISTORY_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};
