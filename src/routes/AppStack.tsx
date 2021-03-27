import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import Map from '../pages/Map';
import PharmacieDetails from '../pages/PharmacieDetails';
import Profile from '../pages/Profile';
import Budgets from '../pages/Profile/Budgets';
import EditProfile from '../pages/Profile/EditProfile';
import SearchMedicine from '../pages/SearchMedicine';

const Stack = createStackNavigator();

// import { Container } from './styles';

const SearchStackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={SearchMedicine} />
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
  SearchStackNavigator,
  ProfileStackNavigator,
  CartStackNavigator,
  SettingsStackNavigator,
};
