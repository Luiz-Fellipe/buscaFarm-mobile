import React, { useEffect, useState } from 'react';
import MapView, { Region, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import {
  ActivityIndicator, Alert, PermissionsAndroid, View,
} from 'react-native';

import { Container, LoadingText } from './styles';
import colors from '../../styles/colors';
import MarkerPharmacie from '../../components/Map/MarkerPharmacie';

const Map: React.FC = () => {
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
        <MapView
          style={{ width: '100%', height: '100%' }}
          showsUserLocation
          showsMyLocationButton={false}
          initialRegion={userLocation}
        >
          <MarkerPharmacie coordinate={{
            latitude: -16.6923491,
            longitude: -49.3303659,
          }}
          />
          <MarkerPharmacie coordinate={{
            latitude: -16.6964472,
            longitude: -49.3287462,
          }}
          />
          <MarkerPharmacie coordinate={{
            latitude: -16.6949717,
            longitude: -49.3263945,
          }}
          />
          <MarkerPharmacie coordinate={{
            latitude: -16.6921226,
            longitude: -49.3246633,
          }}
          />
          <MarkerPharmacie coordinate={{
            latitude: -16.6859329,
            longitude: -49.325818,
          }}
          />
        </MapView>
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
