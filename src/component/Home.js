import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Menu from './Menu';
import Features from './Features';
import SubscriptionPlans from './SubscriptionPlans';
import Subscriptions from './Subscriptions';
import OrderDetails from './OrderDetail';
import OrderHistory from './OrderHistory';
import tabBarIcons from './common/tabBarIcon';
import Account from './Account';

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
    Home: { screen: HomeTab,
        navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: tabBarIcons('home')
      }
    },
    Subscription: { screen: SubscriptionTab,
        navigationOptions: {
            tabBarLabel: 'Subscription',
            tabBarIcon: tabBarIcons('youtube-subscription')
          } 
        },
    Order: { screen: OrderTab,
        navigationOptions: {
            tabBarLabel: 'Order',
            tabBarIcon: tabBarIcons('calendar-check')
          } 
         },
    Account: { screen: Account,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: tabBarIcons('account')
          }     
        }
    
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
