import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          🎉 Tailwind CSS is Working!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          All Tailwind classes are being recognized and applied correctly.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105">
            Primary Button
          </button>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
            Success Button
          </button>
          <div className="flex space-x-2">
            <div className="h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="h-4 w-4 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
