import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';
import Markdown from '../../components/Markdown';
import articleMock from '../../../mock/ArticleMock';

class ArticlePage extends PureComponent {
  render() {
    return (
      <Container>
        <Body>
          <Title>Embracing the startup mindset</Title>
          <Markdown content={articleMock} />
        </Body>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  margin: 0 64px;
  max-width: 680px;
`;

const Title = styled.h1({
  fontSize: '40px',
  fontWeight: 400,
  fontFamily: 'medium-content-title-font, Georgia, Cambria, Times New Roman, Times, serif',
} as CSSObject);

export default ArticlePage;
