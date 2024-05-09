import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [customValue, setCustomValue] = useState<number>(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementBy5 = () => {
    setCount(count + 5);
  };

  const handleDecrementBy5 = () => {
    setCount(count - 5);
  };

  const handleCustomIncrement = () => {
    setCount(count + customValue);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <p>Current Count: {count}</p>
      <div className="flex space-x-2 mt-4">
        <button onClick={handleIncrement} className="bg-blue-500 text-white px-2 py-1 rounded">
          Increment
        </button>
        <button onClick={handleDecrement} className="bg-red-500 text-white px-2 py-1 rounded">
          Decrement
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        <button onClick={handleIncrementBy5} className="bg-green-500 text-white px-2 py-1 rounded">
          Increment by 5
        </button>
        <button onClick={handleDecrementBy5} className="bg-yellow-500 text-white px-2 py-1 rounded">
          Decrement by 5
        </button>
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(Number(e.target.value))}
          className="border p-1"
        />
        <button onClick={handleCustomIncrement} className="bg-purple-500 text-white px-2 py-1 rounded ml-2">
          Increment by Custom Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
