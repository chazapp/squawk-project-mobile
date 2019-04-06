import React, { Component } from 'react';
import {
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import DefaultUser from 'assets/User.png';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import ImageInputStyle from './ImageInputStyle';

export default class LoadImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: DefaultUser,
    };
  }

  addPicture() {
    const Message = 'Choose a profile picture';
    const options = {
      title: Message,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const { urlState, updateState } = this.props;
    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel) {
        const source = { uri: response.uri };
        this.setState({ photoURL: source });
        updateState(urlState, source);
      }
    });
  }

  render() {
    const { photoURL } = this.state;
    const { defaultURI } = this.props;
    let source;
    if (photoURL.uri === DefaultUser.uri && defaultURI !== '') {
      source = { uri: defaultURI };
    } else { source = photoURL; }
    return (
      <TouchableOpacity style={ImageInputStyle.touchable} onPress={() => this.addPicture()}>
        <ImageBackground
          source={source}
          style={ImageInputStyle.image}
        />
      </TouchableOpacity>
    );
  }
}

LoadImageInput.propTypes = {
  defaultURI: PropTypes.string,
  urlState: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

LoadImageInput.defaultProps = {
  defaultURI: '',
};
