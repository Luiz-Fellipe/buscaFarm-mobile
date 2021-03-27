import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import {darken} from 'polished';
import colors from '../../styles/colors';
import ButtonAndIcon from '../global/ButtonAndIcon';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  flex: 1;
`;

export const InfoMed = styled.View`
  align-items: center;
  flex-direction: row;

  flex: 2;
`;

export const LogoDiv = styled.View``;

export const LogoMed = styled(Image)`
  width: 70px;
  height: 70px;
`;

export const TitleDiv = styled.View`
  margin-left: 10px;
`;

export const TitleMed = styled(Text)`
  font-size: 18px;
`;

export const Subtitle = styled(Text)`
  font-size: 15px;
  color: ${colors.gray};
`;

export const ValueButton = styled.View`
  flex: 1;
  align-items: center;
`;

export const ButtonPrice = styled.View``;

export const AddProduct = styled.View`
  background: ${darken(0.09, '#1ed1a6')};
`;

export const IconAdd = styled(FontAwesomeIcon)`
  background: ${colors.white};
  color: #1ed1a6;
`;

export const ButtonBuy = styled(ButtonAndIcon)`
  width: 125px;
  height: 35px;
`;
