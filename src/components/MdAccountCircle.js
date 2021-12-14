// import "./App.css";
// import Kryptokitty from "./components/Kryptokitty";
// import {useState, useEffect} from 'react';
// import Web3 from 'web3';


// function App() {
//     const [web3, setWeb3] = useState();
//     const [account, setAccount] = useState('');

//     useEffect(() => {
//         if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
//             try {
//                 const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
//                 setWeb3(web);
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }, []);

//     const connectWallet = async () => {
//         const accounts = await window.ethereum.request({
//             method: "eth_requestAccounts",
//         });

//         setAccount(accounts[0]);
//     };
    
//     return (
//       <div className="App">
//         <Kryptokitty />

//             <button
//                 className="metaConnect"
//                 onClick={() => {
//                     connectWallet();
//                 }}
//             >
//                 connect to MetaMask
//             </button>
//             <div className="userInfo">주소: {account}</div> 
//       </div>
//     );
    
//   }

// export default App;