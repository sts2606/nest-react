import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { AuthPage } from './pages/AuthPage';
import { FirstPage } from './pages/FirstPage';
import { SomePage } from './pages/SomePage';
import { RegistrationForm } from './pages/RegistrationForm';

export const useRouts: any = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/some" exact>
          <SomePage />
        </Route>
        <Route path="/main" exact>
          <FirstPage />
        </Route>
        <Redirect to="/main" />
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
