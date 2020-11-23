import React from 'react';
import {faArrowLeft, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Text, FlatList, View} from 'react-native';
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
  ButtonsOption,
  ImageFarm,
  ListMedicine,
  Line,
  InputSearchDiv,
} from './styles';
import InputSearch from '../Map/components/HeaderSearch/components/InputSearch';
import PharmacieList from '../../components/PharmacieList';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dorflex',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dorflex',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dorflex',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dorflex',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dorflex',
  },
];

const PharmacieDetails: React.FC = () => {
  const renderItem = ({item}) => (
    <View>
      <PharmacieList
        text={item.title}
        subText="Medicamento"
        value="12,90"
        url="https://app-buscafarm.s3.amazonaws.com/5994dd0e1704307c4543-dorflex.jpg"
      />
    </View>
  );
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} />
        </ButtonBack>
        <InfoFarm>
          <ProfilePhoto>
            <ImageFarm source={ProfileFarm} />
          </ProfilePhoto>
          <OptionsFarm>
            <NameFarm style={{fontWeight: 'bold'}}>Drogaria Megafarma</NameFarm>
            <ButtonsOption>
              <ButtonCall>Ligar</ButtonCall>
            </ButtonsOption>
          </OptionsFarm>
        </InfoFarm>
      </Header>
      <ListMedicine>
        <Line />
        <Text style={{color: 'rgba(196, 196, 196, 1)'}}>
          Lista de Medicamento
        </Text>
        <Line />
      </ListMedicine>
      <InputSearchDiv>
        <InputSearch
          name="Search"
          icon={faSearch}
          placeholder="Informe o medicamento"
        />
      </InputSearchDiv>

      <ListProducts>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </ListProducts>
    </Container>
  );
};

export default PharmacieDetails;
