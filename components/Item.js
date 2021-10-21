import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import MyButton from './MyButton'
export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userlogo: require('../assets/avatar.png'),
            login: this.props.data.login
        }
    }
    render() {
        return (
            <View style={styles.tablica}><Image style={styles.userlogo} source={this.state.userlogo} /><Text>{this.state.login}</Text><MyButton text={'Details'} /><MyButton text={'Delete'} /></View>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ratio = windowHeight > windowWidth ? windowWidth : windowHeight
const styles = {
    userlogo: {
        width: ratio * 0.2,
        height: ratio * 0.2
    },
    tablica: {
        flex: 1,
        flexDirection: 'row'
    }
}

        // const Item = ({ data }) => (
        //     <View style={styles.tablica}>
        //         <Image style={styles.userlogo} source={require('../assets/avatar.png')} /><Text>{data.login}</Text><Text> Details</Text><Text> Delete</Text>
        //     </View>
        // );