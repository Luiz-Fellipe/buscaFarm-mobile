import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import Map from '../pages/Map';
import PharmacieDetails from '../pages/PharmacieDetails';
import Profile from '../pages/Profile';
import Budgets from '../pages/Profile/Budgets';
import EditProfile from '../pages/Profile/EditProfile';

const Stack = createStackNavigator();

// import { Container } from './styles';

const MapStackNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Map" component={Map} />
    <Stack.Screen name="Detalhes" component={PharmacieDetails} />
  </Stack.Navigator>
);

const ProfileStackNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Perfil" component={Profile} />
    <Stack.Screen name="Edit" component={EditProfile} />
    <Stack.Screen name="Budgets" component={Budgets} />
  </Stack.Navigator>
);

const CartStackNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Detalhes" component={PharmacieDetails} />
  </Stack.Navigator>
);

const SettingsStackNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Detalhes" component={PharmacieDetails} />
  </Stack.Navigator>
);

export {
  MapStackNavigator,
  ProfileStackNavigator,
  CartStackNavigator,
  SettingsStackNavigator,
};
