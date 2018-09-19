import React, { PureComponent } from 'react';
import { ListItem } from 'react-native-elements'
import styles from './styles';

class ProductItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <ListItem
        avatar={{uri: this.props.photo}}
        title={this.props.description}
        subtitle={`${this.props.price}`}
        onPress={this._onPress}
      />
    )
  }
}

export default ProductItem;
