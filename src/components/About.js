import React from 'react';
import './About.css';
function About({ clickedItem }) {

  return (
    <div className="card mb-3 addOption">
      <div className="card-image">
        <img src={clickedItem.image_url} className="card-img-top addOption" alt="..."/>
        </div>
        <div className="card-body">
    <h5 className="card-title">{clickedItem.name}</h5>
    <span className="card-text"><strong>{'<Description>'}</strong><p>{clickedItem.description}</p></span>
    <span className="card-text"><strong>{'<Price>'}</strong><p> 10 ETH <img className="eth-logo" src={`https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg`}/></p></span>
    <span className="pcard-text"><strong>{'<Asset Contract>'}</strong><p>{clickedItem.asset_contract.address}</p></span> 
  <button type="button" className="btn btn-primary">Buy now</button>
      </div>
    </div>
  );
}

export default About;
