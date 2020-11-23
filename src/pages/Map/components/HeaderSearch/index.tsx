import {faSearch} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InputSearch from './components/InputSearch';

import {Container} from './styles';

interface HeaderProps {
  onChangeText(e: any): void;
}

const HeaderSearch: React.FC<HeaderProps> = ({onChangeText}) => (
  <Container>
    <InputSearch
      name="search"
      icon={faSearch}
      placeholder="Informe o medicamento"
      onChangeText={onChangeText}
    />
  </Container>
);

export default HeaderSearch;
