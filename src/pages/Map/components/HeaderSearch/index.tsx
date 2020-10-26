import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Text } from 'react-native';
import InputSearch from './components/InputSearch';

import { Container } from './styles';

const HeaderSearch: React.FC = () => (
  <Container>
    <InputSearch name="search" icon={faSearch} placeholder="Informe o medicamento ou farmacia" />
  </Container>
);

export default HeaderSearch;
