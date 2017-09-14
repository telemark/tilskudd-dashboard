'use strict'

import React from 'react'
import Panel from 'muicss/lib/react/panel'

export default class Card extends React.Component {
  render () {
    return (
      <Panel>
        <h2>{this.props.title}</h2>
        <ul className='mui-list--unstyled'>
          <li className={this.props.number > 0 ? 'mui--text-display4 red' : 'mui--text-display4 green'}>{this.props.number}</li>
        </ul>
        <style jsx>{`
          .red {
            color: red;
          }
          .green {
            color: green;
          }
        `}
        </style>
      </Panel>
    )
  }
}
