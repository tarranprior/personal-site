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
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY")
          slug
          tags
        }
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
  console.log(data)
  return (
    <>
      <Head />
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
        </Layout>
      </div>
    </>
  )
};

export default Tag;