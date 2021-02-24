import Link from "next/link";
import products from "../../products.json";
import styles from "../../styles/Home.module.css";

const Product = ({ products: prod }) => {
  console.log("prod", prod);
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p className="snipcart-items-count"></p>

      <div className={styles.grid}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={`Preview of ${product.title}`} />
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
    </>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  return {
    props: {
      preview,
      products,
    },
  };
}

export async function getStaticPaths() {
  const productsArray = products?.map((prod) => `/product/${prod.uid}`);

  return {
    paths: productsArray || [],
    fallback: false,
  };
}

export default Product;
