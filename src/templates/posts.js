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
        date(formatString: "dddd MMMM Do, YYYY hh:mma")
        edit(formatString: "MMMM Do, YYYY hh:mma")
        reading
      }
      body
    }
  }
`

const StyledPostMeta = styled.ol`
  margin: 0;
  font-size: 14px;
  list-style-type: none;
  li {
    display: inline;
    padding-right: 1.5rem;
  }
`

const StyledDiv = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  --deckgo-highlight-code-carbon-toolbar-display: none;
  --deckgo-highlight-code-carbon-box-shadow: none;
  p {
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.75;
  }
  h1, h2, h3, h4, h5, h6 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  li {
    padding: 0.5rem;
  }
  blockquote {
    padding-left: 1.25rem;
    border-left: 5px solid #c8cfd1;
  }
  hr {
    margin-top: 2rem;
  }
  code {
    padding: 0.25rem;
    color: #000;
    font-size: 14px;
    background: #d8dee9;
    border-radius: 4px;
  }
  deckgo-highlight-code {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    font-size: 16px;
  }
`

function Blog({ data }) {
  const backText = "../ Back To Root Directory"
  return (
    <>
      <Head title={data.mdx.frontmatter.title} />
      <div class="container">
        <Layout>
          <p class="small"><Link to="/">{backText}</Link></p>
          <h1>{data.mdx.frontmatter.title}</h1>
          <br/>
          <StyledPostMeta>
            <li>📅 {data.mdx.frontmatter.date}</li>
            <li>📝 {data.mdx.frontmatter.edit}</li>
            <li>☕ {data.mdx.frontmatter.reading}</li>
          </StyledPostMeta>
          <StyledDiv>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </StyledDiv>
          <p class="small"><Link to="/">{backText}</Link></p>
        </Layout>
      </div>
    </>
    
  )
};

export default Blog;