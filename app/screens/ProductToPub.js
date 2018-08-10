import React, { Component } from 'react';
import {Card, FlatList, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { data } from "../data";
import ProductItem from '../components/ProductItem';

class ProductToPub extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        leftButtons: [
          {
            id: 'leftbutton',
            icon: require('../Images/one.png'),
          }
        ],
        title: {
          text: 'Product',
          fontSize: 14,
          fontFamily: 'Helvetica',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.data = data.getArticles('post');
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    this.showSideMenu('left');
  }

  showSideMenu(side) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible: true
        }
      }
    });
  }

  _renderItem = ({item}) => (
    <ProductItem
      text={item.text}
      photo={item.photo}
      onPress={() => Navigation.push(this.props.componentId, {
        component: {
          name: 'navigation.somiaGo.ProductView',
          passProps: {
            id: item.id
          },
          options: {
            topBar: {
              title: {
                text: 'Product View'
              }
            }
          }
        }
      })}
    />
  );

  _keyExtractor(post, index) {
    return post.id;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 33
  },
  container: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 14
  }
})

export default ProductToPub;
