'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Queue from '../components/Queue'
import Undertjenester from '../components/Undertjenester'
import Total from '../components/Total'
import Navbar from '../components/Navbar'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <div>
          <Navbar title={'Dashboard tilskudd'} />
          <Container fluid>
            <Row>
              <Col md='6'>
                <Queue title='Antall i kø' source='https://logs.tilskudd.service.t-fk.no/stats/queue' refresh='10' />
              </Col>
              <Col md='6'>
                <Total title='Antall totalt' source='https://logs.tilskudd.service.t-fk.no/stats/total' refresh='10' />
              </Col>
            </Row>
            <Undertjenester source='https://stats.service.t-fk.no/stats/tilskudd' refresh='10' />
          </Container>
        </div>
      </div>
    )
  }
}
