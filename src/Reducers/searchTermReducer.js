import {
  SET_SEARCH_TERM,
} from '../Constants'


const searchTermReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchTerm
    default:
      return state
  }
}

export default searchTermReducer
