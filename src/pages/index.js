import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";
import Head from '../components/Head';
import Layout from '../components/Layout';

export default function Home() {

  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      },
      allMdx(filter: { frontmatter: { published: { eq: true }}}, sort: {fields: [frontmatter___date], order: DESC}, ) {
        edges {
          node {
            frontmatter {
              date
              title
              slug
            }
          }
        }
      }
    }
  `);

  const StyledCurrentList = styled.ul`
    list-style-type: none;
    li {
      margin-bottom: 0.75rem;
    }
  `;

  const StyledSocialList = styled.ul`
  list-style-type: none;
  font-size: 14px;
    li {
      padding: 1rem;
      display: inline;
    }
  `

  const StyledList = styled.ol`
    margin-top: 1.75rem;
    list-style-type: none;
    li {
      margin-bottom: 0.75rem;
    }
    p {
      font-size: 14px;
      color: #777;
    }
  `

  return (
    <div class="container">
      <Layout>
        <Head />
        <main>
          <h1>Hey, I'm Tarran! 👋</h1>
          <p>{meta.site.siteMetadata.description}</p>
          <StyledSocialList>
            <li><a href="https://github.com/tarranprior" target="_blank" rel="noreferrer">GitHub</a></li>|
            <li><a href="mailto:tarranprior@protonmail.com" target="_blank" rel="noreferrer">Email</a></li>
          </StyledSocialList>
          <h3>Currently:</h3>
          <StyledCurrentList>
            <li>👨‍💻 I'm an aspiring security engineer living in beautiful <b>Wiltshire, UK</b></li>
            <li>🏢 installing <b>secure and scalable IT infrastructure</b> for local businesses,</li>
            <li>🛠️ building <b>community-driven bots</b> @ <b><a href="https://discord.com/" target="_blank" rel="noreferrer">Discord</a></b> plus some <b>OSINT tools</b>,</li>
            <li>💾 <b>preserving files</b> and discussing data with the good people @ <b><a href="https://old.reddit.com/r/DataHoarder" target="_blank" rel="noreferrer">r/DataHoarder</a></b>,</li>
            <li>🌱 learning <b>Go</b>, <b>Reverse Engineering</b> and <b>React Native Development</b>.</li>
          </StyledCurrentList>
          <h2>Index of /public/Projects/</h2>
          <h2>Index of /public/Writing/</h2>
          <StyledList>
            {meta.allMdx.edges.map((edge) => {
              return(
                <li>
                  <h4>
                    <Link to={`writing/${edge.node.frontmatter.slug}`}>
                      {edge.node.frontmatter.title}/
                    </Link>
                  </h4>
                  <p>{edge.node.frontmatter.date}</p>
                </li>
              )
            })}
          </StyledList>
        </main>
      </Layout>
    </div>
  )
};