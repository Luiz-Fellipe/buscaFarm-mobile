import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppRoutes from './app.routes';
import Login from '../pages/SignIn';

const AuthRoutes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={AppRoutes} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
