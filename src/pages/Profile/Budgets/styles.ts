import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View``;

export const Header = styled.View`
  width: 100%;
  height: 150px;
  padding: 50px 10px 50px 10px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: ${colors.primary};
`;

export const LineHeader = styled.View`
  height: 1px;
  background: ${colors.gray};
`;

export const ButtonDate = styled.View`
  margin-top: 10px;
  padding: 20px;
  width: 80%;
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
  margin-right: 20px;
`;
export const TextDate = styled.Text`
  color: #979494;
  font-size: 16px;
  margin-right: 80px;
`;

export const IconDate = styled(FontAwesomeIcon).attrs({
  size: 20,
})``;

export const InputDate = styled.TouchableOpacity``;
