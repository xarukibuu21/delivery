import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap/';

export default function OneItemCard({ item, handleShow, buttonShow }) {
  return (
    <Col xs={12} md={4}>
      <Card style={{ margin: '10px 0 0 10px' }}>
        <Card.Img
          variant="top"
          src={item.img}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.address}</Card.Text>
          <Card.Text>
            {`Цена без скидки ${item.price} руб.`}
          </Card.Text>
          <Card.Text>
            {`Цена со скидкой ${item.price - (item.price * (item.sale / 100))} руб.`}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {buttonShow ? (<button type="button" className="btn btn-success" onClick={handleShow}>Оформить заказ</button>) : ('Чтобы оформить заказ авторизуйтесь')}

        </Card.Footer>
      </Card>
    </Col>
  );
}
