import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class LoadingView extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    AsyncStorage.getItem('@Store:token', (value) => {
      if (value !== null) {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Login');
      }
    });
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
