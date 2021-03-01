import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { userPostFetch } from '../redux/actions';

export const LoginForm: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // dispatch(userPostFetch(user));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={changeHandler}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={loginHandler}
        // disabled={loading}
      >
        Login
      </Button>
    </Form>
  );
};
