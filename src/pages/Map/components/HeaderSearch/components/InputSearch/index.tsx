/* eslint-disable react/prop-types */

import {faTimesCircle, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useCallback, useRef} from 'react';
import {TextInputProps} from 'react-native';
import colors from '../../../../../../styles/colors';

import {Container, TextInputSearch, Icon, ButtonClose} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: IconDefinition;
}

const InputSearch: React.FC<InputProps> = ({
  name,
  icon,
  onChangeText,
  ...rest
}) => {
  const inputRef = useRef(null);

  const handleChangeText = useCallback(
    (value) => {
      onChangeText(value);
    },
    [onChangeText],
  );

  return (
    <Container>
      <Icon icon={icon} size={18} />
      <TextInputSearch
        ref={inputRef}
        placeholderTextColor={`${colors.gray}`}
        onChangeText={handleChangeText}
        {...rest}
      />

      <ButtonClose
        onPress={() => {
          inputRef.current.clear();
          handleChangeText('');
        }}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </ButtonClose>
    </Container>
  );
};

export default InputSearch;
