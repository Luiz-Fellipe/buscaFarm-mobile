/* eslint-disable react/prop-types */
import React from 'react';

import {Marker, MarkerProps} from 'react-native-maps';

import {Container, Name} from './styles';

interface IMarkerPharmacie extends MarkerProps {
  showDetails(): void;
  active: boolean;
}

const MarkerPharmacie: React.FC<IMarkerPharmacie> = ({
  coordinate,
  active,
  showDetails,
}) => (
  <Marker onPress={showDetails} coordinate={coordinate}>
    <Container active={active}>
      <Name active={active}>R$ 9,90</Name>
    </Container>
  </Marker>
);

export default MarkerPharmacie;
