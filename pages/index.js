'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Queue from '../components/Queue'
import Saksbehandling from '../components/Saksbehandling'
import Server from '../components/Server'
import Summary from '../components/Summary'
import Total from '../components/Total'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <h1 className='mui--text-title'>Tilskudd Dashboard</h1>
          <Row>
            <Col md='4'>
              <Queue title='Antall i kø' source='https://stats.logs.tilskudd.t-fk.win/stats/queue' refresh='10' />
            </Col>
            <Col md='4'>
              <Saksbehandling title='Antall behandlet' source='https://seneca-firebase-test.firebaseio.com/tfk-saksbehandling-organisasjon-tilskudd.json' refresh='10' />
            </Col>
            <Col md='4'>
              <Total title='Antall totalt' source='https://tfk-stats.firebaseio.com/tilskudd.json' refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='4'>
              <Server title='Serverstatus' source='https://parser.rss.micro.t-fk.no/?rss=http://rss.uptimerobot.com/u461130-5ddec2afb433002a5b23822e40bcd29e' refresh='10' />
            </Col>
            <Col md='8'>
              <Summary title='Oppsummering' source='https://tfk-stats.firebaseio.com/tilskudd.json' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
