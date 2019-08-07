import React, { Component } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { List, Colors, ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import { featuresFetch } from '../actions';

class Features extends Component {
    componentDidMount() {
        this.props.featuresFetch();          
    }
    
    renderList() {
        if (this.props.loading) {
            return (
            <View>
             <ActivityIndicator animating />;
            </View>
            ); 
        } 
       return (        
            <List.Section >
            <FlatList 
                data={this.props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                (<List.Item
                        title={item.feature}                            
                        left={props => <List.Icon {...props} icon="star" color={Colors.purpleA400} />}
                    />)}

            />
            </List.Section>
        
       ); 
    }
    
       
    render() {     
        console.log(this.props.data);
              
             return (
               <ScrollView>
                   {this.renderList()}
               </ScrollView>
            );
    }
}
const mapStateToProps = ({ features }) => {
    const { data, loading, error } = features;
    return { data, loading, error };
};
export default connect(mapStateToProps, { featuresFetch })(Features);
