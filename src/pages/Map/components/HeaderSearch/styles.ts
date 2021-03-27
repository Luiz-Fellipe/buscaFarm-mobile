import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  height: 15%;
  background: ${colors.white};
  justify-content: flex-end;
  align-items: center;
  border-bottom-width: 0.6px;
  border-color: ${colors.grayLigth};
  border-style: solid;
  padding-bottom: 20px;
`;
