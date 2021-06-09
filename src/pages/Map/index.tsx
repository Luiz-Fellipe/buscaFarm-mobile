import React, {useCallback, useEffect, useState} from 'react';
import MapView from 'react-native-maps';

import {TouchableOpacity} from 'react-native';

import {
  faArrowLeft,
  faInfoCircle,
  faPlusCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Container,
  ViewShowDetails,
  HeaderViewShowDetails,
  NameAndDistance,
  Name,
  IconInfo,
  AddToCartViewShowDetails,
  Price,
  ButtonGroup,
  ButtonDetails,
  ButtonBuy,
  ButtonBack,
  ButtonBackIcon,
} from './styles';

import colors from '../../styles/colors';
import MarkerPharmacie from '../../components/Map/MarkerPharmacie';

import formatCurrency from '../../utils/formatCurrency';
import {useAuth} from '../../context/AuthContext';
import {useCart} from '../../context/CartContext';

interface IPharmacieMedicine {
  pharmacie: {
    id: string;
    company_name: string;
    avatar: string;
    latitude: number;
    longitude: number;
  };
  price: string;
}

interface IRouteParams {
  medicine: {
    pharmacies_medicines: IPharmacieMedicine[];
    id: string;
    name: string;
    manufacturer: string;
    image_url: string;
  };
}

const Map: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IRouteParams;
  const {location} = useAuth();
  const {handleAddPharmacieAndMedicines} = useCart();
  const [showDetails, setShowDetails] = useState(false);
  const [pharmacieDetail, setPharmacieDetail] = useState<IPharmacieMedicine>(
    {} as IPharmacieMedicine,
  );

  const navigateToGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToDetails = useCallback(
    (pharmacie) => {
      navigation.navigate('Detalhes', {pharmacie});
    },
    [navigation],
  );

  return (
    <Container>
      <ButtonBack onPress={navigateToGoBack}>
        <ButtonBackIcon icon={faArrowLeft} />
      </ButtonBack>
      <MapView
        style={{width: '100%', height: '100%', flex: 8}}
        showsUserLocation
        showsMyLocationButton={false}
        initialRegion={location}>
        {routeParams.medicine.pharmacies_medicines.map(
          (pharmacieMedicine: IPharmacieMedicine) => (
            <MarkerPharmacie
              key={pharmacieMedicine.pharmacie.id}
              active={
                pharmacieDetail.pharmacie &&
                pharmacieMedicine.pharmacie.id === pharmacieDetail.pharmacie.id
              }
              pharmacieMedicine={pharmacieMedicine}
              showDetails={(item) => {
                setShowDetails(true);
                setPharmacieDetail(item);
              }}
              coordinate={{
                latitude: Number(pharmacieMedicine.pharmacie.latitude),
                longitude: Number(pharmacieMedicine.pharmacie.longitude),
              }}
            />
          ),
        )}
      </MapView>
      {showDetails && (
        <ViewShowDetails>
          <HeaderViewShowDetails>
            <NameAndDistance>
              <Name>{pharmacieDetail.pharmacie.company_name}</Name>
            </NameAndDistance>
            <TouchableOpacity
              onPress={() => {
                setShowDetails(false);
                setPharmacieDetail({} as IPharmacieMedicine);
              }}>
              <IconInfo icon={faTimes} size={26} />
            </TouchableOpacity>
          </HeaderViewShowDetails>
          <AddToCartViewShowDetails>
            <Price>
              {`Valor: ${formatCurrency(
                'pt-br',
                'BRL',
                Number(pharmacieDetail.price),
              )}`}
            </Price>
            <ButtonGroup>
              <ButtonDetails
                onPress={() => navigateToDetails(pharmacieDetail.pharmacie)}
                color={colors.gray}
                icon={faInfoCircle}>
                DETALHES
              </ButtonDetails>
              <ButtonBuy
                color={colors.primary}
                icon={faPlusCircle}
                onPress={() =>
                  handleAddPharmacieAndMedicines({
                    pharmacie: {
                      ...pharmacieDetail.pharmacie,
                      medicines: {
                        medicine_id: routeParams.medicine.id,
                        name: routeParams.medicine.name,
                        image_url: routeParams.medicine.image_url,
                        manufacturer: routeParams.medicine.image_url,
                        amount: 1,
                        price: Number(pharmacieDetail.price),
                      },
                    },
                  })
                }>
                COMPRAR
              </ButtonBuy>
            </ButtonGroup>
          </AddToCartViewShowDetails>
        </ViewShowDetails>
      )}
    </Container>
  );
};

export default Map;
