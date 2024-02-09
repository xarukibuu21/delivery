import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import OneItemCard from '../ui/OneItemCard';
import ModalWindow from '../ui/modal';

export default function MainPage({ items }) {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState()


  const handleShow = () => {
    setShow(true);
    setCurrentIndex(index)
  }

  console.log(items);
  return (
    <>
      <ButtonGroup aria-label="Basic example" style={{ textAlign: 'right', marginTop: '10px' }}>
        <Button variant="secondary" href="signin">
          Вход
        </Button>
        <Button variant="secondary" href="signup">
          Регистрация
        </Button>
      </ButtonGroup>

      <Row mt={3}>
        {items.map((item, index) => (
          <>
            <OneItemCard key={item.id} item={item} handleShow={(e, index) => handleShow(index)} />
          </>
        ))}
        <ModalWindow show={show} setShow={setShow} item={items[currentIndex]} />
      </Row>
    </>
  );
}
