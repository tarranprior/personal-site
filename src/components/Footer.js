import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

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

  const StyledFooter = styled.footer`
    margin-top: 6rem;
    text-align: center;
  `;

    return (
      <StyledFooter>
        <p>
          © {new Date().getFullYear()} {meta.site.siteMetadata.author} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>.
        </p>
      </StyledFooter>
    )
  };
  
  export default Footer;