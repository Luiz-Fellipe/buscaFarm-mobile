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
  border-radius: 50;
  border: 2px solid ${colors.white};
`;

export const OptionsFarm = styled.View`
  flex: 1;
  flex-grow: 1;
  width: 0;
  padding: 10px 20px;
`;

export const NameFarm = styled.Text`
  font-size: 18px;
  justify-content: flex-start;
  font-family: 'Raleway-Bold';
`;

export const ButtonsOption = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
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

  height: 1px;
  margin: 20px 20px;
  background: #bdbdbd;
`;

export const InputSearchDiv = styled.View`
  background: ${colors.white};
  align-items: center;
  margin-top: 10px;
`;

export const AdressFarm = styled.Text``;

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

export const BoxLoading = styled.View`
  flex: 2;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;
