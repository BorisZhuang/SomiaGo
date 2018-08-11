import React, { Component } from 'react';
import {View, Button, Text, StyleSheet, TouchableHighlight, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';

class ProductNew extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'New Product',
          fontSize: 14,
          fontFamily: 'Helvetica',
        }
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {images: []};
  }

  openImgPicker = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      this.setState({images})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.openImgPicker}>
        <Text style={styles.welcome}>{this.props.text}</Text>
        </TouchableHighlight>
        <ScrollView style={{flex: 1}}>
          {this.state.images.map(image=> {
              return (<Image source={{uri: image.path}} style={{width: 200, height: 200}}/>)
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 33
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ProductNew;
