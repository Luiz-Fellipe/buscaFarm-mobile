import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ContainerWithBorders from '../../../components/global/ContainerWithBorders';

import {Container} from './styles';

const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerWithBorders
        widthPercent="90"
        heightPercent="70"
        borderHeightPx="81"
        borderWidthPx="12"
      />
    </Container>
  );
};

export default EditProfile;
