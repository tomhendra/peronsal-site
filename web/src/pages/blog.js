import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import PageHeading from '../components/PageHeading'
import PageText from '../components/PageText'
import PostGrid from '../components/PostGrid'

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <PageHeading>
          <PageText
            mainHeading={`Blog.`}
            subHeading={`Welcome to my blog.`}
            paragraph={`When I'm not writing code or designing, I'm either satisfying my obsession with the amazing food in Spain, or lifting heavy things in the gym. This blog aims to be a collection of elements from all of my passions.`}
          />
        </PageHeading>
        <PostGrid />
      </Container>
    </Layout>
  )
}

export default BlogPage
