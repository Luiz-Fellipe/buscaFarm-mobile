import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StatusBar} from 'react-native';

import {Container} from './styles';
import AppProvider from './hooks';
import Routes from './routes/MenuTabs';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      translucent
      backgroundColor="transparent"
    />
    <AppProvider>
      <Container>
        <Routes />
      </Container>
    </AppProvider>
  </NavigationContainer>
);

export default App;
