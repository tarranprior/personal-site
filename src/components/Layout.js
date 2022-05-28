import React from 'react';
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles';

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