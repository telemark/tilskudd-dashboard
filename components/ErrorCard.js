'use strict'

import React from 'react'

export default class Card extends React.Component {
  render () {
    return (
      <div className={'card'}>
        <h2>{this.props.title}</h2>
        <p className={this.props.number > 0 ? 'mui--text-display4 red' : 'mui--text-display4 green'}>{this.props.number}</p>
        <style jsx>
          {`
          .card {
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 0;
            background-color: #FFF;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          }
          p {
            font-weight: 300;
            font-size: 112px;
            line-height: 112px;
          }
          .red {
            color: red;
          }
          .green {
            color: green;
          }
        `}
        </style>
      </div>
    )
  }
}
