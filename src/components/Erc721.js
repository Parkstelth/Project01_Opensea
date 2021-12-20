import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import erc721Abi from '../erc721Abi';
import './Erc721.css';

function Erc721({ web3, account, erc721list,tokenAddr }) {

  let checkId = []
  const [to, setTo] = useState('');
  const sendToken = async (tokenAddr, tokenId) => {
    // NFT 주소
    // NFT 주소를 받아오는 로직 구현 필요
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddr, {
      from: account,
    });
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

  return (
    <div className="card-group erc721list addOption">
      {erc721list.map((token) => {
        if(checkId.indexOf(token.tokenId)==-1){
          checkId.push(token.tokenId);
         
          return (
            <div className="card erc721token addOption" key={token.tokenId}>
              <div className="flexbox">
              <img className="card-img-top addOption" src={token.tokenURI} width={300} />
              <div className="flexbox2">
              <div className="name"><strong>Name : </strong>{token.name}</div>
              <div className="symbol"><strong>Symbol : </strong>{token.symbol}</div>
              <div className="nft"><strong>ID : </strong>{token.tokenId}</div>
              <div className="tokenTransfer">
                <input
                className="card-title addOption title"
                  type="text"
                  value={to}
                  placeholder="전송받을 주소 입력"
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                />
                <button className="card-text sendErc721Btn btn btn-secondary" onClick={sendToken.bind(this, tokenAddr, token.tokenId)}>
                  전송
                </button>
              </div>
              </div>
              </div>
            </div>
          );
        }
      })
      }
    </div>
  );
}

export default Erc721;