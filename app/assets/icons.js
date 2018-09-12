// Define all icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from "react-native-vector-icons/Foundation";

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  "md-checkmark": [30, "#bbb"],
  "ios-person": [30, "#bbb"],
  "ios-person--big": [50, "#bbb"],
  "ios-person--active": [30, "#fff"],
  "ios-person--active--big": [50, "#fff"],
  "ios-person--active--very-big": [100, "#fff"],

  // Use other Icon provider, see the logic at L39
  "bars": [30, "#bbb", FontAwesome],
  "burst-new": [30, "#bbb", Foundation],
  "share-square-o": [30, "#bbb", FontAwesome],
  "favorite": [30, "#bbb", MaterialIcons],
  "facebook": [30, "#bbb", FontAwesome],
  "facebook--active": [30, "#fff", FontAwesome],
}

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

    // Call resolve (and we are done)
    resolve(true);
  })
});

export {
    iconsMap,
    iconsLoaded
};
