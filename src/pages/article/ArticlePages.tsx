import React, { FunctionComponent } from 'react';
import { useQuery, QueryResult } from 'react-apollo';
import { ARTICLES_QUERY, ArticlesQueryResult } from '../../../server/graphql/query/ArticleQuery';
import { Article } from '../../../prisma/generated/prisma-client';


const ArticlePages: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<ArticlesQueryResult> = useQuery(ARTICLES_QUERY);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>데이터가 없네요;</div>;

  return (
    <>
      {data.articles.map((article: Article) => <div key={article.id}>{article.content}</div>)}
    </>
  );
};

export default ArticlePages;
