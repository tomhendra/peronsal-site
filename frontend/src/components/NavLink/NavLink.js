import React from 'react'
import { Link } from 'gatsby'

import { colors, fontsizes } from '../../assets/styles'

/**
 * `....................styles....................`
 */

const styles = {
  color: colors.neutral.light5,
  fontSize: fontsizes.small,
  textDecoration: 'none',
  '&.currentPage': {
    color: colors.primary.light3
  }
}

/**
 * `....................component....................`
 */

const NavLink = props => <Link css={styles} {...props} />

export default NavLink
