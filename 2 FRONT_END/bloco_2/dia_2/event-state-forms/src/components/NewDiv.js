import React, { Component } from 'react'

export default class NewDiv extends Component {
  render() {
    const { state: { Email } } = this.props
    return (
      <div>
        <span>{ Email }</span>
      </div>
    )
  }
}
