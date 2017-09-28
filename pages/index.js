'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Queue from '../components/Queue'
import Saksbehandling from '../components/Saksbehandling'
import Total from '../components/Total'
import Navbar from '../components/Navbar'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <Navbar />
          <Row>
            <Col md='4'>
              <Queue title='Antall i kø' source='https://logs.tilskudd.service.t-fk.no/stats/queue' refresh='10' />
            </Col>
            <Col md='4'>
              <Saksbehandling title='Antall behandlet' source='https://seneca-firebase-test.firebaseio.com/tfk-saksbehandling-organisasjon-tilskudd.json' refresh='10' />
            </Col>
            <Col md='4'>
              <Total title='Antall totalt' source='https://tfk-stats.firebaseio.com/tilskudd.json' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
