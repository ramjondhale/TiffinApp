import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import { connect } from 'react-redux';
import { menuFetch } from '../actions';

class Menu extends Component {
    componentDidMount() {
        this.props.menuFetch();          
    }
    
    render() {
        return (
            
            <ScrollView>
                <List.Section title="Menu of the Week">
                    <FlatList 
                            data={this.props.data}
                            keyExtractor={item => item.id}
                            //refreshing={this.props.refreshing}
                            //onRefresh={this.props.menuFetch()}
                            renderItem={({ item }) =>
                            (<List.Accordion
                                title={item.day}
                                left={props => <List.Icon {...props} icon="label" />}
                            >
                                <List.Item 
                                title={item.bhaji}                  
                                />
                                <List.Item 
                                title={item.sbhaji}                    
                                />
                                <List.Item 
                                title={item.dal}                  
                                />
                                <List.Item 
                                title={item.rice}                    
                                />
                                <List.Item 
                                title={item.chapati}                   
                                />
                                <List.Item 
                                title={item.extras}                   
                                />
                            </List.Accordion>)}

                    />                
                </List.Section>
            </ScrollView>

            
        );
    }
}

const mapStateToProps = ({ menu }) => {
    const { data, loading, error, refreshing } = menu;
    return { data, loading, error, refreshing };
};
export default connect(mapStateToProps, { menuFetch })(Menu);
