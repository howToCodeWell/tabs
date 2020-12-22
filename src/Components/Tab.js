import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Tab extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

 handleClick = (callback) => {
    callback()
  }

  render () {
    const {
      props: {
        label,
        className,
        onClick
      },
    } = this
    return (
      <li className={className} onClick={() => this.handleClick(onClick)}>{label}</li>
    )
  }
}

export default Tab
