import React, { useState } from 'react';
import axios from 'axios';
import OneItemCard from './OneItemCard';

export default function Modal({ item, initInput }) {
  const [input, setInput] = useState({
    address: initInput ? initInput.address : '',
  });

  const handleChange = (e) =>setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // ?????????
  const handleBuy = async (e, id) => {
    try {
      await axios.post(`/api/order`, Object.fromEntries(new FormData(e.target))); //адрес запроса
      //
    } catch (error) {
      console.log(error);
    }
  };
  //   ????????????

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form onSubmit={(e) => handleBuy(e, item.id)}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                buy an item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <OneItemCard item={item}/>
              </div>

              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Введите адрес доставки:{' '}
                </span>
                <input
                  onChange={handleChange}
                  name="address"
                  placeholder="address"
                  defaultValue={input.address}
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Buy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
