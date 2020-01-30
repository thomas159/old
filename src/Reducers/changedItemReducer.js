import {
  ADD_CHANGED_ITEM, REMOVE_CHANGED_ITEM,
} from '../Constants'

const changedItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CHANGED_ITEM:
      return [
        ...state,
        action.item,
      ]
    case REMOVE_CHANGED_ITEM:
      return state.filter((item) => item !== action.item)
    default:
      return state
  }
}

export default changedItemReducer
