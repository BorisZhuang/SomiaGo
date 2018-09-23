import React, { Component } from 'react';
import {Navigation} from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class ProductBase extends Component {
  componentDidMount() {
    Promise.all([
      FontAwesome.getImageSource('bars', 25)
    ]).then((sources) => {
      Navigation.mergeOptions(this.props.componentId, {
        topBar: {
          visible: true,
          leftButtons: [
            {
              id: 'sideMenuBtn',
              icon: sources[0],
              color: 'blue',
            }
          ],
        }
      })
    })
  }
}

export const setRootToProduct = () => {
  Promise.all([
    Foundation.getImageSource('burst-new', 25),
    FontAwesome.getImageSource('share-square-o', 25),
    MaterialIcons.getImageSource('favorite', 25),
  ]).then((sources) => {
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
                        icon: sources[0],
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
                        icon: sources[1],
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
                        icon: sources[2],
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
  })
};

export default ProductBase;
