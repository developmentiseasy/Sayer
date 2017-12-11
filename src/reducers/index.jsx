import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import itemReducer from './item/itemReducers'

export default combineReducers({
  routing: routerReducer,
  itemReducer,
})