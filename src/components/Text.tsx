import React, { FunctionComponent, ReactNode } from 'react';
import styled, {
  css,
  CSSObject,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDUIM,
  FONT_SIZE_SMALL,
  FONT_SIZE_XLARGE,
  FONT_SIZE_XSMALL, fontSize,
  Theme,
} from '../main/Theme';

type TextProps = {
  children?: ReactNode,
  color?: string,
  fontSize?: string,
  xsmall?: boolean,
  small?: boolean,
  large?: boolean,
  xlarge?: boolean,
  light?: boolean,
  bold?: boolean
  primary?: boolean,
  secondary?: boolean
};

const Text: FunctionComponent<TextProps> = ({
  children, color: customColor, fontSize: customFontSize,
  xsmall, small, large, xlarge, bold, primary, secondary,
}: TextProps) => {
  const common: CSSObject = {
    fontFamily: 'medium-content-sans-serif-font, Lucida Grande, Lucida Sans Unicode, Lucida Sans'
      + 'Geneva, Arial, sans-serif',
    fontWeight: bold ? 'bold' : 500,
  };

  const color: CSSObject | FlattenInterpolation<ThemeProps<Theme>> = (
    (primary && css((props: ThemeProps<Theme>) => ({ color: props.theme.primary })))
    || (secondary && css((props: ThemeProps<Theme>) => ({ color: props.theme.secondary })))
    || (customColor && { color: customColor })
    || (css((props: ThemeProps<Theme>) => ({ color: props.theme.default })))
  );

  const size: CSSObject = (
    (customFontSize && { fontSize: customFontSize })
    || (xsmall && { fontSize: fontSize[FONT_SIZE_XSMALL] })
    || (small && { fontSize: fontSize[FONT_SIZE_SMALL] })
    || (large && { fontSize: fontSize[FONT_SIZE_LARGE] })
    || (xlarge && { fontSize: fontSize[FONT_SIZE_XLARGE] })
    || ({ fontSize: fontSize[FONT_SIZE_MEDUIM] })
  );

  const Content = styled.span(common, color, size);

  return <Content>{children}</Content>;
};

export default Text;
