import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

import MainContainer from './containers/MainContainer'

import { history } from './history'
import store from './store/configureStore'
// import { saveState } from './localStorage'

import './index.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
//
// store.subscribe(() => {
//   saveState({
//     itemReducer: store.getState().itemReducer
//   })
// })

render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Route path="/" component={MainContainer}/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)