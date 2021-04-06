import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { InputTextarea } from 'primereact/inputtextarea';

import { Button } from 'primereact/button';
import { addNewComment } from '../store/actions/carsAction';
import { IUserFromServer } from '../interfaces/interfaces';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Loader } from './Loader';

type CommentProps = {
  car: string;
  commentLoading: boolean;
};

export const CommentForm: React.FC<CommentProps> = ({
  car,
  commentLoading,
}: CommentProps) => {
  const [comment, setComment] = useState({
    userId: '',
    commentText: '',
    car: '',
  });

  const user: IUserFromServer = useTypedSelector((state) => state.user);
  useEffect(() => {
    setComment({ ...comment, car, userId: user.user._id });
  }, []);

  const dispatch = useDispatch();

  const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addNewComment(comment));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ ...comment, commentText: event.target.value });
  };

  if (commentLoading) {
    return <Loader />;
  }
  return (
    <div className="p-fluid">
      <div className="p-field">
        <label htmlFor="email">Leave your comment</label>
        <InputTextarea
          type="text"
          name="commentText"
          onChange={changeHandler}
        />
      </div>
      <Button type="button" label="Comment" onClick={loginHandler} />
    </div>
  );
};
