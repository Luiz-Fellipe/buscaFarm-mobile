import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Container} from './styles';

const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Edit Profile</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default EditProfile;
