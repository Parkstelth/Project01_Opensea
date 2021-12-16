import React, { useState } from 'react';
import Items from './Items';
import './ItemList.css';
import { Link } from 'react-router-dom';

function loadData(value) {
  console.log(value);
}

const ItemList = ({ data, onClickedItem }) => {
  const onClick = (e) => {
    onClickedItem(e);
  };

  return (
    <div className="card-group addOption">
      {data.map((item) => (
        <div className="card addOption">
          <img src={item.image_url} className="card-img-top" alt="..." />
          <div className="card-body addOption">
            <h5 className="card-title addOption">{item.name}</h5>
            {/* <p className="card-text">{item.description}</p> */}
            <p className="card-text addOption">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  onClick(item);
                }}
              >
                <Link to={`/browse/${item.id}`} class="btn btn-secondary">
                  상세보기
                </Link>
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
