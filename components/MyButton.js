import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
export default class MyButton extends Component {
    constructor(props) {
        super(props)
        MyButton.propTypes = {
            text: PropTypes.string,
            func: PropTypes.func,
            fontsize: PropTypes.number,
            styles: PropTypes.object
        }
        this.state = {
            text: this.props.text,
            func: this.props.func,
            fontsize: this.props.fontsize,
            styles: this.props.styles,
        }
    }

    render() {
        const styles = {
            text: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: '#7289da',
                borderColor: '#3f5ca8',
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 1,
                padding: 1,
                fontSize: this.state.fontsize
            }
        }
        
        return (
            <TouchableOpacity onPress={this.state.func}>
                <View style={this.state.styles}>
                    <Text style={styles.text}> {this.state.text} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

