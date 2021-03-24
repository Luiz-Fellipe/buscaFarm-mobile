import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AlertIcon = styled(FontAwesomeIcon)`
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 20px;
  text-align: center;
`;
