import {
  ADD_ITEM, ADD_CHANGED_ITEM, CLEAR_ITEMS, REMOVE_ITEM, REMOVE_CHANGED_ITEM,
} from '../../Constants'

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
})

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
})

export const clearItems = () => ({
  type: CLEAR_ITEMS,
})


export const addChangedItem = (item) => ({
  type: ADD_CHANGED_ITEM,
  item,
})

export const removeChangedItem = (item) => ({
  type: REMOVE_CHANGED_ITEM,
  item,
})
