import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

function Head(props) {

  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if(props.title !== undefined)
    return (
      <Helmet title={`${props.title} — ${meta.site.siteMetadata.title}`} />
    )
  return (
    <Helmet title={`${meta.site.siteMetadata.title}`} />
  )
};

export default Head;