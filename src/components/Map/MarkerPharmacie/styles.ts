import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';

interface IContainerProps {
  active: boolean;
}

export const Container = styled.View<IContainerProps>`
  background-color: ${(props) => (props.active ? colors.white : colors.primary)};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 30;
  width: 60;

  ${(props) => props.active && css`
    border: 2px solid ${colors.primary};
  `}
`;

export const Name = styled.Text<IContainerProps>`
 font-size: 16px;
 color: ${(props) => (props.active ? colors.primary : colors.white)};
 font-family: 'Raleway-Medium';
`;
