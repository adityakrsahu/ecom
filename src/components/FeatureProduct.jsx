import { useProductContext } from "../contacts/productcontact";
import '../assets/style/index.css';
import Product from "./home/product";

const FeatureProduct = () => {
  const { isLoading, featureProduct } = useProductContext();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <div className="section">
        <div className="container4">
          <div className="intro-data">Check Now!</div>
          <div className="common-heading">Our Feature Services</div>
          <div className="grid grid-three-column">
            {featureProduct && featureProduct.length > 0 ? (
              featureProduct.map((curElem) => (
                <Product key={curElem.id} {...curElem} />
              ))
            ) : (
              <div>No feature products available.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
