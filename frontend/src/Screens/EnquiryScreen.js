import React, { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Calculator from '../components/Calculator';
import { Store } from '../Store';
import { Link } from 'react-router-dom';

export default function EnquiryScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const [num, num1, num2, num3, changeNum] = useState(1);

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
  const incrementNum1 = () => {
    changeNum(num1 + 1);
  };

  const decrementNum1 = () => {
    if (num1 - 1 < 0) {
      alert(`you can't decrease than 0`);
    } else {
      changeNum(num1 - 1);
    }
  };
  const incrementNum2 = () => {
    changeNum(num2 + 1);
  };

  const decrementNum2 = () => {
    if (num2 - 1 < 0) {
      alert(`you can't decrease than 0`);
    } else {
      changeNum(num2 - 1);
    }
  };
  const incrementNum3 = () => {
    changeNum(num3 + 1);
  };

  const decrementNum3 = () => {
    if (num3 - 1 < 0) {
      alert(`you can't decrease than 0`);
    } else {
      changeNum(num3 - 1);
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
                      ) : item.category === 'Air Conditioner' ? (
                        <Col md={3}>
                          <Button
                            variant="Light"
                            disabled={num1 === 1}
                            onClick={decrementNum1}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{' '}
                          <span>Hours: {num1}</span>{' '}
                          <Button
                            variant="Light"
                            disabled={num1 === 24}
                            onClick={incrementNum1}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>{' '}
                        </Col>
                      ) : item.category === 'Dishwasher' ? (
                        <Col md={3}>
                          <Button
                            variant="Light"
                            disabled={num2 === 1}
                            onClick={decrementNum2}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{' '}
                          <span>Hours: {num2}</span>{' '}
                          <Button
                            variant="Light"
                            disabled={num2 === 24}
                            onClick={incrementNum2}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>{' '}
                        </Col>
                      ) : item.category === 'Microwave' ? (
                        <Col md={3}>
                          <Button
                            variant="Light"
                            disabled={num3 === 1}
                            onClick={decrementNum3}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{' '}
                          <span>Hours: {num3}</span>{' '}
                          <Button
                            variant="Light"
                            disabled={num3 === 24}
                            onClick={incrementNum3}
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
                            {(item.energy * num).toFixed(1)}Watts ={' '}
                            {((item.energy / 1000) * num).toFixed(1)} KWh
                          </p>
                        ) : item.category === 'Air Conditioner' ? (
                          <p>
                            {(item.energy * num1).toFixed(1)}Watts ={' '}
                            {((item.energy / 1000) * num1).toFixed(1)} KWh
                          </p>
                        ) : item.category === 'Dishwasher' ? (
                          <p>
                            {(item.energy * num2).toFixed(1)}Watts ={' '}
                            {((item.energy / 1000) * num2).toFixed(1)} KWh
                          </p>
                        ) : item.category === 'Microwave' ? (
                          <p>
                            {(item.energy * num3).toFixed(1)}Watts ={' '}
                            {((item.energy / 1000) * num3).toFixed(1)} KWh
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
                          <p>AED: {((item.energy * 0.23) / 12).toFixed(1)}</p>
                        ) : item.category === 'Light' ? (
                          <p>
                            AED:{' '}
                            {((item.energy / 1000) * num * 30 * 0.23).toFixed(
                              1
                            )}
                          </p>
                        ) : item.category === 'Air Conditioner' ? (
                          <p>
                            AED:{' '}
                            {((item.energy / 1000) * num1 * 30 * 0.23).toFixed(
                              1
                            )}
                          </p>
                        ) : item.category === 'Dishwasher' ? (
                          <p>
                            AED:{' '}
                            {((item.energy / 1000) * num2 * 30 * 0.23).toFixed(
                              1
                            )}
                          </p>
                        ) : item.category === 'Microwave' ? (
                          <p>
                            AED:{' '}
                            {((item.energy / 1000) * num3 * 30 * 0.23).toFixed(
                              1
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
                  <Col>Tariff in UAE : 23fills / 1 KWh</Col>
                  <Col></Col>
                </Row>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Card.Title>ADD for Total Electricity Bill</Card.Title>
              <Calculator></Calculator>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
