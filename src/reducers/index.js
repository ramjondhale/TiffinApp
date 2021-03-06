import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import FeaturesReducer from './FeaturesReducer';
import MenuReducer from './MenuReducer';
import SubscriptionPlanReducer from './SubscriptionPlanReducer';
import SubscriptionsReducer from './SubscriptionsReducer';
import OrderDetailsReducer from './OrderDetailsReducer';
import OrderHistoryReducer from './OrderHistoryReducer';
import AccountReducer from './AccountReducer';

export default combineReducers({
   auth: AuthReducer,
   signUp: SignUpReducer,
   features: FeaturesReducer,
   menu: MenuReducer,
   subscriptionPlan: SubscriptionPlanReducer,
   subscribedPlans: SubscriptionsReducer,
   orderDetails: OrderDetailsReducer,
   orderHistory: OrderHistoryReducer,
   accountDetails: AccountReducer
});
