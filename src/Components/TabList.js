import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

class TabList extends Component {
  static propTypes = {
    containerClassName: PropTypes.string.isRequired,
    listClassName: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Array),
  }

  constructor (props) {
    super(props)
  }

  render () {
    const {
      props: {
        listClassName,
        containerClassName,
        children
      },
    } = this

    return (
      <div className={containerClassName} data-testid={`tab-container`}>
        <ul className={listClassName} data-testid={`tab-list-container`}>
          {React.Children.map(children, (child, index) => {
            const {
              className,
              label,
              onClick
            } = child.props
            return (
              <Tab label={label} className={className} key={index} onClick={onClick}/>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TabList
