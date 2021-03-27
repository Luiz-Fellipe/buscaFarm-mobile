/* eslint-disable react/prop-types */
import React from 'react';

import {Marker, MarkerProps} from 'react-native-maps';
import formatCurrency from '../../../utils/formatCurrency';

import {Container, Name} from './styles';

interface IPharmacieMedicine {
  pharmacie: {
    id: string;
    company_name: string;
    avatar: string;
    latitude: number;
    longitude: number;
  };
  price: string;
}

interface IMarkerPharmacie extends MarkerProps {
  showDetails(pharmacieMedicine: IPharmacieMedicine): void;
  active: boolean;
  pharmacieMedicine: IPharmacieMedicine;
}

const MarkerPharmacie: React.FC<IMarkerPharmacie> = ({
  coordinate,
  active,
  pharmacieMedicine,
  showDetails,
}) => (
  <Marker
    onPress={() => showDetails(pharmacieMedicine)}
    coordinate={coordinate}>
    <Container active={active}>
      <Name active={active}>
        {formatCurrency('pt-br', 'BRL', Number(pharmacieMedicine.price))}
      </Name>
    </Container>
  </Marker>
);

export default MarkerPharmacie;
