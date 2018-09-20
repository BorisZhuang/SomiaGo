import React, { PureComponent } from 'react';
import { Avatar, ListItem } from 'react-native-elements'
import styles from './styles';

class ProductItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  _onPressItemImg = () => {
    this.props.onPressItemImg(this.props.id);
  };

  render() {
    return (
      <ListItem
        avatar={<Avatar
                  rounded
                  large
                  source={{uri: this.props.photo}}
                  onPress={this._onPressItemImg}
                />}
        title={this.props.description}
        subtitle={`${this.props.price}`}
        onPress={this._onPress}
      />
    )
  }
}

export default ProductItem;
