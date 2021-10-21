import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="s1" component={Screen1} options={screenOpt.s1} />
          <Stack.Screen name="s2" component={Screen2} options={screenOpt.s2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const screenOpt = {
  s1: {
    title: 'title',
    headerStyle: {
      backgroundColor: '#ff0000',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false
  },
  s2: {
    title: 'title',
    headerStyle: {
      backgroundColor: '#ff00ff',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

}
