import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import BudgetsList from '../../../components/BudgetsList';
import { useCart } from '../../../context/CartContext';

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
} from './styles';

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

const Budgets: React.FC = () => {
  const initialDate = new Date();
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [date, setDate] = useState(initialDate);



  const renderItem = ({item}) => (
    <View>
      <BudgetsList text={item.title} textDate="20/11/2020" price="12,90" />
    </View>
  );
  return (
    <Container>
      <Header>
        <Title>Meus Orçamentos</Title>
        <InputDate onPress={() => setDatePickerModal(true)}>
          <ButtonDate>
            <IconDate icon={faCalendarAlt} />
            {date === initialDate ? (
              <TextFilter>Filtre a partir de uma data...</TextFilter>
            ) : (
              <TextDate>
                {`${
                  date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate()
                }/${
                  date.getMonth() < 9
                    ? `0${date.getMonth() + 1}`
                    : date.getMonth() + 1
                }/${date.getFullYear()}`}
              </TextDate>
            )}
          </ButtonDate>
        </InputDate>
      </Header>
      <LineHeader />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={LineHeader}
        style={{marginBottom: 40}}
      />

      <DateTimePickerModal
        isVisible={datePickerModal}
        mode="date"
        date={date}
        onConfirm={(dateString) => {
          setDatePickerModal(false);
          setDate(dateString);
        }}
        onCancel={() => setDatePickerModal(false)}
      />
    </Container>
  );
};

export default Budgets;
