import React from 'react'

const Header = ({title}) => {
  return (
    <nav className="nav-wrapper cyan darken-3">
      <a className="brand-logo center" href="/">{title}</a>
    </nav>
  )
}

export default Header