import {faChevronRight, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {debounce} from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import HeaderSearch from '../Map/components/HeaderSearch';

import {
  Container,
  Body,
  BoxLoading,
  ItemList,
  ImageMedicine,
  NameMedicine,
  Icon,
  BoxLeft,
  BoxRight,
  BoxText,
  CategoryMedicine,
  NoResults,
  NoResultsText,
} from './styles';
import api from '../../services/api';
import colors from '../../styles/colors';
import {useAuth} from '../../context/AuthContext';

interface PageProps {
  pageStart: number;
  searchValue: string;
}

const LIMIT_PER_PAGE = 30;

const SearchMedicine: React.FC = () => {
  const navigation = useNavigation();

  const {getLocationUser} = useAuth();

  const [medicines, setMedicines] = useState([]);

  const [loading, setLoading] = useState(false);

  const [pageState, setPageState] = useState<PageProps>({
    pageStart: 0,
    searchValue: '',
  });

  useEffect(() => {
    getLocationUser();
  }, [getLocationUser]);

  const loadMedicines = useCallback(async () => {
    try {
      setLoading(true);

      console.log({
        params: {
          pageStart: pageState.pageStart,
          pageLength: LIMIT_PER_PAGE,
          search: pageState.searchValue,
        },
      });
      const {
        data: {data},
      } = await api.get('/medicines', {
        params: {
          pageStart: pageState.pageStart,
          pageLength: LIMIT_PER_PAGE,
          search: pageState.searchValue,
        },
      });

      setMedicines(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(`Erro ao buscar os medicamentos: ${error}`);
    }
  }, [pageState]);

  useEffect(() => {
    loadMedicines();
  }, [loadMedicines]);

  const handleSearchValue = useCallback((value) => {
    setPageState({pageStart: 0, searchValue: value});
  }, []);

  const debounced = useCallback(
    debounce((e) => {
      handleSearchValue(e);
    }, 1000),
    [],
  );

  const navigateToMap = useCallback(
    (medicine) => {
      navigation.navigate('Map', {medicine});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => (
      <ItemList onPress={() => navigateToMap(item)}>
        <BoxLeft>
          <ImageMedicine
            source={{
              uri: item.image_url
                ? item.image_url
                : 'https://app-buscafarm.s3.amazonaws.com/sem-foto.png',
            }}
          />
          <BoxText>
            <NameMedicine>{item.name}</NameMedicine>
            <CategoryMedicine>Comprimidos</CategoryMedicine>
          </BoxText>
        </BoxLeft>
        <BoxRight>
          <Icon icon={faChevronRight} size={20} />
        </BoxRight>
      </ItemList>
    ),
    [navigateToMap],
  );

  return (
    <Container>
      <HeaderSearch onChangeText={debounced} />
      {loading && (
        <BoxLoading>
          <ActivityIndicator size="large" color={colors.primary} />
        </BoxLoading>
      )}

      {!loading && medicines.length > 0 && (
        <Body
          data={medicines}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}

      {!loading && medicines.length === 0 && (
        <NoResults>
          <FontAwesomeIcon size={60} icon={faTimesCircle} />
          <NoResultsText>Nenhum medicamento encontrado.</NoResultsText>
        </NoResults>
      )}
    </Container>
  );
};

export default SearchMedicine;
