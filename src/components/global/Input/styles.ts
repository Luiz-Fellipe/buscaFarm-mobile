import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled, {css} from 'styled-components/native';
import colors from '../../../styles/colors';

interface IContainerProps {
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ece2e1;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px;
      border-color: ${colors.red};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.black};
  font-size: 16px;
  font-family: 'Raleway-Regular';
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 16px;
`;
