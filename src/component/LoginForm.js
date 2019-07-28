import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Appbar, Card, Button, TextInput,  ActivityIndicator 
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

    renderMessage() {
        if (this.props.token) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.messageStyle}>
                    'Login Successful.
                    token: '{this.props.token}
                    </Text>
                </View>
            );
        }
    }

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
            {this.renderError()}
            {this.renderMessage()}
            <Card.Content>
           
            {this.renderButton()}
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
    const { email, password, error, token, loading } = auth;
    return { email, password, error, token, loading };
    };
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
