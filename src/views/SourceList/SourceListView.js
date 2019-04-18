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

  onPressItem(item) {
    const { navigation } = this.props;
    navigation.navigate('SourceView', { source_id: item.source_id });
  }

  render() {
    const { sources, navigation, token } = this.props;
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Sources List', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'add',
            color: '#fff',
            onPress: () => navigation.navigate('AddSource', { token }),
          }}
        />
        <FlatList
          data={sources}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={SourceListStyle.touchable}
              onPress={() => this.onPressItem(item)}
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
