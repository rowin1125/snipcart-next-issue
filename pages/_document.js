import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js" />
        <div
          id="snipcart"
          data-config-modal-style="side"
          data-currency="eur"
          data-api-key="NDBhNTQ2ZmEtZWIzYi00NzQ4LThhNDAtZGEwZjY0ZWY3YjI3NjM3NDk2OTY0MDUxMDkzNTkz"
          hidden
        ></div>
      </Html>
    );
  }
}
