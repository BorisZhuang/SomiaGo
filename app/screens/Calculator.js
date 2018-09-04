import React, { Component } from 'react';
import {View, Text, TextInput, TouchableHighlight, KeyboardAvoidingView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import InputWithButton from '../components/TextInput';
import { iconsMap } from '../assets/icons';

class Calculator extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        backButton: { // android
          color: "rgba(0, 0, 0, 0.87)"
        },
        buttonColor: "rgba(0, 0, 0, 0.87)", // iOS
        title: {
          text: 'Calculator',
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
  }

  onMsrpChangeText = () => {
    console.log("Msrp is changed.");
  }

  onDiscountChangeText = () => {
    console.log("Discount is changed.");
  }

  onWeightChangeText = () => {
    console.log("Weight is changed.");
  }

  onShippingChangeText = () => {
    console.log("Shipping is changed.");
  }

  onTaxChangeText = () => {
    console.log("Tax is changed.");
  }

  onProfitChangeText = () => {
    console.log("Profit rate is changed.");
  }

  onCurrencyChangeText = () => {
    console.log("Currency is changed.");
  }

  onPlusPressed = () => {
    console.log("plus is pressed.");
  }

  onMinusPressed = () => {
    console.log("minus is pressed.");
  }

  render() {
    const priceGroupContainerStyle = [
      styles.groupContainer,
      { backgroundColor: '#b0b0b0' }
    ];

    const priceInputStyle = [
      styles.input,
      { color : '#FFFFFF' }
    ];

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {/* MSRP section */}
          <View style={styles.groupContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>MSRP (USD)</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="0"
                  value={this.state.price.toString()}
                  onChangeText={this.onMsrpChangeText} />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View
                style={[styles.labelContainer, {marginBottom: 1}]}>
                <Text style={styles.labelText}>Discount</Text>
              </View>
              <View style={[styles.inputContainer, {marginBottom: 1}]}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.price.toString()}
                  onChangeText={this.onDiscountChangeText} />
              </View>
            </View>
          </View>
          {/* Shipping section */}
          <View style={styles.groupContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Weight (pound)</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.price.toString()}
                  onChangeText={this.onWeightChangeText} />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View
                style={[styles.labelContainer, {marginBottom: 1}]}>
                <Text style={styles.labelText}>Shipping (per pound)</Text>
              </View>
              <View style={[styles.inputContainer, {marginBottom: 1}]}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.price.toString()}
                  onChangeText={this.onShippingChangeText} />
              </View>
            </View>
          </View>
          {/* Tax/Currency/Profit section */}
          <View style={styles.groupContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Tax (%)</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.price.toString()}
                  onChangeText={this.onTaxChangeText} />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Profit (%)</Text>
              </View>
              <View style={[styles.inputContainer, {width: '25%'}]}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.price.toString()}
                  onChangeText={this.onProfitChangeText} />
              </View>
              <View style={styles.plusMinusContainer}>
                <TouchableHighlight onPress={this.onPlusPressed}>
                  <Icon name="ios-add" style={styles.icon} />
                </TouchableHighlight>
                <View style={styles.border} />
                <TouchableHighlight onPress={this.onMinusPressed}>
                  <Icon name="ios-remove" style={styles.icon} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={[styles.labelContainer, {marginBottom: 1}]}>
                <Text style={styles.labelText}>Currency</Text>
              </View>
              <View style={styles.border} />
              <View style={[styles.inputContainer, {marginBottom: 1}]}>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                value={this.state.price.toString()}
                onChangeText={this.onCurrencyChangeText} />
              </View>
            </View>
          </View>
          {/* Price/Profit section */}
          <View style={priceGroupContainerStyle}>
            <View style={styles.rowContainer}>
              <View
                style={styles.labelContainer}>
                <Text style={styles.labelText}>Price (CNY)</Text>
              </View>
              <TextInput
                style={priceInputStyle}
                editable={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                value={this.state.price.toString()}
                onChangeText={this.onMsrpChangeText} />
            </View>
            <View style={styles.rowContainer}>
              <View
                style={[styles.labelContainer, {marginBottom: 1}]}>
                <Text style={styles.labelText}>Profit (CNY)</Text>
              </View>
              <TextInput
                style={priceInputStyle}
                editable={false}
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                value={this.state.price.toString()}
                onChangeText={this.onDiscountChangeText} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10
  },
  groupContainer: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#b0b0b0',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  labelContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    marginLeft: 1,
    //backgroundColor: '#b0b0b0',
  },
  labelText: {
    fontWeight: '500',
    fontSize: 15,
    paddingHorizontal: 4,
    color: '#b0b0b0',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    width: '50%',
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    marginRight: 1,
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '#000000',
  },
  plusMinusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    fontSize: 45,
    color: '#FFFFFF',
  }
})

export default Calculator;
