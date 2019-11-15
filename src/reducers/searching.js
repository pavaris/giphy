import { SEARCHING } from '../actions/searching';

const searching = (state = {}, action) => {
  switch(action.type) {
    case SEARCHING:
      return action.searching;
    default :
      return state
  }
}
export default searching
