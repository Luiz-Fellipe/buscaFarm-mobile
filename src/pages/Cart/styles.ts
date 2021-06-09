import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding-top: 10%;
`;

export const Body = styled.FlatList`
  flex: 10;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.black};
`;

export const ImageMedicine = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const ItemList = styled.TouchableOpacity`
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
  color: ${colors.primary};
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
  width: 95%;
`;
export const BoxText = styled.View`
  margin-left: 10px;
`;
export const BoxRight = styled.View``;

export const CategoryMedicine = styled.Text`
  font-family: 'Raleway-Medium';
  color: ${colors.black};
  font-size: 18px;
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

export const NoResults = styled.View`
  flex: 8;
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
