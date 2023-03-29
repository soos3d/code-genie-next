import React from "react";

const Navigation = ({ onAddErrorHandling, onAddCommentsHandling, onAddConventionsHandling, onAddProfessionalHandling, onAddExplainHandling, onBugsHandling}) => {
  return (
    <div className="flex flex-col w-full sm:w-64 bg-gray-900 h-screen px-5 py-4">
      <h1 className="text-white text-2xl font-bold mb-6 text-center">Hack it</h1>
      <p className="text-white mb-5">Paste your code and choose an option:</p>
      <button 
      onClick={onAddConventionsHandling}
      className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none">Verify conventions</button>
      <button
        onClick={onAddErrorHandling}
        className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none"
      >
        Add error handling
      </button>
      <button 
      onClick={onAddProfessionalHandling}
      className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none">Make professional</button>
      <button
        onClick={onAddCommentsHandling}
        className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none"
      >
        Add comments
      </button>
      <button 
      onClick={onBugsHandling}
      className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none">Look for bugs</button>
      <button 
      onClick={onAddExplainHandling}
      className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg mb-4 hover:bg-violet-800 focus:outline-none">Explain code</button>
    </div>
  );
};

export default Navigation;
