import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class Screen2 extends Component {
    render() {
        return (
            <View>
                <Button
                    title="go to screen1"
                    onPress={() => this.props.navigation.navigate("s1")}
                />
                <Text> screen2 </Text>
            </View>
        )
    }
}
