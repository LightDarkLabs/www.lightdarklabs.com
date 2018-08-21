import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <div className="site-navigation">
      <a href="/" className="light-dark-labs-logo">Light Dark Labs Home</a>

      <div className="nav-link-group">
        <input type="text" placeholder="me@domain.com"/>
      </div>

      <nav className="navigation-links">
        <div className="nav-link-group">
          <Link className="nav-link" to="/">Blog</Link>
        </div>

        <div className="nav-link-group">
          <Link className="nav-link" to="/">Products</Link>
        </div>

        <div className="nav-link-group">
          <Link className="nav-link" to="/">Social Media</Link>
        </div>

      </nav>
    </div>
  )
}

export default Navigation
