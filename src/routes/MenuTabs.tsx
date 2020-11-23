import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Map from '../pages/Map';

import {SearchStackNavigator, ProfileStackNavigator} from './AppStack';
import TabBar from '../components/global/TabBar';

const Tab = createBottomTabNavigator();

const MenuTabs: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Buscar" component={SearchStackNavigator} />
    <Tab.Screen name="Perfil" component={ProfileStackNavigator} />
    <Tab.Screen name="Carrinho" component={Map} options={{tabBarBadge: 3}} />
    <Tab.Screen name="Ajustes" component={Map} />
  </Tab.Navigator>
);

export default MenuTabs;
