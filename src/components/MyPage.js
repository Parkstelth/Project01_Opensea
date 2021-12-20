import React, { useState } from 'react';
import Web3 from 'web3';

import erc20Abi from '../abi/erc20Abi';

const MyPage = () => {
  const [account, setAccount] = useState();
  const [inputValue, setInputValue] = useState();
  const [erc20TokenAddr, setErc20TokenAddr] = useState();
  const [sendToAddr, setSendToAddr] = useState();
  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(window.ethereum);
    setAccount(accounts[0]);
  };

  const generateToken = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(erc20Abi, inputValue);
    setErc20TokenAddr(inputValue);
    setInputValue('');
    console.log(contract.methods);
    const tokenSymbol = await contract.methods.symbol().call();

    const tokenDecimals = 18;
    const tokenImage =
      'https://images.unsplash.com/photo-1582573732277-c5444fa37391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80';

    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: erc20TokenAddr,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
      console.log(wasAdded);

      if (wasAdded) {
        console.log('토큰 생성!');
      } else {
        console.log('실패!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  //0xEB1f0b20ddc161557f78748193c8a9713e65D496
  const sendErc20Token = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = await new web3.eth.Contract(erc20Abi, erc20TokenAddr);
    console.log(await contract.methods.balanceOf(account).call());
    const tokenDecimals = web3.utils.toBN(18);
    const tokenAmountToTransfer = web3.utils.toBN(10000);
    const calculatedTransferValue = web3.utils.toHex(
      tokenAmountToTransfer.mul(web3.utils.toBN(10).pow(tokenDecimals))
    );
    // const checkValiable = await contract.methods
    //   .transferFrom(account, sendToAddr, calculatedTransferValue)
    //   .call();
    // console.log(checkValiable);
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
        <div>
          <p>Hello {account}</p>
          <p>Your Erc20 Token Address {erc20TokenAddr}</p>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button onClick={generateToken}>Submit your token address</button>
          </div>
          <div>
            <input
              type="text"
              value={sendToAddr}
              onChange={(e) => {
                setSendToAddr(e.target.value);
              }}
            />

            <button onClick={sendErc20Token}>
              Sumbit the address you want to send to
            </button>
          </div>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect to the wallet</button>
      )}
    </>
  );
};

export default MyPage;
