import { strict } from 'assert';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { commentInputAction, addNewComment } from './../redux/actions';
import { IComment } from '../interfaces/interfaces';

export const CommentForm: React.FC = () => {
  const dispatch = useDispatch();

  const textAreaHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(commentInputAction(event.target.value));
  };

  const inputValue = useSelector(
    (state: { comments: { newCommentField: string; comments: [] } }) =>
      state.comments.newCommentField
  );

  const user = useStore().getState().user.user;

  const addComment = (event: React.FormEvent<HTMLFormElement>) => {
    const userFullName = `${user.firstName} ${user.lastName}`;
    const data: IComment = {
      user: user._id,
      car: window.location.href.split('/').pop()!,
      date: new Date().toString(),
      commentText: inputValue,
    };
    dispatch(addNewComment(data, userFullName));
    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={addComment}>
        <Form.Group>
          <Form.Label>Введите ваш комментарий</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            onChange={textAreaHandler}
            value={inputValue}
            name="comment"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">
          Отправить
        </Button>
      </Form>
    </div>
  );
};
