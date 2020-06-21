import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppLayout from '../layouts/AppLayout';
import { Theme } from './Theme';
import GlobalStyle from './GlobalStyle';
import WritingPage from '../pages/writing/WritingPage';
import rootReducer from '../reducers';

// TODO: theme should be changed by theme type option. ex) light, dark, ...

const store = createStore(rootReducer);

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={new Theme()}>
          <GlobalStyle />
          <Provider store={store}>
            <Switch>
              <Route path='/' exact component={AppLayout} />
              <Route path='/writing' component={WritingPage} />
            </Switch>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
