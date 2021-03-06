import React, { Component } from 'react'; 
import RNSecureStorage from 'rn-secure-storage';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, Button, TextInput, ActivityIndicator 
} from 'react-native-paper';
import { mobileChanged, passwordChanged, loginUser, getToken } from '../actions';


class LoginForm extends Component {   
   componentDidMount() {
    const { mobile, password } = this.props;
    if (mobile !== '') {
        this.props.loginUser({ mobile, password });
    }
    
   }

    onMobileChange(text) {
        this.props.mobileChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { mobile, password } = this.props;
        this.props.loginUser({ mobile, password });
    }
    

    onSignUp() {
        Actions.signUp();
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    // renderMessage() {
    //     if (this.props.login) {
    //         return (
    //             <View style={{ backgroundColor: 'white' }}>
    //                 <Text style={styles.messageStyle}>
    //                 Login Successful.                   
    //                 </Text>
    //             </View>
    //         );
    //     }
    // }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator animating />;
        }

        return (
            <Button
            mode="outlined" onPress={this.onButtonPress.bind(this)}
            icon="forward"
            style={styles.buttonStyle}           
            >
             Login
            </Button>
        );
    }    
   

    render() {
        return (
        
        <View>
        
        <Card>
            <Card.Content>
            <TextInput
             label='Mobile'     
             onChangeText={this.onMobileChange.bind(this)} 
             style={styles.textInputStyle}   
             value={this.props.mobile}        
            />           

            </Card.Content>
            <Card.Content>
            <TextInput
             label='Password'     
             onChangeText={this.onPasswordChange.bind(this)}
             style={styles.textInputStyle}
             value={this.props.password}
             secureTextEntry
            />            
            </Card.Content>
            {this.renderError()}
            {/* {this.renderMessage()} */}
            <Card.Content>
           
            {this.renderButton()}
            </Card.Content>

            <Card.Content>
                <Button
                mode="outlined" 
                onPress={this.onSignUp.bind(this)}
                style={styles.buttonStyle}           
                >
                Sign Up
                </Button>
            </Card.Content>
           
        </Card>
        </View>          
       
        );
               }
}
const styles = {
    textInputStyle:
    {
        marginTop: 5
    },
    buttonStyle:
    {
        marginTop: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#007aff',         

    },
    errorStyle:
    {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    messageStyle:
    {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green'
    }
};

const mapStateToProps = ({ auth }) => {
    const { mobile, password, error, loading, login } = auth;
    return { mobile, password, error, loading, login };
    };
export default connect(mapStateToProps,
     { mobileChanged, passwordChanged, loginUser, getToken }
     )(LoginForm);
