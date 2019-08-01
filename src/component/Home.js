
 import React, { Component } from 'react';
 import { Text, View } from 'react-native';
 //import Icon from 'react-native-vector-icons/MaterialIcons';
 import TabBar from '@mindinventory/react-native-tab-bar-interaction';

// class Home extends Component {
//     render() {
//          return (
//             <View>
//             <Text> hello </Text> 
//             </View>
//          );
//     }
// }

// export default Home;


class Home extends Component {
      render() {
      return (      
          
           <TabBar>
            <TabBar.Item
                icon={require('./home1.png')}
                selectedIcon={require('./home.png')}
                title="Home"
                screenBackgroundColor={{ backgroundColor: '#008080' }}
            >
              <View>
                 <Text> Home</Text>
              </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./sub1.png')}
                selectedIcon={require('./sub2.png')}
                title="Subscriptions"
                screenBackgroundColor={{ backgroundColor: '#F08080' }}
            >
                <View>
                   <Text>Subscriptions</Text>
                </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('./acc1.png')}
                selectedIcon={require('./acc2.png')}
                title="Account"
                screenBackgroundColor={{ backgroundColor: '#485d72' }}
            >
              <View>
                  <Text>Account</Text>
              </View>
            </TabBar.Item>
          </TabBar>
      );
    }
}

    export default Home;
