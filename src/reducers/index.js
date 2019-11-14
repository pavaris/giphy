import { combineReducers } from 'redux'

import favorited from './favorited';
import query from './query';
import searching from './searching';
import unfavorited from './unfavorited';

export default combineReducers({
  favorited,
  query,
  searching,
  unfavorited
});
