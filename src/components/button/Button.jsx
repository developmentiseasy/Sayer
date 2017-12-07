import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

export const BUTTON_TYPE = {
  btnPlus: 'button_plus',
  btnDelete: 'button_delete',
  btnEnter: 'button_enter'
}

const BUTTON_CONFIG = {
  btnPlus: {
    className: 'button-plus',
    value: '+',
  },
  btnDelete: {
    className: 'button-delete',
    value: 'DELETE',
  },
  btnEnter: {
    className: 'button-enter',
    value: '>',
  },
}

class Button extends Component {

  renderButton = (type) => {
    return (
      <button
        className={type.className}
        onClick={this.props.onClick}
      >
        <span>
          {type.value}
        </span>
      </button>
    )
  }

  renderButtonType = () => {
    const {
      btnEnter,
      btnDelete,
      btnPlus
    } = BUTTON_TYPE
    switch (this.props.btnType) {
      case btnPlus:
        return (
          this.renderButton(BUTTON_CONFIG.btnPlus)
        )
      case btnDelete:
        return (
          this.renderButton(BUTTON_CONFIG.btnDelete)
        )
      case btnEnter:
        return (
          this.renderButton(BUTTON_CONFIG.btnEnter)
        )
      default:
        return null
    }
  }

  render() {
    const {
      btnType
    } = this.props

    return (
      <div className="Button">
        {this.renderButtonType(btnType)}
      </div>
    )
  }
}

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
