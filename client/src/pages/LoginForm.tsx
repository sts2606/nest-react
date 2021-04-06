import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoginFetch } from '../store/actions/userActions';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const LoginForm: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(userLoginFetch(user));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className="p-fluid">
      <div className="p-field">
        <label htmlFor="email">Email</label>
        <InputText type="email" name="email" onChange={changeHandler} />
      </div>

      <div className="p-field">
        <label htmlFor="password">Password</label>
        <InputText type="password" name="password" onChange={changeHandler} />
      </div>

      <Button label="Login" icon="pi pi-check" onClick={loginHandler} />
    </div>
  );
};
