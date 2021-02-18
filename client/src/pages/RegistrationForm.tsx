import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from './../hooks/http.hook';

export const RegistrationForm: React.FC = () => {
  const auth = useContext(AuthContext);
  const { loading, request, error } = useHttp();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  //   const registerHandler = async () => {
  //     try {
  //       const data = await request('/auth/register', 'POST', { ...form });
  //       const dataToken = await request('/auth/login', 'POST', {
  //         email: form.email,
  //         password: form.password,
  //       });
  //       auth.logIn(dataToken.accessToken, dataToken.email);
  //     } catch (e) {}
  //   };

  return (
    <Form>
      <Form.Group controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          onChange={changeHandler}
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Larst name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter larst name"
          name="lastName"
          onChange={changeHandler}
        />
      </Form.Group>

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

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" name="gender" onChange={changeHandler}>
          <option>Gender</option>
          <option>male</option>
          <option>female</option>
        </Form.Control>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        // onClick={registerHandler}
        disabled={loading}
      >
        Registration
      </Button>
    </Form>
  );
};
