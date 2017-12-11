import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {

  handleClick = () => {
    this.props.onClick(this.props.item)
  }

  render() {
    return (
      <tr
        className="Item"
        onClick={this.handleClick}
      >
        <td onClick={this.onOpenComments}>
          {this.props.item.title}
        </td>
        <td>
          <div>
            {(this.props.item.comments).length}
          </div>
          <button onClick={() => this.props.deleteItem(this.props.item.id)}>
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
  onClick: PropTypes.func,
  onOpenComments: PropTypes.bool,
}
export default Item
