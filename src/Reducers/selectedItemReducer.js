import {
  ADD_ITEM, REMOVE_ITEM,
} from '../Constants'

const selectedItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.item,
      ]
    case REMOVE_ITEM:
      return state.filter((item) => item !== action.item)
    default:
      return state
  }
}

export default selectedItemReducer
