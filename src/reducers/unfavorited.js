import { UNFAVORITED } from '../actions/unfavorited';

const unfavorited = (state = {}, action) => {
  switch(action.type) {
    case UNFAVORITED:
      return state.favorited.filter(x => x.id !== action.gif.id);
    default :
      return state
  }
}
export default unfavorited
