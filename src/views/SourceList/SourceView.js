import React, { Component } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity, Linking,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../redux/store';
import { actionFetchSourceContent } from '../../redux/actions';

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

  render() {
    const { content } = this.props;
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}


const mapStateToProps = state => ({
  token: state.token,
  content: state.content,
});

SourceView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(SourceView);
