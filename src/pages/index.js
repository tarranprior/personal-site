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
      color: #777;
    }
  `;

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
            <li>👨‍💻 I'm a cyber security professional living in beautiful <b>Wiltshire, UK</b></li>
            <li>🛠️ building and maintaining <b>open-source software and offensive tools</b>,</li>
            <li>💾 <b>preserving files</b> and discussing data with the good people @ <b><a href="https://old.reddit.com/r/DataHoarder" target="_blank" rel="noreferrer">r/DataHoarder</a></b>,</li>
            <li>📚 learning <b>Go</b> and <b>Reverse Engineering</b>.</li>
          </StyledCurrentList>
          <h2>Index of /public/recent/Projects/</h2>
          <StyledList>
            <li>
              <h4>📁 <a href="https://github.com/tarranprior/disclone" target="_blank" rel="noreferrer">/Disclone/</a></h4>
              <p>Disclone is a self-hostable bot with Rclone integration, Gclone support and Google Drive automation utilities for collaborative cloud storage management.</p>
            </li>
            <li>
              <h4>📁 <a href="https://github.com/tarranprior/scrapers" target="_blank" rel="noreferrer">/scrapers/</a></h4>
              <p>Various web scrapers built with Python. Made with the intention of data archival and preservation.</p>
            </li>
            <li>
              <h4>📁 <a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer">/Runebot/</a></h4>
              <p>Runebot is a feature-rich Discord tool which scrapes, pulls and displays information about the popular MMORPG Old School RuneScape. Built with Python and Beautiful Soup 4.</p>
            </li>
          </StyledList>
          <h2>Index of /public/recent/Writing/</h2>
          <StyledList>
            {meta.allMdx.edges.map((edge) => {
              return(
                <li>
                  <h4>
                    📄 <Link to={`writing/${edge.node.frontmatter.slug}`}>
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