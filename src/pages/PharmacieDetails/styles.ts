import styled from 'styled-components/native';
import Button from '../../components/global/Button';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: ${colors.white};
  flex: 1;
`;

export const ButtonBack = styled.TouchableOpacity`
  left: 10px;
  top: 20px;
`;

export const ListProducts = styled.View`
  flex: 2;
  background: green;
`;

export const InfoFarm = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ProfilePhoto = styled.View`
  margin-left: 5px;
`;

export const OptionsFarm = styled.View`
  width: 100%;
  margin-left: 5px;
`;

export const NameFarm = styled.Text`
  font-size: 18px;
  justify-content: flex-start;
  font-family: 'Raleway-Bold';
`;

export const ButtonsOption = styled.View`
  flex-direction: row;
`;

export const ButtonCall = styled(Button)`
  width: 100px;
  height: 35px;
  border-radius: 10px;
`;
export const Evaluate = styled(Button)`
  width: 100px;
  height: 35px;
  margin-right: 10px;
  border-radius: 10px;
  background: gray;
  color: gray;
`;
