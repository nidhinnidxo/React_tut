import React, { useState } from "react";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

function CounterApp(props) {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  } 

  return (
    <div class = "counter-app">
      <h3 class = "heading">Counter App</h3>
      <button class = "reset" onClick={reset}>
        <RotateLeftIcon />
      </button>
      <h1 class = "output">{count}</h1>
      <button class = "increment" onClick={increment}>Increment</button>
      <button class = "decrement" onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default CounterApp;