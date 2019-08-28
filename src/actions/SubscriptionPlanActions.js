import RNSecureStorage from 'rn-secure-storage';
import RazorpayCheckout from 'react-native-razorpay';
import { SUBSCRIPTION_PLAN_FETCHING, SUBSCRIPTION_PLAN_FETCH_SUCCESS, SUBSCRIPTION_PLAN_FETCH_ERROR,
     SUBSCRIBE_PLAN, SUBSCRIBE_PLAN_ERROR, CURRENT_ORDER_ERROR,
     CURRENT_ORDER_FETCHING, CURRENT_ORDER_SUCCESS, HIDE_DIALOG } from './types';
import { subscriptionsFetch } from './SubscriptionsActions';


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

export const subscribePlan = ({ id, tiffin }) => {
    let options;
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
                name: 'addSubscribedPlan',
                param: {                  
                    subscription_id: id,                    
                    remaining_tiffin: tiffin              
                
                }
            })         
           
            }).then((response) => response.json())
            .then((data) => {  
                    if (data.response.result) {
                      
                        options = {
                            description: 'Eat Good Feel Good',
                            //image: require('./assets/Dreammeal.png'),
                            currency: 'INR',
                            key: 'rzp_live_yo0KLGcHBcRiqU',
                            amount: (data.response.result[0].price * 100),                            
                            name: 'DreamMeal',
                            prefill: {
                              email: 'ramjondhale1@gmail.com',
                              contact: '8668872541',
                              name: 'DreamMeal'
                            },
                            theme: { color: '#528FF0' }
                          };
                          RazorpayCheckout.open(options).then((data1) => {   
                            dispatch({ type: CURRENT_ORDER_FETCHING });
                           
                                fetch('http://192.168.43.174/TiffinAppApi/', {
                                method: 'POST',
                                headers: {    
                                              
                                    'Content-Type': 'application/json',
                                    'Authorization': token
                                },
                                body: JSON.stringify({
                                    name: 'updatePayment',
                                    param: {
                                        id: data.response.result[0].id,
                                        status: 'successful',
                                        payment_id: data1.razorpay_payment_id
                                    
                                    }
                                })         
                               
                                }).then((response) => response.json())
                                .then((data2) => {                                          
                                            dispatch({ type: CURRENT_ORDER_SUCCESS });                                      
                                    }                      
                                )
                                .catch(() => {
                                    dispatch({ type: CURRENT_ORDER_ERROR });
                                });
                                               
                            
                            //alert(`Success: ${data1.razorpay_payment_id}`);
                          }).catch((error) => {
                            // handle failure
                            dispatch({ type: CURRENT_ORDER_FETCHING });
                           
                            fetch('http://192.168.43.174/TiffinAppApi/', {
                            method: 'POST',
                            headers: {    
                                          
                                'Content-Type': 'application/json',
                                'Authorization': token
                            },
                            body: JSON.stringify({
                                name: 'updatePayment',
                                param: {
                                    id: data.response.result[0].id,
                                    status: 'failed',
                                    payment_id: 'null'
                                
                                }
                            })         
                           
                            }).then((response) => response.json())
                            .then((data2) => {                                          
                                dispatch({ type: CURRENT_ORDER_ERROR });                                      
                                }                      
                            )
                            .catch(() => {
                                dispatch({ type: CURRENT_ORDER_ERROR });
                            });
                            dispatch({ type: CURRENT_ORDER_ERROR });
                            //alert(`Error: ${error.code} | ${error.description}`);
                        });
                        //console.log(data.response.result[0]);
                    } else {
                        dispatch({ type: SUBSCRIBE_PLAN_ERROR });
                    }  
                }                      
            )
            .catch(() => {
                dispatch({ type: SUBSCRIBE_PLAN_ERROR });
            });
      }).catch((err) => {
        alert(err);
      });   
    };     
};

export const hideDialog = () => {
    return (dispatch) => {
       dispatch(subscriptionsFetch());  
       dispatch({ type: HIDE_DIALOG });   
    };    
};
