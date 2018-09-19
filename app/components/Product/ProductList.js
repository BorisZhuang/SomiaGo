import React, { PureComponent } from 'react';
import {FlatList} from 'react-native';
import ProductItem from './ProductItem';

class ProductList extends PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.productId;

  _onPressItem(id) {
    console.log('the index is ' + id);
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
    this.props.onPressItem(id);
  };

  _renderItem = ({item}) => (
      <ProductItem
        id={item.productId}
        description={item.description}
        price={item.price}
        photo={item.images[0].path}
        onPressItem={(id) => this._onPressItem(id)}
        selected={!!this.state.selected.get(item.productId)}
      />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default ProductList;
