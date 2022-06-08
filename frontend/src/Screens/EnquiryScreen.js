import React, { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { Store } from '../Store';
import { Link } from 'react-router-dom';

export default function EnquiryScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const [num, changeNum] = useState(1);

  const incrementNum = () => {
    changeNum(num + 1);
  };

  const decrementNum = () => {
    if (num - 1 < 0) {
      alert(`you can't decrease than 0`);
    } else {
      changeNum(num - 1);
    }
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <Helmet>
        <title>Product Enquiry</title>
      </Helmet>
      <h1 className="my-3">Product Enquiry</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <ListGroup.Item variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      {item.category === 'Refrigerator' ? (
                        <Col md={3}>Runs 24/7</Col>
                      ) : item.category === 'Light' ? (
                        <Col md={3}>
                          <Button
                            variant="Light"
                            disabled={num === 1}
                            onClick={decrementNum}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{' '}
                          <span>Hours: {num}</span>{' '}
                          <Button
                            variant="Light"
                            disabled={num === 24}
                            onClick={incrementNum}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>{' '}
                        </Col>
                      ) : (
                        <p> not available </p>
                      )}

                      <Col md={3}>
                        {item.category === 'Refrigerator' ? (
                          <p>{item.energy} KWh</p>
                        ) : item.category === 'Light' ? (
                          <p>
                            {(item.energy * num).toFixed(2)}Watts ={' '}
                            {((item.energy / 1000) * num).toFixed(2)} KWh
                          </p>
                        ) : (
                          'not available'
                        )}
                      </Col>
                      <Col md={2}>
                        <Button
                          variant="light"
                          onClick={() => removeItemHandler(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                      <Col>
                        Monthly Price
                        {item.category === 'Refrigerator' ? (
                          <p>AED: {((item.energy * 0.23) / 12).toFixed(2)}</p>
                        ) : item.category === 'Light' ? (
                          <p>
                            AED:{' '}
                            {((item.energy / 1000) * num * 30 * 0.23).toFixed(
                              2
                            )}
                          </p>
                        ) : (
                          'not available'
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Energy Details</Card.Title>
              <ListGroup variant="flush">
                <Row>
                  <Col>Tariff in UAE : 23fills</Col>
                  <Col></Col>
                </Row>
              </ListGroup>
              <ListGroup variant="flush">
                <Row>
                  <Col>Total Monthly Energy Usage - </Col>
                </Row>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
