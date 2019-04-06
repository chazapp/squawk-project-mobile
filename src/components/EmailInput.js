import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'react-native-material-textfield';
import {
  WhiteTextFieldBase,
  WhiteTextFieldText,
  WhiteTextFieldTint,
} from 'src/style/GeneralStyleSheet';

export default class EmailInput extends Component {
  render() {
    const { ...data } = this.state;
    const { label, updateState, mail } = this.props;
    const defaultEmail = `${'example'}@${'example'}.com`
      .replace(/\s+/g, '_')
      .toLowerCase();
    return (
      <TextField
        label={label}
        value={data.email}
        defaultValue={defaultEmail}
        onChangeText={email => updateState(mail, email)}
        autoCapitalize="none"
        keyboardType="email-address"
        textColor={WhiteTextFieldText}
        baseColor={WhiteTextFieldBase}
        tintColor={WhiteTextFieldTint}
      />
    );
  }
}

EmailInput.propTypes = {
  updateState: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};
