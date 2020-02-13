import React from 'react';
import { graphql } from 'gatsby';

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
      description
      purpose
      objective
      approach
      _rawTechstack(resolveReferences: { maxDepth: 5 })
      role
      credits
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
          description={project.description}
        />
      )}
      {errors && <GraphQLErrors errors={errors} />}
      {project && <ProjectPage project={project} />}
    </Layout>
  );
}

export default ProjectTemplate;
