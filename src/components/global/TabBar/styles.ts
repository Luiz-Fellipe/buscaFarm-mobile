import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

interface MenuOptionProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  height: 8%;
  background-color: ${colors.white};
  border-top-width: 1px;
  border-color: ${colors.grayLigth};
  border-style: solid;
`;

export const MenuOption = styled.TouchableOpacity<MenuOptionProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const IconMenuOption = styled(FontAwesomeIcon)<MenuOptionProps>`
  color: ${(props) => (props.isFocused ? colors.primary : colors.black)};
`;

export const TextMenuOption = styled.Text<MenuOptionProps>`
  color: ${(props) => (props.isFocused ? colors.primary : colors.black)};
`;

export const Badge = styled.Text<MenuOptionProps>`
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${colors.white};
  top: 5px;
  right: 24px;

  color: ${colors.white};
  background-color: ${(props) =>
    props.isFocused ? colors.black : colors.primary};
`;
