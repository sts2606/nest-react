import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { UserState } from '../store/types/user';

export const MyProfile: React.FC = () => {
  const { user }: UserState = useTypedSelector((state) => {
    return state.user;
  });
  const photo = `${window.location.origin}/cars/uploads/${user.awatar}`;
  const header = <img alt="user" src={photo} />;
  const footer = (
    <span>
      <Button label="Обновить фото" className="p-button-secondary p-ml-2" />
    </span>
  );
  return (
    <Card
      title={`${user.firstName} ${user.lastName}`}
      subTitle={user.email}
      style={{ width: '25em' }}
      footer={footer}
      header={header}
    ></Card>
  );
};
