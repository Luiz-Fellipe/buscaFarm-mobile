import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;
export const ProfileHeader = styled.View`
  position: relative;
  flex: 1;
`;
export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50;
  border: 2px solid ${colors.white};
`;

export const ProfileNameUser = styled.Text`
  font-family: 'Raleway-Medium';
  color: ${colors.white};
  margin-top: 20px;
  font-size: 20px;
`;

export const ProfileInfo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const ButtonSignOut = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 60px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.white};
`;

export const ProfileMenu = styled.ScrollView`
  flex: 2;
  background-color: ${colors.white};
  padding: 10px;
`;

export const ProfileOption = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.grayLigth};
  flex-direction: row;
  height: 120px;
  margin-bottom: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileOptionIcon = styled(FontAwesomeIcon)``;

export const ProfileOptionText = styled.Text`
  font-family: 'Raleway-Medium';
  font-size: 20px;
`;
