import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInputProps, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../../../../styles/colors';

export const Container = styled.View`
  width: 90%;
  height: 40px;
  background: ${colors.grayInput};
  border-radius: 4px;
  flex-direction: row;
  padding: 0 5px 0 10px;
  align-items: center;
`;

export const TextInputSearch = styled.TextInput<TextInputProps>`
  flex: 1;
  font-size: 16px;
  font-family: 'Raleway-Medium';
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: ${colors.primary};
`;
export const ButtonClose = styled(TouchableOpacity)`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
