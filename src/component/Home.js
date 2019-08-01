import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from './Menu';
import Features from './Features';
import SubscriptionPlans from './SubscriptionPlans';
import Subscriptions from './Subscriptions';
import OrderDetails from './OrderDetail';
import OrderHistory from './OrderHistory';


class Home extends Component {
    render() {
        return (
            
            <AppContainer />
        );
    }
}

const HomeTab = createMaterialTopTabNavigator({
    Features: { screen: Features },
    Menu: { screen: Menu } 
});
const SubscriptionTab = createMaterialTopTabNavigator({
    SubscriptionPlans: { screen: SubscriptionPlans },
    Subscriptions: { screen: Subscriptions } 
});
const OrderTab = createMaterialTopTabNavigator({
    OrderDetails: { screen: OrderDetails },
    OrderHistory: { screen: OrderHistory } 
});

const BottomTab = createBottomTabNavigator({
    Home: { screen: HomeTab },
    Subscription: { screen: SubscriptionTab },
    Order: { screen: OrderTab }
},
{
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName
        };
    }
}
);
const StackNavigator = createStackNavigator({
    BottomTab: { screen: BottomTab }
});
const AppContainer = createAppContainer(StackNavigator);
export default Home;
