import React, { Component } from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Navigation} from 'react-native-navigation';
import { connect } from "react-redux";
import {ProductList} from '../components/Product';
import ProductBase from './ProductBase';

class ProductNew extends ProductBase {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    this._showSideMenu('left');
  }

  _showSideMenu(side) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible: true
        }
      }
    });
  }

  _onPressItem(id) {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.somiaGo.ProductView',
        passProps: {
          id
        }
      }
    })
  };

  _launchProductAddScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.somiaGo.ProductAdd',
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ProductList
          data={this.props.data}
          onPressItem={(id) => this._onPressItem(id)}/>
        <ActionButton
          offsetX={20}
          offsetY={65}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this._launchProductAddScreen()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    //paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 8
  },
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

export default connect(mapStateToProps)(ProductNew);
