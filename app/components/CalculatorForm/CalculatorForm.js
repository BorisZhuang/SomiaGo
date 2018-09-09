import React, { Component } from 'react';
import {Button, View, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Formik } from "formik";
import InputWithButton from "../TextInput";
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

  onSubmitPressed = values => {
    console.log(values);
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
      <Formik
        initialValues={{
          msrp: '',
          discount:'',
          weight: '',
          shippingRate: '',
          tax: '',
          currency:'',
          profitRate:'',
          price:'',
          profit: ''}}
        onSubmit={this.onSubmitPressed}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* MSRP section */}
            <View style={styles.groupContainer}>
              <InputWithButton
                label="MSRP (USD)"
                labelStyle={styles.labelText}
                value={values.msrp}
                onChangeText={handleChange('msrp')}
                placeholder='0'
                position='top' />
              <InputWithButton
                label="Discount"
                labelStyle={styles.labelText}
                value={values.discount}
                onChangeText={handleChange('discount')}
                placeholder='0'
                position='bottom' />
            </View>
            {/* Shipping section */}
            <View style={styles.groupContainer}>
              <InputWithButton
                  label="Weight (pound)"
                  labelStyle={styles.labelText}
                  value={values.weight}
                  onChangeText={handleChange('weight')}
                  placeholder='0'
                  position='top' />
              <InputWithButton
                  label="Shipping (per pound)"
                  labelStyle={styles.labelText}
                  value={values.shippingRate}
                  onChangeText={handleChange('shippingRate')}
                  placeholder='0'
                  position='bottom' />
            </View>
            {/* Tax/Currency/Profit section */}
            <View style={styles.groupContainer}>
              <InputWithButton
                label="Tax (%)"
                labelStyle={styles.labelText}
                value={values.tax}
                onChangeText={handleChange('tax')}
                placeholder='0'
                position='top' />
              <InputWithButton
                label="Currency"
                labelStyle={styles.labelText}
                value={values.currency}
                onChangeText={handleChange('currency')}
                placeholder='0'
                position='middle' />
              <InputWithButton
                label='Profit (%)'
                labelStyle={styles.labelText}
                value={values.profitRate}
                onChangeText={handleChange('profitRate')}
                placeholder='0'
                onPress={this.onPlusPressed}
                iconNames={["ios-add", 'ios-remove']}
                position='bottom' />
            </View>
            {/* Price/Profit section */}
            <View style={styles.groupContainer}>
              <InputWithButton
                label="Price (CNY)"
                labelStyle={styles.labelText}
                value={values.price}
                editable={false}
                //onChangeText={handleChange('price')}
                placeholder='0'
                position='top' />
              <InputWithButton
                label="Profit (CNY)"
                labelStyle={styles.labelText}
                value={values.profit}
                editable={false}
                //onChangeText={handleChange('profit')}
                placeholder='0'
                position='bottom' />
            </View>
            {/* Submit section */}
            <Button
              onPress={handleSubmit}
              title="Submit"
              color="green"/>
          </KeyboardAvoidingView>
        )}
      </Formik>
    );
  }
}

export default CalculatorForm;
