import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'


import Item from './components/Item'


class ListItems extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsList: props.items,
    }
  }

  renderItemsList = () => {
    return (
      <table>
        <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {_.map(this.props.items, (item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={this.props.deleteItem}
          />
        ))}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      this.renderItemsList()
    )
  }
}

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func,
}

export default ListItems

