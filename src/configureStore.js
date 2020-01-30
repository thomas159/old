import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from './Reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [''],
}

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  pReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
)

export const persistor = persistStore(store)
