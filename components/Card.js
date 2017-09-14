'use strict'

import React from 'react'
import Panel from 'muicss/lib/react/panel'

export default class Card extends React.Component {
  render () {
    return (
      <Panel>
        <h2>{this.props.title}</h2>
        <ul className='mui-list--unstyled'>
          <li className='mui--text-display4'>{this.props.number}</li>
        </ul>
      </Panel>
    )
  }
}
