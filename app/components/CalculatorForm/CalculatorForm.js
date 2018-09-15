import React, { Component } from 'react';
import {Button, View, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Formik } from "formik";
import InputWithButton from "../TextInput";
import {updateCalculator} from '../../actions/calculator';
import styles from "./styles";

class CalculatorForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
        msrp: this.props.msrp,
        discount: this.props.discount,
        weight: this.props.weight,
        shippingRate: this.props.shippingRate,
        tax: this.props.tax,
        currency: this.props.currency,
        profitRate: this.props.profitRate,
        price: this.props.price,
        profit: this.props.profit,
    };
  }

  handleTextInputChange(text, name) {
    let num = parseFloat(text);
    if (isNaN(num)) num = 0;
    switch(name) {
      case 'msrp':
        this.setState({ msrp: num });
        break;
      case 'discount':
        this.setState({ discount: num });
        break;
      case 'weight':
        this.setState({ weight: num });
        break;
      case 'shippingRate':
        this.setState({ shippingRate: num });
        break;
      case 'tax':
        this.setState({ tax: num });
        break;
      case 'currency':
        this.setState({ currency: num });
        break;
      case 'profitRate':
        this.setState({ profitRate: num });
        break;
    }
  }

  onPlusPressed() {
    let profit_Rate = this.state.profitRate;
    this.setState({ profitRate: profit_Rate + 1 }, () => this.calculate());
  }

  onMinusPressed() {
    let profit_Rate = this.state.profitRate;
    this.setState({ profitRate: profit_Rate - 1 }, () => this.calculate());
  }

  calculate() {
    this.calculatePrice();
    this.calculateProfit();
  }

  getCurrentState() {
    return {
      msrp: parseFloat(this.state.msrp),
      discount: parseFloat(this.state.discount),
      tax: parseFloat(this.state.tax),
      profitRate: parseFloat(this.state.profitRate),
      currency: parseFloat(this.state.currency),
      weight: parseFloat(this.state.weight),
      shippingRate: parseFloat(this.state.shippingRate),
    }
  }

  calculatePrice() {
    let {msrp, discount, tax, profitRate, currency, weight, shippingRate} = this.getCurrentState();

    purchasePrice = msrp * discount/100 * (1 + tax/100);
    shippingCost = weight * shippingRate;
    sellingPrice = purchasePrice * (1 + profitRate/100) + shippingCost;
    this.setState({price: Math.round(sellingPrice * currency)});
  }

  calculateProfit() {
    let {msrp, discount, tax, profitRate, currency} = this.getCurrentState();

    purchasePrice = msrp * discount/100 * (1 + tax/100);
    profit = purchasePrice * profitRate/100;
    this.setState({profit: Math.round(profit * currency)});
  }

  handleSubmit(e) {
    this.props.updateCalculator(this.state);
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* MSRP section */}
        <View style={styles.groupContainer}>
          <InputWithButton
            label="MSRP (USD)"
            labelStyle={styles.labelText}
            value={`${this.state.msrp}`}
            onChangeText={(text) => this.handleTextInputChange(text, 'msrp')}
            onBlur={() => this.calculate()}
            placeholder='0'
            position='top' />
          <InputWithButton
            label="Discount (%)"
            labelStyle={styles.labelText}
            value={`${this.state.discount}`}
            onChangeText={(text) => this.handleTextInputChange(text, 'discount')}
            onBlur={() => this.calculate()}
            placeholder='0'
            position='bottom' />
        </View>
        {/* Shipping section */}
        <View style={styles.groupContainer}>
          <InputWithButton
              label="Weight (pound)"
              labelStyle={styles.labelText}
              value={`${this.state.weight}`}
              onChangeText={(text) => this.handleTextInputChange(text, 'weight')}
              onBlur={() => this.calculate()}
              placeholder='0'
              position='top' />
          <InputWithButton
              label="Shipping (per pound)"
              labelStyle={styles.labelText}
              value={`${this.state.shippingRate}`}
              onChangeText={(text) => this.handleTextInputChange(text, 'shippingRate')}
              onBlur={() => this.calculate()}
              placeholder='0'
              position='bottom' />
        </View>
        {/* Tax/Currency/Profit section */}
        <View style={styles.groupContainer}>
          <InputWithButton
            label="Tax (%)"
            labelStyle={styles.labelText}
            value={`${this.state.tax}`}
            onChangeText={(text) => this.handleTextInputChange(text, 'tax')}
            onBlur={() => this.calculate()}
            placeholder='0'
            position='top' />
          <InputWithButton
            label="Currency"
            labelStyle={styles.labelText}
            value={`${this.state.currency}`}
            onChangeText={(text) => this.handleTextInputChange(text, 'currency')}
            onBlur={() => this.calculate()}
            placeholder='0'
            position='middle' />
          <InputWithButton
            label='Profit (%)'
            labelStyle={styles.labelText}
            value={`${this.state.profitRate}`}
            onChangeText={(text) => this.handleTextInputChange(text, 'profitRate')}
            onBlur={() => this.calculate()}
            placeholder='0'
            onPress={[() => this.onPlusPressed(), () => this.onMinusPressed()]}
            iconNames={["ios-add", 'ios-remove']}
            position='bottom' />
        </View>
        {/* Price/Profit section */}
        <View style={styles.groupContainer}>
          <InputWithButton
            label="Price (CNY)"
            labelStyle={styles.labelText}
            value={`${this.state.price}`}
            editable={false}
            placeholder='0'
            position='top' />
          <InputWithButton
            label="Profit (CNY)"
            labelStyle={styles.labelText}
            value={`${this.state.profit}`}
            editable={false}
            placeholder='0'
            position='bottom' />
        </View>
        {/* Submit section */}
        <Button
          onPress={(e) => this.handleSubmit(e)}
          title="Submit"
          color="green"/>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {...state.calculator}
};

const mapDispatchToProps = dispatch => ({
  updateCalculator: (values) => {dispatch(updateCalculator(values));}
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorForm);
