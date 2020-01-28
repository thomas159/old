
import {
  SET_NUMBER_OF_ITEMS,
} from '../Constants'


const ItemsToShowReducer = (state = 'all', action) => {
  switch (action.type) {
    case SET_NUMBER_OF_ITEMS:
      return action.item
    default:
      return state
  }
}

export default ItemsToShowReducer

