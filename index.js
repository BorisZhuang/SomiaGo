import registerScreens from './app/screens/index';
import {Navigation} from 'react-native-navigation';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'somiaGo.SideMenu.left',
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
                        name: 'navigation.somiaGo.Welcome',
                        passProps: {
                          text: 'This is a side menu center screen tab 1'
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
                      icon: require('./app/Images/one.png'),
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.somiaGo.Welcome',
                        passProps: {
                          text: 'This is a side menu center screen tab 2'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontFamily: 'HelveticaNeue-Italic',
                      fontSize: 13,
                      text: 'Tab 2',
                      icon: require('./app/Images/two.png'),
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
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: 'white',
      orientation: ['portrait', 'landscape'] // An array of supported orientations
    },
    overlay: {
      interceptTouchOutside: true
    },
  });
});
