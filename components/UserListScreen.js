import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';


import Item from './Item';
import MyButton from './MyButton'

export default class UserListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flatlist: [],
            userlistFlag: ''
        }
    }
    componentDidMount() {

        fetch('http://192.5.9.226:8080/getusers')
            .then(response => response.json())
            .then(data => this.setState({ flatlist: data.map(a => ({ login: a.login, id: a.id, callback: this.handleCallback })) }));

    }
    componentDidUpdate(prevState) {
        if (this.state.userlistFlag !== prevState.userlistFlag) {
            if (this.state.userlistFlag != '') {
                this.setState({ userlistFlag: '' })
                fetch('http://192.5.9.226:8080/getusers')
                    .then(response => response.json())
                    .then(data => this.setState({ flatlist: data.map(a => ({ login: a.login, id: a.id, callback: this.handleCallback })) }));
            }
        }
    }
    handleCallback = (type, buttonData) => {
        if (type == 'delete') {
            console.log('refresh')
            this.setState({ userlistFlag: 'deleted' })
        } else if (type == 'details') {
            this.props.navigation.navigate("details", { buttonData })
        }

    }
    render() {


        const renderItem = ({ item }) => (<Item data={item} />);
        return (
            <View style={{ marginLeft: 15 }}>
                <MyButton
                    styles={{ marginLeft: 'auto', marginRight: 'auto' }}
                    fontsize={25}
                    text="Back to register page"
                    func={() => this.props.navigation.navigate("register")}
                />
                <Text style={{ fontSize: 35, textAlign: 'center' }}> Userlist </Text>
                <FlatList
                    data={this.state.flatlist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}
