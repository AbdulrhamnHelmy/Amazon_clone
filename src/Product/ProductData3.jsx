import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product3 from "./Product3";

function ProductData3() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Product3
              id="12321341"
              title="music instroment"
              price={505}
              rating={4}
              image="/amazon-image/tab10.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Product3
              id="12321341"
              title="Deals | Mobile accessories "
              price={300}
              rating={3}
              image="/amazon-image/tab10.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Product3
              id="12321341"
              title="Deals | Tools & DIY |"
              price={350}
              rating={5}
              image="/amazon-image/tab10.jpg"
            />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Product3
              id="12321341"
              title="Deals | Garden & outdoors |"
              price={90}
              rating={5}
              image="/amazon-image/tab10.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ProductData3;
