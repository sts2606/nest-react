import React, { useState, useEffect } from 'react';

interface Prop {
  carId: string;
}

export const Comments: React.FC<Prop> = ({ carId }) => {
  const [comments, setComments] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:3000/comments/${carId}`);
      const data = await result.json();

      //   let commentFullData: [object] = [{}];

      for (const item of data) {
        // debugger;
        const userData = await fetch(
          `http://localhost:3000/users/${item.user}`
        );
        const user = await userData.json();
        const commentItem = {
          ...item,
          userFirstName: user.firstName,
          userLastName: user.lastName,
        };
        console.log(comments);
        // setComments([...comments, commentItem]);
        // commentFullData.push({
        //   ...item,
        //   userFirstName: user.firstName,
        //   userLastName: user.lastName,
        // });
      }
      //   console.log(commentFullData);
      //   setComments(commentFullData);
    };
    fetchData();
  }, []);
  console.log(comments);
  return <div>{carId}</div>;
};
