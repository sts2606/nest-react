import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { AuthPage } from './pages/AuthPage';
import { FirstPage } from './pages/FirstPage';
import { RegistrationForm } from './pages/RegistrationForm';
import { CarsPage } from './pages/CarsPage';
import { DetailCarPage } from './pages/DetailCarPage';

export const useRouts: any = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/main" exact>
          <FirstPage />
        </Route>
        <Route path="/cars/:id">
          <DetailCarPage />
        </Route>
        <Route path="/cars" exact>
          <CarsPage />
        </Route>
        <Redirect to="/cars" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/register" exact>
        <RegistrationForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
