import Home from './Home';
import SideMenu from './SideMenu';
import ProductToPub from './ProductToPub';
import ProductPub from './ProductPub';
import ProductFavo from './ProductFavo';
import ProductView from './ProductView';
import ProductNew from './ProductNew';
import OrderNew from './OrderNew';
import OrderUnpaid from './OrderUnpaid';
import OrderPaid from './OrderPaid';
import {Navigation} from 'react-native-navigation';

export default function registerScreens() {
  Navigation.registerComponent('navigation.somiaGo.Home', () => Home);
  Navigation.registerComponent('navigation.somiaGo.SideMenu', () => SideMenu);
  Navigation.registerComponent('navigation.somiaGo.ProductToPub', () => ProductToPub);
  Navigation.registerComponent('navigation.somiaGo.ProductPub', () => ProductPub);
  Navigation.registerComponent('navigation.somiaGo.ProductFavo', () => ProductFavo);
  Navigation.registerComponent('navigation.somiaGo.ProductView', () => ProductView);
  Navigation.registerComponent('navigation.somiaGo.ProductNew', () => ProductNew);
  Navigation.registerComponent('navigation.somiaGo.OrderNew', () => OrderNew);
  Navigation.registerComponent('navigation.somiaGo.OrderUnpaid', () => OrderUnpaid);
  Navigation.registerComponent('navigation.somiaGo.OrderPaid', () => OrderPaid);
};
