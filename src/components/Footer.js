import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function Footer() {
  
  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

    return (
      <footer>
        <p>
          © {new Date().getFullYear()} {meta.site.siteMetadata.author} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>.
        </p>
        <p>
          <a href="https://github.com/tarranprior/" target="_blank" rel="noreferrer">github</a>
        </p>
      </footer>
    )
  };
  
  export default Footer;