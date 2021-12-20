import Erc721 from './Erc721';
import React, { Component } from 'react';
import './Tokenlist.css';

function TokenList({ web3, account, erc721list,newErc721addr }) {
  return (
    <div className="tokenlist" >
      <Erc721 web3={web3} account={account} erc721list={erc721list} tokenAddr={newErc721addr} />
    </div>
  );
}

export default TokenList;
