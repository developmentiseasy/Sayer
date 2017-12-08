import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'


export default class Button extends Component {
  render() {
    const {
      value,
      children,
      className,
      color,
      float,
      disabled,
      visible,
      onClick,
      ...restProps
    } = this.props

    const button = () => (
      <button
        {...restProps}
        style={{color, float}}
        className={classnames(className, {disabled: disabled}, {hidden: !visible})}
        onClick={event => onClick && onClick(event)}
      >
        {value}
        {children}
      </button>
    )
    return button()
  }
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  color: PropTypes.string,
  float: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  visible: true,
}
