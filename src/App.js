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


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact={true} path="/" element={<Home />} />
  <Route path="/create" element={<Create />} />
</Routes>
</BrowserRouter>
  );
}

export default App;