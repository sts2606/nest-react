import React from 'react';
import { Link } from 'react-router-dom';

export const FirstPage: React.FC = () => {
  return (
    <div>
      <h1>Main</h1>
      <Link to="/login">!!!</Link>
    </div>
  );
};
