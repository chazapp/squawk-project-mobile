import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class LoadingView extends React.Component {
  async componentDidMount() {
    const { navigation } = this.props;
    /* const value = await AsyncStorage.getItem('@Store:token');
    if (value !== null) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Login');
    } */
    navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

LoadingView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
