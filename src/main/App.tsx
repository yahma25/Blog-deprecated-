import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import { Theme } from './Theme';
import GlobalStyle from './GlobalStyle';

// TODO: theme should be changed by theme type option. ex) light, dark, ...

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={new Theme()}>
        <GlobalStyle />
        <AppLayout />
      </ThemeProvider>
    );
  }
}

export default App;
