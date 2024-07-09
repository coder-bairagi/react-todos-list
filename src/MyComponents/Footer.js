import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <footer className="navbar navbar-expand-lg bg-body-tertiary mt-4">
      <div className="container-fluid d-flex flex-column align-items-center">
        <p className="navbar-brand m-0">{props.title}</p>
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string
}

export default Footer
