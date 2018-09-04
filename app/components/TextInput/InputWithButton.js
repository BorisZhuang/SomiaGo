import React from "react";
import { View, Text, Image, TouchableHighlight, TextInput } from "react-native";
//import color from "color";
import styles from "./styles";
import { iconsMap } from '../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';

const InputWithButton = props => {
  const { label, value, onChangeText, onPress, iconName } = props;

  return (
    <View style={styles.container}>
      <View
        style={styles.currencyContainer}>
        <Text style={styles.currencyText}>{label}</Text>
      </View>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        underlineColorAndroid="transparent"
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.border} />
      {iconName ? (
        <TouchableHighlight
        //underlayColor={underlayColor}
        style={styles.calculatorContainer}
        onPress={onPress}>
        <Icon name={iconName} style={styles.calculator} />
        </TouchableHighlight>) : null}
    </View>
  );
};

export default InputWithButton;
