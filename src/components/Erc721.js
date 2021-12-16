import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import erc721Abi from '../erc721Abi';
function Erc721({ web3, account, erc721list }) {
  const [to, setTo] = useState('');
  const sendToken = async (tokenAddr, tokenId) => {
    // NFT 주소
    // NFT 주소를 받아오는 로직 구현 필요
    const newAddr = '0xe4014090EE4CB039182123eba8d9d1E094F6deAD';
    const tokenContract = await new web3.eth.Contract(erc721Abi, newAddr, {
      from: account,
    });
    console.log(to);
    if (to !== null) {
      tokenContract.methods
        .transferFrom(account, to, tokenId)
        .send({
          from: account,
        })
        .on('receipt', (receipt) => {
          console.log(receipt);
          setTo('');
        });
    }
  };
  console.log('arr', erc721list);

  return (
    <div className="erc721list">
      {erc721list.map((token) => {
        console.log(token);
        return (
          <div className="erc721token">
            Name: <span className="name">{token.name}</span>(
            <span className="symbol">{token.symbol}</span>)
            <div className="nft">id: {token.tokenId}</div>
            <img src={token.tokenURI} width={300} />
            <div className="tokenTransfer">
              To:{' '}
              <input
                type="text"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              />
              <button
                className="sendErc721Btn"
                onClick={sendToken.bind(this, token.address, token.tokenId)}
              >
                토큰 보내기
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
//0x29a55a08460de2eF991d8B5e14F83A681C424520
export default Erc721;
