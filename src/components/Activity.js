import React from 'react';
import { useState, useEffect } from 'react';
import TokenList from './Tokenlist';
import Web3 from 'web3';
import erc721Abi from '../erc721Abi';

function Activity({ web3, account }) {
  const [newErc721addr, setNewErc721addr] = useState();
  const [erc721list, setErc721list] = useState([]);
  // 생략

  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr);

    const name = await tokenContract.methods.owner().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }

    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI }];
        });
      }
    }
  };

  return (
    // 생략
    <div className="newErc721">
      <input
        type="text"
        onChange={(e) => {
          setNewErc721addr(e.target.value); // 입력받을 때마다 newErc721addr 갱신
        }}
      ></input>
      <button onClick={addNewErc721Token}>add new erc721</button>
      <TokenList erc721list={erc721list} />
    </div>
  );
}

export default Activity;
