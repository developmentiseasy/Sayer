import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import MainPage from './pages/main/MainPage'
import CreateItemPage from './pages/create-new-item/CreateItemPage'
import CommentsPage from './pages/add-comment/CommentsPage'

export const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/main" />)} />
    <Route path="/main" component={MainPage} />
    <Route path="/create-new-item" component={CreateItemPage} />
  </Switch>
)