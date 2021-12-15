import React from 'react';
import { useState, useEffect } from 'react';

function Home({ account }) {
  return (
    <div>
      THIS PAGE IS 메인페이지입니다.
      <div>{account}</div>
    </div>
  );
}

export default Home;
