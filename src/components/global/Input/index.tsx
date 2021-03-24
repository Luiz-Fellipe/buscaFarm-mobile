import React, {useEffect, useRef, useImperativeHandle, forwardRef} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';
import colors from '../../../styles/colors';
import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: IconProp;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {icon, name, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const {registerField, defaultValue, fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container isErrored={!!error}>
      <Icon icon={icon} size={20} color={error ? colors.red : colors.primary} />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
