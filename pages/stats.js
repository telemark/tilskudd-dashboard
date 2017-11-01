'use strict'

import React from 'react'
import Head from '../components/head'
import Summary from '../components/Summary'
import Navbar from '../components/Navbar'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <div>
          <Navbar title={'Dashboard tilskudd'} />
          <Summary title='Oppsummering' source='https://logs.tilskudd.service.t-fk.no/stats/categories' refresh='10' />
        </div>
      </div>
    )
  }
}
