import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">CodePrep</h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Get Started</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
