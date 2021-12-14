import React, { Component } from "react";
import "../components/Nav.css";
import { Link } from 'react-router-dom';

import { FiArrowDown, FiChevronDown } from "react-icons/fi";
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
} from "react-icons/md";

export default class Nav extends Component {
  render() {
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
                <h2><Link to="/" className="title">OpenSea</Link></h2>
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
              <li className="menu-item">Browse</li>
              <li className="menu-item">Activity</li>
              <li className="menu-item">Ranking</li>
              <li><Link to ="/create" className="menu-item">Create</Link></li>
              <li className="menu-item">Help</li>
              <li className="menu-item">Blog</li>
              <li className="menu-item">
                <MdAccountCircle className="menu-icon" />
              </li>
            </ul>
          </div>
        </div>
        </div>
    );
  }
}
