import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StatusBar} from 'react-native';

import {Container} from './styles';

import Routes from './routes/MenuTabs';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      translucent
      backgroundColor="transparent"
    />
    <Container>
      <Routes />
    </Container>
  </NavigationContainer>
);

export default App;
