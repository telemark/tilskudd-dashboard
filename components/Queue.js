'use strict'

import React from 'react'
import Card from './Card'
const getData = require('../lib/get-data')

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {number: 0}
    }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    const value = data && data.queue ? data.queue : 0
    this.setState({data: {number: value}})
    this.timer = setInterval(this.tick, parseInt(this.props.refresh || '1', 10) * 1000 * 60)
  }

  async tick () {
    const data = await getData(this.props.source)
    const value = data && data.queue ? data.queue : 0
    this.setState({data: {number: value}})
  }

  render () {
    return (
      <Card title={this.props.title} number={this.state.data.number} />
    )
  }
}
