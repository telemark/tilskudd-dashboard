import { Component } from 'react'
import Queue from '../components/Queue'
import Undertjenester from '../components/Undertjenester'
import Total from '../components/Total'
import Layout from '../components/Layout'
import Row from '../components/Row'

export default class Index extends Component {
  render () {
    return (
      <Layout>
        <Row>
          <div>
            <Queue title='Antall i kø' source='https://logs.tilskudd.service.t-fk.no/stats/queue' refresh='10' />
          </div>
          <div>
            <Total title='Antall totalt' source='https://logs.tilskudd.service.t-fk.no/stats/total' refresh='10' />
          </div>
        </Row>
        <Undertjenester source='https://stats.service.t-fk.no/stats/tilskudd' refresh='10' />
        <style jsx>
          {`
            div {
              flex-grow: 1;
              margin: 5px 10px 5px 10px;
            }
          `}
        </style>
      </Layout>
    )
  }
}
