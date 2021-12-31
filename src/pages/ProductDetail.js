import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
