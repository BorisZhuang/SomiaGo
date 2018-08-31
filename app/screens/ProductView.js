import React from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from "react-redux";

import {data} from '../data';

class ProductView extends React.Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'Product View',
          fontSize: 14,
          fontFamily: 'Helvetica',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    //this.data = data.getArticle(this.props.id);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <Image source={{uri: this.props.data.images[0].path}} style={{ width: 100, height: 100 }}/>
        <Text>{this.props.data.description}</Text>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },
}));

const mapStateToProps = (state, ownProps) => {
  const productsById = state.products.byId;
  const productIds = state.products.allIds;
  let product;
  if (productIds.indexOf(ownProps.id) > -1)
      product = productsById[ownProps.id];
  return {
    data: product,
  }
};

export default connect(mapStateToProps)(ProductView);
