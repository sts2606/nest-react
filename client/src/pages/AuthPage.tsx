import React from 'react';
import { Link } from 'react-router-dom';

export const AuthPage: React.FC = () => {
  return (
    <div>
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      <Link to="/login" className="btn">
        Вход
      </Link>
      <Link to="/register" className="btn">
        Регистрация
      </Link>
    </div>
  );
};
