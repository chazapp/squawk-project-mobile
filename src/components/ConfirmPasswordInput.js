import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { TextField } from 'react-native-material-textfield';
import {
  WhiteTextFieldBase,
  WhiteTextFieldText,
  WhiteTextFieldTint,
} from 'src/style/GeneralStyleSheet';

export default class ConfirmPasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.checkPassword = this.checkPassword.bind(this);
  }

  checkPassword(confPass) {
    const { value } = this.state;
    const {
      passwordState, confirmPassCheck, updateState,
    } = this.props;
    if (value !== confPass) {
      this.setState({ value: confPass });
      updateState(confirmPassCheck, (passwordState === confPass));
    }
  }

  render() {
    const { value } = this.state;
    return (
      <TextField
        value={value}
        secureTextEntry
        textColor={WhiteTextFieldText}
        baseColor={WhiteTextFieldBase}
        tintColor={WhiteTextFieldTint}
        onChangeText={confPass => this.checkPassword(confPass)}
        returnKeyType="done"
        label="Confirmation Password"
      />
    );
  }
}

ConfirmPasswordInput.propTypes = {
  updateState: PropTypes.func.isRequired,
  passwordState: PropTypes.string.isRequired,
  confirmPassCheck: PropTypes.string.isRequired,
};
