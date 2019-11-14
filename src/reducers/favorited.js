import { FAVORITED } from '../actions/favorited';

const favorited = (state = {}, action) => {
  console.log(action);
  switch(action.type) {
    case FAVORITED:
      return action.gif;
    default :
      return state
  }
}
export default favorited
