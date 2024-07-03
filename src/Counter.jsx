import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <div className="button-wrapper">
        <button className="counter-button" onClick={increment}>+</button>
        <button className="counter-button" onClick={decrement}>-</button>
      </div>
      <div className="reset-wrapper">
        <button className="counter-button reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;