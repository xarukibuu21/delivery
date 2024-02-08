import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import OneItemCard from '../ui/OneItemCard';

export default function MainPage({ items }) {
  return (
    <>
      <ButtonGroup aria-label="Basic example" style={{ textAlign: 'right', marginTop: '10px' }}>
        <Button variant="secondary" href="login">Вход</Button>
        <Button variant="secondary" href="registration">Регистрация</Button>
      </ButtonGroup>

      <Row mt={3}>

        {items.map((item) => (
          <OneItemCard key={item.id} item={item} />
        ))}
      </Row>
    </>

  );
}
