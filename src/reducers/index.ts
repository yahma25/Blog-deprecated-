import { combineReducers } from 'redux';
import articleReducer from './ArticleReducer';

const rootReducer = combineReducers({
  articleReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
