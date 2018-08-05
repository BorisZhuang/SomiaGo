import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
        <Text style={styles.welcome}>{this.props.text}</Text>
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
