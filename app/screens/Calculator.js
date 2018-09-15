import React, { Component } from 'react';
import {View, Text, TextInput, TouchableHighlight, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import CalculatorForm from "../components/CalculatorForm";

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
      },
      bottomTabs: {
        visible: false,
        animate: false, // Controls whether BottomTabs visibility changes should be animated
      }
    };
  }

  handleSubmit() {
    Navigation.pop(this.props.componentId);
  }

  render() {
    return (<CalculatorForm onSubmit={() => this.handleSubmit()}/>);
  }
}

export default Calculator;
