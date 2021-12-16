import React, { useState } from 'react';
import Items from './Items';
import { Link } from 'react-router-dom';
import './ItemList.css';
const ItemList = ({ data, onClickedItem }) => {
  const onClickItem = (e) => {
    onClickedItem(e);
  };

  console.log(data);
  return (
    <div className="card-group addOption">
      {data.map((item) => (
        <div className="card addOption">
          <img src={item.image_url} className="card-img-top" alt="..." />
          <div className="card-body addOption">
            <h5 className="card-title addOption">{item.name}</h5>
            {/* <p className="card-text">{item.description}</p> */}
            <p className="card-text addOption">
              <button type="button" class="btn btn-secondary">
                구매하기
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
