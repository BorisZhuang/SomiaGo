import React, { Component } from 'react';
import {Card, View, Image, Text, TouchableOpacity} from 'react-native';

class ProductItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}>
        <View>
          <Image source={this.props.photo}/>
          <View>
            <Text>{this.props.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProductItem;
