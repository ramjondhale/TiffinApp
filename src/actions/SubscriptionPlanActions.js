import RNSecureStorage from 'rn-secure-storage';
import { SUBSCRIPTION_PLAN_FETCHING, SUBSCRIPTION_PLAN_FETCH_SUCCESS, SUBSCRIPTION_PLAN_FETCH_ERROR } from './types';


export const subscriptionPlanFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: SUBSCRIPTION_PLAN_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('http://192.168.43.174/TiffinAppApi/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'getSubscriptions',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: SUBSCRIPTION_PLAN_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: SUBSCRIPTION_PLAN_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: SUBSCRIPTION_PLAN_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};
