import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';
import {darken} from 'polished';
import colors from '../../styles/colors';
import ButtonAndIcon from '../global/ButtonAndIcon';

export const Container = styled.View`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InfoBudgets = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ViewIconBudgets = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconBudgets = styled(FontAwesomeIcon).attrs({
  size: 40,
})`
  margin-right: 10px;
`;

export const LogoMed = styled(Image)`
  width: 70px;
  height: 70px;
`;

export const TitleDiv = styled.View`
  justify-content: center;
`;

export const TitleMed = styled(Text)`
  font-size: 20px;
`;

export const DateBudgets = styled(Text)`
  font-size: 15px;
  color: ${colors.gray};
`;

export const Price = styled(Text)`
  font-size: 15px;
  color: ${colors.gray};
`;

export const ValueButton = styled.View``;

export const ButtonArrow = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconArrowRight = styled(FontAwesomeIcon).attrs({
  size: 25,
})`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const AddProduct = styled.View`
  background: ${darken(0.09, '#1ed1a6')};
`;

export const IconAdd = styled(FontAwesomeIcon)`
  background: ${colors.white};
  color: #1ed1a6;
`;

export const ButtonBuy = styled(ButtonAndIcon)`
  width: 150px;
  height: 35px;
`;
