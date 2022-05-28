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
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    background-color: #f0f0f0;
  }

  .container {
    margin: 0 auto;
    padding: 1rem;
    max-width: 800px;
  }

  h1 {
    margin-top: 3rem;
    font-size: 32px;
  }
  h2 {
    margin-top: 2.5rem;
    font-size: 24px;
  }
  h3 {
    margin-top: 2rem;
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  a,
  a:visited {
    text-decoration: none;
    color: blue;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;