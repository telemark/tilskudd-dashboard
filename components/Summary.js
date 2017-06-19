'use strict'

import React from 'react'
import Panel from 'muicss/lib/react/panel'
const getData = require('../lib/get-data')
const repackSummary = require('../lib/repack-summary')

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    this.setState({data: repackSummary(data)})
    this.timer = setInterval(this.tick, parseInt(this.props.refresh || '1', 10) * 1000 * 60)
  }

  async tick () {
    const data = await getData(this.props.source)
    this.setState({data: repackSummary(data)})
  }

  render () {
    return (
      <Panel>
        <h2>{this.props.title}</h2>
        <table width='100%'>
          <tbody>
            {this.state.data.map((line, index) => {
              const key = `summary-${index}`
              return (
                <tr key={key}>
                  <td className='mui--text-display1 mui--divider-bottom'>{line.name}</td>
                  <td className='mui--text-display1 mui--text-right mui--divider-bottom'>{line.total}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Panel>
    )
  }
}
