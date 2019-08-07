import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import FeaturesReducer from './FeaturesReducer';

export default combineReducers({
   auth: AuthReducer,
   signUp: SignUpReducer,
   features: FeaturesReducer
});
