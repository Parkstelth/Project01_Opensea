import React, { useState } from 'react';
import Items from './Items';
import { Link } from 'react-router-dom';
const ItemList = ({ data, onClickedItem }) => {
  const onClickItem = (e) => {
    onClickedItem(e);
  };
  return (
    <div>
      {data.map((item) => (
        <Link to="/browse">
          <img src={item.image_url} onClick={() => onClickItem(item)} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
