import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../store/actions/productsAction";

const ProductsView = () => {
  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
