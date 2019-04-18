import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';
import Styles from '../Login/components/Input/StyleInputConnection';
import store from '../../redux/store';
import { actionFetchSourceList } from '../../redux/actions';

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class AddSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostname: '',
      link: '',
      errorMessage: null,
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
  }

  submit() {
    const { hostname, link } = this.state;
    const { navigation } = this.props;
    const token = navigation.getParam('token');
    fetch('https://squawkapi.chaz.pro/source', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: hostname,
        link,
      }),
    }).then(() => {
      store.dispatch(actionFetchSourceList(token)).then(() => {
        navigation.navigate('SourceList');
      });
    });
  }

  render() {
    const { hostname, link, errorMessage } = this.state;
    return (
      <View style={styles.container}>
        <Text>Add Source</Text>
        {errorMessage && <Text style={Styles.errorMessage}>{errorMessage}</Text>}
        <TextField
          label="Hostname"
          value={hostname}
          onChangeText={value => this.setState({ hostname: value })}
          containerStyle={{ width: '90%' }}
        />
        <TextField
          label="Link"
          value={link}
          onChangeText={value => this.setState({ link: value })}
          autoCapitalize="none"
          containerStyle={{ width: '90%' }}
        />
        <Button
          onPress={() => this.submit()}
          title="Submit"
          color="#841584"
          style={{ width: '90%' }}
        />
      </View>
    );
  }
}

AddSource.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddSource;
