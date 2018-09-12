import React, { Component } from 'react';
import {Button, View, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Formik } from "formik";
import InputWithButton from "../TextInput";
import {updateCalculator} from '../../actions/calculator';
import styles from "./styles";

class CalculatorForm extends Component {
  constructor(props){
    super(props);
    //this.onPlusPressed = this.onPlusPressed.bind(this);
  }
  onPlusPressed = () => {
    console.log("plus is pressed.");
  }

  onMinusPressed = () => {
    console.log("minus is pressed.");
  }

  calculate = values => {
    values.price = values.msrp + values.discount + values.weight + values.shippingRate + values.tax + values.currency + values.profitRate;
    values.profit = values.msrp + values.discount + values.weight + values.shippingRate + values.tax + values.currency + values.profitRate;
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

    const {updateCalculator} = this.props;

    return (
      <Formik
        initialValues={{
          msrp: this.props.msrp,
          discount: this.props.discount,
          weight: this.props.weight,
          shippingRate: this.props.shippingRate,
          tax: this.props.tax,
          currency: this.props.currency,
          profitRate: this.props.profitRate
        }}
        onSubmit={values => updateCalculator(values)}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* MSRP section */}
            <View style={styles.groupContainer}>
              <InputWithButton
                name='msrp'
                label="MSRP (USD)"
                labelStyle={styles.labelText}
                value={values.msrp}
                onChangeText={handleChange('msrp')}
                onBlur={e => {
                  handleBlur(e);
                  this.calculate(values);
                }}
                placeholder='0'
                position='top' />
              <InputWithButton
                label="Discount"
                labelStyle={styles.labelText}
                value={values.discount}
                onChangeText={handleChange('discount')}
                onBlur={e => {
                  handleBlur(e);
                  this.calculate(values);
                }}
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
                  onBlur={e => {
                    handleBlur(e);
                    this.calculate(values);
                  }}
                  placeholder='0'
                  position='top' />
              <InputWithButton
                  label="Shipping (per pound)"
                  labelStyle={styles.labelText}
                  value={values.shippingRate}
                  onChangeText={handleChange('shippingRate')}
                  onBlur={e => {
                    handleBlur(e);
                    this.calculate(values);
                  }}
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
                onBlur={e => {
                  handleBlur(e);
                  this.calculate(values);
                }}
                placeholder='0'
                position='top' />
              <InputWithButton
                label="Currency"
                labelStyle={styles.labelText}
                value={values.currency}
                onChangeText={handleChange('currency')}
                onBlur={e => {
                  handleBlur(e);
                  this.calculate(values);
                }}
                placeholder='0'
                position='middle' />
              <InputWithButton
                label='Profit (%)'
                labelStyle={styles.labelText}
                value={values.profitRate}
                onChangeText={handleChange('profitRate')}
                onBlur={e => {
                  handleBlur(e);
                  this.calculate(values);
                }}
                placeholder='0'
                //onPress={[this.onPlusPressed, this.onMinusPressed]}
                //iconNames={["ios-add", 'ios-remove']}
                position='bottom' />
            </View>
            {/* Price/Profit section */}
            <View style={styles.groupContainer}>
              <InputWithButton
                label="Price (CNY)"
                labelStyle={styles.labelText}
                value={values.price}
                editable={false}
                onChangeText={handleChange('price')}
                placeholder='0'
                position='top' />
              <InputWithButton
                label="Profit (CNY)"
                labelStyle={styles.labelText}
                value={values.profit}
                editable={false}
                onChangeText={handleChange('profit')}
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

const mapStateToProps = state => {
  const {msrp, discount, weight, shippingRate, tax, currency, profitRate} = state.calculator;
  return {
    msrp,
    discount,
    weight,
    shippingRate,
    tax,
    currency,
    profitRate,
  }
};

const mapDispatchToProps = dispatch => ({
  updateCalculator: values => dispatch(updateCalculator(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorForm);
