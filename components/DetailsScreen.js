import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.buttonData[0],
      userlogo: require('../assets/avatar.png')
    };
  }

  render() {
    console.log('====DETAILS====')
    console.log(this.state.data)
    return (
      <View style={styles.main}>
        <View style={styles.row}>
          <Image style={styles.userlogo} source={this.state.userlogo} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> login: </Text>
          <Text style={styles.datatext}>{this.state.data.login} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> password: </Text>
          <Text style={styles.datatext}>{this.state.data.password} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}> registered: </Text>
          <Text style={styles.datatext}>{this.state.data.date} </Text>
        </View>
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ratio = windowHeight > windowWidth ? windowWidth : windowHeight
const styles = {
  main: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    flexDirection: 'column'
  },
  userlogo: {
    width: ratio * 0.4,
    height: ratio * 0.4,
  },
  datatext: {
    color: '#3f5ca8',
    fontSize: ratio*0.045
  },
  row: {
    flexDirection: 'row'
  },
  title:{
    fontSize: ratio*0.045
  }
}