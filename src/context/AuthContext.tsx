import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert, PermissionsAndroid, BackHandler} from 'react-native';
import {Region} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import api from '../services/api';

interface User {
  name: string;
  email: string;
  avatar: string;
  phone: string;
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
  location: Region;
  getLocationUser(): void;
  loading: boolean;
}

interface IData {
  location: Region;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState<boolean>(false);
  const [locationUser, setLocationUser] = useState<IData>({
    location: {
      latitude: -11.1214945,
      longitude: -49.0833503,
      latitudeDelta: 0.014,
      longitudeDelta: 0.014,
    },
  });

  useEffect(() => {
    async function loadStorageGetData(): Promise<void> {
      setLoading(true);
      const [token, user] = await AsyncStorage.multiGet([
        '@BuscaFarm:token',
        '@BuscaFarm:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({token: token[1], user: JSON.parse(user[1])});
      }
      setLoading(false);
    }
    loadStorageGetData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    try {
      const response = await api.post('sessions/users', {
        email,
        password,
      });
      const {token, user} = response.data;
      setData({token, user});

      await AsyncStorage.multiSet([
        ['@BuscaFarm:token', token],
        ['@BuscaFarm:user', JSON.stringify(user)],
      ]);

      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {
      Alert.alert(
        'Erro de autenticação',
        'Por favor verifique suas credenciais',
      );
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@BuscaFarm:token', '@BuscaFarm:user']);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@BuscaFarm:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

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
            setLocationUser({
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
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signOut,
        updateUser,
        location: locationUser.location,
        getLocationUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
