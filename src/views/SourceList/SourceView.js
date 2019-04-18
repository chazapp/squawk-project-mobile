import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SourceListStyle from './SourceListStyle';

class SourceView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={SourceListStyle.container}>
        <Text>Source View</Text>
      </View>
    );
  }
}

export default SourceView;
