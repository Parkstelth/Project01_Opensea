// import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"

import Create from "./components/Create";
import Home from "./components/Home";
import {useState, useEffect} from 'react';


function App() {
 

  return (
<BrowserRouter>
<Routes>

  <Route exact={true} path="/" element={<Home />} />
  <Route path="/create" element={<Create />} />
  {/* <Route path="/Home" element={<MdAccountCircle />} /> */}
</Routes>
</BrowserRouter>
  );
}

export default App;