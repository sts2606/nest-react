import React from 'react';
import { Link } from 'react-router-dom';

export const AuthPage: React.FC = () => {
  return (
    <div className="autn-page">
      <Link to="/login" className="btn">
        Вход
      </Link>
      <Link to="/auth/register" className="btn">
        Регистрация
      </Link>
    </div>
  );
};
