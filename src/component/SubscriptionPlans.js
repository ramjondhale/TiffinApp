import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph, Colors, List} from 'react-native-paper';
import { subscriptionPlanFetch } from '../actions';


class SubscriptionPlans extends Component {
    componentDidMount() {
        this.props.subscriptionPlanFetch();          
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
                            <Title>{item.title} {'\u20B9'}{item.price}</Title>
                            <Paragraph>{item.description}</Paragraph>
                            </Card.Content>                    
                            <Card.Actions>
                            <Button mode="contained">Subscribe</Button>                   
                            </Card.Actions>
                        </Card>
                    )}

                />        
               
             
            </ScrollView>
        );
    }
}
const mapStateToProps = ({ subscriptionPlan }) => {
    const { data, loading, error, refreshing } = subscriptionPlan;
    return { data, loading, error, refreshing };
};
export default connect(mapStateToProps, { subscriptionPlanFetch })(SubscriptionPlans);
