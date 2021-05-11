import {
  faChevronRight,
  faClinicMedical,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  Container,
  Body,
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
  HeaderCart,
  HeaderTitle,
  HeaderSubTitle,
} from './styles';

import {useCart} from '../../context/CartContext';

interface PageProps {
  pageStart: number;
  searchValue: string;
}

const LIMIT_PER_PAGE = 30;

const Cart: React.FC = () => {
  const navigation = useNavigation();

  const {pharmaciesInCart} = useCart();

  const navigateToDetails = useCallback(
    (pharmacieCart) => {
      navigation.navigate('Detalhes', {
        pharmacieId: pharmacieCart.pharmacie.id,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => {
      const {pharmacie} = item;
      return (
        <ItemList onPress={() => navigateToDetails(item)}>
          <BoxLeft>
            {pharmacie.avatar_url ? (
              <ImageMedicine
                source={{
                  uri: pharmacie.avatar_url,
                }}
              />
            ) : (
              <FontAwesomeIcon size={70} icon={faClinicMedical} />
            )}

            <BoxText>
              <NameMedicine>{pharmacie.company_name}</NameMedicine>
              <CategoryMedicine>{`${pharmacie.medicines.length} item(s)`}</CategoryMedicine>
            </BoxText>
          </BoxLeft>
          <BoxRight>
            <Icon icon={faChevronRight} size={20} />
          </BoxRight>
        </ItemList>
      );
    },
    [navigateToDetails],
  );

  return (
    <Container>
      {pharmaciesInCart.length > 0 && (
        <>
          <HeaderCart>
            <HeaderTitle>Carrinho</HeaderTitle>
            <HeaderSubTitle>
              Você adicionou item(s) na(s) farmácia(s) abaixo
            </HeaderSubTitle>
          </HeaderCart>
          <Body
            data={pharmaciesInCart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      )}

      {pharmaciesInCart.length === 0 && (
        <NoResults>
          <FontAwesomeIcon size={60} icon={faTimesCircle} />
          <NoResultsText>Nenhum orçamento encontrado.</NoResultsText>
        </NoResults>
      )}
    </Container>
  );
};

export default Cart;
