import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../../styles/colors';

interface ButtonProps extends RectButton {
  color: String;
}

export const Button = styled(RectButton)<ButtonProps>`
  width: 75%;
  height: 40px;
  background: ${(props) => (props.color ? props.color : colors.yellow)};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonText = styled.Text`
  width: 80%;
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
  font-family: 'Raleway-Medium'
`;
export const IconBackground = styled.View`
  background: ${(props) => (props.color ? darken(0.09, props.color) : darken(0.09, colors.yellow))};
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;
export const Icon = styled(FontAwesomeIcon)`
color: ${colors.white};
`;
