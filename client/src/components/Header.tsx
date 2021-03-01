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
        <Link to="/cars">Cars</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};
