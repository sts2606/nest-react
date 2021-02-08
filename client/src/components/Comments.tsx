import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsAction } from '../redux/actions';

export const Comments: React.FC = () => {
  const car: string = window.location.pathname.trim().split('/').pop()!;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsAction(car));
  }, []);

  const comments: [] = useSelector((state: { comments: { comments: [] } }) => {
    return state.comments.comments;
  });

  const commentData = comments.map(
    (el: { user: string; date: string; commentText: string }) => {
      return (
        <div className="comment" key={el.date}>
          <p>{el.user}</p>
          <p>{new Date(el.date).toLocaleString()}</p>
          <p>{el.commentText}</p>
        </div>
      );
    }
  );
  return (
    <div>
      <h5>{`Комментарии (${comments.length})`}</h5>
      {commentData}
    </div>
  );
};
