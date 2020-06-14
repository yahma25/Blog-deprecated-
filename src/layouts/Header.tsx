import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';
import Text from '../components/Text';
import Button from '../components/Button';
import { IconType } from '../util/IconUtil';

class Header extends PureComponent {
  render() {
    const Wrapper = styled.div({
      display: 'flex',
      alignItems: 'center',
      height: '60px',
      padding: '10px',
    } as CSSObject);

    const Left = styled.div({
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      paddingLeft: '20px',
    } as CSSObject);

    const Center = styled.div({
      flex: 2,
      textAlign: 'center',
    });

    const Right = styled.div({
      flex: 1,
    });

    return (
      <Wrapper>
        <Left>
          <Button iconType={IconType.MENU} circle large primary />
        </Left>
        <Center>
          <Text xlarge bold>목표가 생기면 무작정 달려들어야지, 실패를 두려워할 여유같은 건 없을 때니까</Text>
        </Center>
        <Right />
      </Wrapper>
    );
  }
}

export default Header;
