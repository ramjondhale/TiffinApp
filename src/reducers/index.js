import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUPReducer from './SignUpReducer';

export default combineReducers({
   auth: AuthReducer,
   signUp: SignUPReducer
});
