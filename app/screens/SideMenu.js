import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {iconsMap} from '../assets/icons';

class SideMenu extends Component {
  static get options() {
    return {
      sideMenu: {
        left: {
          width: 260,
          //height: 270,
          //visible: false,
          //enabled: true
        },
      },
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableHighlight onPress = {setRootToProduct}>
            <Text style={styles.welcome}>Product</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress = {setRootToOrder}>
            <Text style={styles.welcome}>Order</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

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
                drawBehind: true, // for android
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

export const setRootToOrder = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            //id: 'somiaGo.SideMenu.left',
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
                        name: 'navigation.somiaGo.OrderNew',
                        passProps: {
                          text: 'New Order'
                        },
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontFamily: 'HelveticaNeue-Italic',
                      fontSize: 13,
                      textColor: 'blue',
                      iconColor: 'blue',
                      selectedTextColor: 'red',
                      selectedIconColor: 'red',
                      text: 'Tab 1',
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
                        name: 'navigation.somiaGo.OrderUnpaid',
                        passProps: {
                          text: 'Unpaid Order'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontFamily: 'HelveticaNeue-Italic',
                      fontSize: 13,
                      text: 'Tab 2',
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
                        name: 'navigation.somiaGo.OrderPaid',
                        passProps: {
                          text: 'Paid Order'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontFamily: 'HelveticaNeue-Italic',
                      fontSize: 13,
                      text: 'Tab 2',
                      icon: iconsMap['share-square-o'],
                    }
                  }
                }
              },
            ],
            options: {
              topBar: {
                visible: false
              },
              bottomTabs: {
                visible: true,
                animate: true, // Controls whether BottomTabs visibility changes should be animated
                currentTabIndex: 0,
                drawBehind: false,
                backgroundColor: 'white'
              }
            }
          }
        },
      }
    }
  });
}

export default SideMenu;
