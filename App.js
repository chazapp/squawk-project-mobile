import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer, createStackNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import LoadingView from './src/views/LoadingView';
import LoginView from './src/views/Login/LoginView';
import SourceListView from './src/views/SourceList/SourceListView';
import AddSource from './src/views/SourceList/AddSource';
import SourceView from './src/views/SourceList/SourceView';

const SourcesNavigator = createStackNavigator(
  {
    SourceList: {
      screen: SourceListView,
      navigationOptions: {
        header: null,
      },
    },
    AddSource,
    SourceView: {
      screen: SourceView,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SourceList',
  },
);

const MainNavigator = createBottomTabNavigator(
  {
    SourceList: SourcesNavigator,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Loading: LoadingView,
    Login: LoginView,
    Main: MainNavigator,
    // SignUp: SignUpView,
  },
  {
    initialRouteName: 'Loading',
  },

);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
