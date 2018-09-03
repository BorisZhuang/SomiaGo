import React from "react";
import { View, Text, Image, TouchableHighlight, TextInput } from "react-native";
//import color from "color";
import styles from "./styles";
import { iconsMap } from '../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';

const InputWithButton = props => {
  const { onPress } = props;

  return (
    <View style={styles.container}>
      <View
        style={styles.currencyContainer}>
        <Text style={styles.currencyText}>CNY</Text>
      </View>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        underlineColorAndroid="transparent"
        {...props}
      />
      <View style={styles.border} />
      <TouchableHighlight
        //underlayColor={underlayColor}
        style={styles.calculatorContainer}
        onPress={onPress}
      >
        <Icon name="ios-calculator" style={styles.calculator} />
      </TouchableHighlight>
    </View>
  );
};

export default InputWithButton;
