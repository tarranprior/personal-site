import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Head from '../components/Head';
import Layout from '../components/Layout';

const _ = require("lodash")
export const pageQuery = graphql`
  query MDXQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "dddd MMMM Do, YYYY")
        edit(formatString: "MMMM Do, YYYY")
        reading
        tags
      }
      body
    }
  }
`

const StyledPostMeta = styled.ol`
  margin: 0;
  font-size: 13px;
  list-style-type: none;
  li {
    display: inline;
    padding-right: 1rem;
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
  li {
    padding: .75rem;
  }
  ol {
    li {
      padding: .25rem;
    }
  }
  blockquote {
    padding-left: 1.25rem;
    border-left: 5px solid #c8cfd1;
    color: #444;
  }
  hr {
    margin-top: 2rem;
  }
  code {
    padding: .25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    color: #2e3440;
    font-size: 14px;
    background: #d8dee9;
    border-radius: 4px;
    line-height: 1.75;
  }
  deckgo-highlight-code {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    font-size: 16px;
  }
  img {
    height: inherit !important;
  }
`

function Blog({ data }) {
  return (
    <>
      <Head title={data.mdx.frontmatter.title} />
      <div class="container">
        <Layout>
          <p class="small"><Link to="/">../ Parent Directory</Link></p>
          <h1>{data.mdx.frontmatter.title}</h1>
          <br/>
          <div class="metadata">
            <StyledPostMeta>
              <li>📅 {data.mdx.frontmatter.date}</li>
              <li>📝 {data.mdx.frontmatter.edit}</li>
              <li>☕ {data.mdx.frontmatter.reading}</li>
              <li>🏷️ {data.mdx.frontmatter.tags.map((tag) => {
                  return (
                    <p class="tags">
                      <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
                    </p>
                  )
                })}
              </li>
            </StyledPostMeta>
          </div>
          <StyledDiv>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </StyledDiv>
          <p class="small"><Link to="/">../ Parent Directory</Link></p>
        </Layout>
      </div>
    </>
  )
};

export default Blog;