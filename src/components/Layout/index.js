import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from './Head'
import Navigation from '../Navigation'
import Footer from './Footer'

import '../../theme/stylesheets/app.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Head data={data} />

        <div className="main-wrapper" >
          <Navigation />

          <div className="content-wrapper">
            {children}
          </div>

          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
