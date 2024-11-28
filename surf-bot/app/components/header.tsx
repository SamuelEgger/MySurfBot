import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        🌊 SurfBot<span className="text-yellow-300">🏄‍♂️</span>
      </h1>
    </header>
  );
};

export default Header;