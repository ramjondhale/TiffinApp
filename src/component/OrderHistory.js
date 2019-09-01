import React, { Component } from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Title, Paragraph, Colors } from 'react-native-paper';
import { orderHistoryFetch } from '../actions';

class OrderHistory extends Component {
    componentDidMount() {
        this.props.orderHistoryFetch();          
    }

    render() {
        return (
            <ScrollView>
            <FlatList 
                   data={this.props.data}
                   keyExtractor={item => item.id}                   
                   renderItem={({ item }) =>
                   (
                       <Card elevation={10}>
                       
                           <Card.Cover style={{ height: 120 }} source={{ uri: item.thumbnail }} />
                           <Card.Content>
                           <Title style={{ color: Colors.lightGreen700 }}>Status : {item.order_status}</Title>
                           <Paragraph ><Text style={styles.key}>Order Date: </Text><Text style={styles.value}>{item.order_date}</Text>
                           <Text style={styles.key}>   TiffinTime: </Text><Text style={styles.value}>{item.tiffin_time}</Text>
                            </Paragraph> 
                           <Paragraph><Text style={styles.key}>Tiffin Type: </Text> <Text style={styles.value}>{item.tiffin_type}</Text>
                           <Text style={styles.key}>   Plan: </Text><Text style={styles.value}>Plan{item.title}</Text>
                            </Paragraph>                                  
                           </Card.Content>                    
                           
                       </Card>
                   )}
               />   
           </ScrollView>
        );
    }
}

const styles = {
    key:
    {
        color: Colors.blueGrey800,
        fontWeight: 'bold',
        fontSize: 17       
    },    
    
    value:
    {
        color: Colors.blueGrey700,
        fontSize: 16
    }    
};

const mapStateToProps = ({ orderHistory }) => {
    const { data, loading, error, refreshing } = orderHistory;
    return { data, loading, error, refreshing };
};
export default connect(mapStateToProps, { orderHistoryFetch })(OrderHistory);

