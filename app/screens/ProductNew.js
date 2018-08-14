import React, { Component } from 'react';
import {View, Button, Text, TextInput, StyleSheet, TouchableHighlight, ScrollView, Image, KeyboardAvoidingView} from 'react-native';
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
    this.state = {
      pickedImages: [],
      price: 0,
      description: 'Please add description here.'
    };
  }

  onPickDone = (images) => {
    this.setState(state => {
      state.pickedImages = images;
      return state;
    });
    console.log(this.state.pickedImages);
  }

  render() {
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ImageGridView onPickDone={this.onPickDone}/>
        <View style={styles.border} />
        <TextInput
          style={{height: 40, width: 120}}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          value = {this.state.price.toString()}
          onChangeText={
            text => {
              this.setState(state => {
                state.price = text;
                return state;
              });
              console.log(this.state.price);
            }
          }/>
        <View style={styles.border} />
        <TextInput
          style={{height: 40, width: '90%'}}
          underlineColorAndroid="transparent"
          value = {this.state.description}
          onChangeText={
            text => {
              this.setState(state => {
                state.description = text;
                return state;
              });
              console.log(this.state.description);
            }
          }/>
          </KeyboardAvoidingView>
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
  },
  border: {
    width: '90%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E2E2E2",
  },
})

export default ProductNew;
