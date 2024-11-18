import React, { useState } from "react";

const InteractiveCard: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Interactive Counter</h2>
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={decrementCount}
          className="bg-blue-500 text-white px-4 py-2 rounded-l-lg focus:outline-none"
        >
          -
        </button>
        <div className="bg-gray-200 text-gray-800 px-6 py-2">
          {count}
        </div>
        <button
          onClick={incrementCount}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg focus:outline-none"
        >
          +
        </button>
      </div>
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto"></div>
    </div>
  );
};

export default InteractiveCard;