export const CREATE = 'article/CREATE' as const;
export const REMOVE = 'article/REMOVE' as const;

export interface Article {
  title: string,
  text: string,
  tags: Array<string>
}

export const create = ({ title, text, tags }: Article) => ({
  type: CREATE,
  payload: { title, text, tags },
});

export const remove = () => ({
  type: REMOVE,
});

export type ArticleAction =
  | ReturnType<typeof create>
  | ReturnType<typeof remove>;
