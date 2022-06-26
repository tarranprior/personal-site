import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

function Head(props) {

  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
        }
      }
    }
  `);

  if(props.title !== undefined)
    return (
      <Helmet title={`${props.title} — ${meta.site.siteMetadata.title}`} htmlAttributes={{lang: meta.site.siteMetadata.lang}} />
    )
  return (
    <Helmet title={`${meta.site.siteMetadata.title}`} htmlAttributes={{lang: meta.site.siteMetadata.lang}} />
  )
};

export default Head;