import React, { useState } from 'react';

const CounterUseState = () => {
  const [count, setCount] = useState(0);

//MAP
// Original array
//const numbers = [1, 2, 3, 4, 5];
// Using map to square each number
//const squaredNumbers = numbers.map((number) => number * number);
// Resulting array
// squaredNumbers is now [1, 4, 9, 16, 25]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CounterUseState;