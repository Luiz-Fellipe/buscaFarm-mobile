import React from 'react';

import {UserLocationProvider} from './userlocation';

const AppProvider: React.FC = ({children}) => (
  <UserLocationProvider>{children}</UserLocationProvider>
);

export default AppProvider;
