import React from 'react';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Text, Image} from 'react-native';
import ProfileFarm from '../../assets/images/profileFarmacia.png';

import {
  Container,
  Header,
  ButtonBack,
  ListProducts,
  InfoFarm,
  ProfilePhoto,
  OptionsFarm,
  NameFarm,
  ButtonCall,
  Evaluate,
  ButtonsOption,
} from './styles';

const PharmacieDetails: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} />
        </ButtonBack>
        <InfoFarm>
          <ProfilePhoto>
            <Image source={ProfileFarm} />
          </ProfilePhoto>
          <OptionsFarm>
            <NameFarm>Drogaria Megafarma</NameFarm>
            <ButtonsOption>
              <Evaluate>Avaliar</Evaluate>
              <ButtonCall>Ligar</ButtonCall>
            </ButtonsOption>
          </OptionsFarm>
        </InfoFarm>
      </Header>
      <ListProducts>
        <Text>List</Text>
      </ListProducts>
    </Container>
  );
};

export default PharmacieDetails;
