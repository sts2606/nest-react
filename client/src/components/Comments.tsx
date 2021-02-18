import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { IComment } from './../interfaces/interfaces';

export const Comments: React.FC = () => {
  const car: string = window.location.pathname.trim().split('/').pop()!;

  const comments: IComment[] = useSelector(
    (state: { comments: { comments: IComment[] } }) => {
      return state.comments.comments.filter((comment) => comment.car === car);
    }
  );

  const commentData = comments.map(
    (el: { user: string; date: string; commentText: string }) => {
      return (
        <Card border="primary" style={{ width: '18rem' }} key={el.date}>
          <Card.Header>{new Date(el.date).toLocaleString()}</Card.Header>
          <Card.Body>
            <Card.Title>{el.user}</Card.Title>
            <Card.Text>{el.commentText}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  );
  return (
    <div className="commentsBlock">
      {comments.length ? (
        <>
          <h5>{`Комментарии (${comments.length})`}</h5>
          {commentData}
        </>
      ) : (
        <h5>Пока нет комментариев</h5>
      )}
    </div>
  );
};
