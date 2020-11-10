import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  width: 70%;
  height: 60px;
  padding: 0 16px;
  background: #ece2e1;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
  font-family: 'Raleway-Regular';
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 16px;
`;
