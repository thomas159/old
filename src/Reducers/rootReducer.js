import { combineReducers } from 'redux'
import selectedItemReducer from './selectedItemReducer'
import itemsToShowReducer from './itemsToShowReducer'
import SearchTermReducer from './searchTermReducer'

const rootReducer = combineReducers({
  selectedItems: selectedItemReducer,
  itemsToShow: itemsToShowReducer,
  searchTerm: SearchTermReducer,
})

export default rootReducer
