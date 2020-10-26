import React, { useEffect, useState } from 'react';
import MapView, { Region } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import {
  ActivityIndicator, Alert, PermissionsAndroid, Platform, Text, View,
  TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faInfo, faInfoCircle, faPlusCircle, faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container, LoadingText, ViewShowDetails, HeaderViewShowDetails, NameAndDistance, Name, Distance, IconInfo, AddToCartViewShowDetails, Price, ButtonGroup, ButtonDetails, ButtonBuy,
} from './styles';

import colors from '../../styles/colors';
import MarkerPharmacie from '../../components/Map/MarkerPharmacie';
import HeaderSearch from './components/HeaderSearch';
import ButtonAndIcon from '../../components/global/ButtonAndIcon';

const Map: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const [userLocation, setUserLocation] = useState<Region>({
    latitude: -11.1214945,
    longitude: -49.0833503,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014,
  });

  const [hasTheUserLocation, setHasTheUserLocation] = useState(false);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão para acessar sua localização',
          message: 'O Aplicativo precisa que você infrome sua localização',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            });
            setHasTheUserLocation(true);
          },
          (error) => {
            setHasTheUserLocation(false);
            Alert.alert('Erro ao pegar localização do usuário');
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  },
  []);

  return (
    <Container>
      {hasTheUserLocation ? (

        <>
          <HeaderSearch />

          <MapView
            style={{ width: '100%', height: '100%', flex: 8 }}
            showsUserLocation
            showsMyLocationButton={false}
            initialRegion={userLocation}
          >
            <MarkerPharmacie
              active={showDetails}
              showDetails={() => { setShowDetails(true); }}
              coordinate={{
                latitude: -16.6923491,
                longitude: -49.3303659,
              }}
            />

          </MapView>
          {showDetails && (
            <ViewShowDetails>
              <HeaderViewShowDetails>
                <NameAndDistance>
                  <Name>Drogaria Megafarma</Name>
                  <Distance>Drogaria - 700m</Distance>
                </NameAndDistance>
                <TouchableOpacity onPress={() => { setShowDetails(false); }}>
                  <IconInfo icon={faTimes} size={26} />
                </TouchableOpacity>

              </HeaderViewShowDetails>
              <AddToCartViewShowDetails>
                <Price>Valor: R$ 9,90</Price>
                <ButtonGroup>
                  <ButtonDetails color={colors.gray} icon={faInfoCircle}>DETALHES</ButtonDetails>
                  <ButtonBuy color={colors.primary} icon={faPlusCircle}>COMPRAR</ButtonBuy>
                </ButtonGroup>
              </AddToCartViewShowDetails>

            </ViewShowDetails>
          )}
        </>
      ) : (
        <View>
          <ActivityIndicator size="large" color={colors.primary} />
          <LoadingText>Carregando o mapa...</LoadingText>
        </View>
      )}
    </Container>

  );
};

export default Map;
