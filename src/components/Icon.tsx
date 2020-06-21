import React, { FunctionComponent } from 'react';
import styled, { CSSObject } from 'styled-components';
import getIconName, { IconType } from '../util/IconUtil';

type IconProps = {
  type: IconType,
  includedText: boolean,
};

const Icon: FunctionComponent<IconProps> = ({ type, includedText }: IconProps) => {
  const style: CSSObject = {
    marginRight: includedText ? '4px' : 0,
  };

  const IconElement = styled.i(style);

  return <IconElement className={getIconName(type)} />;
};

export default Icon;
