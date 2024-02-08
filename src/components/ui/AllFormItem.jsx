import React from 'react';

export default function AllFormItem({ item, setItem }) {
  const handleDelete = async () => {
    const response = await fetch(`/api/items/${item.id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setItem((prev) => prev.filter((el) => el.id !== item.id));
    }
  };
  return (
    <>
      <img
        style={{ width: '200px', height: '200px' }}
        src={item.img}
        alt={item.title}
      />
      <li>
        <a href={`/items/${item.id}`}>{item.title}</a>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
}
