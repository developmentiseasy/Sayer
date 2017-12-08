import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addCommentToItemBy} from '../../../../actions/addItem/addItemAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Item extends Component {

  render() {
    return (
      <tr
        className="Item"
      >
        <td>
          {this.props.item.title}
        </td>
        <td>
          <button
            onClick={() => this.props.deleteItem(this.props.item.id)}
          >
            Delete
          </button>
          <button onClick={() => {
            this.props.addCommentToItemBy({comment: 'test'}, this.props.item.id)
          }}>COmmeT TUTa!
          </button>
        </td>
      </tr>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    addCommentToItemBy: bindActionCreators(addCommentToItemBy, dispatch),
  }
}

export default connect(
 null,
  mapDispatchToProps
)(Item)
