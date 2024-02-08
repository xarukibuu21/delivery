import React from 'react';
import OneItemCard from '../ui/OneItemCard';
import Modal from '../ui/modal';

export default function IndexPage({ items }) {
  return <div>Hello,
    {items?.map((item) =>
    
    (
    <><OneItemCard item={item}/>
    <Modal item={item}/>
    </>
    )
    )} 
    
  </div>;
}
