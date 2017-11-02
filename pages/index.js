'use strict'

import React from 'react'
import Queue from '../components/Queue'
import Undertjenester from '../components/Undertjenester'
import Total from '../components/Total'
import Layout from '../components/Layout'

export default class Index extends React.Component {
  render () {
    return (
      <Layout>
        <div>
          <div className={'row'}>
            <div>
              <Queue title='Antall i kø' source='https://logs.tilskudd.service.t-fk.no/stats/queue' refresh='10' />
            </div>
            <div>
              <Total title='Antall totalt' source='https://logs.tilskudd.service.t-fk.no/stats/total' refresh='10' />
            </div>
          </div>
          <Undertjenester source='https://stats.service.t-fk.no/stats/tilskudd' refresh='10' />
        </div>
        <style jsx>
          {`
            .row {
              display: flex;
              justify-content: space-evenly;
            }
            .row > div {
              flex-grow: 1;
              margin: 0 10px 0 10px;
            }
          `}
        </style>
      </Layout>
    )
  }
}
