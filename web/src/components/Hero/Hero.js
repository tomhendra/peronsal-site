import React from 'react'

import { colors, fontsizes, sizes } from '../../assets/styles'

/**
 * `....................styles....................`
 */

const styles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: sizes.massive3,
  textTransform: 'uppercase',

  h1: {
    fontSize: fontsizes.graphic3,
    marginBottom: sizes.small2
  },

  h2: {
    alignSelf: 'flex-end',
    color: colors.primary.light2,
    paddingRight: sizes.small4
  }
}

/**
 * `....................component....................`
 */

const Hero = ({ mainHeading, subHeading, ...props }) => (
  <div css={styles} {...props}>
    <h1>{mainHeading}</h1>
    <h2>{subHeading}</h2>
  </div>
)

export default Hero
