// import React, { useState } from 'react';
// import axios from 'axios';
// import OneItemCard from './OneItemCard';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function ModalWindow({ show, setShow }) {
//   const handleClose = () => setShow(false);

//   // const handleChange = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   return (
//     <>
//       <Modal show={show} onHide={handleClose} >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body></Modal.Body>
//         <Modal.Footer>
//           <div className="input-group input-group-sm mb-3">
//             <span className="input-group-text" id="inputGroup-sizing-sm">
//               <p>Введите адрес доставки: </p>{' '}
//             </span>
//             <input
//               name="address"
//               placeholder="address"
//               defaultValue=" "
//               type="text"
//               className="form-control"
//               aria-label="Sizing example input"
//               aria-describedby="inputGroup-sizing-sm"
//             />
//           </div>

//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose} onClick={handleBuy}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ModalWindow;
// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// export default function Modal({ item, initInput }) {
//   const [input, setInput] = useState({
//     address: initInput ? initInput.address : '',
//   });
//  console.log(item, '----------');
//   const handleChange = (e) =>setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   // ?????????
//   const handleBuy = async (e, id) => {
//     try {
//       await axios.post(`/api/order`, Object.fromEntries(new FormData(e.target))); //адрес запроса
//       //
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   //   ????????????

//   return (
//     <div
//       className="modal fade"
//       id="staticBackdrop"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabIndex="-1"
//       aria-labelledby="staticBackdropLabel"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog">
//         <form onSubmit={(e) => handleBuy(e, item.id)}>
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="staticBackdropLabel">
//                 buy an item
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body">
//               <div>
//                 <OneItemCard key={item.id} item={item}/>
//               </div>

//               <div className="input-group input-group-sm mb-3">
//                 <span className="input-group-text" id="inputGroup-sizing-sm">
//                   Введите адрес доставки:{' '}
//                 </span>
//                 <input
//                   onChange={handleChange}
//                   name="address"
//                   placeholder="address"
//                   defaultValue={input.address}
//                   type="text"
//                   className="form-control"
//                   aria-label="Sizing example input"
//                   aria-describedby="inputGroup-sizing-sm"
//                 />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
//                 Close
//               </button>
//               <button type="submit" className="btn btn-primary">
//                 Buy
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Col } from 'react-bootstrap/';

function ModalWindow({ show, setShow, item }) {
  const [address, setAddress] = useState('');

  const handleClose = () => setShow(false);

  const handleBuy = async () => {
    try {
      await axios.patch('/order', { address });
      console.log(address, '<-----------');
      console.log('Order placed successfully!');
      handleClose();
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  console.log(item);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={12} md={4}>
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
              <p>Введите адрес доставки:</p>
            </span>
            <input
              name="address"
              placeholder="address"
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
            Close
          </Button>
          <Button variant="primary" onClick={handleBuy}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
