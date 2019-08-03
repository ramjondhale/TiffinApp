import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, Colors } from 'react-native-paper';

class Menu extends Component {
    
    render() {
        return (
            
            <ScrollView>
                <List.Section title="Menu of the Week">
                    <List.Accordion
                    title="Monday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>

                    <List.Accordion
                    title="Tuesday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>

                    <List.Accordion
                    title="Wednesday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>

                    <List.Accordion
                    title="Thursday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>

                    <List.Accordion
                    title="Friday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>

                    <List.Accordion
                    title="Saturday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>

                    <List.Accordion
                    title="Sunday"
                    left={props => <List.Icon {...props} icon="label" />}
                    >
                    <List.Item 
                    title="Aloo Mutter"                  
                    />
                    <List.Item 
                    title="Baingan Masala"                    
                    />
                    <List.Item 
                    title="Dal"                    
                    />
                    <List.Item 
                    title="Jeera Rice"                    
                    />
                    <List.Item 
                    title="Chapati"                    
                    />
                    <List.Item 
                    title="Lonch,Kanda"                    
                    />
                    </List.Accordion>
                   
                 </List.Section>
            </ScrollView>

            
        );
    }
}
export default Menu;
