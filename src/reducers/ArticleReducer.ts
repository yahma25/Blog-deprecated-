import { ArticleAction, CREATE, REMOVE } from '../actions/ArticleAction';

interface ArticleState {
  loading: boolean;
}

const initialState: ArticleState = {
  loading: false,
};

const articleReducer = (state: ArticleState = initialState, action: ArticleAction) => {
  switch (action.type) {
    case CREATE:
      return { loading: !state.loading };
    case REMOVE:
      return { loading: !state.loading };
    default:
      return state;
  }
};

export default articleReducer;
