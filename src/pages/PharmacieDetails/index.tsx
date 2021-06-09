import React, {useCallback, useEffect, useState} from 'react';
import {
  faArrowLeft,
  faClinicMedical,
  faSearch,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Text,
  FlatList,
  View,
  Alert,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {debounce} from 'lodash';

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
  AdressFarm,
  NoResults,
  NoResultsText,
  BoxLoading,
} from './styles';
import InputSearch from '../Map/components/HeaderSearch/components/InputSearch';
import PharmacieList from '../../components/PharmacieList';
import api from '../../services/api';
import colors from '../../styles/colors';

interface IProps {
  pharmacie: iPharmacie;
}

interface iMedicines {
  id: string;
  name: string;
  manufacturer: string;
  price: number;
}

interface iPharmacieMedicines {
  id: string;
  medicine: iMedicines;
}

interface iPharmacie {
  id: string;
  company_name: string;
  avatar: string;
  avatar_url: string;
  city: string;
  zip_code: string;
  uf: string;
  neighborhood: string;
  phone: string;
}

interface PageProps {
  pageStart: number;
  searchValue: string;
}

const LIMIT_PER_PAGE = 30;

const PharmacieDetails: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as IProps;

  const [loading, setLoading] = useState<boolean>(true);
  const [pageState, setPageState] = useState<PageProps>({
    pageStart: 0,
    searchValue: '',
  });
  const [dataPharmacieMedicine, setDataPharmacieMedicine] = useState<
    iPharmacie[] | []
  >([]);
  const loadPharmacieId = useCallback(async () => {
    try {
      setLoading(true);
   
      const {
        data
      } = await api.get(`/pharmacies/medicines/get`, {
        params: {
          pageStart: pageState.pageStart,
          pageLength: LIMIT_PER_PAGE,
          search: pageState.searchValue,
          pharmacieId: routeParams.pharmacie.id,
        },
      });
    
      if(data.count > 0){
        setDataPharmacieMedicine(data.data);
      }else {
     
        setDataPharmacieMedicine([]);
      }
     
      setLoading(false);
    } catch (error) {

      setLoading(false);
      Alert.alert(`Erro ao buscar os medicamentos: ${error}`);
    }
  }, [pageState, routeParams]);

  useEffect(() => {
    loadPharmacieId();
  }, [loadPharmacieId]);

  const handleSearchValue = useCallback((value) => {
    setPageState({pageStart: 0, searchValue: value});
  }, []);

  const debounced = useCallback(
    debounce((e) => {
      handleSearchValue(e);
    }, 1000),
    [],
  );

  const renderItem = ({item}: any) => {
    
    return (
      <View>
        <PharmacieList
          medicine={item}
          pharmacie={routeParams.pharmacie}
          // medicineId={item.medicine.id}
          // text={item.medicine.name}
          // subText={item.medicine.manufacturer}
          // value={item.price}
          // url={item.medicine.image_url}
        />
      </View>
    );
  };
  const navigation = useNavigation();
  return (
    <Container>
      {routeParams.pharmacie && (
        <>
          <Header>
            <ButtonBack onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={30} />
            </ButtonBack>
            <InfoFarm>
              <ProfilePhoto>
                {routeParams.pharmacie.avatar_url ? (
                  <ImageFarm source={{uri: routeParams.pharmacie.avatar_url}} />
                ) : (
                  <FontAwesomeIcon size={105} icon={faClinicMedical} />
                )}
              </ProfilePhoto>
              <OptionsFarm>
                <NameFarm style={{fontWeight: 'bold'}}>
                  {routeParams.pharmacie.company_name}
                </NameFarm>
                <AdressFarm>
                  {`${routeParams.pharmacie.city} - ${routeParams.pharmacie.uf}`}
                </AdressFarm>
                <AdressFarm>
                  {`${routeParams.pharmacie.zip_code}, ${routeParams.pharmacie.neighborhood} `}
                </AdressFarm>

                <ButtonsOption>
                  <ButtonCall
                    color=""
                    onPress={() =>
                      Linking.openURL(`tel:${routeParams.pharmacie.phone}`)}>
                    Ligar
                  </ButtonCall>
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
              onChangeText={debounced}
              placeholder="Informe o medicamento"
            />
          </InputSearchDiv>

          {loading && (
            <BoxLoading>
              <ActivityIndicator size="large" color={colors.primary} />
            </BoxLoading>
          )}
          {!loading && dataPharmacieMedicine.length > 0 && (
            <ListProducts>
              <FlatList
                data={dataPharmacieMedicine}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
            </ListProducts>
          )}

          {!loading && dataPharmacieMedicine.length === 0 && (
            <NoResults>
              <FontAwesomeIcon size={60} icon={faTimesCircle} />
              <NoResultsText>Nenhum medicamento encontrado.</NoResultsText>
            </NoResults>
          )}
        </>
      )}
    </Container>
  );
};

export default PharmacieDetails;
