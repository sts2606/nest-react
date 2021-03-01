import React, { useState, useEffect, useContext } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { userPostFetch } from '../store/actions/userActions';

export const RegistrationForm: React.FC = () => {
  const genderSelectItems = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  enum FormInputNames {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
    password = 'password',
    gender = 'gender',
  }

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
  });

  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const changeHandlerDropdown = (e: {
    originalEvent: Event;
    target: {
      name: string;
      value: string;
    };
  }) => {
    setForm({ ...form, gender: e.target.value });
  };

  const registerHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    dispatch(userPostFetch(form));
  };

  return (
    <form>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor={FormInputNames.firstName}>Firstname</label>
          <InputText
            name={FormInputNames.firstName}
            type="text"
            onChange={changeHandler}
          />
        </div>
        <div className="p-field">
          <label htmlFor={FormInputNames.lastName}>Lastname</label>
          <InputText
            name={FormInputNames.lastName}
            type="text"
            onChange={changeHandler}
          />
        </div>
        <div className="p-field">
          <label htmlFor={FormInputNames.email}>Email</label>
          <InputText
            name={FormInputNames.email}
            type="text"
            onChange={changeHandler}
          />
        </div>
        <div className="p-field">
          <label htmlFor={FormInputNames.password}>Password</label>
          <InputText
            name={FormInputNames.password}
            type="password"
            onChange={changeHandler}
          />
        </div>
        <div className="p-field">
          <label htmlFor={FormInputNames.gender}>Gender</label>
          <Dropdown
            value={form.gender}
            options={genderSelectItems}
            onChange={changeHandlerDropdown}
            placeholder="Select a Gender"
            name={FormInputNames.gender}
          />
        </div>
        <Button label="Register" icon="pi pi-check" onClick={registerHandler} />
      </div>
    </form>
  );
};
