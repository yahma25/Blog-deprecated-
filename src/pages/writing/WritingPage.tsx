import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

// TODO 작성/취소 처리 이후에 이전 페이지의 주소로 이동해야 함

class WritingPage extends PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <h1>Title</h1>
        </Header>
        <Body>
          <EditingTools>Editing tools</EditingTools>
          <TextArea />
        </Body>
        <Footer>
          <Button error large>Cancel</Button>
          <Button primary large>Publish</Button>
        </Footer>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 0 200px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: #2e2e2c;
  background-color: #f0db4f;
`;

const Body = styled.div`
  margin: 10px 0;
`;

const EditingTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 30px;
  border: 1px solid tan;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 10px;
  margin-top: 10px;
  resize: none;
  line-height: 1.5;
  border: 1px dashed rgba(0,0,0,0.2);
  border-radius: 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
`;

export default WritingPage;
