import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const ProductScreen = (props) => {
  return (
    <Container>
      <Row xs={2} md={2} className="g-4">
        {props.data.map((item) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Container>
                  <Card.Title>${item.price}</Card.Title>
                  <Button variant="primary">Add To Cart</Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductScreen;
