import React, { Component } from 'react';
import {View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class ImageGridView extends Component {
  constructor(props) {
    super(props);
    this.state = {images: []};
  }

  openImgPicker = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      this.setState({images});
      this.props.onPickDone(images);
    });
  }

  createImageItem() {
		let defaultImgView;
		if (this.state.images != null && this.state.images.length >= 9) {
			defaultImgView = null;
		} else {
			defaultImgView = (
				<TouchableHighlight
					activeOpacity={1}
					underlayColor={'#fff'}
					onPress={this.openImgPicker}
				>
					<Image source={require('../Images/add.png')} style={{ width: 100, height: 100 }} />
				</TouchableHighlight>
			);
		}

		return (
			<View style={styles.container}>
				{this.state.images
					? this.state.images.map((image) => (
							<View
								key={image.path}
								style={{
									width: 100,
									height: 100,
									margin: 5,
								}}
							>
								<TouchableHighlight
									activeOpacity={1}
									onPress={() => console.log(image.path)}
								>
									<Image style={{ width: 100, height: 100 }} source={{ uri: image.path }} />
								</TouchableHighlight>
							</View>
						))
          : null}
        <View
          style={{
            width: 100,
            height: 100,
            margin: 5
            }}
        >
					{defaultImgView}
				</View>
			</View>
		);
	}

  render() {
    return (
      <View>
        {this.createImageItem()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
