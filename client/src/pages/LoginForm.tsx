import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const LoginForm: React.FC = () => {
  const [form, setForm]: any = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event: any) => {
    setForm({ ...setForm, [event.target.name]: event.target.value });
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
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
