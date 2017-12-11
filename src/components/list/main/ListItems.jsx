import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ListItems extends Component {

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
        {this.props.children}
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
  deleteItem: PropTypes.func,
}

export default ListItems
