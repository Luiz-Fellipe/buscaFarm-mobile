import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useCart } from '../../context/CartContext';

import colors from '../../styles/colors';

import {
  Container,
  InfoMed,
  LogoMed,
  LogoDiv,
  TitleDiv,
  TitleMed,
  Subtitle,
  ValueButton,
  ButtonPrice,
  ButtonBuy,
} from './styles';

interface PharmacieListProps {
  url: string;
  text: string;
  subText: string;
  value: string;
  medicine: any;
  pharmacie: any;
}

const PharmacieList: React.FC<PharmacieListProps> = ({
  url,
  text,
  subText,
  value,
  medicine,
  pharmacie
}) => {
const {handleAddPharmacieAndMedicines} = useCart();

  return (
    <Container>
      <InfoMed>
        <LogoDiv>
          <LogoMed
            source={{
              uri: medicine.medicine.image_url || 'https://app-buscafarm.s3.amazonaws.com/sem-foto.png',
            }}
          />
        </LogoDiv>
        <TitleDiv>
          <TitleMed>{medicine.medicine.name}</TitleMed>
          <Subtitle>{medicine.medicine.manufacturer}</Subtitle>
        </TitleDiv>
      </InfoMed>
      <ValueButton>
        <ButtonPrice>
          <ButtonBuy color={colors.primary} icon={faPlusCircle} onPress={() => {
            handleAddPharmacieAndMedicines({
              pharmacie: {
                ...pharmacie,
                medicines: {
                  medicine_id: medicine.medicine.id,
                  name: medicine.medicine.name,
                  image_url: medicine.medicine.image_url,
                  manufacturer: medicine.medicine.manufacturer,
                  amount: 1,
                  price: Number(medicine.price),
                },
              },
            })
          }}>
            {`R$ ${medicine.price}`}
          </ButtonBuy>
        </ButtonPrice>
      </ValueButton>
    </Container>
  );
};

export default PharmacieList;
