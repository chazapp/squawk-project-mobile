import React from 'react';
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import LoadingView from './src/views/LoadingView';
import LoginView from './src/views/Login/LoginView';
import SourceListView from './src/views/SourceList/SourceListView';

const MainNavigator = createBottomTabNavigator(
  {
    SourceList: SourceListView,
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
