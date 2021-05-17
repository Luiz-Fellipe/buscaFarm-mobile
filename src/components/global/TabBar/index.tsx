import {
  faCogs,
  faMapMarkedAlt,
  faPills,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useCart} from '../../../context/CartContext';

import {
  Container,
  MenuOption,
  TextMenuOption,
  IconMenuOption,
  Badge,
} from './styles';

const TabBar: React.FC = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {pharmaciesInCart, total} = useCart();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        let label = route.name;

        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        }

        let icon = faUser;

        if (route.name === 'Buscar') {
          icon = faPills;
        } else if (route.name === 'Perfil') {
          icon = faUser;
        } else if (route.name === 'Carrinho') {
          icon = faShoppingCart;
        } else if (route.name === 'Ajustes') {
          icon = faCogs;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <MenuOption
            key={route.key}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}>
            <IconMenuOption isFocused={isFocused} icon={icon} size={20} />
            <TextMenuOption isFocused={isFocused}>{label}</TextMenuOption>
            {options.tabBarBadge && (
              <Badge isFocused={isFocused}>{total}</Badge>
            )}
          </MenuOption>
        );
      })}
    </Container>
  );
};

export default TabBar;
