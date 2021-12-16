import React from 'react';

function About({ test }) {
  console.log(test);

  return (
    <div>
      THIS PAGE IS 어바웃페이지입니다.
      {test}
    </div>
  );
}

export default About;
