import React, { Component } from 'react'; 
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Appbar, Card, Button, TextInput 
} from 'react-native-paper';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }


    render() {
        return (
        
        <View>
        
        <Appbar.Header>
            <Appbar.Content
                title="Login"
            />
        </Appbar.Header>
        <Card>
            <Card.Content>
            <TextInput
             label='Email'     
             onChangeText={this.onEmailChange.bind(this)} 
             style={styles.textInputStyle}   
             value={this.props.email}        
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
            <Card.Content>
            <Button
            mode="outlined" onPress={this.onButtonPress.bind(this)}
            icon="forward"
            style={styles.buttonStyle}           
            >
             Login
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

    }
};

const mapStateToProps = state => ({
        email: state.auth.email,
        password: state.auth.password
    });
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
