import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../../styles/colors';

export const Container = styled(RectButton)`
  width: 40%;
  height: 60px;
  background: ${colors.primary};
  border-radius: 20px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'Raleway-Regular';
  color: ${colors.white};
  font-size: 18px;
`;
