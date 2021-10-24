import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import MyButton from './MyButton'
export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userlogo: require('../assets/avatar.png'),
            login: this.props.data.login,
            details: '',
            flag: false
        }
    }
    componentDidUpdate(prevState) {
        if (this.state.flag !== prevState.flag && this.state.flag) {
            if (this.state.details != '' && this.state.flag) {
                this.setState({ flag:false })
                console.log('ITEM.JS check')
                console.log(this.state.details)
                this.props.data.callback('details', this.state.details)
            }
        }
    }
    componentDidMount() {
        this.setState({ details: '' })
    }
    render() {
        function deleteFunc() {
            this.setState({ details: '' })
            fetch('http://192.5.9.226:8080/delete', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: this.state.login })
            })
                .then(res => res.json())
                .then(res => {
                    console.log('delete button')
                    this.props.data.callback('delete')
                })
        }
        function detailsFunc() {
            fetch('http://192.5.9.226:8080/details', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: this.state.login })
            })
                .then(res => res.json())
                .then(res => { this.setState({ details: res, flag:true }) })
        }
        return (
            <View style={styles.tablica}><Image style={styles.userlogo} source={this.state.userlogo} /><Text style={styles.text}>{this.state.login}</Text><MyButton styles={{ width: 100, marginLeft: 5 }} fontsize={25} text={'Details'} func={detailsFunc.bind(this)} /><MyButton styles={{ width: 100, marginLeft: 5 }} fontsize={25} text={'Delete'} func={deleteFunc.bind(this)} /></View>
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
    },
    text: {
        fontSize: 25
    }
}

        // const Item = ({ data }) => (
        //     <View style={styles.tablica}>
        //         <Image style={styles.userlogo} source={require('../assets/avatar.png')} /><Text>{data.login}</Text><Text> Details</Text><Text> Delete</Text>
        //     </View>
        // );

