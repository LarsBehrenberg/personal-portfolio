import React from 'react'
import PropTypes from 'prop-types'
import website from '../../config/website'
import { SkipNavLink as Link } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

const SkipNavLink = ({ children, ...props }) => (
  <Link {...props} data-reach-skip-link>
    {children}
  </Link>
)

export default SkipNavLink

SkipNavLink.propTypes = {
  children: PropTypes.node,
}

SkipNavLink.defaultProps = {
  children: 'Skip to content',
}
