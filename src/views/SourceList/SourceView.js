import React, { Component } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity, Linking,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from 'react-native-elements';
import store from '../../redux/store';
import { actionFetchSourceContent, actionFetchSourceList } from '../../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
});

class SourceView extends Component {
  componentDidMount() {
    const { token, navigation } = this.props;
    const sourceID = navigation.getParam('source_id');
    store.dispatch(actionFetchSourceContent(sourceID, token));
  }

  static onPressItem(item) {
    Linking.openURL(item.link);
  }

  deleteSource() {
    const { token, navigation } = this.props;
    const sourceID = navigation.getParam('source_id');

    fetch(`https://squawkapi.chaz.pro/source/${sourceID}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      store.dispatch(actionFetchSourceList(token));
      navigation.navigate('SourceList');
    });
  }

  render() {
    const { content } = this.props;
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Sources List', style: { color: '#fff' } }}
          rightComponent={{
            icon: 'delete',
            color: '#fff',
            onPress: () => this.deleteSource(),
          }}
        />
        {content && (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => SourceView.onPressItem(item)}
            >
              <View style={styles.card}>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        )}
      </View>
    );
  }
}


const mapStateToProps = state => ({
  token: state.token,
  content: state.content,
});

SourceView.defaultProps = {
  content: [],
};

SourceView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape()),
};

export default connect(mapStateToProps)(SourceView);
