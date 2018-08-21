import React from 'react'
import Helmet from 'react-helmet'

const Head = ({data}) => (
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name={''} content={''} />
    <html lang="en" />
  </Helmet>
)

export default Head
