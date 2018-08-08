import React, { Component } from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

class ProductFavo extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        leftButtons: [
          {
            id: 'leftbutton',
            icon: require('../Images/one.png'),
          }
        ],
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    this.showSideMenu('left');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.text}</Text>
      </View>
    );
  }

  showSideMenu(side) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible: true
        }
      }
    });
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

export default ProductFavo;
