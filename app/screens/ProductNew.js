import React, { Component } from 'react';
import {View, Button, Text, TextInput, StyleSheet, TouchableHighlight, ScrollView, Image, KeyboardAvoidingView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from "react-redux";
import { Provider } from "react-redux";

import ImageGridView from '../components/ImageGridView';
import InputWithButton from '../components/TextInput';
import {addProduct} from '../actions/products';
import store from "../config/store";
import { iconsMap } from '../assets/icons';

class ProductNew extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        backButton: { // android
          color: "rgba(0, 0, 0, 0.87)"
        },
        buttonColor: "rgba(0, 0, 0, 0.87)", // iOS
        title: {
          text: 'New Product',
          fontSize: 18,
          fontFamily: 'Helvetica',
        },
        rightButtons: [
          {
            id: 'productAddConfirmBtn',
            //text: 'Add Product',
            color: 'green',
            icon: iconsMap['md-checkmark'],
          }
        ]
      },
      bottomTabs: {
        visible: false,
        animate: false, // Controls whether BottomTabs visibility changes should be animated
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      price: 0,
      description: 'Please add description here.'
    };
    Navigation.events().bindComponent(this);
  }

  onPickDone = (images) => {
    this.setState(state => {
      state.images = images;
      return state;
    });
  }

  navigationButtonPressed({ buttonId }) {
    const id = Date.now() + Math.random().toString().slice(2);
    const newProduct = {
      productId: id,
      images: this.state.images,
      price: this.state.price,
      description: this.state.description
    };

    this.props.dispatch(addProduct(newProduct));
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <ImageGridView onPickDone={this.onPickDone}/>
          <InputWithButton
            value={this.state.price.toString()}
            onChangeText={
              text => {
                this.setState(state => {
                  state.price = text;
                  return state;
                });
                console.log(this.state.price);
              }
            }
            onPress={() => console.log("pressed.")} />
          <TextInput
            style={styles.descriptionInput}
            underlineColorAndroid="transparent"
            placeholder= {this.state.description}
            value = ""
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
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  descriptionInput: {
    fontSize: 20,
  }
})

export default connect()(ProductNew);
