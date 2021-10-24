import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';



import MyButton from './MyButton'

export default class Screen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            func: register.bind(this),
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.text}>Register Node App</Text>
                </View>
                <MyButton
                    fontsize={25}
                    text="DEBUG: Go to userlist"
                    func={() => this.props.navigation.navigate("userlist")}
                />
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.main}>
                        <Text style={styles.formtext}> Login: </Text>
                        <TextInput style={styles.textinput} onChangeText={(username) => this.setState({ username: username })} />
                        <Text style={styles.formtext}> Password: </Text>
                        <TextInput style={styles.textinput} secureTextEntry={true} onChangeText={(password) => this.setState({ password: password })} />
                        <MyButton
                            fontsize={25}
                            text="Register"
                            func={this.state.func}
                            styles={{ width: 300, marginLeft: 15, }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = {
    header: {
        height: 300,
        backgroundColor: '#3f5ca8',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
    },
    formtext: {
        fontSize: 25,
        marginLeft: 15
    },
    textinput: {
        backgroundColor: '#99aab5',
        height: 30,
        marginBottom: 10,
        borderColor: '#3f5ca8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        width: 300,
        marginLeft: 15
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    }
}

function register() {
    console.log(this.state.username)
    console.log(this.state.password)


    fetch('http://192.5.9.226:8080/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.password, date: new Date() })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            function customAlert(info) {
                Alert.alert(
                    "Error",
                    info,
                    [
                        { text: "OK" }
                    ]
                );
            }
            switch (res.data) {
                case 'Login already exist':
                    customAlert(res.data)
                    break;
                case 'Login input is empty':
                    customAlert(res.data)
                    break;
                case 'Password input is empty':
                    customAlert(res.data)
                    break;
                default:
                    this.props.navigation.navigate("userlist")
                    break;
            }


        });
    // .then(response => response.json())
    // .then(data => console.log(data))

    //
}