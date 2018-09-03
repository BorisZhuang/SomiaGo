import React, { Component } from 'react';
import { iconsMap } from '../assets/icons';

class ProductBase extends Component {
  static get options() {
    return {
      topBar: {
        visible: true,
        leftButtons: [
          {
            id: 'sideMenuBtn',
            icon: iconsMap['bars'],
            color: 'blue',
          }
        ],
      }
    };
  }
}

export default ProductBase;
