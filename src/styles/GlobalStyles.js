import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box:
  }

  html {
    width: 100%
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #636e72 #dfe6e9;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    background-color: #dfe6e9;
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: #dfe6e9;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #636e72;
    border: 3px solid #dfe6e9;
    border-radius: 10px;
  }

  .container {
    margin: 0 auto;
    padding: 1rem;
    max-width: 800px;
  }

  h1 {
    margin-top: 4rem;
    font-size: 32px;
  }
  h2 {
    margin-top: 4rem;
    font-size: 24px;
  }
  h3 {
    margin-top: 2rem;
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }
  
  .small {
    margin-top: 1.25rem;
    font-size: 14px;
  }

  a,
  a:visited {
    text-decoration: none;
    color: blue;
  }
  a:hover {
    text-decoration: underline;
  }

  ol, ul {
    margin: 1rem;
  }
`;

export default GlobalStyles;