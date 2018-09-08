import React, { Component } from 'react';
import {Button, View, Text, TextInput, TouchableHighlight, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

class CalculatorForm extends Component {
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

  onSubmitPressed = () => {
    console.log("submit is pressed.")
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

    const msrpInput = (props) => {
      const { input, ...inputProps } = props;
      return (<TextInput
        style={styles.input}
        keyboardType="numeric"
        underlineColorAndroid="transparent"
        placeholder="0"
        onChangeText={input.onChange}
        {...inputProps} />)
    };

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
                <TextInput style={styles.input}
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  placeholder="0"
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
                  placeholder='0'
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
                  //value={this.state.price.toString()}
                  placeholder='0'
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
                  //value={this.state.price.toString()}
                  placeholder='0'
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
                  //value={this.state.price.toString()}
                  placeholder='0'
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
                  //value={this.state.price.toString()}
                  placeholder='0'
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
                //value={this.state.price.toString()}
                placeholder='0'
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
                //value={this.state.price.toString()}
                placeholder='0'
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
                //value={this.state.price.toString()}
                placeholder='0'
                onChangeText={this.onDiscountChangeText} />
            </View>
          </View>
          {/* Submit section */}
          <Button
            onPress={this.onSubmitPressed}
            title="Submit"
            color="green"/>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default CalculatorForm;
