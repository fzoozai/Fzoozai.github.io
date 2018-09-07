import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Happy bithday!</h1>
    <p>Welcome to my birthday party.</p>
    <p>But first go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage