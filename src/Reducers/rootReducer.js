import { combineReducers } from 'redux'
import selectedItemReducer from './selectedItemReducer'
import itemsToShowReducer from './itemsToShowReducer'
import searchTermReducer from './searchTermReducer'
import changedItemReducer from './changedItemReducer'

const rootReducer = combineReducers({
  selectedItems: selectedItemReducer,
  itemsToShow: itemsToShowReducer,
  searchTerm: searchTermReducer,
  changedItems: changedItemReducer,
})

export default rootReducer
