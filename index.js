import registerScreens from './app/screens/index';
import {Navigation} from 'react-native-navigation';
import {data} from './app/data';
import {setRootToProduct} from './app/screens/ProductBase';

data.populateData();
registerScreens();
Navigation.events().registerAppLaunchedListener(setRootToProduct);
/* iconsLoaded.then(() => {
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: 'white',
      orientation: ['portrait', 'landscape'] // An array of supported orientations
    },
    overlay: {
      interceptTouchOutside: true
    },
    topBar: {
      visible: false,
    },
  });
  Navigation.events().registerAppLaunchedListener(setRootToProduct);
}); */
