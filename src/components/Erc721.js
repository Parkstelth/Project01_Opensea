import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
function Erc721({ erc721list }) {
  const [list, setList] = useState([]);
  console.log(erc721list);
  //   async function findURI(uri) {
  //     const res = await axios.get(uri);
  //     console.log('test1', res.data.image);
  //     return res.data.image;
  //   }

  //   useEffect(() => {
  //     (async () => {
  //       const arrElem = [];
  //       for (const token of erc721list) {
  //         console.log(token);
  //         const src = await findURI(token.tokenURI);
  //         console.log(src);
  //         arrElem.push(
  //           <div className="erc721token">
  //             Name: <span className="name">{token.name}</span>(
  //             <span className="symbol">{token.symbol}</span>)
  //             <div className="nft">id: {token.tokenId}</div>
  //             {/* {findURI(token.tokenURI)} */}
  //             <img src={src} width={300} />
  //           </div>
  //         );
  //       }
  //       setList(arrElem);
  //     })();
  //   }, []);

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
            {/* <div className="tokenTransfer">
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
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
//0x29a55a08460de2eF991d8B5e14F83A681C424520
export default Erc721;
