import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';
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

export const setRootToProduct = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'navigation.somiaGo.SideMenu',
            passProps: {
              text: 'left side menu screen'
            }
          }
        },
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.somiaGo.ProductNew',
                        passProps: {
                          text: 'ProductNew'
                        },
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      visible: true,
                      fontFamily: 'HelveticaNeue',
                      fontSize: 12,
                      textColor: 'grey',
                      iconColor: 'grey',
                      selectedTextColor: 'blue',
                      selectedIconColor: 'blue',
                      text: 'New',
                      icon: iconsMap['burst-new'],
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.somiaGo.ProductPub',
                        passProps: {
                          text: 'ProductPub'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontFamily: 'HelveticaNeue',
                      fontSize: 12,
                      textColor: 'grey',
                      iconColor: 'grey',
                      selectedTextColor: 'blue',
                      selectedIconColor: 'blue',
                      text: 'Published',
                      icon: iconsMap['share-square-o'],
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.somiaGo.ProductFavo',
                        passProps: {
                          text: 'ProductFavo'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontFamily: 'HelveticaNeue',
                      fontSize: 12,
                      textColor: 'grey',
                      iconColor: 'grey',
                      selectedTextColor: 'red',
                      selectedIconColor: 'red',
                      text: 'Favorite',
                      icon: iconsMap['favorite'],
                    }
                  }
                }
              },
            ],
            options: {
              bottomTabs: {
                visible: true,
                animate: true, // Controls whether BottomTabs visibility changes should be animated
                currentTabIndex: 0,
                drawBehind: false, // true for android?
                backgroundColor: 'white',
                barStyle: 'default' | 'black',
                translucent: true,
                hideShadow: false
              }
            }
          }
        },
      }
    }
  });
};

export default ProductBase;
