import {Image} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/global/Button';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.white};
  flex: 1;
`;

export const Header = styled.View`
  background: ${colors.white};
  flex: 1;
`;

export const ButtonBack = styled.TouchableOpacity`
  left: 10px;
  top: 30px;
`;

export const ListProducts = styled.View`
  background: ${colors.white};
  flex: 2;
`;

export const InfoFarm = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ProfilePhoto = styled.View`
  margin-top: 15px;
  margin-left: 5px;
`;

export const ImageFarm = styled(Image)`
  width: 105px;
  height: 105px;
`;

export const OptionsFarm = styled.View`
  width: 100%;
  margin-top: 15px;
  margin-left: 10px;
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

export const ListMedicine = styled.View`
  flex-direction: row;
  background: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 60%;
  margin-left: 20px;
  margin-right: 20px;
  height: 2px;
  background: #bdbdbd;
`;

export const InputSearchDiv = styled.View`
  background: ${colors.white};
  align-items: center;
  margin-top: 10px;
`;
