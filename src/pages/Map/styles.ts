import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
 align-items: center;
 justify-content: center;
 height: 100%;
 width: 100%;
`;

export const LoadingText = styled.Text`
 margin-top: 8px;
 font-size: 22px;
 color: ${colors.black};
 font-family: 'Raleway-Regular';
`;
