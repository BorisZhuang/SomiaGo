import React from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import {data} from '../data';

class ProductView extends React.Component {
  static navigationOptions = {
    title: 'Article View'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.data = data.getArticle(this.props.id);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <Image source={this.data.photo}/>
        <View>
          <Text style={styles.title}>{this.data.header}</Text>
        </View>
        <View>
          <Text>{this.data.text}</Text>
        </View>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },
}));

export default ProductView;
