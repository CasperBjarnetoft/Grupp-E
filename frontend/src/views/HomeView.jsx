import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../store/actions/productsAction";

const HomeView = () => {

  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);

  let fewproducts = products.slice(0, 3)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
        <header className="w">
          <div className="text-center bg-image">
            <img src="https://images.unsplash.com/photo-1599745455953-cbe71d40123f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=1500&h=300" alt="" />
          <div />
            <div className="mask bg">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">ElectroShop</h1>
                  <h4 className="mb-3">Best webbshop ever</h4>
                  <Link to="/products"><button className="btn btn-outline-light btn-lg" href="#!" role="button">To products</button></Link>
                </div>
              </div>
            </div>
          </div>
      </header>
      <h3 className="text-center mt-3">Top selling products</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-5 mt-1">
        {fewproducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>

  )
}

export default HomeView