import React from 'react';
import Img from 'gatsby-image';
import { withTheme } from 'emotion-theming';

<<<<<<< HEAD:frontend/src/components/ProjectPreview/ProjectPreview.js
=======
import { colors, sizes } from '../../assets/styles';
>>>>>>> 46f85bc230a9102059d37b3e6963ca895cd6a9b6:src/components/ProjectPreview/ProjectPreview.js
import TechStackGrid from '../TechStackGrid';
import Button from '../Button';

/**
 * `....................styles....................`
 */

const styles = theme => ({
  background: theme.colors.n100,
  border: `${theme.borderWidth.alpha} solid ${theme.colors.n300}`,
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: theme.spacings.quebec,
  minHeight: theme.spacings.november,
  padding: theme.spacings.golf,
});

/**
 * `....................component....................`
 */

const ProjectPreview = ({ project, theme, ...props }) => (
  <div css={styles(theme)} {...props}>
    <Img fixed={project.image} alt={project.alt} />
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: theme.spacings.foxtrot,
        width: '60%',
      }}
    >
      <div>
        <h2
          css={{
            marginBottom: theme.spacings.echo,
          }}
        >
          {project.title}
        </h2>
        <p
          css={{
            marginBottom: theme.spacings.foxtrot,
          }}
        >
          {project.description}
        </p>
        <TechStackGrid
          gridSize="small"
          techStackToBeDisplayed={project.techstack}
        />
      </div>
      <div>
        <Button
          buttonStyle="secondary"
          buttonSize="alpha"
          externalLink={project.repo}
          css={{
            marginRight: theme.spacings.echo,
          }}
        >
          View Repo
        </Button>
        <Button
          buttonStyle="primary"
          buttonSize="alpha"
          externalLink={project.url}
        >
          Launch App
        </Button>
      </div>
    </div>
  </div>
);

export default withTheme(ProjectPreview);
