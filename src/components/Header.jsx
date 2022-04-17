import React from 'react'
import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <nav className="nav-wrapper cyan darken-3">
      <a className="brand-logo center" href="/">{title}</a>
    </nav>
  )
}

Header.propTypes = {
  title : PropTypes.string.isRequired
}

export default Header