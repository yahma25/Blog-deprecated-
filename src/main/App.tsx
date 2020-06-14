import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import { Theme } from './Theme';

// TODO: theme should be changed by theme type option. ex) light, dark, ...

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={new Theme()}>
        <AppLayout />
      </ThemeProvider>
    );
  }
}

export default App;
