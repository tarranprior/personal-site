import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from "styled-components";
import Head from '../components/Head';
import Layout from '../components/Layout';

const _ = require("lodash")
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        frontmatter {
          title
          date
          slug
          tags
        }
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const StyledList = styled.ol`
margin-top: 1.75rem;
list-style-type: none;
h4 {
  font-weight: 500;
}
p {
  max-width: 800px;
  margin-bottom: 1.25rem;
  font-size: 14px;
  color: #444;
}
`;

function Tag({ pageContext, data }) {
  const { tag } = pageContext || {};
  return (
    <>
      <Head />
      <div class="stand-with-ukr"></div>
      <div class="container">
        <Layout>
          <p class="small"><Link to="/">../ Parent Directory</Link></p>
          <h2>Index of /tags/{tag}/</h2>
          <StyledList>
            {data.allMdx.nodes.map((node) => {
              return (
                <li>
                  <h4>
                    📄 <Link to={`/writing/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h4>
                  <div class="metadata">
                    <p>{node.frontmatter.date}</p>
                    {node.frontmatter.tags.map((tag) => {
                      return (
                        <p class="tags"><Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></p>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </StyledList>
          <ul class="inline-list">
            <li>Similar Tags:</li>
            {data.tags.group.map((tag) => {
              return (
                <li>
                  <Link to={`/tags/${_.kebabCase(tag.fieldValue)}`}>{tag.fieldValue} ({tag.totalCount})</Link>
                </li>
              )
          })}
          </ul>
        </Layout>
      </div>
    </>
  )
};

export default Tag;