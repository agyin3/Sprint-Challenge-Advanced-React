import React from 'react';

const Navbar = ({ toggleMode, darkMode }) => {
  
  return (
    <nav className="navbar">
      <h1>Top Searches Womens' World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;