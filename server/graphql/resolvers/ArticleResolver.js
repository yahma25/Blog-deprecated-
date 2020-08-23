module.exports = {
  Mutation: {
    createArticle: (root, args, context) => context.db.createArticle({
      thumbUrl: args.thumbUrl,
      title: args.title,
      content: args.content,
      tags: {
        set: args.tags,
      },
    }),
    updateArticle: (parent, args, context) => context.db.updateArticle({
      data: {
        thumbUrl: args.thumbUrl,
        title: args.title,
        content: args.content,
        tags: {
          set: args.tags,
        },
      },
      where: {
        id: args.id,
      },
    }),
    deleteArticle: (parent, args, context) => context.db.deleteArticle({
      id: args.id,
    }),
  },
};
