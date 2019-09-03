import RNSecureStorage from 'rn-secure-storage';
import { SUBSCRIPTION_FETCHING, SUBSCRIPTION_FETCH_SUCCESS, SUBSCRIPTION_FETCH_ERROR,
       SKIP_DATE_CHANGE, SKIP_TIFFIN, SKIP_TIFFIN_SUCCESS, SKIP_TIFFIN_ERROR } from './types';


export const subscriptionsFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: SUBSCRIPTION_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'getSubscribedPlans',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: SUBSCRIPTION_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: SUBSCRIPTION_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: SUBSCRIPTION_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};

export const skipTiffin = ({ id, skip }) => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: SKIP_TIFFIN });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'updateOrderDates',
                param: {
                    subscription_id: id,
		            order_date: skip
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {                     
                    dispatch({ type: SKIP_TIFFIN_SUCCESS });   
                    alert('Tiffin Skipped Successfuly');            
                }                      
            )
            .catch(() => {
                dispatch({ type: SKIP_TIFFIN_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};



export const skipDateChange = (text) => {
    return (dispatch) => {         
        dispatch({ type: SKIP_DATE_CHANGE,
            payload: text });  
        dispatch(subscriptionsFetch());   
     };      
};
