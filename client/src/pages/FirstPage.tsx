import React from 'react';

export const FirstPage: React.FC = (props) => {
  console.log('props', props);
  return (
    <div>
      <div>
        <div className="user-avatar">
          <img src="" alt="user" />
        </div>
        <div>
          <p>User info</p>
        </div>
      </div>
    </div>
  );
};
