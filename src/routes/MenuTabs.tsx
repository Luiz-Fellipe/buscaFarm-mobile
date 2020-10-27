import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  faCogs,
  faMapMarkedAlt,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Map from '../pages/Map';
import colors from '../styles/colors';

import {MapStackNavigator, ProfileStackNavigator} from './AppStack';

const Tab = createBottomTabNavigator();

const MenuTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let icon = faUser;

        if (route.name === 'Mapa') {
          icon = faMapMarkedAlt;
        } else if (route.name === 'Perfil') {
          icon = faUser;
        } else if (route.name === 'Carrinho') {
          icon = faShoppingCart;
        } else if (route.name === 'Ajustes') {
          icon = faCogs;
        }

        // You can return any component that you like here!
        return <FontAwesomeIcon icon={icon} color={color} size={22} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black,
      labelStyle: {
        fontSize: 14,
      },
    }}
  >
    <Tab.Screen name="Mapa" component={MapStackNavigator} />
    <Tab.Screen name="Perfil" component={ProfileStackNavigator} />
    <Tab.Screen name="Carrinho" component={Map} options={{tabBarBadge: 3}} />
    <Tab.Screen name="Ajustes" component={Map} />
  </Tab.Navigator>
);

export default MenuTabs;
