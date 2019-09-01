import { SUBSCRIPTION_PLAN_FETCHING, SUBSCRIPTION_PLAN_FETCH_SUCCESS,
     SUBSCRIPTION_PLAN_FETCH_ERROR, SUBSCRIBE_PLAN, SUBSCRIBE_PLAN_ERROR,
     HIDE_DIALOG, CURRENT_ORDER_SUCCESS, CURRENT_ORDER_ERROR } from '../actions/types';

const INITIAL_STATE = { 
    loading: true,
    error: '',
    data: null,
    refreshing: false,
    visible: false,
    dialogMessage: ''
};
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case SUBSCRIPTION_PLAN_FETCH_SUCCESS:            
            return { ...state, data: action.payload, loading: false, refreshing: false };
        case SUBSCRIPTION_PLAN_FETCHING:
            return { ...state, loading: true, refreshing: true };
        case SUBSCRIPTION_PLAN_FETCH_ERROR:
            return { ...state, loading: false, error: 'Something went wrong!!!', refreshing: false };
        
        case SUBSCRIBE_PLAN_ERROR:
            return { ...state };
        case HIDE_DIALOG:
            return { ...state, visible: false, };
        case CURRENT_ORDER_SUCCESS:
            return { ...state, visible: true, dialogMessage: 'Order Successful' };
        case CURRENT_ORDER_ERROR:
            return { ...state, visible: true, dialogMessage: 'Order Failed' };
        default:
            return state;
    }
};
