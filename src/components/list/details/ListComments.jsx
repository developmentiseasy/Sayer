import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { map } from 'lodash'

import './ListComments.css'

class ListComments extends Component {

  render() {
    return (
      <div className="ListComments">
        {
          map(this.props.commentsArray, (item) => {
            return (
              <div>
                <div
                  onClick={this.handleOnItemClick}
                >
                  {item.title}
                </div>
                <div>
                  <button
                    onClick={this.onItemDelete}
                  >
                    delete
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

ListComments.propTypes = {
  commentsArray: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  onItemDelete: PropTypes.func,
}

export default ListComments
