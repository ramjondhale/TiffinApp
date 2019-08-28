import React, { Component } from 'react';
import { ScrollView, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph, Colors, List, Dialog, Portal } from 'react-native-paper';
import { subscriptionPlanFetch, subscribePlan, hideDialog } from '../actions';


class SubscriptionPlans extends Component {
    componentDidMount() {
        this.props.subscriptionPlanFetch();          
    }
    onSubscribe(id, tiffin) {    
        this.props.subscribePlan({ id, tiffin });
    }
    onHide() {
        this.props.hideDialog();        
    }   
      
    render() {
        return (
            
            <ScrollView>
             
                <FlatList 
                    data={this.props.data}
                    keyExtractor={(item) => item.id}
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
                            <Button mode="contained" onPress={() => this.onSubscribe(item.id, item.total_tiffin)}>Subscribe</Button>                   
                            </Card.Actions>
                        </Card>
                    )}

                /> 
                <View>
                
                    <Portal>
                    <Dialog
                        visible={this.props.visible}
                        onDismiss={this.onHide.bind(this)} >
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>{this.props.dialogMessage}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={this.onHide.bind(this)}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                    </Portal>
                </View>       
               
             
            </ScrollView>
        );
    }
}
const mapStateToProps = ({ subscriptionPlan }) => {
    const { data, loading, error, refreshing, visible, dialogMessage } = subscriptionPlan;
    return { data, loading, error, refreshing, visible, dialogMessage };
};
export default connect(mapStateToProps, { subscriptionPlanFetch, subscribePlan, hideDialog })(SubscriptionPlans);
