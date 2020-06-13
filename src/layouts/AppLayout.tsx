import React, { PureComponent } from 'react';
import Header from './Header';
import Body from './Body';

class AppLayout extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Body />
      </>
    );
  }
}

export default AppLayout;
