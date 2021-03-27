import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, loading, ...rest}) => (
  <Container {...rest}>
    <ButtonText>
      {loading ? <ActivityIndicator size="large" color="#fff" /> : children}
    </ButtonText>
  </Container>
);

export default Button;
