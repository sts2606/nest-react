import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { AuthPage } from './pages/AuthPage';
import { RegistrationForm } from './pages/RegistrationForm';
import { CarsPage } from './pages/CarsPage';
import DetailCarPage from './pages/DetailCarPage';
import { MyProfile } from './pages/MyProfile';

export const useRouts: any = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/cars/:id">
          <DetailCarPage />
        </Route>
        <Route path="/cars" exact>
          <CarsPage />
        </Route>
        <Route path="/profile" exact>
          <MyProfile />
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
      <Route path="/auth/login" exact>
        <LoginForm />
      </Route>
      <Route path="/auth/register" exact>
        <RegistrationForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
