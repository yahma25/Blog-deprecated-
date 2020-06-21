import React, { FunctionComponent, ReactNode } from 'react';
import styled, {
  css, CSSObject, FlattenInterpolation, ThemeProps,
} from 'styled-components';
import { Theme } from '../main/Theme';
import Icon from './Icon';
import { IconType } from '../util/IconUtil';

type ButtonProps = {
  children?: ReactNode,
  onClick?: () => void,
  small?: boolean,
  large?: boolean,
  primary?: boolean,
  secondary?: boolean,
  outline?: boolean,
  error?: boolean,
  disabled?: boolean,
  iconType?: IconType,
  rounding?: boolean,
  circle?: boolean
};

const Button: FunctionComponent<ButtonProps> = ({
  children, onClick, small, large, primary, secondary, outline,
  error, disabled, iconType, rounding, circle,
}: ButtonProps) => {
  const common: CSSObject = {
    padding: '6px 16px',
    borderRadius: rounding ? '1rem' : '4px',
    fontFamily: 'medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI,'
      + 'Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    fontWeight: 500,
  };

  const typeStyle: FlattenInterpolation<ThemeProps<Theme>> = (
    (primary && css((props: ThemeProps<Theme>) => ({
      color: props.theme.white,
      backgroundColor: props.theme.primary,
      ':hover': { backgroundColor: props.theme.darkPrimary },
    })))
    || (secondary && css((props: ThemeProps<Theme>) => ({
      color: props.theme.white,
      backgroundColor: props.theme.secondary,
      ':hover': { backgroundColor: props.theme.darkSecondary },
    })))
    || (outline && css((props: ThemeProps<Theme>) => ({
      color: props.theme.primary,
      backgroundColor: props.theme.background,
      border: `1px solid ${props.theme.primary}`,
      ':hover': {
        color: props.theme.background,
        backgroundColor: props.theme.primary,
      },
    })))
    || (error && css((props: ThemeProps<Theme>) => ({
      color: props.theme.white,
      backgroundColor: props.theme.error,
      ':hover': { backgroundColor: props.theme.darkError },
    })))
    || (disabled && css((props: ThemeProps<Theme>) => ({
      color: props.theme.disabled,
      backgroundColor: props.theme.lightGray,
      'pointer-events': 'none',
    })))
    || css((props: ThemeProps<Theme>) => ({
      color: props.theme.default,
      backgroundColor: props.theme.lightGray,
      ':hover': { backgroundColor: props.theme.gray },
    }))
  );

  const size: CSSObject = (
    (small && { height: '30px' })
    || (large && { height: '40px' })
    || { height: '35px' }
  );

  const iconCircleStyles: Array<CSSObject> = iconType && circle ? ([
    {
      padding: 0,
      borderRadius: '100%',
      lineHeight: 0,
    },
    (small && { width: '30px', height: '30px' })
    || (large && { width: '40px', height: '40px' })
    || { width: '35px', height: '35px' },
  ]) : null;

  const StyledButton = styled.button(common, typeStyle, size, iconCircleStyles);

  return (
    <StyledButton onClick={onClick}>
      {iconType && <Icon type={iconType} includedText={!!children} />}
      {children}
    </StyledButton>
  );
};

export default Button;
