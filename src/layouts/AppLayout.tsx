import React, { PureComponent } from 'react';
import styled, { ThemeProps } from 'styled-components';
import Header from './Header';
import Body from './Body';
import { Theme } from '../main/Theme';

class AppLayout extends PureComponent {
  render() {
    const Wrapper = styled.div(
      (props: ThemeProps<Theme>) => ({ backgroundColor: props.theme.background }),
    );

    return (
      <Wrapper>
        <Header />
        <Body />
      </Wrapper>
    );
  }
}

export default AppLayout;
