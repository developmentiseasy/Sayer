import React, { Component } from 'react'
import { Routes } from '../routes'

import Header from '../components/header/Header'
import { Link } from 'react-router-dom'

class MainContainer extends Component {

  onReturnClick = () => {

  }

  renderReturnBtn = (button) => {
    return (
      <Link to={'/main'}>
        {button}
      </Link>
    )
  }

  render() {
    return (
      <div className="MainContainer">
        <Header>
          {this.renderReturnBtn(<button ref="returnButton" onClick={this.onReturnClick}>{'<-'}</button>)}
        </Header>
        <div>
          <Routes />
        </div>
      </div>
    )
  }
}

export default MainContainer
