import './assets/style/index.scss';
import * as React from 'react';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      hello react-ts-webpack demo {counter} clicks
      <button
        onClick={handleClick}
      >
        press
      </button>
    </div>
  );
}
