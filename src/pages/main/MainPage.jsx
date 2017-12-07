import React, { Component } from 'react'
import Button, { BUTTON_TYPE } from '../../components/button/Button'

class MainPage extends Component {

  // handleCreateNewItem = () => (
  //
  // )

  renderList = () => {
    return (
      <div>

      </div>
    )
  }

  renderPageBody = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          {this.renderList()}
          <Button
            btnType={BUTTON_TYPE.btnPlus}
            // onClick={this.handleCreateNewItem}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container MainPage">
        {this.renderPageBody()}
      </div>
    )
  }
}

export default MainPage
