import React, { Component } from 'react';
import {View, Button, Text, TextInput, StyleSheet, ScrollView, Image, KeyboardAvoidingView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from "react-redux";
import { Provider } from "react-redux";

import { iconsMap } from '../assets/icons';
import ImageGridView from "../components/ImageGridView";
import InputWithButton from '../components/TextInput';
import {addProduct} from '../actions/products';
import store from "../config/store";

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
      description: ''
    };
    Navigation.events().bindComponent(this);
  }

  onCalculatorPressed = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.somiaGo.Calculator',
      }
    })
  }

  navigationButtonPressed({ buttonId }) {
    const id = Date.now() + Math.random().toString().slice(2);
    const newProduct = {
      productId: id,
      images: this.state.images,
      price: this.props.price,
      description: this.state.description
    };

    this.props.addProduct(newProduct);
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <ImageGridView onPickDone={(images) => this.setState({images: images})}/>
          <InputWithButton
            label="CNY"
            value={`${this.props.price}`}
            editable={false}
            placeholder={'0'}
            onPress={[this.onCalculatorPressed]}
            iconNames={["ios-calculator"]} />
          <TextInput
            style={styles.descriptionInput}
            underlineColorAndroid="transparent"
            placeholder= 'Please add description here.'
            value = {`${this.state.description}`}
            onChangeText={(text) => this.setState({description: text})} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const BORDER_RADIUS = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  descriptionInput: {
    fontSize: 20,
  }
})

const mapStateToProps = state => {
  let {price} = state.calculator;
  return {
    price
  };
};

const mapDispatchToProps = dispatch => ({
  addProduct: (newProduct) => {dispatch(addProduct(newProduct));}
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductNew);
