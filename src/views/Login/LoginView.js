import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Background from 'assets/background.jpg';
import Logo from 'assets/logo.png';

import InputContainer from './components/Input/InputContainer';
import LinkConnection from './components/Link/LinkConnection';

import Styles from './StyleSheet';

const LoginView = (props) => {
  const { navigation } = props;

  return (
    <ImageBackground source={Background} style={Styles.background}>
      <View style={Styles.container}>
        <View style={Styles.topContainer}>
          <Image source={Logo} resizeMode="contain" style={Styles.logo} />
          <Text style={Styles.name}>SquawkApp</Text>
        </View>
        <View style={Styles.bottomContainer}>
          <InputContainer navigation={navigation} />
          <LinkConnection navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  );
};

LoginView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginView;
