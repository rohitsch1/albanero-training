
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const divs = [];
  for (let i = 0; i < count; i++) {
    divs.push(<div key={i}>Div {i+1}</div>);
  }

  return (
    <div className='flex-container'>
      {divs}
    </div>
  );
}

export default App;

