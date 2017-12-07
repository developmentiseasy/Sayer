import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import MainPage from './pages/main/MainPage'

export const Routes = () => (
    <Switch>
        <Route exact path="/" render={ () => (<Redirect to="/main"/>) }/>
        <Route path="/main" component={ MainPage }/>

        {/*<Route component={ NotFoundPage }/> /!*TODO Implement page 404*!/*/}
    </Switch>
)