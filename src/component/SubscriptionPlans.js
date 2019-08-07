import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';


class SubscriptionPlans extends Component {
    render() {
        return (
            <ScrollView>
                <Card elevation={5}>
                    <Card.Title title="Monthly" left={(props) => <Avatar.Icon {...props} icon="event" />} />
                    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDavx0UPgISJl_mnM1AhCLQlrd8Gc9EbQARRSU16Bbyheb55XAsA' }} />
                    <Card.Content>
                    <Title>Monthly One Time {'\u20B9'}1300</Title>
                    <Paragraph>30 Tiffins in Month Only at Rs.1300
                    you can skip tiffin in between, 
                    that tiffin will remain in your account.</Paragraph>
                    </Card.Content>                    
                    <Card.Actions>
                    <Button mode="contained">Subscribe</Button>                   
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Title title="Monthly" left={(props) => <Avatar.Icon {...props} icon="event" />} />
                    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDavx0UPgISJl_mnM1AhCLQlrd8Gc9EbQARRSU16Bbyheb55XAsA' }} />
                    <Card.Content>
                    <Title>Monthly Two Time {'\u20B9'}2500</Title>
                    <Paragraph>60 Tiffins in Month Only at Rs.2500
                    you can skip tiffin in between, 
                    that tiffin will remain in your account.</Paragraph>
                    </Card.Content>                    
                    <Card.Actions>
                    <Button mode="contained">Subscribe</Button>                   
                    </Card.Actions>
                </Card>
            </ScrollView>
        );
    }
}
export default SubscriptionPlans;
