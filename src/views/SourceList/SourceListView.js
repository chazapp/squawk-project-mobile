import React, { Component } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import store from 'src/redux/store';
import SourceListStyle from './SourceListStyle';
import { actionFetchSourceList } from '../../redux/actions';

const styles = {
};

class SourceListView extends Component {
  constructor(props) {
    super(props);
    this.onPressItem = this.onPressItem.bind(this);
  }

  componentDidMount() {
    const { token } = this.props;
    store.dispatch(actionFetchSourceList(token));
  }

  onPressItem(index) {
    const { sources, navigation } = this.props;
    const target = sources[index];
    navigation.navigate('SourceView', { target });
  }

  render() {
    const { sources } = this.props;
    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: 'Sources List', style: { color: '#fff' } }} />
        <FlatList
          data={sources}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={SourceListStyle.touchable}
              onPress={() => this.onPressItem(index)}
            >
              <View style={SourceListStyle.card}>
                <View style={SourceListStyle.infoContainer}>
                  <Text style={SourceListStyle.host}>
                    {item.host}
                  </Text>
                  <Text style={SourceListStyle.link}>
                    {item.link}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

SourceListView.propTypes = {
  token: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  token: state.token,
  sources: state.sources,
});

export default connect(mapStateToProps)(SourceListView);
