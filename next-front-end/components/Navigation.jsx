import React from "react";

const Navigation = () => {
  return (
    <div className="flex flex-col w-full sm:w-64 bg-gray-900 h-screen px-5 py-4">
      <h1 className="text-white text-2xl font-bold mb-6">Hack it</h1>
      <p className="text-white mb-5">Paste your code and choose an option:</p>
      <button className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold">Simplify code</button>
      <button className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold">Verify conventions</button>
      <button className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold">Add error handling</button>
      <button className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold">Make professional</button>
      <button className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold">Add comments</button>
      <button className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none focus:bg-yellow-500 focus:text-sky-500 focus:font-bold">Explain code</button>
    </div>
  );
};

export default Navigation;
