import React, { useState } from "react";

const Jumbotron = ({ fetchData }) => {
  const [value, setValue] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      fetchData({ params: { title: value } });
      setValue('');
    }
  }

  const handleButtonSearch = () => {
    if(value.length) {
      fetchData({ params: { title: value } });
      setValue('');
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center py-6 px-2">
      <h3 className="text-2xl text-white font-semibold">Search APIs</h3>
      <div className="flex items-center mt-3 max-w-md mx-auto bg-white rounded-md">
        <input
          type="search"
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
          placeholder="Random facts of dogs"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button
          className="bg-blue-500 w-20 h-12 text-white rounded-r-md flex items-center justify-center"
          onClick={handleButtonSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
