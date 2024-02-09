import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Col } from 'react-bootstrap/';

function ModalWindow({ show, setShow, item}) {
  const [address, setAddress] = useState('');

  const handleClose = () => setShow(false);

  const handleBuy = async () => {
    try {
      await axios.patch('api/order', { address });
      console.log(address, '<-----------');
      console.log('Order placed successfully!');
      handleClose();
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const orderHandler = async() => {
    try{
      const response = await axios.post('api/order',  { itemId: item.id })
      await response.sendStatus(200);
    }
   catch (error) {
    console.error('Error placing order:', error);
  }
  }
  console.log(item);
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <form onSubmit={handleBuy}>
        <Modal.Header closeButton>
          <Modal.Title>{item?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col lg={9} md={5}>
            <img
              src={item?.img}
              alt={item?.title}
              style={{ height: '250px', objectFit: 'cover', width: '100%' }}
            />
            <p>{item?.address}</p>
            <p>{`Цена без скидки ${item?.price} руб.`}</p>
            <p>{`Цена со скидкой ${item?.price - (item?.price * (item?.sale / 100))} руб.`}</p>
          </Col>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <p>привезем по адресу:</p>
            </span>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            отмена
          </Button>
          <Button variant="primary" type='submit' onClick={orderHandler }>
            оформить заказ
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalWindow;
