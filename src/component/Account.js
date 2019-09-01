import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from 'react-native-paper';
import { accountDetailsFetch, custLogout } from '../actions';

class Account extends Component {
    componentDidMount() {
        this.props.accountDetailsFetch();          
    }
    // onLocationChange() {

    // }
    onLogout() {
        this.props.custLogout();
    }
    
    
    render() {
        const { fname, lname, mobile, email } = this.props.data;
        return (
            <ScrollView>
            
            <View style={styles.container}>
            <Text style={styles.key}>Name: </Text><Text style={styles.value}>{fname} {lname}{'\n'}</Text>
            <View style={styles.hairline} />
            <Text style={styles.key}>Mobile: </Text><Text style={styles.value}>{mobile}{'\n'}</Text>
            <View style={styles.hairline} />
            <Text style={styles.key}>Email: </Text><Text style={styles.value}>{email}{'\n'}</Text>
            <View style={styles.hairline} />         
            
            <TouchableOpacity
            style={styles.buttonBack}
            //onPress={this.onLocationChange.bind(this)}
            >
            <Text style={styles.buttonStyle}>Change Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.logoutBack}
            onPress={this.onLogout.bind(this)} 
            >
            <Text style={styles.buttonStyle}>Logout</Text>
            </TouchableOpacity>

            </View>           

            </ScrollView>                
           
        );
    }
}
const styles = {
key:
{
    color: Colors.deepPurple700,
    fontWeight: 'bold',
    fontSize: 17       
}, 
hairline: {
    borderBottomColor: Colors.purpleA400, 
   borderBottomWidth: 0.5
   
},
value:
{
    color: Colors.blueGrey800,
    fontSize: 16
}, 
container:
{
    flex: 1,    
    margin: 10
},   
buttonStyle:
{
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    padding: 5,  
   
    borderColor: '#007aff'     

},
buttonBack: 
{   
    margin: 10,
    backgroundColor: Colors.blue800,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 7,
    alignItems: 'center',
    elevation: 10
},
logoutBack: 
{   
    margin: 10,
    backgroundColor: Colors.pinkA400,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 7,
    alignItems: 'center',
    elevation: 10
}
  
};

const mapStateToProps = ({ accountDetails }) => {
    const { data, loading, error, refreshing } = accountDetails;
    return { data, loading, error, refreshing };
};
export default connect(mapStateToProps, { accountDetailsFetch, custLogout })(Account);

