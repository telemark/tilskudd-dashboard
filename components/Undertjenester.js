'use strict'

import React from 'react'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Card from './Card'
import ErrorCard from './ErrorCard'
const getData = require('../lib/get-data')

function updateData (response) {
  const data = response.length > 0 ? response[0] : false
  return {
    queueDone: data !== false ? data.queue.done.count : 0,
    queueErrors: data !== false ? data.queue.errors.count : 0,
    distributionErrors: data !== false ? data.distribution.errors.count : 0,
    distributionDone: data !== false ? data.distribution.done.count : 0,
    archiveErrors: data !== false ? data.archive.errors.count : 0,
    archiveDone: data !== false ? data.archive.done.count : 0
  }
}

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: updateData([])
    }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount () {
    const response = await getData(this.props.source)
    this.setState({data: updateData(response)})
    this.timer = setInterval(this.tick, parseInt(this.props.refresh || '1', 10) * 1000 * 60)
  }

  async tick () {
    const response = await getData(this.props.source)
    this.setState({data: updateData(response)})
  }

  render () {
    return (
      <div>
        <Row>
          <Col md='4'>
            <ErrorCard title='Kø feil' number={this.state.data.queueErrors} />
          </Col>
          <Col md='4'>
            <ErrorCard title='SvarUt feil' number={this.state.data.distributionErrors} />
          </Col>
          <Col md='4'>
            <ErrorCard title='Arkivert feil' number={this.state.data.archiveErrors} />
          </Col>
        </Row>
        <Row>
          <Col md='4'>
            <Card title='Behandlet' number={this.state.data.queueDone} />
          </Col>
          <Col md='4'>
            <Card title='SvarUt' number={this.state.data.distributionDone} />
          </Col>
          <Col md='4'>
            <Card title='Arkivert' number={this.state.data.archiveDone} />
          </Col>
        </Row>
      </div>
    )
  }
}
