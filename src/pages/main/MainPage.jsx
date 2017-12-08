import React, { Component } from 'react'

import ListItems from '../../components/list/main/ListItems'
import { bindActionCreators } from 'redux'
import { addItem, deleteItem } from '../../actions/addItem/addItemAction'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'

class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsArray: props.items
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.items, nextProps.items)) {
      this.setState({
        itemsArray: nextProps.items
      })
    }
  }

  onAddNewItem = () => {
    this.props.addItem(this.refs.inputItem.value)
  }

  renderPageBody = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <div>
            <input type="text" ref="inputItem" placeholder="add new item" />
            <button onClick={this.onAddNewItem}>ADD
            </button>



          </div>
          <ListItems
            items={this.state.itemsArray}
            deleteItem={this.props.deleteItem}
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

function mapStateToProps({
                           itemReducer
                         }) {
  return {
    items: itemReducer.itemsArr,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItem, dispatch),
    deleteItem: bindActionCreators(deleteItem, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
