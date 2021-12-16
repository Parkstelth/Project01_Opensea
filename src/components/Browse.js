import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
const Browse = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };

    const dataLoad = async () => {
      const dataList = await fetch(
        'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=40',
        options
      )
        .then((response) => response.json())
        .catch((err) => console.error(err));
      setData(dataList.assets);
    };
    dataLoad();
  }, []);
  return (
    <div>
      <ItemList data={data}></ItemList>
    </div>
  );
};

export default Browse;
