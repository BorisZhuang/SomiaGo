import React, { Component } from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet, NativeModules} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Navigation} from 'react-native-navigation';
import { connect } from "react-redux";
import BottomToolbar from 'react-native-bottom-toolbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import {ProductList} from '../components/Product';
import ProductBase from './ProductBase';

class ProductNew extends ProductBase {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
      selectedNum: 0,
    };
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
    // copy the map rather than modifying state.
    const selected = new Map(this.state.selected);
    const isSelected = !this.state.selected.get(id);
    selected.set(id, isSelected);
    this.setState({
      selected,
      selectedNum: isSelected ? this.state.selectedNum + 1 : this.state.selectedNum - 1,
    }, () => {
      Navigation.mergeOptions(this.props.componentId, {
        bottomTabs: {
          visible: this.state.selectedNum <= 0,
        }
      });
    });
  }

  _launchProductAddScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.somiaGo.ProductAdd',
      }
    })
  }

  _showShare() {
    NativeModules.MobShare.showShare();
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
          wrapperStyle={styles.toolBarContainer}
          IconComponent={Ionicons}
          color='blue'>
          <BottomToolbar.Action
            title="Share"
            iconName="md-share"
            onPress={() => this._showShare()} />
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
  toolBarContainer: {
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56/* Navigation.constants().bottomTabsHeight */,
    backgroundColor: 'white',
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
