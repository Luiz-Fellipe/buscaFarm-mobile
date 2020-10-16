import React from 'react';
import { Alert } from 'react-native';
import { Marker, MarkerProps } from 'react-native-maps';

import { Container, Name } from './styles';

const MarkerPharmacie: React.FC<MarkerProps> = ({ coordinate }) => (
  <Marker onPress={() => { Alert.alert('clicou'); }} coordinate={coordinate}>
    <Container>
      <Name>R$ 9,90</Name>
    </Container>

  </Marker>
);

export default MarkerPharmacie;
