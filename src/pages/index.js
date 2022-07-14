import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";
import Head from '../components/Head';
import Layout from '../components/Layout';

export default function Home() {

  const _ = require("lodash")
  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      },
      allMdx(limit: 8 filter: { frontmatter: { published: { eq: true }}}, sort: {fields: [frontmatter___date], order: DESC}, ) {
        edges {
          node {
            frontmatter {
              date
              title
              slug
              tags
            }
          }
        }
      }
    }
  `);

  const StyledCurrentList = styled.ul`
    list-style-type: none;
    li {
      margin-bottom: .75rem;
    }
    @media (max-width: 540px) {
      li {
        margin-bottom: 1.25rem;
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
  
  const TextList = styled.ol`
  list-style-type: none;
  display: inline-block;
  margin: 0;
  li {
    display: inline-block;
  }
  .inline-text {
    display: inline-block;
  }
  `;

  return (
    <>
      <div class="stand-with-ukr"></div>
      <div class="container">
        <Layout>
          <Head />
          <main>
            <h1>Hey, I'm Tarran! 👋</h1>
            <p>{meta.site.siteMetadata.description}</p>
            <ul class="inline-list">
              <li><a href="https://github.com/tarranprior" target="_blank" rel="noreferrer">GitHub</a></li>
              <li>|</li>
              <li><a href="mailto:tarranprior@protonmail.com" target="_blank" rel="noreferrer">Email</a></li>
            </ul>
            <h3>Currently:</h3>
            <StyledCurrentList>
              <li>👨‍💻 I'm an <b>IT</b> professional living in beautiful <b>Wiltshire, UK</b></li>
              <li>🛠️ building and maintaining <b>open-source software</b> and <b>community tools</b>,</li>
              <li>💾 <b>preserving files</b> and discussing data with the good people @ <b><a href="https://old.reddit.com/r/DataHoarder" target="_blank" rel="noreferrer">r/DataHoarder</a></b>,</li>
              <li>📚 learning <b>Go</b> and <b>Offensive Security</b>.</li>
            </StyledCurrentList>
            <div class="inline-text"><h2>Index of <TextList><li>/public</li><li>/recent</li><li>/Projects/</li></TextList></h2></div>
            <StyledList>
              <li>
                <h4>📁 <a href="https://github.com/HelpdeskBot" target="_blank" rel="noreferrer">Helpdesk Bot/</a></h4>
                <p><i>Coming soon!</i> The go-to bot for <b>help desk</b> professionals and enthusiasts.</p>
              </li>
              <li>
                <h4>🐱‍💻 <a href="https://github.com/tarranprior/Sudonym" target="_blank" rel="noreferrer">Sudonym/</a></h4>
                <p>The most advanced cyber security focused bot on Discord. Built-in <b>networking utilities</b>, <b>security tools</b>, <b>OSINT</b>, <b>CTFs</b> and more.</p>
              </li>
              <li>
                <h4>📁 <a href="https://github.com/tarranprior/disclone" target="_blank" rel="noreferrer">Disclone/</a></h4>
                <p><b>Disclone</b> is a self-hostable bot with <b>Rclone</b> integration, <b>Gclone</b> support and <b>Google Drive</b> automation utilities for collaborative cloud storage management.</p>
              </li>
              <li>
                <h4>✈️ <a href="https://github.com/tarranprior/blackstar" target="_blank" rel="noreferrer">Blackstar/</a></h4>
                <p>An asynchronous and lightweight <b>OSINT</b> tool which searches for usernames across common social networking platforms. Inspired by Sherlock.</p>
              </li>
              <li>
                <h4>📁 <a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer">Runebot/</a></h4>
                <p><b>Runebot</b> is a feature rich Discord tool which scrapes, pulls and displays information about the popular <b>MMORPG Old School RuneScape</b>. Built with Python and Beautiful Soup 4.</p>
              </li>
            </StyledList>
            <div class="inline-text"><h2>Index of <TextList><li>/public</li><li>/recent</li><li>/Writing/</li></TextList></h2></div>
            <StyledList>
              {meta.allMdx.edges.map((edge) => {
                return(
                  <li>
                    <h4>
                      📄 <Link to={`writing/${edge.node.frontmatter.slug}`}>
                        {edge.node.frontmatter.title}/
                      </Link>
                    </h4>
                    <div class="metadata">
                      <p>{edge.node.frontmatter.date}</p>
                      {edge.node.frontmatter.tags.map((tag) => {
                        return (
                          <p class="tags"><Link to={`tags/${_.kebabCase(tag)}`}>{tag}</Link></p>
                        )
                      })}
                    </div>
                  </li>
                )
              })}
            </StyledList>
          </main>
        </Layout>
      </div>
    </>
  )
};