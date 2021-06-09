import {faCalendarAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BudgetsList from '../../../components/BudgetsList';
import {useAuth} from '../../../context/AuthContext';
import api from '../../../services/api';

import {
  Container,
  Title,
  LineHeader,
  Header,
  InputDate,
  ButtonDate,
  TextDate,
  TextFilter,
  IconDate,
  NoResults,
  NoResultsText,
} from './styles';
import {BoxLoading} from '../../PharmacieDetails/styles';
import colors from '../../../styles/colors';
import formatCurrency from '../../../utils/formatCurrency';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Droga Leve',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Droga Leve',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Droga Leve',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Droga Leve',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Droga Leve',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Droga Leve',
  },
];

interface PageProps {
  pageStart: number;
  date: Date | null;
}

const Budgets: React.FC = () => {
  const {user} = useAuth();
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const initialDate = new Date();
  const [pageState, setPageState] = useState<PageProps>({
    pageStart: 0,
    date: null,
  });

  const LIMIT_PER_PAGE = 60;

  const loadBudgets = useCallback(async () => {
    try {
      setLoading(true);
     
      const {
        data: {data},
      } = await api.get(`/budgets`, {
        params: {
          pageStart: pageState.pageStart,
          pageLength: LIMIT_PER_PAGE,
          date: pageState.date,
          user_id: user.id,
        },
      });

      setBudgets(data);
      setLoading(false);
    } catch (error) {
   
      setLoading(false);
      Alert.alert(`Erro ao buscar os medicamentos: ${error}`);
    }
  }, [pageState, user.id]);

  useEffect(() => {
    loadBudgets();
  }, [loadBudgets]);
  const renderItem = ({item}: any) => (
    <View>
      <BudgetsList
        text={item.pharmacie.company_name}
        textDate={format(new Date(item.created_at), 'dd/MM/yyyy')}
        price={formatCurrency('pt-br', 'BRL', Number(item.value))}
      />
    </View>
  );

  return (
    <Container>
      <Header>
        <Title>Meus Orçamentos</Title>
        <InputDate onPress={() => setDatePickerModal(true)}>
          <ButtonDate>
            <IconDate icon={faCalendarAlt} />
            {!pageState.date ? (
              <TextFilter>Filtre a partir de uma data...</TextFilter>
            ) : (
              <TextDate>
                {`${
                  pageState.date.getDate() <= 9
                    ? `0${pageState.date.getDate()}`
                    : pageState.date.getDate()
                }/${
                  pageState.date.getMonth() < 9
                    ? `0${pageState.date.getMonth() + 1}`
                    : pageState.date.getMonth() + 1
                }/${pageState.date.getFullYear()}`}
              </TextDate>
            )}
          </ButtonDate>
        </InputDate>
      </Header>

      {loading && (
        <BoxLoading
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </BoxLoading>
      )}

      {!loading && budgets.length > 0 && (
        <FlatList
          data={budgets}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
        />
      )}

      {!loading && budgets.length === 0 && (
        <NoResults>
          <FontAwesomeIcon size={60} icon={faTimesCircle} />
          <NoResultsText>Nenhum orçamento encontrado.</NoResultsText>
        </NoResults>
      )}

      <DateTimePickerModal
        isVisible={datePickerModal}
        mode="date"
        date={pageState.date || new Date()}
        onConfirm={(dateString) => {
  
          setDatePickerModal(false);
          setPageState({
            pageStart: 0,
            date: dateString,
          });
        }}
        onCancel={() => {
          setPageState({
            pageStart: 0,
            date: null,
          });
          setDatePickerModal(false);
        }}
      />
    </Container>
  );
};

export default Budgets;
