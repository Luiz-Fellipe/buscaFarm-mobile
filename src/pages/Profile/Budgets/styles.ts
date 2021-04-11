import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  background: ${colors.white};
  flex: 1
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  padding: 50px 10px 50px 10px;
  border-bottom-width: 1px;
  border-color: ${colors.grayLigth};
  border-style: solid;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: ${colors.primary};
`;

export const LineHeader = styled.View`
  height: 0.3px;
  background: ${colors.gray};
`;

export const ButtonDate = styled.View`
  margin-top: 10px;
  padding: 20px;
  height: 35px;
  flex-direction: row;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  background: #ece2e1;
`;

export const TextFilter = styled.Text`
  color: #979494;
  font-size: 16px;
  margin-right: 80px;
`;
export const TextDate = styled.Text`
  color: #979494;
  font-size: 16px;
  margin-right: 180px;
`;

export const IconDate = styled(FontAwesomeIcon).attrs({
  size: 20,
})``;

export const InputDate = styled.TouchableOpacity``;

export const NoResults = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;
export const NoResultsText = styled.Text`
  margin-top: 20px;
  font-family: 'Raleway-Medium';
  font-size: 20px;
  text-align: center;
`;


