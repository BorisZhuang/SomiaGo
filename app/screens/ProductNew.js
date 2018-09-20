import React, { Component } from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Navigation} from 'react-native-navigation';
import { connect } from "react-redux";
import BottomToolbar from 'react-native-bottom-toolbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ProductList} from '../components/Product';
import ProductBase from './ProductBase';

class ProductNew extends ProductBase {
  constructor(props) {
    super(props);
    this.state = {
      toolbar: false,
    };
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

  _onPressItemImg(id) {
    this.setState({toolbar: !this.state.toolbar});
  }

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
          onPressItem={(id) => this._onPressItem(id)}
          onPressItemImg={(id) => this._onPressItemImg(id)} />
        <ActionButton
          offsetX={20}
          offsetY={65}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this._launchProductAddScreen()} />
        <BottomToolbar
          showIf={this.state.toolbar}
          IconComponent={Ionicons}
          color='blue'>
          <BottomToolbar.Action
            title="Share"
            iconName="md-share"
            onPress={(index, propsOfThisAction) =>
              console.warn(index + ' ' + JSON.stringify(propsOfThisAction))} />
          <BottomToolbar.Action
            title="Edit"
            IconElement={<FontAwesome name="edit" color='blue' size={30} />}
            onPress={(index, propsOfThisAction) =>
              console.warn(index + ' ' + JSON.stringify(propsOfThisAction))} />
          <BottomToolbar.Action
            title="Move"
            iconName="ios-move"
            onPress={(index, propsOfThisAction) =>
              console.warn(index + ' ' + JSON.stringify(propsOfThisAction))} />
          <BottomToolbar.Action
            title="Delete"
            IconElement={<MaterialIcons name="delete" color='blue' size={30} />}
            onPress={(index, propsOfThisAction) =>
              console.warn(index + ' ' + JSON.stringify(propsOfThisAction))} />
          </BottomToolbar>
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
    //paddingVertical: 8,
    //paddingHorizontal: 8
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
