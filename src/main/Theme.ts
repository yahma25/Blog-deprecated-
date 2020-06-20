/**
 * 텍스트, 버튼, 인풋 등등
 * 테마에 따라 다른 색: 기본색, 배경색
 * 컨셉 종류에 따라 기본색, 배경색이 변경됨
 * - primary, secondary, ...
 * 테마 종류: light, dark
 */

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export class Theme {
  public readonly default: string;

  public readonly primary: string;

  public readonly darkPrimary: string;

  public readonly secondary: string;

  public readonly darkSecondary: string;

  public readonly error: string;

  public readonly darkError: string;

  public readonly white: string;

  public readonly gray: string;

  public readonly lightGray: string;

  public readonly darkGray: string;

  public readonly disabled: string;

  public readonly background: string;

  constructor(type: ThemeType = ThemeType.LIGHT) {
    if (type === ThemeType.LIGHT) {
      this.default = 'rgba(0, 0, 0, 0.87)';
      this.background = '#fff';
    } else {
      this.default = 'rgba(255, 255, 255, 0.87)';
      this.background = '#25282f';
    }

    this.primary = '#1976d2';
    this.darkPrimary = '#1463b3';
    this.secondary = '#03a87c';
    this.darkSecondary = '#028865';
    this.error = '#e51c23';
    this.darkError = '#b8171d';
    this.white = '#fff';
    this.gray = '#b5b5b5';
    this.lightGray = '#cdcdcd';
    this.darkGray = '#838383';
    this.disabled = 'rgba(0, 0, 0, 0.4)';
  }
}

export const FONT_SIZE_XSMALL: string = 'FONT_SIZE_XSMALL';
export const FONT_SIZE_SMALL: string = 'FONT_SIZE_SMALL';
export const FONT_SIZE_MEDUIM: string = 'FONT_SIZE_MEDUIM';
export const FONT_SIZE_LARGE: string = 'FONT_SIZE_LARGE';
export const FONT_SIZE_XLARGE: string = 'FONT_SIZE_XLARGE';

export const fontSize = {
  [FONT_SIZE_XSMALL]: '10px',
  [FONT_SIZE_SMALL]: '12px',
  [FONT_SIZE_MEDUIM]: '14px',
  [FONT_SIZE_LARGE]: '16px',
  [FONT_SIZE_XLARGE]: '18px',
};
