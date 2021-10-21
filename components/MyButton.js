import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
export default class MyButton extends Component {
    constructor(props) {
        super(props)
        MyButton.propTypes = {
            text: PropTypes.string,
            func: PropTypes.func
        }
        this.state = {
            text: this.props.text,
            func: () => {
                fetch('http://http://10.18.71.87:8080/')
                    //.then(response => response.json())
                    .then(data => console.log(data));
            }
        }
    }

    render() {
        return (
            <TouchableOpacity styles={styles.touch} onPress={this.state.func}>
                <View>
                    <Text style={styles.text}> {this.state.text} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = {
    touch: {

    },
    text: {
        fontWeight: 'bold'
    }
}