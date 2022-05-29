import React from 'react'
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Head from '../components/Head';
import Layout from '../components/Layout';

export const pageQuery = graphql`
  query MDXQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

const StyledDiv = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  --deckgo-highlight-code-carbon-toolbar-display: none;
  --deckgo-highlight-code-carbon-box-shadow: none;
  h1, h2, h3, h4, h5, h6, p, li {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  deckgo-highlight-code {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
`

function Blog({ data }) {
  const backText = "../ Back To Root Directory"
  return (
    <>
      <Head title={data.mdx.frontmatter.title} />
      <div class="container">
        <Layout>
          <p><Link to="/">{backText}</Link></p>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p class="light">Publish Date: {data.mdx.frontmatter.date}</p>
          <StyledDiv>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </StyledDiv>
        </Layout>
      </div>
    </>
    
  )
};

export default Blog;