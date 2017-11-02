'use strict'

import React from 'react'
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
      <div className={'wrapper'}>
        <h1>{this.props.title}</h1>
        {this.state.data.map((line, index) => {
          const key = `summary-${index}`
          return (
            <div className={'table'} key={key}>
              <p>{line.name}</p>
              <p className={'alignRight'}>{line.total}</p>
            </div>
          )
        })}
        <style jsx>{`
          .wrapper {
            padding: 0 10px 0 10px;
          }
          .table {
            padding: 0;
            display: flex;
            border-bottom: 1px solid gray;
          }
          .table:hover {
            background: #6AC4AE;
          }
          .table > p {
            flex-grow: 1;
            padding: 5px;
            margin: 0;
            font-weight: 400;
            font-size: 34px;
          }
          .alignRight {
            text-align: right;
          }
        `}
        </style>
      </div>
    )
  }
}
