import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import ButtonAndIcon from '../../components/global/ButtonAndIcon';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const LoadingText = styled.Text`
  margin-top: 8px;
  font-size: 22px;
  color: ${colors.black};
  font-family: 'Raleway-Regular';
`;

export const ViewShowDetails = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: flex-start;
  background: ${colors.white};
  font-family: 'Raleway-Medium';
  position: absolute;
  bottom: 0;
`;

export const HeaderViewShowDetails = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colors.grayLigth};
  border-style: solid;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const NameAndDistance = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;

export const Name = styled.Text`
  margin-bottom: 2px;
  font-size: 20px;
`;

export const Distance = styled.Text`
  font-size: 16px;
`;

export const IconInfo = styled(FontAwesomeIcon)`
  margin-right: 25px;
`;

export const AddToCartViewShowDetails = styled.View`
  flex: 2;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-family: 'Raleway-Medium';
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const ButtonDetails = styled(ButtonAndIcon)`
  width: 40%;
  margin-right: 10px;
`;
export const ButtonBuy = styled(ButtonAndIcon)`
  width: 55%;
`;
