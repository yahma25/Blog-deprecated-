import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
// 원격 데이터 불러오기
import { createHttpLink } from 'apollo-link-http';
// 캐시 라이브러리
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.scss';
import App from './main/App';

// GraphQL API를 사용하여 ApolloClient 인스턴스에 연결
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
