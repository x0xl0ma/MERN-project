import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Homescreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>

      {loading && <Loader />}

      {products && (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} key={product._id} />
            </Col>
          ))}
        </Row>
      )}

      {error && <Message variant="danger">{error}</Message>}
    </>
  );
};

export default Homescreen;
