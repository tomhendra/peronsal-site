import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

import Header from '../Header'
import Footer from '../Footer'
import { baseStyles } from '../../assets/styles'

/**
 * `....................styles....................`
 */

const styles = {
  position: 'relative',
  margin: '0 auto'
}

/**
 * `....................component....................`
 */

const Layout = ({ children }) => (
  <>
    <Global styles={baseStyles} />
    <div css={styles}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
