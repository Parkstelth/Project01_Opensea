import React from 'react';
import Items from './Items';
const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <img src={item.image_url} />
      ))}
    </div>
  );
};

export default ItemList;
