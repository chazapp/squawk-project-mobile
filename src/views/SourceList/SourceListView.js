import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class SourceListView extends Component {
  componentDidMount() {
  }

  render() {
    const { token } = this.props;
    return (
      <View style={styles.container}>
        <Text> SourceList View </Text>
        <Text>{token}</Text>
      </View>
    );
  }
}

SourceListView.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { token } = state;
  return { token };
};

export default connect(mapStateToProps)(SourceListView);
