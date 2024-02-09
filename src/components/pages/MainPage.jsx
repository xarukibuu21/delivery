import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import OneItemCard from '../ui/OneItemCard';
import ModalWindow from '../ui/Modal';
import Navbar from '../ui/Navbar';

export default function MainPage({ items, user }) {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  const handleShow = (index) => {
    setShow(true);
    setCurrentIndex(index);
  };

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

      <Row mt={12}>
        {items.map((item, index) => (
          <OneItemCard key={item.id} item={item} handleShow={() => handleShow(index)} />
        ))}
        { show && <ModalWindow show={show} setShow={setShow} item={items[currentIndex]} />}
      </Row>
    </>
  );
}
