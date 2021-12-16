import Erc721 from './Erc721';
import React, { Component } from 'react';

function TokenList({ web3, account, erc721list }) {
  return (
    <div className="tokenlist">
      <Erc721 web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default TokenList;
