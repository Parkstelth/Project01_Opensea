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
import Ranking from './components/Ranking';

function App() {
  const [mainaccount, setMainaccount] = useState('Address not yet!');
  const [mainweb3, setMainweb3] = useState('not load web3');
  const [clickedItem, setClickedItem] = useState('');
  const [islogin,setIslogin] = useState(false);

  useEffect(() => {
    setMainaccount(mainaccount);
    
  }, [mainaccount]);

  useEffect(() => {
    if(mainaccount=='Address not yet!'){
    setIslogin(false);
    }
    else{
      setIslogin(true)
    }
  }, [mainaccount]);

  const onClickItem = (e) => {
    setClickedItem(e);
  };

  return (
    <BrowserRouter>
      <Nav setmainaccount={setMainaccount} setmainweb3={setMainweb3} islogin={islogin} />
      <Routes>
        <Route exact={true} path="/" element={<Home account={mainaccount} />} />
        <Route path="/browse" element={<Browse onClickItem={onClickItem} />} />
        <Route path="/create" element={<Create account={mainaccount} />} />
        <Route
          path="/activity"
          element={<Activity account={mainaccount} web3={mainweb3} />}
        />
        <Route path="/ranking" element={<Ranking account={mainaccount} />} />
        <Route
          path={"/browse/about"}
          element={<About clickedItem={clickedItem} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
