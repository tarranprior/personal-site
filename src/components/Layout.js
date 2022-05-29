import React from 'react';
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = (props) => {
    return (
      <>
        <GlobalStyles />
        {props.children}
        <Footer />
      </>
    )
  };
  
  export default Layout;