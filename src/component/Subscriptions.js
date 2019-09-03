import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { subscriptionsFetch, skipDateChange, skipTiffin } from '../actions';

class Subscriptions extends Component {    
    componentDidMount() {
        this.props.subscriptionsFetch();
        let sdate = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');
         this.props.skipDateChange(sdate); 
         //this.props.hideSkipDialog();      
    }
    
    onDateChange(text) {
        this.props.skipDateChange(text);
    }
   
    
    onSkip(id, skip) {    
        this.props.skipTiffin({ id, skip });
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
                            <View style={styles.container}>                 
                        <Text style={styles.text}>Select Date To Skip:</Text><DatePicker
                            style={styles.date}                            
                            date={this.props.skipDate} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="select start date"
                            format="YYYY-MM-DD"
                            minDate={moment(new Date()).format('YYYY-MM-DD')}
                            maxDate="2022-09-10"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                           
                            onDateChange={this.onDateChange.bind(this)} 
                        /></View>                    
                         
                       
                            </Card.Content>                    
                            <Card.Actions>
                            <Button mode="contained" onPress={() => this.onSkip(item.id, this.props.skipDate)}>Skip Tiffin</Button>   
                            <Title style={{ color: Colors.pinkA200 }}>  Remaining Tiffin:{item.remaining_tiffin}</Title>
                                            
                            </Card.Actions>
                           
                            
                        </Card>
                    )}
                />                   
                      
                      
            </ScrollView>
        );
    }
}
const styles = {
    container: {
        
        
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 18,
        margin: 5
    },
    date: {
        
        margin: 5  

    }

};

const mapStateToProps = ({ subscribedPlans }) => {
    const { data, loading, error, refreshing, skipDate } = subscribedPlans;
    return { data, loading, error, refreshing, skipDate };
};

export default connect(mapStateToProps, { subscriptionsFetch, skipDateChange, skipTiffin })(Subscriptions);
