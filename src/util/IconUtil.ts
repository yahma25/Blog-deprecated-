// @ts-ignore
import config from '../../assets/fontello/config.json';

const getIconName = (type: IconType): string => {
  const typeName: string = type.toString().toLowerCase();
  return Array.from(config.glyphs).some((glyph: any) => glyph.css === typeName)
    ? `${config.css_prefix_text}${typeName}` : '';
};

export default getIconName;

export enum IconType {
  MENU = 'MENU', PENCIL = 'PENCIL'
}
