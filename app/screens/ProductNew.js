import React, { Component } from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

class ProductNew extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'New Product',
          fontSize: 14,
          fontFamily: 'Helvetica',
        }
      }
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 33
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ProductNew;
