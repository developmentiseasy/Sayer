import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { addItem } from '../../actions/additem/addItemActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CreateItemPage extends Component {

  onAddNewItem = () => {
    this.props.addItem(this.refs.inputItem.value)
  }

  render() {
    return (
      <div className="CreateItemPage">
        <div>
          <input type="text" ref="inputItem" placeholder="add new item" />
          <Link to={'/main'}>
            <button onClick={this.onAddNewItem}>
              ADD
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

CreateItemPage.propTypes = {}

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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateItemPage)