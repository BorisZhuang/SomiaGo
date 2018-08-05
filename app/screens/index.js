import Welcome from './Welcome';
import SideMenu from './SideMenu';
import {Navigation} from 'react-native-navigation';

export default function registerScreens() {
  Navigation.registerComponent('navigation.somiaGo.Welcome', () => Welcome);
  Navigation.registerComponent('navigation.somiaGo.SideMenu', () => SideMenu);
};
