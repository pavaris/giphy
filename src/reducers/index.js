import { combineReducers } from 'redux'

import favorited from './favorited';
import query from './query';
import searching from './searching';

export default combineReducers({
  favorited,
  query,
  searching
});
