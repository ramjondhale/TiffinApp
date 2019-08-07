import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import { FEATURES_FETCH_SUCCESS, FEATURES_FETCH_ERROR } from './types';

export const featuresFetch = () => {
    let token;
    
    return (dispatch) => {   
        RNSecureStorage.get('token').then((val) => {
            token ='Bearer '+val;
            fetch('http://192.168.43.174/TiffinAppApi/', {
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
           
            })
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
