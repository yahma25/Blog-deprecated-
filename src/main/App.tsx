import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import { Theme } from './Theme';
import GlobalStyle from './GlobalStyle';
import WritingPage from '../pages/writing/WritingPage';

// TODO: theme should be changed by theme type option. ex) light, dark, ...

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={new Theme()}>
          <GlobalStyle />
          <Switch>
            <Route path='/' exact component={AppLayout} />
            <Route path='/writing' component={WritingPage} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
