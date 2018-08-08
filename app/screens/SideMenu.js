import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Navigation} from 'react-native-navigation';

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

  setRootToProduct = () => {
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
                          name: 'navigation.somiaGo.ProductToPub',
                          passProps: {
                            text: 'ProductToPub'
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
                        icon: require('../Images/one.png'),
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
                        fontFamily: 'HelveticaNeue-Italic',
                        fontSize: 13,
                        text: 'Tab 2',
                        icon: require('../Images/two.png'),
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
                        fontFamily: 'HelveticaNeue-Italic',
                        fontSize: 13,
                        text: 'Tab 2',
                        icon: require('../Images/two.png'),
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

  setRootToOrder = () => {
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
                        icon: require('../Images/one.png'),
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
                        icon: require('../Images/two.png'),
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
                        icon: require('../Images/two.png'),
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

  render() {
    return (
        <View style={styles.container}>
          <TouchableHighlight onPress = {this.setRootToProduct}>
            <Text style={styles.welcome}>Product</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress = {this.setRootToOrder}>
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

export default SideMenu;
