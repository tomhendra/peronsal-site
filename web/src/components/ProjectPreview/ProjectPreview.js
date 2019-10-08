import React from 'react'
import Img from 'gatsby-image'

import { colors, sizes } from '../../assets/styles'
import TechStackGrid from '../TechStackGrid'
import Button from '../button'

/**
 * `....................styles....................`
 */

const styles = {
  background: colors.neutral.dark2,
  border: `1px solid ${colors.neutral.dark4}`,
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: sizes.massive3,
  minHeight: sizes.huge4,
  padding: sizes.medium3
}

/**
 * `....................component....................`
 */

const ProjectPreview = ({ project, ...props }) => (
  <div css={styles} {...props}>
    <Img fixed={project.image} alt={project.alt} />
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: sizes.medium2,
        width: '60%'
      }}
    >
      <div>
        <h2
          css={{
            marginBottom: sizes.medium1
          }}
        >
          {project.title}
        </h2>
        <p
          css={{
            marginBottom: sizes.medium2
          }}
        >
          {project.description}
        </p>
        {console.log(project.techstack)}
        <TechStackGrid gridSize={'small'} techStackToBeDisplayed={project.techstack} />
      </div>
      <div>
        <Button
          buttonStyle={'secondary'}
          buttonSize={'small'}
          externalLink={project.repo}
          css={{
            marginRight: sizes.medium1
          }}
        >
          View Repo
        </Button>
        <Button buttonStyle={'primary'} buttonSize={'small'} externalLink={project.url}>
          Launch App
        </Button>
      </div>
    </div>
  </div>
)

export default ProjectPreview
