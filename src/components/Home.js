import Nav from "./Nav";
import React from 'react';
import {useState, useEffect} from 'react';

function Home() {
    const [homeaccount, sethomeAccount] = useState(1);
  
    return (
      <div>
          <Nav setHomeAccount={sethomeAccount}/>
          THIS PAGE IS 메인페이지입니다.
          <div>{homeaccount}</div>
      </div>
    )
  }
  
  export default Home;