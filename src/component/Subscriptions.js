import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import { subscriptionsFetch } from '../actions';


class Subscriptions extends Component {
    componentDidMount() {
        this.props.subscriptionsFetch();          
    }
    render() {
        return (
            <ScrollView>
                <FlatList 
                    data={this.props.data}
                    keyExtractor={item => item.id}
                    //refreshing={this.props.refreshing}
                    //onRefresh={this.props.featuresFetch()}
                    renderItem={({ item }) =>
                    (
                        <Card elevation={5}>
                            <Card.Title title={item.type} left={(props) => <Avatar.Icon {...props} icon="event" />} />
                            <Card.Cover source={{ uri: item.thumbnail }} />
                            <Card.Content>
                            <Title style={{ color: Colors.purple800 }}>{item.title} {'\u20B9'}{item.price} Subscribed</Title>
                            <Paragraph>{item.description}</Paragraph>
                            </Card.Content>                    
                            <Card.Actions>
                            <Button mode="contained">Skip Tiffin</Button>   
                            <Title style={{ color: Colors.pinkA200 }}>  Remaining Tiffin:{item.remaining_tiffin}</Title>                
                            </Card.Actions>
                        </Card>
                    )}
                />        
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ subscribedPlans }) => {
    const { data, loading, error, refreshing } = subscribedPlans;
    return { data, loading, error, refreshing };
};

export default connect(mapStateToProps, { subscriptionsFetch })(Subscriptions);
