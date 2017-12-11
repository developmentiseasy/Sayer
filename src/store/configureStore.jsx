import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import { history } from '../history'
import rootReducer from '../reducers/index'
import { loadState, saveState } from '../localStorage'
import { load, save } from 'redux-localstorage-simple'
import _ from 'lodash'

const persistedState = loadState('itemReducer')

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(
    ...middleware,
  ),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
)

console.log(store.getState())

store.subscribe(_.throttle(() => {
  saveState({
    itemReducer: store.getState().itemReducer
  })
}, 1000))

export default store