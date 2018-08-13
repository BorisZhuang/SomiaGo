import React, { Component } from 'react';
import {View, Button, Text, StyleSheet, TouchableHighlight, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ImageGridView from '../components/ImageGridView';

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
      },
      bottomTabs: {
        visible: false,
        animate: false, // Controls whether BottomTabs visibility changes should be animated
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {images: []};
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageGridView/>
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
  },
  imagesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 3
  }
})

export default ProductNew;
