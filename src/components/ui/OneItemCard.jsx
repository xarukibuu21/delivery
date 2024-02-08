import React from 'react';
import { Card, Col } from 'react-bootstrap/';

export default function OneItemCard({ item }) {
  return (
    <Col xs={12} md={4}>
      <Card key={item.id} style={{ margin: '10px 0 0 10px' }}>
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
          <button type="button" className="btn btn-success">купиц</button>
        </Card.Footer>
      </Card>
      
    </Col>
  );
}
