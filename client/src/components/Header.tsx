import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav>
        <Link to="/cars" className="nawBarItem">
          Cars
        </Link>
        <Link to="/profile" className="nawBarItem">
          Profile
        </Link>
      </nav>
    </header>
  );
};
