import React, { useState } from 'react';
import Web3 from 'web3';
import './MyPage.css'
import erc20Abi from '../abi/erc20Abi';

const MyPage = () => {
  const [account, setAccount] = useState();
  const [inputValue, setInputValue] = useState();
  const [erc20TokenAddr, setErc20TokenAddr] = useState();
  const [sendToAddr, setSendToAddr] = useState();
  const [sendToBalance, setSendToBalance] = useState();

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(window.ethereum);
    setAccount(accounts[0]);
  };

  // const generateToken = async () => {
  //   const web3 = new Web3(window.ethereum);
  //   const contract = new web3.eth.Contract(erc20Abi, inputValue);
  //   setErc20TokenAddr(inputValue);
  //   setInputValue('');
  //   console.log(contract.methods);
  //   const tokenSymbol = await contract.methods.symbol().call();

  //   const tokenDecimals = 18;
  //   const tokenImage =
  //     'https://images.unsplash.com/photo-1582573732277-c5444fa37391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80';

  //   try {
  //     const wasAdded = await window.ethereum.request({
  //       method: 'wallet_watchAsset',
  //       params: {
  //         type: 'ERC20',
  //         options: {
  //           address: erc20TokenAddr,
  //           symbol: tokenSymbol,
  //           decimals: tokenDecimals,
  //           image: tokenImage,
  //         },
  //       },
  //     });
  //     console.log(wasAdded);

  //     if (wasAdded) {
  //       console.log('토큰 생성!');
  //     } else {
  //       console.log('실패!');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  const sendErc20Token = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(erc20Abi, erc20TokenAddr);
    console.log(await contract.methods.balanceOf(account).call());
    const tokenDecimals = web3.utils.toBN(18);
    const tokenAmountToTransfer = web3.utils.toBN(sendToBalance);
    const calculatedTransferValue = web3.utils.toHex(
      tokenAmountToTransfer.mul(web3.utils.toBN(10).pow(tokenDecimals))
    );
 
    if (sendToAddr) {
      await contract.methods
        .transfer(sendToAddr, calculatedTransferValue)
        .send({ from: account })
        .on('transactionHash', (hash) => {
          console.log(hash);
          setSendToAddr('');
        });
    }
  };

  return (
    <>
      {account ? (
        <div className="accessfinish">
          <p>Hello <strong>{account}</strong></p>
          <p>Your Erc20 Token Address <strong>{erc20TokenAddr}</strong></p>
          <div>
            <input
              type="text"
              value={inputValue}
              placeholder="토큰 발행 컨트랙트 입력"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button onClick={()=>setErc20TokenAddr(inputValue)}>Submit your token address</button>
          </div>
          <div>
            <input
              type="text"
              value={sendToAddr}
              placeholder="받을 사람 주소 입력"
              onChange={(e) => {
                setSendToAddr(e.target.value);
              }}
            />
            <input
              type="text"
              value={sendToBalance}
              placeholder="전송 할 토큰 양 입력"
              onChange={(e) => {
                setSendToBalance(e.target.value);
              }}
            />
            <button onClick={sendErc20Token}>
              전송
            </button>
          </div>
        </div>
      ) : (
        <div className="accesslogin">
        <button onClick={connectWallet}className="accessbutton">Connect to the wallet</button>
        </div>
      )}
    </>
  );
};

export default MyPage;
