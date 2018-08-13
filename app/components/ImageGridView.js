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
      this.setState({images})
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
					<Image source={require('../Images/add.png')} style={{ width: 120, height: 120 }} />
				</TouchableHighlight>
			);
		}

		return (
			<View
				style={{
					flexDirection: 'row',
					flexWrap: 'wrap'
				}}
			>
				{this.state.images
					? this.state.images.map((image) => (
							<View
								//key={i.url}
								style={{
									width: 120,
									height: 120,
									marginTop: 5,
									//marginLeft: (width - 4 * 70) / 5
								}}
							>
								<TouchableHighlight
									activeOpacity={1}
									//underlayColor={skin.tint}
									onPress={() => console.log(image.path)}
								>
									<Image style={{ width: 120, height: 120 }} source={{ uri: image.path }} />
								</TouchableHighlight>
							</View>
						))
          : null}
        <View
          style={{
            width: 70,
            height: 70,
            //marginLeft: (width - 4 * 70) / 5,
            marginTop: 5 }}>
					{defaultImgView}
				</View>
			</View>
		);
	}

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.createImageItem()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
