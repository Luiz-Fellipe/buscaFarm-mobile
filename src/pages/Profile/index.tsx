import {
  faAngleRight,
  faFileInvoiceDollar,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import avatar from '../../assets/images/avatar.png';
import {
  Container,
  ProfileHeader,
  ProfileInfo,
  ProfileNameUser,
  AvatarImage,
  ButtonSignOut,
  Icon,
  ProfileMenu,
  ProfileOption,
  ProfileOptionIcon,
  ProfileOptionText,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ProfileHeader>
        <ProfileInfo>
          <AvatarImage source={avatar} />
          <ProfileNameUser>João da Silva</ProfileNameUser>
        </ProfileInfo>
        <ButtonSignOut>
          <Icon icon={faSignOutAlt} size={24} />
        </ButtonSignOut>
      </ProfileHeader>
      <ProfileMenu>
        <ProfileOption onPress={() => navigation.navigate('Edit')}>
          <ProfileOptionIcon icon={faUser} size={24} />
          <ProfileOptionText>Editar Perfil</ProfileOptionText>
          <ProfileOptionIcon icon={faAngleRight} size={24} />
        </ProfileOption>
        <ProfileOption onPress={() => navigation.navigate('Budgets')}>
          <ProfileOptionIcon icon={faFileInvoiceDollar} size={24} />
          <ProfileOptionText>Meus Orçamentos</ProfileOptionText>
          <ProfileOptionIcon icon={faAngleRight} size={24} />
        </ProfileOption>
      </ProfileMenu>
    </Container>
  );
};

export default Profile;
