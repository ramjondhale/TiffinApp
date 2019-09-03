import RNSecureStorage from 'rn-secure-storage';
import { FEATURES_FETCH_SUCCESS, FEATURES_FETCH_ERROR, FEATURES_FETCHING } from './types';

export const featuresFetch = () => {
    let token;
    
    return (dispatch) => {   
        dispatch({ type: FEATURES_FETCHING });
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('https://www.dream-meal.com/api/', {
            method: 'POST',
            headers: {    
                          
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: 'getAllFeatures',
                param: {
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                        dispatch({ type: FEATURES_FETCH_SUCCESS, payload: data.response.result });
                    } else {
                        dispatch({ type: FEATURES_FETCH_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: FEATURES_FETCH_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };
};
