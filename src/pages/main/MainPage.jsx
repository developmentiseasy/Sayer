import React, { Component } from 'react'

import ListItems from '../../components/list/main/ListItems'
import { bindActionCreators } from 'redux'
import { addItem, deleteItem } from '../../actions/additem/addItemActions'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'
import { Link } from 'react-router-dom'
import Item from '../../components/list/main/components/Item'
import _ from 'lodash'
import ListComments from '../../components/list/details/ListComments'

class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsArray: [],
      selectedItem: {},
      isVisibleComments: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.items, nextProps.items)) {
      this.setState({
        itemsArray: nextProps.items,
      })
    }
  }

  handleItemClick = (item) => {
    this.setState({
      selectedItem: item,
      isVisibleComments: true,
    })
  }

  renderItems = () => {
    return (
      _.map(this.props.items, (item) => (
        <Item
          item={item}
          key={item.id}
          deleteItem={this.props.deleteItem}
          onOpenComments={this.props.onOpenComments}
          onClick={this.handleItemClick}
        />
      ))
    )
  }

  renderPageBody = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className={!this.state.isVisibleComments ? "isVisible" : null}>
            <ListComments
              item={this.state.selectedItem}
            />
          </div>
          <div className={this.state.isVisibleComments ? "isVisible" : null}>
            <ListItems
              deleteItem={this.props.deleteItem}
            >
              {this.renderItems()}
            </ListItems>
            <Link to={'/create-new-item'}>
              <button>+</button>
            </Link>
          </div>
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
                           itemReducer,
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
  mapDispatchToProps,
)(MainPage)
