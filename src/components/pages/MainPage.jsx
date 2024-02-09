import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import OneItemCard from '../ui/OneItemCard';
import ModalWindow from '../ui/Modal';
import Navbar from '../ui/Navbar';

export default function MainPage({ items, user }) {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  const handleShow = () => {
    setShow(true);
    setCurrentIndex(index);
  };

  console.log(items);
  return (
    <>
      <Navbar user={user} />
      <Row mt={3}>
        {items.map((item, index) => (
          <OneItemCard
            buttonShow={!!user}
            key={item.id}
            item={item}
            handleShow={
            (e, index) => handleShow(index)
}
          />
        ))}
        <ModalWindow show={show} setShow={setShow} item={items[currentIndex]} />
      </Row>
    </>
  );
}
