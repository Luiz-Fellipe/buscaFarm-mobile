import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const PharmacieDetails: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Details</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>back</Text></TouchableOpacity>
    </Container>
  );
};

export default PharmacieDetails;
