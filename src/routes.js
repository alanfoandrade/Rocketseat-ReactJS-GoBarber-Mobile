import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Signin from './pages/Signin';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Signin,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
