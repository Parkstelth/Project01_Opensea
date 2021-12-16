// import logo from "./logo.svg";
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Create from './components/Create';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Activity from './components/Activity';
import Browse from './components/Browse';
import About from './components/About';
function App() {
  const [mainaccount, setMainaccount] = useState('Address not yet!');
  const [mainweb3, setMainweb3] = useState('not load web3');
  const [clickedItem, setClickedItem] = useState();
  useEffect(() => {
    setMainaccount(mainaccount);
  }, [mainaccount]);

  const onClickItem = (e) => {
    setClickedItem(e);
  };

  return (
    <BrowserRouter>
      <Nav setmainaccount={setMainaccount} setmainweb3={setMainweb3} />
      <Routes>
        <Route exact={true} path="/" element={<Home account={mainaccount} />} />
        <Route path="/browse" element={<Browse onClickItem={onClickItem} />} />
        <Route path="/create" element={<Create account={mainaccount} />} />
        <Route
          path="/activity"
          element={<Activity account={mainaccount} web3={mainweb3} />}
        />
        <Route
          path={`/browse/${clickedItem}`}
          element={<About clickedItem={clickedItem} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
