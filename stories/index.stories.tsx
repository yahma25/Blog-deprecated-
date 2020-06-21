/**
 * index.stories file: https://storybook.js.org/docs/configurations/typescript-config/
 */

/* eslint-disable */
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs} from "@storybook/addon-knobs";
/* eslint-enable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/main/Theme';
import GlobalStyle from '../src/main/GlobalStyle';

// theme
addDecorator((storyFn) => (
  <ThemeProvider theme={new Theme()}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));
// immediately change props
addDecorator(withKnobs);
// documentation
addDecorator(withInfo);
