import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 30;
  width: 60;
`;

export const Name = styled.Text`
 font-size: 16px;
 color: ${colors.white};
 font-family: 'Raleway-Medium';
`;
