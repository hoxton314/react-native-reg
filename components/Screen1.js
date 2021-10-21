import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './Item';

export default class Screen1 extends Component {
    render() {


        const renderItem = ({ item }) => (<Item data={item} />);
        return (
            <View>
                <Button
                    title="go to screen2"
                    onPress={() => this.props.navigation.navigate("s2")}
                />
                <Text> screen1 </Text>
                <FlatList
                    data={
                        [
                            { login: 'aaa', id: '58694a0f-3da1-471f-bd96-145571e29d72' },
                            { login: 'bbb', id: '98694a0f-3da1-471f-bd96-145571e29d72' },
                            { login: 'cccc', id: '68694a0f-3da1-471f-bd96-145571e29d72' },
                        ]
                    }
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}


const styles = {
    userlogo: {
        width: 50,
        height: 50
    },
    tablica: {
        flex: 1,
        flexDirection: 'row'
    }
}