/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import FormItem from '../ui/FormItem';
import useItems from '../../hooks/useItems';

// export default function ItemPage({ items }) {
//   const { itemsState, setItemsState, handleAddItem } = useItems(items);

//   const handleDelete = async (id) => {
//     const response = await fetch(`http://localhost:3000/api/items/${id}`, {
//       method: 'DELETE',
//     });
//     if (response.status === 200) {
//       setItemsState((prev) => prev.filter((el) => el.id !== id));
//     }
//   };

//   return (
//     <>
//       <h1>Добавьте заказ</h1>
//       <FormItem onSubmit={handleAddItem} inputs={itemsState} setInputs={setItemsState} />
//       <ul>
//         {itemsState.map((el) => (
//           <>
//             <p>
//               Название:
//               {el.title}
//             </p>
//             <p>
//               <img
//                 style={{ width: '200px', height: '200px' }}
//                 src={el.img}
//                 alt={el.title}
//               />
//             </p>
//             <p>
//               Адрес:
//               {el.address}
//             </p>
//             <p>
//               Цена:
//               {el.price}
//             </p>
//             <p>
//               Скидка:
//               {el.sale}
//             </p>
//             <li>
//               <button type="button" className="btn btn-danger" onClick={
// () => handleDelete(el.id)}>
//                 Delete
//               </button>
//             </li>
//           </>

//         ))}
//       </ul>
//     </>
//   );
// }
export default function ItemPage({ items }) {
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
                    <button className="btn btn-danger" onClick={() => handleDelete(el.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
