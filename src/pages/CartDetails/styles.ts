import {Image} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/global/Button';
import ButtonAndIcon from '../../components/global/ButtonAndIcon';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.white};
  flex: 1;
  position: relative;
`;

export const Header = styled.View`
  flex: 2;

  justify-content: flex-end;
  padding: 0 20px;
  border-bottom-width: 1px;
  border-color: ${colors.grayLigth};
  border-style: solid;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  z-index: 300;
  left: 20px;
  top: 40px;
`;

export const ListProducts = styled.View`
  flex: 2;
`;

export const InfoFarm = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
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
  font-size: 20px;
  justify-content: flex-start;
  font-family: 'Raleway-Bold';
`;

export const ButtonsOption = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const AdressFarm = styled.Text`
  font-size: 16px;
  font-family: 'Raleway-Bold';
`;

export const ButtonCall = styled(Button)`
  width: 100px;
  height: 35px;
  border-radius: 10px;
`;

export const MedicinesList = styled.View`
  flex: 3;
`;
export const SendBudget = styled.View`
  flex: 1.2;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-color: ${colors.grayLigth};
  border-style: solid;
`;

export const ButtonSend = styled(ButtonAndIcon)`
  width: 80%;
  height: 40%;
  border-radius: 10px;
`;

export const BudgetValue = styled.Text`
  font-size: 25px;
  font-family: 'Raleway-Bold';
`;

export const ItemList = styled.View`
  height: 100px;
  background-color: ${colors.white};

  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: ${colors.grayLigth};
  border-style: solid;
`;

export const NameMedicine = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 20px;
  color: ${colors.black};
`;

export const BoxLoading = styled.View`
  flex: 8;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const BoxLeft = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
`;
export const BoxText = styled.View`
  margin-left: 10px;
`;
export const BoxRight = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CategoryMedicine = styled.Text`
  font-family: 'Raleway-Medium';
  color: ${colors.gray};
  font-size: 18px;
`;

export const ImageMedicine = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const HeaderCart = styled.View`
  flex: 1;
  padding: 10px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Raleway-Medium';
  color: ${colors.black};

  font-size: 24px;
`;

export const HeaderSubTitle = styled.Text`
  font-family: 'Raleway-Medium';
  color: ${colors.gray};

  font-size: 18px;
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
`;

export const ContainerInput = styled.View`
  width: 80%;
  height: 60%;
  background: #ece2e1;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;
