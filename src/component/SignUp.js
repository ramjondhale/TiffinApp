import React, { Component } from 'react'; 
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, TextInput, ActivityIndicator 
} from 'react-native-paper';
import { formUpdate, createAccount } from '../actions/SignUpActions';

class SignUp extends Component {
    onButtonPress() {
        const { fname, lname, mobile, email, password, paddress } = this.props;
        this.props.createAccount({ fname, lname, mobile, email, password, paddress });
    }

    renderMessage() {
        if (this.props.message) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorStyle}>
                        {this.props.message}
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
                mode="outlined" 
                onPress={this.onButtonPress.bind(this)}
                style={styles.buttonStyle}
            >
                Sign Up
            </Button>
        );
    }

    render() {      
        return (
            <ScrollView>
            <Card>
                <Card.Content>
                <TextInput
                label='First Name'     
                onChangeText={value => this.props.formUpdate({ prop: 'fname', value })} 
                style={styles.textInputStyle}   
                value={this.props.fname}        
                />  
                </Card.Content>

                <Card.Content>
                <TextInput
                label='Last Name'     
                onChangeText={value => this.props.formUpdate({ prop: 'lname', value })} 
                style={styles.textInputStyle}   
                value={this.props.lname}        
                />  
                </Card.Content>

                <Card.Content>
                <TextInput
                label='Mobile Number'     
                onChangeText={value => this.props.formUpdate({ prop: 'mobile', value })} 
                style={styles.textInputStyle}   
                value={this.props.mobile}        
                />  
                </Card.Content>
                
                <Card.Content>
                <TextInput
                label='Email Id'     
                onChangeText={value => this.props.formUpdate({ prop: 'email', value })} 
                style={styles.textInputStyle}   
                value={this.props.email}        
                />  
                </Card.Content>

                <Card.Content>
                <TextInput
                label='Password'     
                onChangeText={value => this.props.formUpdate({ prop: 'password', value })} 
                style={styles.textInputStyle}   
                value={this.props.password}        
                />  
                </Card.Content>

                <Card.Content>
                <TextInput
                label='Confirm Password'     
                onChangeText={value => this.props.formUpdate({ prop: 'cpassword', value })} 
                style={styles.textInputStyle}   
                value={this.props.cpassword}        
                />  
                </Card.Content>

                <Card.Content>
                <TextInput
                label='Permanent Address'     
                onChangeText={value => this.props.formUpdate({ prop: 'paddress', value })} 
                style={styles.textInputStyle}   
                value={this.props.paddress}        
                />  
                </Card.Content>
                <Card.Content>
                    {this.renderMessage()}
                </Card.Content>

                <Card.Content>
                {this.renderButton()}
                </Card.Content>

            </Card>
            </ScrollView>
           
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

const mapStateToProps = (state) => {
    const { fname, lname, mobile, email, password, cpassword, paddress, loading, message } = state.signUp;
    return { fname, lname, mobile, email, password, cpassword, paddress, loading, message };
};

export default connect(mapStateToProps, { formUpdate, createAccount })(SignUp);
