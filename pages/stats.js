import Layout from '../components/Layout'
import Summary from '../components/Summary'

export default () => (
  <Layout>
    <Summary title='Oppsummering' source='https://stats.logs.tilskudd.t-fk.no/stats/categories' refresh='10' />
  </Layout>
)
