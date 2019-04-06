import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './StyleLinkConnection';

const LinkConnection = (props) => {
  const { navigation } = props;

  return (
    <View style={Styles.linkContainer}>
      <Text style={Styles.link}>
          Mot de passe oublie ?
      </Text>
      <Text style={Styles.link} onPress={() => navigation.navigate('SignUp')}>
          Inscription
      </Text>
    </View>
  );
};

export default LinkConnection;

LinkConnection.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
