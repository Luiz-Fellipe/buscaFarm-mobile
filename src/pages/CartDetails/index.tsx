import {
  faArrowLeft,
  faClinicMedical,
  faPlusCircle,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {Icon} from '../../components/global/ButtonAndIcon/styles';
import {useAuth} from '../../context/AuthContext';

import {useCart} from '../../context/CartContext';
import colors from '../../styles/colors';
import formatCurrency from '../../utils/formatCurrency';

import {
  Container,
  Header,
  ButtonBack,
  InfoFarm,
  ProfilePhoto,
  OptionsFarm,
  NameFarm,
  ButtonCall,
  ButtonsOption,
  ImageFarm,
  AdressFarm,
  MedicinesList,
  SendBudget,
  ButtonSend,
  ItemList,
  BoxLeft,
  BoxRight,
  CategoryMedicine,
  NameMedicine,
  BoxText,
  ContainerInput,
  ButtonRemove,
} from './styles';

interface IMedicine {
  medicine_id: string;
  price: number;
  amount: number;
}

interface IPharmacie {
  id: string;
  company_name: string;
  avatar?: string;
  avatar_url?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  city?: string;
  uf?: string;
  zip_code?: string;
  neighborhood?: string;
  medicines?: IMedicine[];
}

interface IProps {
  pharmacieId: string;
}

const CartDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IProps;
  const {pharmacieId} = routeParams;
  const [pharmacie, setPharmacie] = useState<any>({});
  const {
    handleRemoveMedicine,
    pharmaciesInCart,
    handleTotalBudget,
    handleSendBudget,
    handleUpdateMedicineAmount,
    loading,
  } = useCart();
  const {user} = useAuth();

  useEffect(() => {
    const findPharmacie = pharmaciesInCart.find(
      (p) => p.pharmacie.id === pharmacieId,
    );

    if (findPharmacie) {
      setPharmacie(findPharmacie.pharmacie);
    } else {
      navigation.navigate('Home');
    }
  }, [pharmacieId, pharmaciesInCart, navigation]);

  const renderItem = ({item}: any) => {
    return (
      <ItemList>
        <BoxLeft>
          <ButtonRemove
            onPress={() =>
              handleRemoveMedicine(pharmacie.id, item.medicine_id)}>
            <Icon icon={faTrash} size={20} />
          </ButtonRemove>

          <BoxText>
            <NameMedicine>{item.name}</NameMedicine>
            <CategoryMedicine>
              {`${item.amount} item(s) no valor de ${formatCurrency(
                'pt-br',
                'BRL',
                Number(item.price),
              )}`}
            </CategoryMedicine>
          </BoxText>
        </BoxLeft>
        <BoxRight>
          <ContainerInput>
            <TextInput
              style={{width: '100%', textAlign: 'center'}}
              keyboardAppearance="dark"
              defaultValue={`${item.amount}`}
              onChangeText={(e) =>
                handleUpdateMedicineAmount(pharmacieId, item.medicine_id, e)}
              placeholderTextColor="#666360"
              keyboardType="numeric"
            />
          </ContainerInput>
        </BoxRight>
      </ItemList>
    );
  };
  useEffect(() => {
    console.log('loading', loading);
  }, [loading]);

  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={30} />
      </ButtonBack>
      <Header>
        <InfoFarm>
          <ProfilePhoto>
            {pharmacie?.avatar_url ? (
              <ImageFarm source={{uri: pharmacie.avatar_url}} />
            ) : (
              <FontAwesomeIcon size={105} icon={faClinicMedical} />
            )}
          </ProfilePhoto>
          <OptionsFarm>
            <NameFarm style={{fontWeight: 'bold'}}>
              {pharmacie?.company_name}
            </NameFarm>
            <AdressFarm>{`${pharmacie?.city} - ${pharmacie?.uf}`}</AdressFarm>
            <AdressFarm>
              {`${pharmacie?.zip_code}, ${pharmacie?.neighborhood} `}
            </AdressFarm>

            <ButtonsOption>
              <ButtonCall
                color=""
                onPress={() => Linking.openURL(`tel:${pharmacie?.phone}`)}>
                Ligar
              </ButtonCall>
            </ButtonsOption>
          </OptionsFarm>
        </InfoFarm>
      </Header>
      <MedicinesList>
        <FlatList
          data={pharmacie.medicines}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </MedicinesList>
      <SendBudget>
        {user ? (
          <ButtonSend
            color={colors.primary}
            icon={faPlusCircle}
            loading={loading}
            onPress={() => handleSendBudget(pharmacieId, user.id)}>
            {`Enviar - ${formatCurrency(
              'pt-br',
              'BRL',
              Number(handleTotalBudget(pharmacieId)),
            )}`}
          </ButtonSend>
        ) : (
          <ButtonSend
            color={colors.primary}
            icon={faUser}
            onPress={() => navigation.navigate('Login')}>
            Fazer Login
          </ButtonSend>
        )}
      </SendBudget>
    </Container>
  );
};

export default CartDetails;
