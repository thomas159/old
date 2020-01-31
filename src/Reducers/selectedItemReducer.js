import {
  ADD_ITEM, CLEAR_ITEMS, REMOVE_ITEM,
} from '../constants'

const selectedItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.item,
      ]
    case REMOVE_ITEM:
      return state.filter((item) => item !== action.item)
    case CLEAR_ITEMS:
      return []
    default:
      return state
  }
}

export default selectedItemReducer
