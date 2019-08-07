import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';


class Subscriptions extends Component {
    render() {
        return (
            <ScrollView>
            <Card elevation={5}>
                <Card.Title title="Monthly" left={(props) => <Avatar.Icon {...props} icon="event" />} />
                <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDavx0UPgISJl_mnM1AhCLQlrd8Gc9EbQARRSU16Bbyheb55XAsA' }} />
                <Card.Content>
                <Title style={{ color: Colors.purple800 }}>Monthly One Time {'\u20B9'}1300 Subscribed</Title>
                <Paragraph>30 Tiffins in Month Only at Rs.1300
                you can skip tiffin in between, 
                that tiffin will remain in your account.</Paragraph>
                </Card.Content>                    
                <Card.Actions>
                <Button mode="contained">Skip Tiffin</Button>   
                <Title style={{ color: Colors.pinkA200 }}>  Remaining Tiffin:15</Title>                
                </Card.Actions>
            </Card>
            </ScrollView>
        );
    }
}

export default Subscriptions;
