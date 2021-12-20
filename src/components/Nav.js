import React, { Component } from 'react';
import '../components/Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
// const Contract = require('web3-eth-contract');

import { FiChevronDown } from 'react-icons/fi';
import { MdSearch, MdAccountCircle } from 'react-icons/md';

function Nav({ setmainaccount, setmainweb3, login }) {
  console.log(login);
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다

        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    setmainaccount(account);
  }, [account]);

  useEffect(() => {
    setmainweb3(web3);
  }, [web3]);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
  };

  return (
    <div>
      <div className="menu-large">
        <div className="dropdown-container">
          <div>
            <span>
              <h2>
                <Link to="/" className="title">
                  <img
                    src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).png"
                    height="28"
                  />
                </Link>
              </h2>
            </span>
          </div>
        </div>
        <div className="search-container">
          <div className="icon">
            <MdSearch className="search-icon" />
          </div>
          <input
            className="search-input"
            placeholder="Search items, collections, and accounts"
          />
        </div>
        <div>
          <ul className="menu-item-container">
            <li>
              <Link to="/browse" className="menu-item">
                Browse
              </Link>
            </li>
            <li>
              <Link to="/activity" className="menu-item">
                Activity
              </Link>
            </li>
            <li className="menu-item">
              Resources
              <ul className="menu-item-drop">
                <li>
                  <a
                    href="https://opensea.io/rankings"
                    target="_black"
                    className="menu-item"
                  >
                    Ranking
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.opensea.io/hc/en-us"
                    target="_black"
                    className="menu-item"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="https://opensea.io/blog"
                    target="_blank"
                    className="menu-item"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/create" className="menu-item">
                Create
              </Link>
            </li>
            <li className={login ? 'menu-item login' : 'menu-item'}>
              <Link to="/mypage">
                <MdAccountCircle
                  className="menu-icon"
                  onClick={() => {
                    connectWallet();
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
