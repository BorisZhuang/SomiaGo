import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { setRootToProduct } from "./ProductBase";

class SideMenu extends Component {
  static get options() {
    return {
      sideMenu: {
        left: {
          width: 260,
          //height: 270,
          //visible: false,
          //enabled: true
        },
      },
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableHighlight onPress = {setRootToProduct}>
            <Text style={styles.welcome}>Product</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SideMenu;
