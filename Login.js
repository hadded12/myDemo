import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pwd: ""
        }
    }
    goHome() {
        console.log("state ", this.state)
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#000000"
                    underlineColorAndroid="transparent"
                    onChangeText={text => {
                        this.setState({email: text});
                    }}
                    value={this.state.email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    placeholderTextColor="#000000"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    onChangeText={text => {
                        this.setState({pwd: text});
                    }}
                    value={this.state.pwd}
                />

                <TouchableOpacity style={styles.button} onPress={() => this.goHome()}>
                    <Text style={styles.textButton}> Connecter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#1A3A7D',
        height: 55,
        width: '80%',
        marginBottom: 10,
        justifyContent: 'center',
        paddingStart: 16,
        paddingEnd: 16,
        alignSelf: 'center',
    },
    button: {
        height: 55,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#1A3A7D'
    },
    textButton: {
        color: '#FFFFFF',
    },
})

export default Login;