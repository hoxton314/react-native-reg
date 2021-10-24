import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from "./components/UserListScreen"
import RegisterScreen from "./components/RegisterScreen"
import DetailsScreen from './components/DetailsScreen';

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
          <Stack.Screen name="register" component={RegisterScreen} options={screenOpt.register} />
          <Stack.Screen name="userlist" component={UserListScreen} options={screenOpt.userlist} />
          <Stack.Screen name="details" component={DetailsScreen} options={screenOpt.details} initialParams={{ buttonData: [{login:''}] }}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const screenOpt = {
  userlist: {
    title: 'admin page',
    headerStyle: {
      backgroundColor: '#3f5ca8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerShown: false
  },
  register: {
    title: 'Register Node App',
    headerStyle: {
      backgroundColor: '#3f5ca8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerShown: false
  },
  details: {
    title: 'user details',
    headerStyle: {
      backgroundColor: '#3f5ca8',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

}
