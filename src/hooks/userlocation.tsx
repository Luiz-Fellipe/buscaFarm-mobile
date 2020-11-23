import React, {createContext, useCallback, useState, useContext} from 'react';
import {Region} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import {Alert, PermissionsAndroid, BackHandler} from 'react-native';

interface ILocationData {
  location: Region;
  getLocationUser(): void;
}
interface IData {
  location: Region;
}

const UserLocationContext = createContext<ILocationData>({} as ILocationData);

const UserLocationProvider: React.FC = ({children}) => {
  const [data, setData] = useState<IData>({
    location: {
      latitude: -11.1214945,
      longitude: -49.0833503,
      latitudeDelta: 0.014,
      longitudeDelta: 0.014,
    },
  });

  const getLocationUser = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão para acessar sua localização',
          message: 'O Aplicativo precisa que você informe sua localização',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          async (position) => {
            setData({
              location: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              },
            });
          },
          (error) => {
            Alert.alert(`Erro ao pegar localização do usuário : ${error}`);
            BackHandler.exitApp();
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        BackHandler.exitApp();
      }
    } catch (err) {
      Alert.alert(err);
    }
  }, []);

  return (
    <UserLocationContext.Provider
      value={{
        location: data.location,
        getLocationUser,
      }}>
      {children}
    </UserLocationContext.Provider>
  );
};

function userLocation(): ILocationData {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export {UserLocationProvider, userLocation};
