import React from "react";
import { View, Text, Image, TouchableHighlight, TextInput } from "react-native";
//import color from "color";
import styles from "./styles";
import { iconsMap } from '../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';

const InputWithButton = props => {
  const { label, labelStyle, value, editable, onChangeText, onEndEditing, onBlur, placeholder,
    iconNames, onPress, position, keyboardType } = props;

  const iconNamesArray = iconNames ? Array.from(iconNames) : [];
  const onPressArray = onPress ? Array.from(onPress) : [];
  const constainerStyle = [styles.container];
  switch(position) {
    case 'top':
      constainerStyle.push(styles.topContainerBorder);
      break;
    case 'middle':
      constainerStyle.push(styles.middleContainerBorder);
      break;
    case 'bottom':
      constainerStyle.push(styles.bottomContainerBorder);
      break;
    default:
      constainerStyle.push(styles.containerBorder);
  }

  const labelTextStyle = [styles.labelText];
  if (labelStyle) {
    labelTextStyle.push(labelStyle);
  }

  const inputContainerStyle = [styles.inputContainer];
  if (editable === false) {
    inputContainerStyle.push({backgroundColor: '#F0F0F0'});
  }

  return (
    <View style={constainerStyle}>
      <View style={styles.labelContainer}>
        <Text style={labelTextStyle}>{label}</Text>
      </View>
      <View style={inputContainerStyle}>
        <TextInput style={styles.input}
          keyboardType={keyboardType ? keyboardType : "numeric"}
          underlineColorAndroid="transparent"
          value={value}
          editable={editable}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onBlur={onBlur} />
      </View>
      {iconNames ? iconNamesArray.map((iconName, index)=>(
        <TouchableHighlight
          //underlayColor={underlayColor}
          key={iconName}
          style={styles.iconContainer}
          onPress={onPressArray[index]}>
          <Icon name={iconName} style={styles.icon} />
        </TouchableHighlight>)) : null}
    </View>
  );
};

export default InputWithButton;
