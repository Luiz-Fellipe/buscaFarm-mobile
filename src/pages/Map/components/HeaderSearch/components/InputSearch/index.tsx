import { faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useRef } from 'react';
import { KeyboardAvoidingView, TextInputProps, TouchableOpacity } from 'react-native';
import colors from '../../../../../../styles/colors';

import {
  Container, TextInputSearch, Icon, ButtonClose,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: IconDefinition;
}

const InputSearch: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputRef = useRef(null);
  return (

    <Container>
      <Icon icon={icon} size={18} />
      <TextInputSearch ref={inputRef} placeholderTextColor={`${colors.gray}`} {...rest} />

      <ButtonClose onPress={() => { inputRef.current.clear(); }}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </ButtonClose>
    </Container>

  );
};

export default InputSearch;
