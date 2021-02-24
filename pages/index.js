import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import products from "../products.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Snipcart Store</h1>

        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <strong>Cart:</strong>{" "}
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>
        <p className="snipcart-items-count"></p>

        <div className={styles.grid}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.card}>
                <Link href={`/product/${product.uid}`}>
                  <a>
                    <img
                      src={product.image}
                      alt={`Preview of ${product.title}`}
                    />
                  </a>
                </Link>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
