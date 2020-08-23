import { gql } from 'apollo-boost';
import { Article } from '../../../prisma/generated/prisma-client';

export interface ArticlesQueryResult {
    articles: Array<Article>;
}

export const ARTICLES_QUERY = gql`
    {
        articles {
            id
            thumbUrl
            title
            content
            tags
            createdAt
            updatedAt
        }
    }
`;
