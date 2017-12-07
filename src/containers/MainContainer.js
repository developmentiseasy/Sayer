import React, { Component } from 'react'
import { Routes } from '../routes'

import Header from '../components/header/Header'

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Header>
          <h1>Hi</h1>
        </Header>
        <div>
          <Routes />
        </div>
      </div>
    )
  }
}

export default MainContainer
