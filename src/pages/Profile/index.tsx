import {
  faAngleRight,
  faFileInvoiceDollar,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import avatar from '../../assets/images/avatar.png';
import NotLoggedIn from '../../components/global/NotLoggedIn';
import {useAuth} from '../../context/AuthContext';
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
  const {signOut, user} = useAuth();
  return (
    <Container>
      {user ? (
        <>
          <ProfileHeader>
            <ProfileInfo>
              <AvatarImage source={avatar} />
              <ProfileNameUser>João da Silva</ProfileNameUser>
            </ProfileInfo>
            <ButtonSignOut onPress={signOut}>
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
        </>
      ) : (
        <NotLoggedIn />
      )}
    </Container>
  );
};

export default Profile;
