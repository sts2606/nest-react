import React from 'react';
import loader from '../assets/images/loader.png';

export const Loader: React.FC = () => {
  return (
    <div>
      <img src={loader} alt="loader" />
    </div>
  );
};
