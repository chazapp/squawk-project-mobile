import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import store from 'src/redux/store';

import PasswordInput from 'src/components/PasswordInput';
import { TextButton } from 'react-native-material-buttons';
import PropTypes from 'prop-types';
import { ThemeColorText } from 'src/style/GeneralStyleSheet';
import EmailInput from 'src/components/EmailInput';
import { connect } from 'react-redux';
import Styles from './StyleInputConnection';
import { actionConnectUser } from '../../../../redux/actions';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null };
    this.handleConnection = this.handleConnection.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleConnection() {
    const { email, password } = this.state;
    const { navigation } = this.props;
    if (email === '' || password === '') {
      this.setState({ errorMessage: 'Please input email or password.' });
      return;
    }
    store.dispatch(actionConnectUser(email, password))
      .then(() => {
        const { error, token } = this.props;
        if (error === '' && token !== '') {
          navigation.navigate('Main');
        } else {
          this.setState({ errorMessage: 'Bad password.' });
        }
      });
  }

  updateState(st, val) {
    this.setState({
      [st]: val,
    });
  }

  render() {
    const { errorMessage } = this.state;
    const { error } = this.props;
    return (
      <View>
        {errorMessage && <Text style={Styles.errorMessage}>{errorMessage}</Text>}
        {error !== '' && <Text style={Styles.errorMessage}>{error}</Text>}
        <EmailInput
          label="Email or Login"
          mail="email"
          updateState={this.updateState}
        />
        <PasswordInput
          label="Password"
          passwordState="password"
          updateState={this.updateState}
        />
        <TextButton
          title="Login"
          titleColor={ThemeColorText}
          onPress={this.handleConnection}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  token: state.token,
});

InputContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  error: PropTypes.string,
  token: PropTypes.string,
};

InputContainer.defaultProps = {
  error: '',
  token: '',
};

export default connect(mapStateToProps)(InputContainer);
