// @ts-ignore
import config from '../../assets/fontello/config.json';

const getIconName = (type: IconType): string => (
  Array.from(config.glyphs).some((glyph: any) => glyph.css === type.toString())
    ? `${config.css_prefix_text}${type.toString()}` : ''
);

export default getIconName;

export enum IconType {
  MENU = 'menu'
}
