import React, { Component } from 'react';
import '../components/Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
// const Contract = require('web3-eth-contract');

import { FiArrowDown, FiChevronDown } from 'react-icons/fi';
import {
  MdSearch,
  MdExpandMore,
  MdRefresh,
  MdShare,
  MdLaunch,
  MdMoreVert,
  MdCheckCircle,
  MdBrightness1,
  Md3DRotation,
  MdShowChart,
  MdLocalOffer,
  MdList,
  MdAccountCircle,
} from 'react-icons/md';

function Nav({ setmainaccount, setmainweb3, islogin }) {
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
      <div className="menu">
        <div className="dropdown-container">
          <div>
            <img src="https://opensea.io/static/images/logos/opensea-logo.png" />
          </div>
          <div>
            <button>
              <FiChevronDown className="down-icon" />
            </button>
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
      </div>
      <div className="menu-large">
        <div className="dropdown-container">
          <div>
            <img src="https://opensea.io/static/images/logos/opensea-logo.png" />
          </div>
          <div>
            <span>
              <h2>
                <Link to="/" className="title">
                  Opensea
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
              <Link to="/browse" className="menu-item">Browse</Link>
            </li>
            <li>
              <Link to="/activity" className="menu-item">
                Activity
              </Link>
            </li>
            <li className="menu-item">
            <Link to="/ranking" className="menu-item">
                Ranking
              </Link>
            </li>
            <li>
              <Link to="/create" className="menu-item">
                Create
              </Link>
            </li>
            <li className="menu-item">Help</li>
            <li className="menu-item">Blog</li>
            <li className={islogin ? 'menu-item login' : 'menu-item'}>
            <MdAccountCircle
              className="menu-icon"
              onClick={() => {
                connectWallet();
              }}
            />
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
