import registerScreens from './app/screens/index';
import {Navigation} from 'react-native-navigation';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.somiaGo.Welcome'
            }
          }
        ],
        options: {
          topBar: {
            title: {
              text: 'Blog'
            }
          }
        }
      }
    }
  });
});
