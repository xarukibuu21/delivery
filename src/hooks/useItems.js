import React, { useState } from 'react';

export default function useItems(items) {
  const [itemsState, setItemsState] = useState(items);

  const handleAddItem = async (event, inputs) => {
    console.log('11111111111111inp', inputs, '11111111111111inp');
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    setItemsState((prev) => [data, ...prev]);
  };

  return {
    itemsState,
    setItemsState,
    handleAddItem,
  };
}
