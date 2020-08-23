const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../../prisma/generated/prisma-client');

// https://velog.io/@cadenzah/graphql-apollo-04-mutation

const rootResolver = {
  Query: {
    articles: (root, args, context) => context.db.articles(),
  },
};

const articleResolver = require('./resolvers/ArticleResolver');

const server = new GraphQLServer({
  typeDefs: './server/graphql/schema/schema.graphql',
  resolvers: [rootResolver, articleResolver],
  context: { db: prisma },
});
server.start((option) => console.log('http://localhost:4000에서 서버 가동중. option', option));
