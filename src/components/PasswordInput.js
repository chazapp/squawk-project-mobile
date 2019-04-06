import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  WhiteIcon,
  WhiteTextFieldBase,
  WhiteTextFieldText,
  WhiteTextFieldTint,
} from 'src/style/GeneralStyleSheet';


export default class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);
    this.state = {
      secureTextEntry: true,
    };
  }

  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }

  renderPasswordAccessory() {
    const { secureTextEntry } = this.state;

    const name = secureTextEntry ? 'visibility' : 'visibility-off';

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={WhiteIcon}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    );
  }

  render() {
    const { secureTextEntry, ...data } = this.state;
    const { updateState, passwordState, label } = this.props;
    return (
      <TextField
        value={data.password}
        secureTextEntry={secureTextEntry}
        textColor={WhiteTextFieldText}
        baseColor={WhiteTextFieldBase}
        tintColor={WhiteTextFieldTint}
        onChangeText={password => updateState(passwordState, password)}
        returnKeyType="done"
        label={label}
        maxLength={20}
        characterRestriction={20}
        renderAccessory={this.renderPasswordAccessory}
      />
    );
  }
}

PasswordInput.propTypes = {
  updateState: PropTypes.func.isRequired,
  passwordState: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
