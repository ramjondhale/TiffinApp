import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, Colors } from 'react-native-paper';

class Features extends Component {
    render() {
        return (
            <ScrollView>
            
            <List.Section >
                <List.Item
                    title="Tasty Food."
                  
                    left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                />
                <List.Item
                    title="Food served in HotPot."
                  
                    left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                />
                <List.Item
                    title="Sweat Dish 3 days in week."
                    
                    left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                />
                <List.Item
                    title="Non-Veg 2 days in week."
                    
                    left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                />
                <List.Item
                    title="Free Home Delivery."
                  
                    left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                />
                <List.Item
                    title="Best quality material used for Cooking."
                   
                    left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                />
            </List.Section>
            </ScrollView>
        );
    }
}
export default Features;
