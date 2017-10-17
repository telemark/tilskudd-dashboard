'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Summary from '../components/Summary'
import Navbar from '../components/Navbar'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <Navbar />
          <Row>
            <Col md='12'>
              <Summary title='Oppsummering' source='https://logs.tilskudd.service.t-fk.no/stats/categories' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
