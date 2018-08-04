import Welcome from './Welcome';
import {Navigation} from 'react-native-navigation';

export default function registerScreens() {
  Navigation.registerComponent('navigation.somiaGo.Welcome', () => Welcome);
};
