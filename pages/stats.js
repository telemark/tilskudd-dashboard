'use strict'

import Layout from '../components/Layout'
import Summary from '../components/Summary'

export default () => (
  <Layout>
    <Summary title='Oppsummering' source='https://logs.tilskudd.service.t-fk.no/stats/categories' refresh='10' />
  </Layout>
)
