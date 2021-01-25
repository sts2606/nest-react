import React, { useState } from 'react';
import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const LoginForm: React.FC = () => {
  const auth = useContext(AuthContext);
  const { loading, request, error } = useHttp();
  const [form, setForm]: any = useState({
    email: '',
    password: '',
  });

  const loginHandler = async () => {
    try {
      const data = await request('/auth/login', 'POST', { ...form });
      auth.logIn(data.accessToken, data.email);
    } catch (e) {}
  };

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
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

      {/* <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Example file input" />
      </Form.Group> */}
      <Button
        variant="primary"
        type="submit"
        onClick={loginHandler}
        disabled={loading}
      >
        Login
      </Button>
    </Form>
  );
};
