import React, { Component } from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, Title, Paragraph, Colors, Portal, Dialog } from 'react-native-paper';
import { orderDetailsFetch, skipTiffin, hideOrderDialog } from '../actions';

class OrderDetails extends Component {
    componentDidMount() {
        this.props.orderDetailsFetch();          
    }
    onSkip(id, tiffinTime) {          
        this.props.skipTiffin({ id, tiffinTime });
    }
    onHide() {
        this.props.hideOrderDialog();        
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
                           <Title style={{ color: Colors.deepOrange700 }}>Status : {item.order_status}</Title>
                           <Paragraph ><Text style={styles.key}>Order Date: </Text><Text style={styles.value}>{item.order_date}</Text>
                           <Text style={styles.key}>   TiffinTime: </Text><Text style={styles.value}>{item.tiffin_time}</Text>
                            </Paragraph> 
                           <Paragraph><Text style={styles.key}>Tiffin Type: </Text> <Text style={styles.value}>{item.tiffin_type}</Text>
                           <Text style={styles.key}>   Plan: </Text><Text style={styles.value}>Plan{item.title}</Text>
                            </Paragraph>                                  
                           </Card.Content>                    
                           <Card.Actions>
                           <Button mode="contained" style={styles.buttonStyle}>
                           Cancle Order</Button>   
                                       
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

const styles = {
    key:
    {
        color: Colors.blueGrey800,
        fontWeight: 'bold',
        fontSize: 17       
    },    
    buttonStyle:
    {
        marginTop: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#007aff',         

    },
    value:
    {
        color: Colors.blueGrey700,
        fontSize: 16
    }    
};

const mapStateToProps = ({ orderDetails }) => {
    const { data, loading, error, refreshing, visible, dialogMessage } = orderDetails;
    return { data, loading, error, refreshing, visible, dialogMessage };
};

export default connect(mapStateToProps, { orderDetailsFetch, skipTiffin, hideOrderDialog })(OrderDetails);
