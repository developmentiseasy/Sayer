import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { isEqual, map } from 'lodash'

import { bindActionCreators } from 'redux'
import { addCommentToItemById } from '../../../actions/additem/addItemActions'
import { connect } from 'react-redux'

import './ListComments.css'
import * as shortid from 'shortid'

class ListComments extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      comments: props.item.comments,
    }
  }

  componentWillMount() {
    this.setState({
      comments: this.props.item.comments,

    })
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.item, nextProps.item)) {
      this.setState({
        item: nextProps.item,
      })
    }
  }

  handleAddNewComment = () => {
    this.props.addCommentToItemById({ comment: this.refs.inputComment.value }, this.props.item.id)
    this.setState({
      comments: this.props.item.comments,
    })
  }

  renderComments = () => {
    return (
      map(this.state.comments || this.props.item.comments, (comments) => (
        <li key={shortid.generate()}>
          {comments.comment}
        </li>
      ))
    )
  }

  render() {
    return (
      <div className="ListComments">
        {this.renderComments()}
        <input type="text" ref="inputComment" placeholder="add new comment" />
        <button onClick={this.handleAddNewComment}>
          Add Comment
        </button>
      </div>
    )
  }
}

ListComments.propTypes = {
  item: PropTypes.object,
}

function mapDispatchToProps(dispatch) {
  return {
    addCommentToItemById: bindActionCreators(addCommentToItemById, dispatch),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ListComments)
