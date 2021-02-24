import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script src="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js" />
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-currency="eur"
        data-api-key="NDBhNTQ2ZmEtZWIzYi00NzQ4LThhNDAtZGEwZjY0ZWY3YjI3NjM3NDk2OTY0MDUxMDkzNTkz"
        hidden
      ></div>
    </>
  );
}

export default MyApp;
