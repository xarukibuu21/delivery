import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap/';
import FormItem from '../ui/FormItem';
import useItems from '../../hooks/useItems';
import Navbar from '../ui/Navbar';

export default function ItemPage({ items, user }) {
  const { itemsState, setItemsState, handleAddItem } = useItems(items);

  const handleDelete = async (id) => {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setItemsState((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      {' '}
      <h1>Добавьте заказ</h1>
      <FormItem onSubmit={handleAddItem} inputs={itemsState} setInputs={setItemsState} />
      <ButtonGroup aria-label="Basic example" style={{ textAlign: 'right', marginLeft: '70rem', marginTop: '10px' }}>
        <Button variant="secondary" href="orderitem">Заказы</Button>
      </ButtonGroup>
      <div className="row mt-4">
        {' '}
        <div className="col-md-12">
          {itemsState.map((el) => (
            <div key={el.id} className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={el.img} className="card-img" alt={el.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{`Позиция: ${el.title}`}</h5>
                    <p className="card-text">{`Адрес: ${el.address}`}</p>
                    <p className="card-text">{`Цена: ${el.price}р.`}</p>
                    <p className="card-text">{`Размер скидки: ${el.sale}%`}</p>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(el.id)}>Удалить</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
