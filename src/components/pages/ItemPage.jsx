import React, { useState } from 'react';
import FormItem from '../ui/FormItem';
import useItems from '../../hooks/useItems';
import AllFormItem from '../ui/AllFormItem';
// import AllFormItem from '../ui/AllFormItem';

export default function ItemPage({ items }) {
  console.log('33333333333', items, '333333333333');
  const { itemsState, setItemsState, handleAddItem } = useItems(items);
  console.log('44444444', itemsState, '44444444');

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/items/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setItemsState((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <>
      <h1>Добавьте заказ</h1>
      <FormItem onSubmit={handleAddItem} inputs={itemsState} setInputs={setItemsState} />
      <ul>
        {itemsState.map((el) => (
          <>
            <p>
              Название:
              {el.title}
            </p>
            <p>
              <img
                style={{ width: '200px', height: '200px' }}
                src={el.img}
                alt={el.title}
              />
            </p>
            <p>
              Адрес:
              {el.address}
            </p>
            <p>
              Цена:
              {el.price}
            </p>
            <p>
              Скидка:
              {el.sale}
            </p>
            <li>
              <button type="button" className="btn btn-danger" onClick={() => handleDelete(el.id)}>
                Delete
              </button>
            </li>
          </>

        ))}
      </ul>
    </>
  );
}

// <FormItem onSubmit={handleAddItem} />
