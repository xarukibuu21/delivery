/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

export default function FormItem({ onSubmit }) {
  const [inputs, setInputs] = useState({
    title: '',
    img: '',
    address: '',
    price: '',
    sale: '',
  });

  const changeHandler = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <form onSubmit={(event) => {
      onSubmit(event, inputs);
    }}
    >
      <input
        type="text"
        name="title"
        placeholder="title"

        value={inputs.title}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        value={inputs.img}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="address"
        placeholder="address"
        value={inputs.address}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="price"
        placeholder="price"
        value={inputs.price}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="sale"
        placeholder="sale"
        value={inputs.sale}
        onChange={changeHandler}
      />
      <button type="submit">Add order</button>
    </form>
  );
}
