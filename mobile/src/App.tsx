import React from 'react';
import {ThemeProvider} from 'styled-components';

import AppProvider from './hooks';
import Routes from './routes/routes';
import theme from './styles/theme/ligth';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Routes />
    </AppProvider>
  </ThemeProvider>
);

export default App;
