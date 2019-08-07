import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';

class OrderHistory extends Component {
    render() {
        return (
            <ScrollView>
            <Card elevation={10}>
               
                <Card.Cover style={{ height: 120 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDavx0UPgISJl_mnM1AhCLQlrd8Gc9EbQARRSU16Bbyheb55XAsA' }} />
                <Card.Content>
                <Title style={{ color: Colors.lightGreen700 }}>Tiffin Delivered</Title>
                <Paragraph style={{ fontSize: 17 }}>16 Apr 2017, 8:10 PM </Paragraph>               
                <Paragraph style={{ fontSize: 17 }}>2 X Tiffin</Paragraph>                
                <Paragraph style={{ fontSize: 17 }}>Delivered By: Sachin Ghuge </Paragraph>             
                <Paragraph style={{ fontSize: 17 }}>Plan : Monthly One Time</Paragraph>
                </Card.Content>                    
                <Card.Actions>
                <Button mode="contained">Rate Tiffin</Button>   
                            
                </Card.Actions>
            </Card>
            <Card elevation={5}>
               
               <Card.Cover style={{ height: 120 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDavx0UPgISJl_mnM1AhCLQlrd8Gc9EbQARRSU16Bbyheb55XAsA' }} />
               <Card.Content>
               <Title style={{ color: Colors.lightGreen700 }}>Tiffin Delivered</Title>
               <Paragraph style={{ fontSize: 17 }}>16 Apr 2017, 8:10 PM </Paragraph>               
               <Paragraph style={{ fontSize: 17 }}>2 X Tiffin</Paragraph>                
               <Paragraph style={{ fontSize: 17 }}>Delivered By: Sachin Ghuge </Paragraph>             
               <Paragraph style={{ fontSize: 17 }}>Plan : Monthly One Time</Paragraph>
               </Card.Content>                    
               <Card.Actions>
               <Button mode="contained">Rate Tiffin</Button>   
                           
               </Card.Actions>
           </Card>
           <Card elevation={5}>
               
               <Card.Cover style={{ height: 120 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDavx0UPgISJl_mnM1AhCLQlrd8Gc9EbQARRSU16Bbyheb55XAsA' }} />
               <Card.Content>
               <Title style={{ color: Colors.lightGreen700 }}>Tiffin Delivered</Title>
               <Paragraph style={{ fontSize: 17 }}>16 Apr 2017, 8:10 PM </Paragraph>               
               <Paragraph style={{ fontSize: 17 }}>2 X Tiffin</Paragraph>                
               <Paragraph style={{ fontSize: 17 }}>Delivered By: Sachin Ghuge </Paragraph>             
               <Paragraph style={{ fontSize: 17 }}>Plan : Monthly One Time</Paragraph>
               </Card.Content>                    
               <Card.Actions>
               <Button mode="contained">Rate Tiffin</Button>   
                           
               </Card.Actions>
           </Card>
            </ScrollView>
        );
    }
}
export default OrderHistory;

