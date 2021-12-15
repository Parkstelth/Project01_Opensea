import axios from 'axios'
import React, { Component } from "react";
function Erc721({ erc721list }) {


async function findURI(uri){
  
       const res = await axios.get(uri)
           console.log('test1',res.data.image);
 
}

let erc721item =[]
for(let item of erc721list){
    erc721item.push(item)
}
console.log(erc721item)
    return (
        <div className="erc721list">
            {erc721item.map(async(token) => {
                return (
                    <div className="erc721token">
                        Name: <span className="name">{token.name}</span>(
                        <span className="symbol">{token.symbol}</span>)
                        
                        <div className="nft">id: {token.tokenId}</div>                   
                        <img src={await findURI(token.tokenURI)} width={300} />
                   
                    </div>
                );
            })}
          
        </div>
    );
}

export default Erc721;