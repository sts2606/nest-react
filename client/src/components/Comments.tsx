import React, { useState, useEffect } from 'react';

interface Prop {
  carId: string;
}

export const Comments: React.FC<Prop> = ({ carId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:3000/comments/${carId}`);
      const data = await result.json();

      //   let commentFullData: [object] = [{}];

      for (const item of data) {
        const userData = await fetch(
          `http://localhost:3000/users/${item.user}`
        );
        const user = await userData.json();
        item.user = `${user.firstName} ${user.lastName}`;
      }
      setComments(data);
    };
    fetchData();
  }, []);
  const commentData = comments.map(
    (el: { user: string; commentText: string; date: string }) => {
      return (
        <div>
          <h5>{`Комментарии (${comments.length})`}</h5>
          <p>{el.user}</p>
          <p>{new Date(el.date).toLocaleString()}</p>
          <p>{el.commentText}</p>
        </div>
      );
    }
  );
  return <div>{commentData}</div>;
};
