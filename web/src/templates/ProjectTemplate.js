import React from 'react';
import { graphql } from 'gatsby';

import { toPlainText } from '../utils/helpers';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GraphQLErrors from '../components/GraphQLErrors';
import ProjectPage from '../components/ProjectPage';

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      title
      mainImage {
        asset {
          fluid(maxHeight: 512) {
            ...GatsbySanityImageFluid
          }
        }
        alt
        caption
      }
      _rawDescription(resolveReferences: { maxDepth: 5 })
      _rawPurpose(resolveReferences: { maxDepth: 5 })
      _rawObjective(resolveReferences: { maxDepth: 5 })
      _rawApproach(resolveReferences: { maxDepth: 5 })
      _rawTechstack(resolveReferences: { maxDepth: 5 })
      _rawRole(resolveReferences: { maxDepth: 5 })
      _rawCredits(resolveReferences: { maxDepth: 5 })
      repo
      url
    }
  }
`;

function ProjectTemplate({ data, errors }) {
  const project = data && data.project;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && (
        <SEO
          title={project.title || 'Untitled'}
          description={toPlainText(project._rawDescription)}
        />
      )}
      {errors && <GraphQLErrors errors={errors} />}
      {project && <ProjectPage project={project} />}
    </Layout>
  );
}

export default ProjectTemplate;
