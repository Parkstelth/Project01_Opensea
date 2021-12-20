import React, { useState } from 'react';
import './About.css';

import Web3 from 'web3';
import erc721Abi from '../abi/erc721Abi';
function About({ mainaccount, clickedItem }) {
  console.log(mainaccount);
  const [input, setInput] = useState();
  const onClick = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(erc721Abi, mainaccount);
    await contract.methods.mintNFT(input, clickedItem.image_url);
    console.log(contract);
  };
  return (
    <div className="card mb-3 addOption">
      <div className="card-image">
        <img
          src={clickedItem.image_url}
          className="card-img-top addOption"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{clickedItem.name}</h5>
        <span className="card-text">
          <strong>{'<Description>'}</strong>
          <p>{clickedItem.description}</p>
        </span>
        <span className="card-text">
          <strong>{'<Price>'}</strong>
          <p>
            {' '}
            10 ETH{' '}
            <img
              className="eth-logo"
              src={`https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg`}
            />
          </p>
        </span>
        <span className="pcard-text">
          <strong>{'<NFT CONTRACT 입력>'}</strong>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </span>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Buy now
        </button>
      </div>
    </div>
  );
}

export default About;
