import Head from "next/head";
import React from "react";

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <div {...rest}>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css"
          />
        </Head>
        {children}
      </div>
    </>
  );
};

export default Layout;
