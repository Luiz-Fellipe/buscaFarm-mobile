import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import colors from '../../../styles/colors';
import Button from '../Button';

import {Container, Alert, Description, AlertIcon} from './styles';

const NotLoggedIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Alert>
        <AlertIcon size={60} icon={faExclamationTriangle} />
        <Description>
          Para acessar essa página é necessário fazer login
        </Description>
      </Alert>
      <Button
        onPress={() => navigation.navigate('Login')}
        style={{marginTop: 40, width: '40%', height: 40}}
        color={colors.primary}>
        Entrar
      </Button>
    </Container>
  );
};

export default NotLoggedIn;
