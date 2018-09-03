import React, { Component } from 'react';
import {Card, FlatList, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Navigation} from 'react-native-navigation';
import { connect } from "react-redux";

import { data } from "../data";
import ProductItem from '../components/ProductItem';
import ProductBase from './ProductBase';

class ProductToPub extends ProductBase {
  constructor(props) {
    super(props);
    //this.data = data.getArticles('post');
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
      text={item.description}
      photo={item.images[0].path}
      onPress={() => Navigation.push(this.props.componentId, {
        component: {
          name: 'navigation.somiaGo.ProductView',
          passProps: {
            id: item.productId
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
    return post.productId;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}/>
        <ActionButton
          offsetX={20}
          offsetY={65}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => Navigation.push(this.props.componentId, {
            component: {
              name: 'navigation.somiaGo.ProductNew',
            }
          })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 8
  }
})

const mapStateToProps = state => {
  const productsById = state.products.byId;
  const productIds = state.products.allIds;
  const products = [];
  if (productIds !== undefined && productIds.length > 0) {
    productIds.forEach(id => {
      products.push(productsById[id])
    });
  }
  return {
    data: products,
  }
};

export default connect(mapStateToProps)(ProductToPub);
